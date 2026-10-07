import Image from "next/image";

const links = [
  { href: "#spread", label: "The spread" },
  { href: "#occasions", label: "Occasions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reels", label: "Reels" },
];

export function SiteHeader() {
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
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#order">Plan a party</a>
        </nav>
      </details>
    </header>
  );
}
