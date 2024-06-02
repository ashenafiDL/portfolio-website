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
      className="text-pretty text-blue-500 underline"
    >
      {text}
    </Link>
  );
}
