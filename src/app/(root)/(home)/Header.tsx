import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-8 flex h-fit items-center gap-4">
      <Image
        src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030269/personal-website/profileImage.webp"
        alt="Image Profile"
        className="border__color h-11 w-11 rounded-full"
        width={100}
        height={100}
      />

      <div className="flex flex-col">
        <h2 className="primary text-base font-medium">ndr.vndr</h2>
        <p className="secondary text-sm">Λ.7214</p>
      </div>
    </header>
  );
}
