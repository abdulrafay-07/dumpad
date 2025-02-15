import { Link } from "react-router-dom";

import Container from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
   return (
      <section className="py-16 px-4">
         <Container className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:w-1/2">
               <h1 className="leading-relaxed text-3xl text-center lg:text-start md:text-4xl lg:text-5xl lg:leading-relaxed font-bold font-headline mb-5">
                  Dump your feelings, <span className="text-background py-2 px-4 bg-black">Anonymously!</span>
               </h1>
               <p className="max-w-xl text-pretty mb-8 text-center lg:text-start">Share your thoughts without fear of judgment. Whether you’re feeling overwhelmed, seeking support, or just need to vent, let it all out and find relief. Connect with others who understand your journey—all in complete anonymity.</p>
               <div className="flex items-center justify-center lg:justify-start gap-x-3">
                  <Link
                     to="/register"
                     className={buttonVariants({ size: "sm" })}
                  >
                     Create Account
                  </Link>
                  <Link
                     to="/dumps"
                     className={buttonVariants({ size: "sm", variant: "outline" })}
                  >
                     View Dumps
                  </Link>
               </div>
            </div>
            <img src="/hero.png" className="aspect-square object-contain" />
         </Container>
      </section>
   )
};
