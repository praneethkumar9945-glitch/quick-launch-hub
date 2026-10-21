import { QueryClient } from "@tanstack/react-query";
import { createHashHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Hash history (#/aics) so deep links work on static hosting (GoDaddy)
    // without server-side rewrites. Server/SSR keeps the default memory history.
    history: typeof window !== "undefined" ? createHashHistory() : undefined,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
