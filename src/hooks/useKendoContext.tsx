import { createContext, useContext, useState } from "react";

type ColumnMap = Record<string, boolean>;

type ExpandCollapseProviderType = {
  expandCollapse: ColumnMap;
  setExpandCollapse: React.Dispatch<React.SetStateAction<ColumnMap>>;
  percentageToggle: boolean;
  setPercentageToggle: React.Dispatch<React.SetStateAction<boolean>>;
};


export const ExpandCollapseContext = createContext<ExpandCollapseProviderType | undefined>(undefined);

export const ExpandCollapseProvider = ({ children }: { children: React.ReactNode }) => {
    const [expandCollapse, setExpandCollapse] = useState<ColumnMap>({})
    const [percentageToggle, setPercentageToggle] = useState<boolean>(true);

 const value: ExpandCollapseProviderType = { expandCollapse, setExpandCollapse, percentageToggle, setPercentageToggle };
  return <ExpandCollapseContext.Provider value={value}>{children}</ExpandCollapseContext.Provider>;
};

// Safe hook: never undefined
export function useKendoContext() {
  const ctx = useContext(ExpandCollapseContext);
  if (!ctx) {
    throw new Error('useKendoContext must be used within a SelectedKendoProvider');
  }
  return ctx;
}

