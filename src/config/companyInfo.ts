export interface CompanyContact {
  name: string;
  tagline: string;
  subTagline: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    googleMapsUrl: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  officeHours: string;
  serviceAreas: string[];
}

export const COMPANY_INFO: CompanyContact = {
  name: "BARBARIC SOLUTION",
  tagline: "Complete Solar Energy Solutions",
  subTagline: "Power Your Future with Clean & Reliable Solar Energy",
  address: {
    line1: "55/56 Shiv Shanti Enclave, Gate No. 3",
    line2: "Shahpur Matiyari",
    area: "Chinhat",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226028",
    full: "55/56 Shiv Shanti Enclave, Gate No. 3, Shahpur Matiyari, Chinhat, Lucknow – 226028",
    googleMapsUrl: "https://maps.google.com/?q=55/56+Shiv+Shanti+Enclave+Chinhat+Lucknow+226028",
  },
  phone: "+919455973235", // Replace with primary business phone
  phoneDisplay: "+91 9455973235",
  whatsapp: "+919455973235", // WhatsApp country code + number without +
  whatsappDisplay: "+91 9455973235",
  email: "barbaric.solution@gmail.com",
  officeHours: "Monday – Saturday: 9:30 AM – 7:00 PM (Sunday by Appointment)",
  serviceAreas: [
    "Chinhat",
    "Gomti Nagar",
    "Gomti Nagar Extension",
    "Indira Nagar",
    "Mahanagar",
    "Aliganj",
    "Vikas Nagar",
    "Hazratganj",
    "Ashiyana",
    "Transport Nagar",
    "Barabanki Road",
    "All Lucknow & Surrounding UP Districts",
  ],
};

export const STATS = [
  { label: "Installations Planned & Executed", value: "250+" },
  { label: "Clean Green Units Generated", value: "1.2M+ kWh" },
  { label: "Customer Electricity Saved", value: "₹95 Lakhs+" },
  { label: "Service Response Time", value: "< 24 Hours" },
];
