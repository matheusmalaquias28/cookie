import { Gtm } from "@/components/Gtm";

/** GTM legado (via env) — apenas na LP /v1. A URL principal usa GTM-MVTWN5T5 em V2Tracking. */
export default function V1Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <Gtm />
    </>
  );
}
