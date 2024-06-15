import { Sidebar } from "./_components/sidebar";
import React from "react";
import { OrgSidebar } from "./_components/org-sidebar";
import {Navbar} from "./_components/navbar"
import "../globals.css"; // 这个必须导入
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    // h-full:height=100%
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            {/* add navbar */}
            <Navbar/>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
