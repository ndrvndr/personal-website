import Comment from "@/components/elements/Comment";
import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | Andre Avindra",
  description:
    "Leave whatever you like to say-message, appreciation, or suggestion on the Ask Me Anything (AMA) discussion",
  alternates: {
    canonical: "https://andreavindra.vercel.app/guestbook",
  },
};

export default function Guestbook() {
  return (
    <div className="p-8">
      <PageTitle
        title="Guestbook"
        description="Leave whatever you like to say on the AMA discussion"
      />
      <section>
        <Comment marginTop="mt-0" />
      </section>
    </div>
  );
}
