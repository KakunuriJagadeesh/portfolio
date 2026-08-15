import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-8 text-xs text-text-faint">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
