import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
   return (
      <Button
         variant="outline"
         className="mt-auto"
      >
         <LogOut /> Logout
      </Button>
   )
};
