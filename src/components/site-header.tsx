"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const links = [
  { href: "#spread", label: "The spread" },
  { href: "#menu", label: "Menu" },
  { href: "#occasions", label: "Occasions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reels", label: "Reels" },
];

export function SiteHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    menuRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const onPointer = (event: PointerEvent) => {
      const menu = menuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <Image
          src="/brand/logo.jpg"
          alt="Little Bites"
          width={150}
          height={150}
          priority
          className="brand-mark"
        />
        <span className="brand-name">
          Little Bites
          <small>Party catering</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-order" href="#order">
        Plan a party
      </a>
      <details className="mobile-menu" ref={menuRef}>
        <summary aria-label="Open navigation">Explore</summary>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#order" onClick={closeMenu}>
            Plan a party
          </a>
        </nav>
      </details>
    </header>
  );
}
