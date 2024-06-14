"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";

// Not layout , just a provider protect our app
interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// Exclamation just for "no undefined", we are pretty sure that we have this constant in our env file!
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {/* Children is The whole App that will be protected by authentication */}
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}


