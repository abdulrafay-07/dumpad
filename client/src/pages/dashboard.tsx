import { Outlet } from "react-router-dom";

import Sidebar from "@/components/shared/sidebar";
import MobileSidebar from "@/components/mobile-sidebar";

export default function Dashboard() {
   return (
      <div className="h-full">
         <div className="fixed left-0 top-0 hidden lg:block lg:w-[236px] h-full overflow-y-auto">
            <Sidebar />
         </div>
         <div className="lg:pl-[236px]">
            <div className="mx-auto max-w-screen-2xl">
               <MobileSidebar />
               <main className="h-full py-8 px-6 flex flex-col">
                  <Outlet />
               </main>
            </div>
         </div>
      </div>
   )
};
