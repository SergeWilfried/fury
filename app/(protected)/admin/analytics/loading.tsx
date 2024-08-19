import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function AnalyticsLoading() {
  return (
    <>
      <DashboardHeader
        heading="Analytics"
        text="Your analytics dashboard."
      />
      <Skeleton className="size-full rounded-lg" />
    </>
  );
}
