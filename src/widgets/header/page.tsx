import { Button } from "#/shared/components/button";
import {
  type PageContextType,
  type PageHeaderProps,
  initialPageState,
  PageContext,
} from "#/shared/lib";
import { ArrowLeft } from "lucide-react";
import {
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";

export const Page = ({ children }: PropsWithChildren) => {
  const [state, setPage] = useState<PageContextType>(initialPageState);
  const value = useMemo(() => ({ state, setPage }), [state]);

  return (
    <PageContext.Provider value={value}>
      <div className="flex flex-col gap-4 w-full px-6 py-8">{children}</div>
    </PageContext.Provider>
  );
};

export const PageHeader = ({ title = "", actions, back }: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-row w-full justify-between">
      <h1 className="flex flex-row gap-3 items-center justify-center text-2xl font-semibold">
        {back && (
          <Button size="icon-sm" variant="outline" onClick={handleBack}>
            <ArrowLeft />
          </Button>
        )}
        {title}
      </h1>
      <div className="flex flex-row gap-3 items-center justify-end">
        {actions && actions.map((a) => a)}
      </div>
    </div>
  );
};

export const PageBody = ({ children }: { children: ReactNode }) => {
  return <div className="inline-flex flex-col gap-3">{children}</div>;
};
