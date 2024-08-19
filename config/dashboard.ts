import { UserRole } from "@prisma/client";

import { SidebarNavItem } from "types";


export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "MAIN MENU",
    items: [
      {
        href: "/dashboard",
        icon: "home",
        title: "Overview",
      },
      {
        href: "/alerts",
        icon: "alertTriangle",
        title: "Alerts",
        badge: 5, // Number of new alerts
      },
      {
        href: "/cases",
        icon: "fileText",
        title: "Cases",
        children: [
          {
            href: "/cases/open",
            icon: "folderOpen",
            title: "Open Cases",
          },
          {
            href: "/cases/closed",
            icon: "folderClosed",
            title: "Closed Cases",
          },
        ],
      },
      {
        href: "/customers",
        icon: "user",
        title: "Customers",
      },
      {
        href: "/transactions",
        icon: "dollarSign",
        title: "Transactions",
      },
      {
        href: "/analytics",
        icon: "barChart",
        title: "Analytics",
      },
      {
        href: "/rules",
        icon: "shield",
        title: "Detection Rules",
        authorizeOnly: ["ADMIN", "ANALYST"],
      },
      {
        href: "/reports",
        icon: "fileText",
        title: "Reports",
      },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        href: "/settings",
        icon: "settings",
        title: "Settings",
      },
      {
        href: "/profile",
        icon: "user",
        title: "Profile",
      },
      {
        href: "/help",
        icon: "help",
        title: "Help & Support",
      },
    ],
  },
];