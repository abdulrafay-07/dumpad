import { z } from "zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DottedSeparator } from "@/components/shared/dotted-separator";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { loginSchema } from "@/schemas/auth";

export default function Login() {
   const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = async (data: z.infer<typeof loginSchema>) => {
      // /auth/login
      console.log(data);
   };

   return (
      <Card className="w-full md:w-[486px] shadow-none">
         <CardHeader className="flex items-center justify-center text-center p-7">
            <CardTitle className="text-3xl flex items-center gap-x-2 mb-2 font-logo">
               <Link to="/">Dumpad.</Link>
            </CardTitle>
            <CardDescription>
               Welcome back.
            </CardDescription>
         </CardHeader>
         <div className="px-7">
            <DottedSeparator />
         </div>
         <CardContent className="p-7">
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                     name="email"
                     control={form.control}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input
                                 type="email"
                                 placeholder="Enter email address"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     name="password"
                     control={form.control}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Password</FormLabel>
                           <FormControl>
                              <Input
                                 type="password"
                                 placeholder="Enter password"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button
                     size="lg"
                     className="w-full"
                     disabled={false}
                  >
                     Sign In
                  </Button>
               </form>
               <div className="py-7">
                  <DottedSeparator />
               </div>
               <p className="text-sm text-center text-neutral-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary hover:underline">
                     Register
                  </Link>
               </p>
            </Form>
         </CardContent>
      </Card>
   )
};
