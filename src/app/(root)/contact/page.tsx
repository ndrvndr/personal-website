import SocialMediaCard from "@/components/cards/SocialMediaCard";
import BreakLine from "@/components/elements/BreakLine";
import PageTitle from "@/components/elements/PageTitle";
import { CONTACT_ITEMS } from "@/constants/contact";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <div className="p-8">
      <PageTitle title="Contact" description="Reach me out." />

      <section>
        <h2 className="primary font-semibold md:text-xl">Find me on</h2>

        <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <SocialMediaCard
          // key={index}
          // url={item.url}
          // ariaLabel={item.label}
          // icon={item.icon}
          // label={item.label}
          // backgroundColor={item.backgroundColor}
          />
        </ul>
      </section>

      <BreakLine />

      <EmailForm />
    </div>
  );
}
