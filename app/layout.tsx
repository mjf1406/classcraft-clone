import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Poppins } from "next/font/google";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "ClassQuest",
    description: "The fastest way to build apps with Next.js and Supabase!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={poppins.className}
        >
            <head>
                <ColorSchemeScript />
            </head>
            <body className="bg-background-50 text-text-900">
                <MantineProvider>
                    <main className="flex flex-col items-center min-h-screen">
                        {children}
                        <SpeedInsights />
                    </main>
                </MantineProvider>
            </body>
        </html>
    );
}
