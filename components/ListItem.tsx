import ChevronRightIcon from "./icons/ChevronRightIcon";

export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex flex-row items-center gap-2">
      <ChevronRightIcon props={{ className: "h-[20px] w-[20px]" }} />
      {children}
    </li>
  );
}
