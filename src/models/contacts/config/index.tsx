import { EmailIcon } from "../assets/email";
import { GitHubIcon } from "../assets/git-hub";
import { TelegramIcon } from "../assets/telegram";
import type { ContactType } from "../types";

export const contacts: ContactType[] = [
  {
    id: 1,
    label: "Email",
    value: "12072000@mail.ru",
    href: "mailto:12072000@mail.ru",
    icon: EmailIcon,
  },
  {
    id: 2,
    label: "Telegram",
    value: "pavel_dvoryaninov",
    href: "https://t.me/pavel_dvoryaninov",
    icon: TelegramIcon,
  },
  {
    id: 3,
    label: "GitHub",
    value: "PaviliuS",
    href: "https://github.com/PaviliuS",
    icon: GitHubIcon,
  },
];
