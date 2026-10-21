import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/future-score")({
  component: FutureScoreLayout,
});

function FutureScoreLayout() {
  return (
    <div className="fs-scope min-h-screen">
      {/* Required: nested routes render here. */}
      <Outlet />
    </div>
  );
}
