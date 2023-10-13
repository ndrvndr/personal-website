import Bottombar from "./Bottombar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-fulll sticky top-0 z-10 h-2 bg-gradient-linear" />
      <div className="md:flex lg:m-auto lg:max-w-7xl lg:justify-center lg:gap-5">
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
