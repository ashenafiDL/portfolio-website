import ThemeSwitcher from "./ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between pt-12">
      <div className="text-pretty opacity-60">
        Thank you for visiting.
      </div>

      <ThemeSwitcher />
    </footer>
  );
}
