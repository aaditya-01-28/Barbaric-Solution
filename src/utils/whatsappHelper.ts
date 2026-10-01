import { COMPANY_INFO } from '../config/companyInfo';

export interface WhatsAppMessageParams {
  name?: string;
  monthlyBill?: number | string;
  city?: string;
  capacity?: string;
  systemType?: string;
  propertyType?: string;
  customMessage?: string;
}

/**
 * Creates an encoded WhatsApp Web/Mobile link with pre-filled customer details.
 * Formats lead message specifically according to Barbaric Solution's sales flow.
 */
export function createWhatsAppUrl(params: WhatsAppMessageParams = {}): string {
  const number = COMPANY_INFO.whatsapp;
  
  let text = 'Hello Barbaric Solution, I would like information regarding a solar power system.';

  if (params.monthlyBill) {
    text += ` My average monthly electricity bill is ₹${params.monthlyBill}`;
  }
  
  if (params.city) {
    text += ` and my location is ${params.city}.`;
  } else {
    text += '.';
  }

  const additionalLines: string[] = [];
  if (params.name) {
    additionalLines.push(`• Name: ${params.name}`);
  }
  if (params.propertyType) {
    additionalLines.push(`• Property: ${params.propertyType}`);
  }
  if (params.capacity) {
    additionalLines.push(`• Interested Capacity: ${params.capacity}`);
  }
  if (params.systemType) {
    additionalLines.push(`• System Type: ${params.systemType}`);
  }
  if (params.customMessage) {
    additionalLines.push(`• Note: ${params.customMessage}`);
  }

  if (additionalLines.length > 0) {
    text += '\n\n' + additionalLines.join('\n');
  }

  text += '\n\nPlease share details for a site survey and free quotation. Thank you!';

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Quick direct WhatsApp link with default greeting
 */
export function getDirectWhatsAppUrl(): string {
  return createWhatsAppUrl();
}
