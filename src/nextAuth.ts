import NextAuth from "next-auth/next";

import DiscordProvider from "next-auth/providers/discord";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

export const prisma = new PrismaClient();

export const nextAuth = NextAuth({
	"adapter": PrismaAdapter(prisma) as Adapter | undefined,
	"providers": [
		DiscordProvider({
			"clientId": process.env.DISCORD_CLIENT_ID as string,
			"clientSecret": process.env.DISCORD_CLIENT_SECRET as string
		})
	],
	"pages": {
		"signOut": "/signOut",
		"signIn": "/signIn",
		"error": "/error"
	},
	"callbacks": {
		jwt({ token, user, account, profile, trigger, session }) {
			if (user) {
				token.accessToken = account!!.access_token;
				token.role = (user as any).role;
				token.id = user.id;
			}
			if (trigger === "update") {
				// Note, that `session` can be any arbitrary object, remember to validate it!
				console.log("JWT: TRIGER", trigger, "TOKEN", token, "ACCOUNT", account, "PROFILE", profile, "SESSION", session);

			}
			return token;
		},
		session({ session, user, token }) {
			/* session.user.role = token.role;
			session.user.id = token.id; */
			session.user = user;
			return session;
		}
	},
	"session": {
		"strategy": "database"
	}
});