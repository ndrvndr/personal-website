import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import ColorPalette from "./ColorPalette";

export const metadata: Metadata = {
  title: "Design | Andre Avindra",
  description: "andreavindra.vercel.app color palette",
  alternates: {
    canonical: "https://andreavindra.vercel.app/design",
  },
};

export default function Design() {
  return (
    <div className="p-8">
      <PageTitle
        title="Website's Design"
        description="andreavindra.vercel.app color palette."
      />
      <ColorPalette />
    </div>
  );
}
