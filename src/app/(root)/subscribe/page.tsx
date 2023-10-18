import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe | Andre Avindra",
  description:
    "Get notified every time there is a new blog post through your email.",
  alternates: {
    canonical: "https://andreavindra.vercel.app/design",
  },
};

export default function Subscribe() {
  return (
    <div className="p-8">
      <PageTitle title="Subscribe" description="Subscribe to my newsletter." />
      <section></section>
    </div>
  );
}
