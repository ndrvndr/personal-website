import Comment from "@/components/elements/Comment";
import PageTitle from "@/components/elements/PageTitle";

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
