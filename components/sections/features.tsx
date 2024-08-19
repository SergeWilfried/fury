import Link from "next/link";

import { features } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Features() {
  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Features"
            title="Metrixx's Powerful Capabilities"
            subtitle="Discover how Metrixx can revolutionize your transaction monitoring and fraud detection processes."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-Time Monitoring",
                description: "Ingest and analyze transaction data in real-time through our Transaction Monitoring Service API.",
                icon: "bolt",
              },
              {
                title: "ISO20022 Compliant",
                description: "Designed to be ISO20022 compliant, with support for non-ISO20022 systems via Payment Platform Adapter.",
                icon: "check",
              },
              {
                title: "Flexible Rule Processing",
                description: "Implement simple or complex rules to evaluate transactions and participant behavior for suspicious activities.",
                icon: "cog",
              },
              {
                title: "Typology Library",
                description: "Access to over 280 fraud and money laundering typologies, with 30 pre-fabricated ones included.",
                icon: "library",
              },
              {
                title: "Multi-Industry Support",
                description: "Applicable beyond payments - works for insurance, supply chain, ethics, and more.",
                icon: "layers",
              },
              {
                title: "Alert Management",
                description: "Issue investigation alerts to external case management systems and block suspicious transactions.",
                icon: "bell",
              },
            ].map((feature) => {
              const Icon = Icons[feature.icon || "nextjs"];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                  key={feature.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative">
                    <div className="relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6">
                      <Icon />
                    </div>

                    <h3 className="mt-6 font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {feature.description}
                    </p>

                    <div className="mt-4 flex gap-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        rounded="xl"
                        className="px-4"
                      >
                        <Link href="/docs" className="flex items-center gap-2">
                          <span>Learn more</span>
                          <Icons.arrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}