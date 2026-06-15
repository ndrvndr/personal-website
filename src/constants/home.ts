interface CareerList {
  imageUrl: string;
  role: string;
  companyName: string;
  location: string;
  startWork: string;
  endWork: string;
  ariaLabel: string;
}

export const CAREERS_LIST: CareerList[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1781510061/tdt_logo.jpg",
    role: "Frontend Developer",
    companyName: "Teknologi Digital Terdepan",
    location: "Bandung City",
    startWork: "October 2023",
    endWork: "May 2026",
    ariaLabel: "Visit the Teknologi Digital Terdepan Company Profile",
  },
];
