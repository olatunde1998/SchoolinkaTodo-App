"use client";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Navbar } from "@/components/Navbar";

const queryClient = new QueryClient();
const worksans = Work_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Todo App",
//   description: "Wake up and shine, you have work to do!",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <QueryClientProvider client={queryClient}>
        <body className={worksans.className}>
          <div className="h-full relative ">
            <Navbar />
            <main className="md:px-16 px-6">
              <div className="max-w-6xl mx-auto">{children}</div>
            </main>
          </div>
        </body>
        <Toaster />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </html>
  );
}
