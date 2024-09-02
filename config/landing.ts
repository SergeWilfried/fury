import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Real-Time Transaction Monitoring",
    description:
      "Monitor thousands of transactions per second in real-time through our Transaction Monitoring Service API.",
    image: "/_static/illustrations/real-time-monitoring.jpg",
    list: [
      {
        title: "ISO20022 Compliant",
        description: "Supports ISO20022 standards, with adapters for non-ISO20022 systems.",
        icon: "check",
      },
      {
        title: "Flexible Rule Processing",
        description: "Implement simple or complex rules to evaluate transactions and participant behavior for suspicious activities.",
        icon: "cog",
      },
      {
        title: "Machine Learning Integration",
        description: "Leverage MindsDB's machine learning models to predict fraudulent activities with high accuracy.",
        icon: "brain",
      }
    ],
  },
  {
    title: "Multi-Industry Support",
    description:
      "Applicable beyond payments - works for insurance, supply chain, ethics, and more.",
    image: "/_static/illustrations/multi-industry-support.jpg",
    list: [
      {
        title: "Alert Management",
        description:
          "Issue investigation alerts to external case management systems and block suspicious transactions.",
        icon: "bell",
      },
      {
        title: "Real-Time Monitoring",
        description: "Monitor thousands of transactions per second in real-time through our Transaction Monitoring Service API.",
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
      "Monitor thousands of transactions per second in real-time through our Transaction Monitoring Service API.",
    link: "/",
    icon: "bolt",
  },
  {
    title: "ISO20022 Compliant",
    description:
      "Supports ISO20022 standards, with adapters for non-ISO20022 systems.",
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
    title: "Machine Learning Integration",
    description:
      "Leverage AI to predict fraudulent activities with high accuracy.",
    link: "/",
    icon: "brain",
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
      "The integration of Metrixx has revolutionized our fraud detection capabilities. The real-time monitoring and machine learning predictions have significantly reduced our false positives while catching more genuine fraud attempts. It's an indispensable tool for our risk management strategy.",
  },
  {
    name: "Michael Chen",
    job: "Head of Compliance, FinTech Startup",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "As a growing fintech, we needed a robust yet scalable solution for transaction monitoring. The combination of Metrixx's real-time capabilities and machine learning models fit the bill perfectly. Our AML efforts have become much more effective.",
  },
  {
    name: "Emily Rodriguez",
    job: "Senior Fraud Analyst, Payment Processor",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "The depth of Metrixx's typology library combined with predictive analytics is impressive. With over 280 fraud and money laundering scenarios at our fingertips, we've been able to stay ahead of emerging threats.",
  },
  {
    name: "David Okonkwo",
    job: "IT Director, African Mobile Money Operator",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    review:
      "Implementing Metrixx has been a game-changer for our mobile money platform. The real-time API integration was smooth, and the system's ability to handle our high transaction volumes is remarkable. It's greatly enhanced our fraud prevention capabilities.",
  },
  {
    name: "Lisa Tanaka",
    job: "AML Compliance Manager, Insurance Company",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "While Metrixx is often associated with banking, its integration has been invaluable for our insurance operations. The flexibility to create custom rules and predictive models has allowed us to adapt the system to our specific fraud and money laundering risks.",
  },
  {
    name: "Robert Müller",
    job: "CTO, European Payment Switch",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "As a national payment switch, we deal with an enormous volume of transactions. The combined scalability and performance of Metrixx have been exceptional. The alert management system has streamlined our investigation process, making our team much more efficient.",
  }
];

