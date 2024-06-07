export default function SectionHeader({ text }: { text: string }) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-medium">{text}</h3>
    </div>
  );
}
