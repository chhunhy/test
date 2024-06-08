
import { CreateClass } from "@/components/userDashboard/createclass/CreateClass";
import UserDashboardSidebar from "@/components/userDashboard/UserDashboardSidebar";
import { SetStateAction } from "react";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <aside className="scroll-smooth focus:scroll-auto flex w-full dark:bg-DarkGray800 ">
      <div className="">
        <UserDashboardSidebar/>
      </div>
      {children}
    </aside>
  );
}
