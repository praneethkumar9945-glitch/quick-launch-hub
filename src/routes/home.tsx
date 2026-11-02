import { createFileRoute, redirect } from "@tanstack/react-router";

// "/home" is not a real page — send visitors to the homepage.
export const Route = createFileRoute("/home")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
