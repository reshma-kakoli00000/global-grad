"use client";

import { AuthProvider } from "@/providers/authContext";

export default function RootClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
