import { Link, useLocation } from "react-router-dom";

import LogoutBtn from "@/components/logout-btn";
import { LayoutDashboard, Notebook, PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Sidebar() {
   const pathname = useLocation().pathname;

   return (
      <aside className="size-full bg-primary/5 p-4 flex flex-col">
         <Link to="/dashboard" className="font-logo text-4xl font-semibold">
            Dumpad.
         </Link>
         
         <div className="flex flex-col gap-y-4 my-16">
            <Link
               to="/dashboard"
               className={cn(
                  "w-full font-headline p-2 pl-4 flex items-center gap-x-2 hover:bg-background transition-colors",
                  pathname === "/dashboard" && "bg-background hover:bg-background/50 transition-colors"
               )}
            >
               <LayoutDashboard /> Dashboard
            </Link>
            <Link
               to="/dashboard/dumps"
               className={cn(
                  "w-full font-headline p-2 pl-4 flex items-center gap-x-2 hover:bg-background transition-colors",
                  pathname === "/dashboard/dumps" && "bg-background hover:bg-background/50 transition-colors"
               )}
            >
               <Notebook /> Your Dumps
            </Link>
            <div className="flex items-center gap-x-2 w-full font-headline p-2 pl-4 hover:bg-background transition-colors cursor-pointer">
               <PlusCircle /> Create Dump
            </div>
         </div>

         <LogoutBtn />
      </aside>
   )
};
