import { V2Tracking } from "@/components/V2Tracking";

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <V2Tracking />
      {children}
    </>
  );
}
