import { z } from "zod";

export const loginSchema = z.object({
   email: z.string().email("Email should be valid"),
   password: z.string().min(6, "Password should be atleast 6 characters"),
});

export const registerSchema = z.object({
   username: z.string().min(3, "Username should have atleast 3 characters").max(36, "Username cannot have more than 36 characters"),
   email: z.string().email("Email should be valid"),
   password: z.string().min(6, "Password should be atleast 6 characters"),
});
