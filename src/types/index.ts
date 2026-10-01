export type SolarSystemType = 'on-grid' | 'hybrid' | 'off-grid' | 'commercial' | 'industrial' | 'dont-know';

export type PropertyType = 'home' | 'shop' | 'office' | 'factory' | 'hospital' | 'school' | 'other';

export type SystemCapacity = '2kw' | '3kw' | '5kw' | '7kw' | '10kw' | '20kw' | '50kw+' | 'dont-know';

export interface LeadFormData {
  id?: string;
  name: string;
  mobile: string;
  email?: string;
  city: string;
  propertyType: PropertyType;
  solarRequirement: SolarSystemType;
  monthlyElectricityBill: number | string;
  requiredCapacity: SystemCapacity;
  roofArea?: number | string;
  message?: string;
  submittedAt?: string;
  source?: string;
}

export interface SolarCalculationResult {
  monthlyBill: number;
  roofAreaSqFt: number;
  tariffPerUnit: number;
  recommendedCapacityKw: number;
  requiredRoofAreaSqFt: number;
  unitsPerMonth: number;
  unitsPerYear: number;
  monthlySavings: number;
  annualSavings: number;
  twentyFiveYearSavings: number;
  estimatedCostRange: {
    min: number;
    max: number;
  };
  estimatedSubsidy: number;
  netInvestmentRange: {
    min: number;
    max: number;
  };
  paybackPeriodYears: number;
  co2SavedKgPerYear: number;
  treesEquivalentPerYear: number;
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'panels' | 'inverters' | 'batteries' | 'structures' | 'protection';
  description: string;
  features: string[];
  specs: Record<string, string>;
  image: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  capacity: string;
  systemType: string;
  application: string;
  panelsUsed: string;
  inverterUsed: string;
  annualSavingsEst: string;
  description: string;
  photos: {
    before?: string;
    during?: string;
    completed: string;
  };
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  reviewText: string;
  systemDetails: string;
  verified: boolean;
}
