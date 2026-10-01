import React, { createContext, useContext, useState, useEffect } from 'react';
import type { LeadFormData } from '../types';

interface QuoteContextType {
  isQuoteModalOpen: boolean;
  activeQuoteData: Partial<LeadFormData>;
  openQuoteModal: (initialData?: Partial<LeadFormData>) => void;
  closeQuoteModal: () => void;
  submitLead: (data: LeadFormData) => Promise<{ success: boolean; lead: LeadFormData }>;
  savedLeads: LeadFormData[];
  clearLeads: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'barbaric_solar_leads_v1';

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeQuoteData, setActiveQuoteData] = useState<Partial<LeadFormData>>({});
  const [savedLeads, setSavedLeads] = useState<LeadFormData[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setSavedLeads(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load saved leads', e);
    }
  }, []);

  const openQuoteModal = (initialData: Partial<LeadFormData> = {}) => {
    setActiveQuoteData(initialData);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const submitLead = async (data: LeadFormData) => {
    const newLead: LeadFormData = {
      ...data,
      id: 'LEAD-' + Date.now().toString(36).toUpperCase(),
      submittedAt: new Date().toISOString(),
    };

    const updated = [newLead, ...savedLeads];
    setSavedLeads(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save lead', e);
    }

    return { success: true, lead: newLead };
  };

  const clearLeads = () => {
    setSavedLeads([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <QuoteContext.Provider
      value={{
        isQuoteModalOpen,
        activeQuoteData,
        openQuoteModal,
        closeQuoteModal,
        submitLead,
        savedLeads,
        clearLeads,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export function useQuote(): QuoteContextType {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
