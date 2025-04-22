import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Survival Aid Ghana",
  description:
    "A Ghana based non-profit organization focused on child survival.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main suppressHydrationWarning={true}>{children}</main>;
}
