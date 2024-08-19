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

export function AnalyticsPage() {
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
            <ChartContainer
              config={{
                verifications: {
                  label: "Verifications",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    verifications: 1000,
                  },
                  {
                    date: "2024-01-02",
                    verifications: 1100,
                  },
                  {
                    date: "2024-01-03",
                    verifications: 1200,
                  },
                  {
                    date: "2024-01-04",
                    verifications: 900,
                  },
                  {
                    date: "2024-01-05",
                    verifications: 1400,
                  },
                  {
                    date: "2024-01-06",
                    verifications: 1500,
                  },
                  {
                    date: "2024-01-07",
                    verifications: 1254,
                  },
                ]}
              >
                <Bar
                  dataKey="verifications"
                  fill="var(--color-verifications)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    })
                  }}
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      }}
                    />
                  }
                  cursor={false}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              Over the past 7 days, you've processed{" "}
              <span className="font-medium text-foreground">8,305</span> verifications.
            </CardDescription>
            <CardDescription>
              This is a{" "}
              <span className="font-medium text-foreground">12%</span> increase
              from last week.
            </CardDescription>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
            <div>
              <CardDescription>Fraud Rate</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                2.3
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  %
                </span>
              </CardTitle>
            </div>
            <div>
              <CardDescription>False Positives</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                0.5
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  %
                </span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 items-center">
            <ChartContainer
              config={{
                fraudRate: {
                  label: "Fraud Rate",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="w-full"
            >
              <LineChart
                accessibilityLayer
                margin={{
                  left: 14,
                  right: 14,
                  top: 10,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    fraudRate: 2.1,
                  },
                  {
                    date: "2024-01-02",
                    fraudRate: 2.3,
                  },
                  {
                    date: "2024-01-03",
                    fraudRate: 2.0,
                  },
                  {
                    date: "2024-01-04",
                    fraudRate: 2.4,
                  },
                  {
                    date: "2024-01-05",
                    fraudRate: 2.2,
                  },
                  {
                    date: "2024-01-06",
                    fraudRate: 2.5,
                  },
                  {
                    date: "2024-01-07",
                    fraudRate: 2.3,
                  },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground))"
                  strokeOpacity={0.5}
                />
                <YAxis hide domain={["dataMin - 0.5", "dataMax + 0.5"]} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    })
                  }}
                />
                <Line
                  dataKey="fraudRate"
                  type="natural"
                  fill="var(--color-fraudRate)"
                  stroke="var(--color-fraudRate)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    fill: "var(--color-fraudRate)",
                    stroke: "var(--color-fraudRate)",
                    r: 4,
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      }}
                    />
                  }
                  cursor={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Verification Success Rate</CardTitle>
            <CardDescription>
              Percentage of successful verifications over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                successRate: {
                  label: "Success Rate",
                  color: "hsl(var(--chart-3))",
                },
              }}
            >
              <LineChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    successRate: 95.2,
                  },
                  {
                    date: "2024-01-02",
                    successRate: 94.8,
                  },
                  {
                    date: "2024-01-03",
                    successRate: 95.5,
                  },
                  {
                    date: "2024-01-04",
                    successRate: 94.2,
                  },
                  {
                    date: "2024-01-05",
                    successRate: 95.8,
                  },
                  {
                    date: "2024-01-06",
                    successRate: 94.5,
                  },
                  {
                    date: "2024-01-07",
                    successRate: 95.1,
                  },
                ]}
              >
                <Line
                  dataKey="successRate"
                  type="monotone"
                  stroke="var(--color-successRate)"
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    })
                  }}
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      }}
                    />
                  }
                  cursor={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Verification by Country</CardTitle>
            <CardDescription>
              Distribution of verifications across ECOWAS countries.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                nigeria: { label: "Nigeria", color: "hsl(var(--chart-1))" },
                ghana: { label: "Ghana", color: "hsl(var(--chart-2))" },
                ivoryCoast: { label: "Ivory Coast", color: "hsl(var(--chart-3))" },
                senegal: { label: "Senegal", color: "hsl(var(--chart-4))" },
                others: { label: "Others", color: "hsl(var(--chart-5))" },
              }}
            >
              <PieChart>
                <Pie
                  data={[
                    { name: "Nigeria", value: 4300 },
                    { name: "Ghana", value: 2500 },
                    { name: "Ivory Coast", value: 1800 },
                    { name: "Senegal", value: 1400 },
                    { name: "Others", value: 2000 },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  label
                />
                <Tooltip />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Risk Score Distribution</CardTitle>
            <CardDescription>
              Distribution of risk scores for verified identities in ECOWAS region.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                riskScore: { label: "Risk Score", color: "hsl(var(--chart-6))" },
              }}
            >
              <BarChart
                data={[
                  { range: "0-20", count: 500 },
                  { range: "21-40", count: 1200 },
                  { range: "41-60", count: 2000 },
                  { range: "61-80", count: 1500 },
                  { range: "81-100", count: 800 },
                ]}
              >
                <Bar dataKey="count" fill="var(--color-riskScore)" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}