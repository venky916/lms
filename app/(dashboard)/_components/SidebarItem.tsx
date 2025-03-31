"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarItemProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

const SidebarItem = ({ icon: Icon, href, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const isActive =
    (pathname === href && href === "/") ||
    pathname === href ||
    pathname.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-sky-500 ", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 transition-all h-full",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItem;
