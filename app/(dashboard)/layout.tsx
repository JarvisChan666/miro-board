import { Sidebar } from "./_components/sidebar";
import React from "react";
import { OrgSidebar } from "./_components/org-sidebar";
import {Navbar} from "./_components/navbar"
import "../globals.css"; // 这个必须导入
// children 属性的类型是 React.ReactNode，它是一个可以表示任何合法的 React 子节点的类型，包括元素、字符串、数字、数组、Fragment 等。
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
