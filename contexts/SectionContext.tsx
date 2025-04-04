'use client';

import { createContext, useContext, useState } from 'react';

interface SectionContextType {
    activeSection: string;
    setActiveSection: (id: string) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    );
};

export const useSection = () => {
    const context = useContext(SectionContext);
    if (!context) {
        throw new Error('useSection must be used within a SectionProvider');
    }
    return context;
};
