import { type ReactElement, createContext, useContext } from "react";

export type PageHeaderProps = {
  title?: string;
  actions?: ReactElement[];
  back?: boolean;
};

export interface PageContextType {
  header: {
    title: string;
    actions?: ReactElement[] | undefined;
    back?: boolean;
  };
}

export const initialPageState: PageContextType = {
  header: {
    title: "",
    actions: undefined,
    back: undefined,
  },
};

export type PageContextValue = {
  state: PageContextType;
  setPage: React.Dispatch<React.SetStateAction<PageContextType>>;
};

export const PageContext = createContext<PageContextValue | null>(null);

export function usePageContext(): PageContextValue {
  const ctx = useContext(PageContext);
  if (!ctx) {
    throw new Error("usePageContext must be used within <Page>");
  }
  return ctx;
}
