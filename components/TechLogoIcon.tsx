import Image from "next/image";

type TechLogoIconProps = {
  name: string;
};

export default function TechLogoIcon({ name }: TechLogoIconProps) {
  return (
    <span className="icon">
      <span className="tooltip">{name}</span>
      <Image src={`/logos/${name}.svg`} width={20} height={20} alt={""} />
    </span>
  );
}
