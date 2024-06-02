import Image from "next/image";

export default function Avatar() {
  return (
    <div className={"size-24 rounded-full"}>
      <Image
        src={"/img/avatar.png"}
        width={96}
        height={96}
        alt={"Ashenafi DL"}
        className={"h-full w-full rounded-full"}
      />
    </div>
  );
}
