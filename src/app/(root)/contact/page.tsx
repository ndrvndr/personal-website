import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import EmailForm from "./EmailForm";
import SocialMediaLinks from "./SocialMediaLinks";

export const metadata: Metadata = {
  title: "Contact | Andre Avindra",
  description: "Reach me out.",
  alternates: {
    canonical: "https://andreavindra.vercel.app/contact",
  },
};

export default function Contact() {
  return (
    <div className="p-8">
      <PageTitle title="Contact" description="Reach me out." />
      <SocialMediaLinks />
      <EmailForm />
    </div>
  );
}
