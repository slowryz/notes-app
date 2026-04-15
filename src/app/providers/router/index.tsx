import { IndexPage } from "#/pages/index/ui/page";
import { NotePage } from "#/pages/note/ui/page";
import { paths } from "#/shared/lib";
import { Suspense } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";

const routes = (): RouteObject[] => [
  {
    index: true,
    element: <IndexPage />,
  },
  {
    path: paths.note,
    element: <NotePage />,
  },
];

export const AppRouter = () => (
  <Suspense fallback="Loading">{useRoutes(routes())}</Suspense>
);
