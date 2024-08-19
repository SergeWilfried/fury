import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Real-Time Transaction Monitoring",
    description:
      "Ingest and analyze transaction data in real-time through our Transaction Monitoring Service API.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "ISO20022 Compliant",
        description: "Designed to be ISO20022 compliant, with support for non-ISO20022 systems via Payment Platform Adapter.",
        icon: "check",
      },
      {
        title: "Flexible Rule Processing",
        description: "Implement simple or complex rules to evaluate transactions and participant behavior for suspicious activities.",
        icon: "cog",
      }
    ],
  },
  {
    title: "Multi-Industry Support",
    description:
      "Applicable beyond payments - works for insurance, supply chain, ethics, and more.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Alert Management",
        description:
          "Issue investigation alerts to external case management systems and block suspicious transactions.",
        icon: "bell",
      },
      {
        title: "Real-Time Monitoring",
        description: "Ingest and analyze transaction data in real-time through our Transaction Monitoring Service API.",
        icon: "bolt",
      },
      {
        title: "Open-Source",
        description:
          "Open-source nature allows for customization and community-driven development.",
        icon: "github",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Real-Time Monitoring",
    description:
      "Ingest and analyze transaction data in real-time through our Transaction Monitoring Service API.",
    link: "/",
    icon: "bolt",
  },
  {
    title: "ISO20022 Compliant",
    description:
      "Designed to be ISO20022 compliant, with support for non-ISO20022 systems via Payment Platform Adapter.",
    link: "/",
    icon: "check",
  },
  {
    title: "Flexible Rule Processing",
    description:
      "Implement simple or complex rules to evaluate transactions and participant behavior for suspicious activities.",
    link: "/",
    icon: "cog",
  },
  {
    title: "Typology Library",
    description:
      "Access to over 280 fraud and money laundering typologies, with 30 pre-fabricated ones included.",
    link: "/",
    icon: "library",
  },
  {
    title: "Multi-Industry Support",
    description:
      "Applicable beyond payments - works for insurance, supply chain, ethics, and more.",
    link: "/",
    icon: "layers",
  },
  {
    title: "Alert Management",
    description:
      "Issue investigation alerts to external case management systems and block suspicious transactions.",
    link: "/",
    icon: "bell",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "Sarah Johnson",
    job: "Chief Risk Officer, Global Bank",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "FraudShield has revolutionized our fraud detection capabilities. The real-time monitoring and flexible rule processing have significantly reduced our false positives while catching more genuine fraud attempts. It's an indispensable tool for our risk management strategy.",
  },
  {
    name: "Michael Chen",
    job: "Head of Compliance, FinTech Startup",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "As a growing fintech, we needed a robust yet scalable solution for transaction monitoring. FraudShield fit the bill perfectly. Its ISO20022 compliance and extensive typology library have made our AML efforts much more effective. The open-source nature also allows us to customize it to our specific needs.",
  },
  {
    name: "Emily Rodriguez",
    job: "Senior Fraud Analyst, Payment Processor",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "The depth of FraudShield's typology library is impressive. With over 280 fraud and money laundering scenarios at our fingertips, we've been able to stay ahead of emerging threats. The pre-fabricated typologies were a great starting point for our team.",
  },
  {
    name: "David Okonkwo",
    job: "IT Director, African Mobile Money Operator",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    review:
      "Implementing FraudShield has been a game-changer for our mobile money platform. The real-time API integration was smooth, and the system's ability to handle our high transaction volumes is remarkable. It's greatly enhanced our fraud prevention capabilities.",
  },
  {
    name: "Lisa Tanaka",
    job: "AML Compliance Manager, Insurance Company",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "While FraudShield is often associated with banking, it's been invaluable for our insurance operations. The flexibility to create custom rules has allowed us to adapt the system to our specific fraud and money laundering risks in the insurance sector.",
  },
  {
    name: "Robert Müller",
    job: "CTO, European Payment Switch",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "As a national payment switch, we deal with an enormous volume of transactions. FraudShield's scalability and performance have been exceptional. The alert management system has streamlined our investigation process, making our team much more efficient.",
  }
];