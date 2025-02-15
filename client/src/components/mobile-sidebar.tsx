import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "@/components/shared/sidebar";
import {
   Sheet,
   SheetContent,
   SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function MobileSidebar() {
   const [isOpen, setIsOpen] = useState(false);
   const pathname = useLocation().pathname;

   useEffect(() => {
      setIsOpen(false);
   }, [pathname]);

   return (
      <div className="flex justify-end px-4 pt-2 lg:hidden">
         <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
               <Button size="icon" variant="outline">
                  <Menu className="size-4" />
               </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
               <Sidebar />
            </SheetContent>
         </Sheet>
      </div>
   )
};
