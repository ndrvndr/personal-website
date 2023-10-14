import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-8 flex items-center gap-4 md:hidden">
      <Image
        src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030269/personal-website/profileImage.webp"
        alt="Image Profile"
        className="border__color h-11 w-11 rounded-full"
        width={100}
        height={100}
      />

      <div className="flex flex-col gap-1">
        <h2 className="primary font-medium md:text-lg">ndrvndr</h2>
        <p className="secondary text-sm md:text-base">Λ7214</p>
      </div>
    </header>
  );
}
