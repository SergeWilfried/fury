import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";


export const metadata = constructMetadata({
    title: "Analytics – SaaS Starter",
    description: "Check your business analytics.",
  });

export default async function AnalyticsPage() {
  return (
    <>
      <DashboardHeader
        heading="Analytics"
        text="Check your business analytics and metrics."
      />
      <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="space-y-0 pb-2">
              <CardDescription>Today</CardDescription>
              <CardTitle className="text-4xl tabular-nums">
                1,254{" "}
                <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                  verifications
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                width={300}
                height={200}
                data={[
                  { date: "2024-01-01", verifications: 1000 },
                  { date: "2024-01-02", verifications: 1100 },
                  { date: "2024-01-03", verifications: 1200 },
                  { date: "2024-01-04", verifications: 900 },
                  { date: "2024-01-05", verifications: 1400 },
                  { date: "2024-01-06", verifications: 1500 },
                  { date: "2024-01-07", verifications: 1254 },
                ]}
              >
                <Bar dataKey="verifications" fill="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}