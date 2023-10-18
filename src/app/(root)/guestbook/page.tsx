import Comment from "@/components/elements/Comment";
import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | Andre Avindra",
  description:
    "Feel free to share your thoughts, expressions of appreciation, and suggestions on the guestbook page. Leave behind any messages or comments you'd like to convey. Your words are valuable, and I look forward to hearing from you.",
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
