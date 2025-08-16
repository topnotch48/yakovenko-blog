import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconGetMentor from "@/assets/icons/IconGetMentor.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "Github",
    href: "",
    linkTitle: ` ${SITE.author} on Github`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "",
    linkTitle: `${SITE.author} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.author} on Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Mail",
    href: "mailto:nikita.yakovenko@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    icon: IconMail,
  },
  {
    name: "GetMentor",
    href: "",
    linkTitle: `${SITE.author} on GetMentor`,
    icon: IconGetMentor,
  },
];

export const SHARE_LINKS: Social[] = [
] as const;
