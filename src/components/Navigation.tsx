import React from "react";
import { DownloadCloud, LayoutDashboard, Share2 } from "lucide-react";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  Icon: typeof DownloadCloud;
  download?: boolean;
};

const navItems: NavItem[] = [
  {
    href: "/assets/pdf/Resume_Mohan.pdf",
    label: "Download Resume",
    Icon: DownloadCloud,
    download: true,
  },
  {
    href: "/contact",
    label: "Contact Me",
    Icon: Share2,
  },
  {
    href: "/projects",
    label: "Projects",
    Icon: LayoutDashboard,
  },
];

const getItemWidth = (label: string) => `${Math.max(label.length * 0.72 + 3.6, 5)}rem`;

export const Navigation = () => {
  const [activeLabel, setActiveLabel] = React.useState<string | null>(null);

  return (
    <div className="z-[9999] fixed right-10 top-10 flex flex-col items-end gap-2">
      {navItems.map(({ href, label, Icon, download }) => {
        const isExpanded = activeLabel === label;

        return (
          <Link
            key={label}
            href={href}
            download={download ? true : undefined}
            onMouseEnter={() => setActiveLabel(label)}
            onMouseLeave={() => setActiveLabel(null)}
            onFocus={() => setActiveLabel(label)}
            onBlur={() => setActiveLabel(null)}
            className="text-dark-100 bg-dark-600 dark:text-dark-700 dark:bg-dark-100 flex items-center justify-center gap-2 cursor-pointer shadow-md rounded-full px-3 py-2 overflow-hidden transition-all duration-300 ease-in-out"
            style={{ width: isExpanded ? getItemWidth(label) : "2.75rem" }}
          >
            <Icon size={25} className="shrink-0" />
            <span
              className="whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                width: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
                maxWidth: isExpanded ? getItemWidth(label) : 0,
              }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};
