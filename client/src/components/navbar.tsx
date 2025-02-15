import { Link } from "react-router-dom";

import Container from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
   return (
      <header className="border-b px-4 py-3.5">
         <Container className="flex items-center justify-between">
            <Link to="/" className="font-semibold text-xl font-logo">Dumpad.</Link>
            <div className="flex items-center gap-x-3">
               <Link
                  to="/register"
                  className={buttonVariants({ size: "sm" })}
               >
                  Create Account
               </Link>
               <Link
                  to="/login"
                  className={buttonVariants({ size: "sm", variant: "outline" })}
               >
                  Sign In
               </Link>
            </div>
         </Container>
      </header>
   )
};
