import Link from "next/link";
import ArrowUpRightIcon from "./icons/ArrowUpRightIcon";

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
      <ArrowUpRightIcon />
      <span>{text}</span>
    </Link>
  );
}
