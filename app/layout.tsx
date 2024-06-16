import { Authenticated } from "convex/react";
import { ConvexClientProvider } from "./providers/convex-client-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <ConvexClientProvider>
            {/* Only render children if it is authenticated */}
            {children}
            </ConvexClientProvider>
      </body>
    </html>
  );
}
