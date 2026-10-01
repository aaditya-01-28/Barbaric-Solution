import type { SolarCalculationResult } from '../types';

/**
 * Calculates estimated solar system size, generation, savings, and payback period.
 * Tailored for Uttar Pradesh / Lucknow conditions (UPPCL tariff & average irradiation: 4.2 peak sun hours/day).
 */
export function calculateSolarSavings(
  monthlyBill: number,
  roofAreaSqFt: number = 0,
  tariffPerUnit: number = 7.5
): SolarCalculationResult {
  const sanitizedBill = Math.max(1000, Number(monthlyBill) || 2000);
  const tariff = Math.max(4, Number(tariffPerUnit) || 7.5);

  // 1. Calculate monthly units consumed
  const monthlyUnitsConsumed = sanitizedBill / tariff;

  // 2. Solar generation in Lucknow: ~125 units per month per 1 kW (approx 4.15 units/day/kW)
  const rawKwNeeded = monthlyUnitsConsumed / 125;

  // Round capacity intelligently (minimum 1 kW, max reasonable cap for residential/light commercial)
  let recommendedCapacityKw: number;
  if (rawKwNeeded <= 2.2) {
    recommendedCapacityKw = 2;
  } else if (rawKwNeeded <= 3.4) {
    recommendedCapacityKw = 3;
  } else if (rawKwNeeded <= 4.4) {
    recommendedCapacityKw = 4;
  } else if (rawKwNeeded <= 5.5) {
    recommendedCapacityKw = 5;
  } else if (rawKwNeeded <= 7.5) {
    recommendedCapacityKw = 7;
  } else if (rawKwNeeded <= 10.5) {
    recommendedCapacityKw = 10;
  } else if (rawKwNeeded <= 16) {
    recommendedCapacityKw = 15;
  } else if (rawKwNeeded <= 22) {
    recommendedCapacityKw = 20;
  } else {
    recommendedCapacityKw = Math.round(rawKwNeeded);
  }

  // 3. Roof area required (~90 sq.ft per kW with modern 550W+ TOPCon/Mono PERC panels)
  const requiredRoofAreaSqFt = recommendedCapacityKw * 90;

  // 4. Expected Generation
  const unitsPerMonth = Math.round(recommendedCapacityKw * 125);
  const unitsPerYear = unitsPerMonth * 12;

  // 5. Savings
  const monthlySavings = Math.min(sanitizedBill * 0.95, Math.round(unitsPerMonth * tariff));
  const annualSavings = monthlySavings * 12;
  // 25-year lifetime cumulative savings (factoring modest 3% electricity inflation and 0.5% panel degradation)
  const twentyFiveYearSavings = Math.round(annualSavings * 22.5);

  // 6. Estimated benchmark cost range (prior to subsidy)
  let baseRatePerKwMin = 52000;
  let baseRatePerKwMax = 62000;
  if (recommendedCapacityKw >= 10) {
    baseRatePerKwMin = 43000;
    baseRatePerKwMax = 49000;
  } else if (recommendedCapacityKw >= 4) {
    baseRatePerKwMin = 48000;
    baseRatePerKwMax = 56000;
  }

  const minCost = recommendedCapacityKw * baseRatePerKwMin;
  const maxCost = recommendedCapacityKw * baseRatePerKwMax;

  // 7. PM Surya Ghar Muft Bijli Yojana Central Subsidy (Indicative guidelines for residential):
  // 1 kW: ₹30,000 | 2 kW: ₹60,000 | 3 kW and above: ₹78,000 (flat max subsidy)
  let estimatedSubsidy = 0;
  if (recommendedCapacityKw === 1) {
    estimatedSubsidy = 30000;
  } else if (recommendedCapacityKw === 2) {
    estimatedSubsidy = 60000;
  } else if (recommendedCapacityKw >= 3) {
    estimatedSubsidy = 78000;
  }

  const netInvestmentMin = Math.max(20000, minCost - estimatedSubsidy);
  const netInvestmentMax = Math.max(25000, maxCost - estimatedSubsidy);
  const avgNetInvestment = (netInvestmentMin + netInvestmentMax) / 2;

  // 8. Payback period in years
  const paybackPeriodYears = Number((avgNetInvestment / Math.max(1, annualSavings)).toFixed(1));

  // 9. Environmental impact: ~0.82 kg CO2 per kWh generated; 1 tree absorbs ~20 kg CO2/yr
  const co2SavedKgPerYear = Math.round(unitsPerYear * 0.82);
  const treesEquivalentPerYear = Math.round(co2SavedKgPerYear / 20);

  return {
    monthlyBill: sanitizedBill,
    roofAreaSqFt,
    tariffPerUnit: tariff,
    recommendedCapacityKw,
    requiredRoofAreaSqFt,
    unitsPerMonth,
    unitsPerYear,
    monthlySavings,
    annualSavings,
    twentyFiveYearSavings,
    estimatedCostRange: {
      min: minCost,
      max: maxCost,
    },
    estimatedSubsidy,
    netInvestmentRange: {
      min: netInvestmentMin,
      max: netInvestmentMax,
    },
    paybackPeriodYears,
    co2SavedKgPerYear,
    treesEquivalentPerYear,
  };
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
