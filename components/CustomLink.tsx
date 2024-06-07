import Link from "next/link";

type LinkProp = {
  href: string;
  text: string;
  target: string;
};

export default function CustomLink({ href, text, target }: LinkProp) {
  return (
    <Link
      href={href}
      target={target}
      className="text-pretty text-[#0084FF] underline"
    >
      {text}
    </Link>
  );
}
