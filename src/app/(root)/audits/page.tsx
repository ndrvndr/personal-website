import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import PageSpeed from "./PageSpeed";

export const metadata: Metadata = {
  title: "Audits | Andre Avindra",
  description:
    "Real-time performance report for andreavindra.vercel.app based on the Pagespeed API",
  alternates: {
    canonical: "https://andreavindra.vercel.app/audits",
  },
};

export default function Audits() {
  return (
    <div className="p-8">
      <PageTitle title="Audits" description="Real-time performance report." />
      <PageSpeed />
    </div>
  );
}
