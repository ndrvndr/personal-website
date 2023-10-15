"use client";
import InputForm from "@/components/elements/Input";
import Textarea from "@/components/elements/Textarea";
import clsx from "clsx";

export default function EmailForm() {
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return null;
  };

  return (
    <section>
      <h2 className="primary font-semibold md:text-xl">Or send me an email</h2>

      <form onSubmit={handleSubmitForm} className="mt-8">
        <div className="md:flex md:gap-4">
          <InputForm
            id="name"
            label="Name"
            placeholder="Enter your name"
            type="text"
          />
          <InputForm
            id="email"
            label="Email"
            placeholder="Enter your email address"
            type="email"
          />
        </div>

        <Textarea
          id="message"
          label="Message"
          placeholder="Enter your message"
        />

        <button
          disabled
          type="submit"
          className={clsx(
            "mt-8 w-full px-4 py-2",
            "rounded-md bg-neutral-800",
            "text-sm font-bold text-primary-dark",
            "disabled:cursor-not-allowed",
            "md:text-lg",
          )}
        >
          Send Email
        </button>
      </form>
    </section>
  );
}
