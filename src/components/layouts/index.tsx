import clsx from "clsx";
import Bottombar from "./Bottombar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className={clsx(
          "sticky top-0 z-10",
          "h-2 w-full",
          "bg-gradient-linear",
        )}
      />
      <div
        className={clsx(
          "md:flex",
          "lg:m-auto lg:max-w-5xl",
          "lg:justify-center",
        )}
      >
        <Sidebar />

        <div className="lg:max-w-5xl">
          <main>{children}</main>
          <Bottombar />
          <Footer />
        </div>
      </div>
    </>
  );
}
