"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./NavBar.module.css";

const ROUTES = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/transcriptions", label: "Transcriptions" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          Andrew Huynh
        </Link>

        <button
          className={styles.menuButton}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} />
        </button>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                onClick={() => setOpen(false)}
                className={styles.link}
                data-active={isActive(route.href)}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
