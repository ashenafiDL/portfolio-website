import Image from "next/image";
import Link from "next/link";

type RedirectLinkProps = {
  text: string;
  href: string;
};

export default function RedirectLink({ text, href }: RedirectLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-start gap-1 opacity-75"
    >
      <Image
        src="/icons/arrow-up-right.svg"
        alt=""
        width={16}
        height={16}
        className="dark:invert"
      />
      <span>{text}</span>
    </Link>
  );
}
