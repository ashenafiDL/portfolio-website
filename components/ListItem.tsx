import Image from "next/image";

export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex flex-row items-center gap-2">
      <Image
        src="/icons/chevron-right.svg"
        alt=""
        width={20}
        height={20}
        className="dark:invert"
      />
      {children}
    </li>
  );
}
