import { Authenticated } from "convex/react";
import { ConvexClientProvider } from "./providers/convex-client-provider";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <ConvexClientProvider>
            <Toaster />
            {/* Only render children if it is authenticated */}
            {children}
            </ConvexClientProvider>
      </body>
    </html>
  );
}
