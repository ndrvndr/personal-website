import {
  SiCloudflare,
  SiFilament,
  SiGoogle,
  SiLaravel,
  SiNuxt,
  SiPhp,
  SiPinia,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const ICON_SIZE: number = 24;

export const TECH_STACK_E_COMMERCE = [
  {
    label: "TypeScript",
    icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
  },
  {
    label: "Nuxt",
    icon: <SiNuxt size={ICON_SIZE} color="#00DC83" />,
  },
  {
    label: "Pinia",
    icon: <SiPinia size={ICON_SIZE} color="#FFD04B" />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
];

export const TECH_STACK_E_COMMERCE_ADMIN = [
  {
    label: "PHP",
    icon: <SiPhp size={ICON_SIZE} color="#4E5B92" />,
  },
  {
    label: "Laravel",
    icon: <SiLaravel size={ICON_SIZE} color="#F61400" />,
  },
  {
    label: "Filament",
    icon: <SiFilament size={ICON_SIZE} color="#FF5F09" />,
  },
  {
    label: "PostgreSQL",
    icon: <SiPostgresql size={ICON_SIZE} color="#336790" />,
  },
  {
    label: "Google OAuth",
    icon: <SiGoogle size={ICON_SIZE} color="#F1B708" />,
  },
  {
    label: "Cloudflare R2",
    icon: <SiCloudflare size={ICON_SIZE} color="#FF5F09" />,
  },
];

export const PROJECTCARD_CONTENTS = [
  {
    url: "https://e-commerce-frontend-zeta-lac.vercel.app",
    name: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce storefront built with Nuxt 4 and Vue 3, powered by a Laravel 13 REST API backend.",
    techStack: TECH_STACK_E_COMMERCE,
    image:
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1778866001/e-commerce-platform_ktwufr.webp",
    imageAlt: "E-Commerce Platform Screenshot",
  },
  {
    url: "https://e-commerce-backend-6m2p.onrender.com",
    name: "E-Commerce Admin Panel",
    description:
      "A production-ready REST API and admin panel for a modern e-commerce platform, built with Laravel 13, Filament 5, and Cloudflare R2.",
    techStack: TECH_STACK_E_COMMERCE_ADMIN,
    image:
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1778866001/e-commerce-admin-panel_nfkgpd.webp",
    imageAlt: "E-Commerce API & Admin Panel Screenshot",
  },
];
