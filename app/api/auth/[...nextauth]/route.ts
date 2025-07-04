// HTTP endpoint for NextAuth - exposes auth to the web
import { handlers } from "@/backend/auth";

export const { GET, POST } = handlers;
