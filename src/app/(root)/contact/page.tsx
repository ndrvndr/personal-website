import SocialMediaCard from "@/components/cards/SocialMediaCard";
import BreakLine from "@/components/elements/BreakLine";
import { CONTACT_ITEMS } from "@/contants/contact";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="primary text-xl font-bold md:text-2xl">Contact</h1>
      <p className="secondary mt-2 text-sm leading-relaxed md:text-lg">
        Reach me out
      </p>

      <BreakLine decoration="border-dashed" />

      <section>
        <h2 className="primary font-semibold md:text-xl">Find me on</h2>

        <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {CONTACT_ITEMS.map((item, index) => (
            <SocialMediaCard
              key={index}
              url={item.url}
              ariaLabel={item.label}
              icon={item.icon}
              label={item.label}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </ul>
      </section>

      <BreakLine />

      <EmailForm />
    </div>
  );
}
