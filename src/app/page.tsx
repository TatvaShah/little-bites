import Image from "next/image";
import { OrderBuilder } from "@/components/order-builder";
import { ReelGrid } from "@/components/reel-grid";
import { SiteHeader } from "@/components/site-header";
import {
  DAILY_BITE,
  EMAIL,
  FACEBOOK,
  INSTAGRAM_PROFILE,
  PHONE_DISPLAY,
  PHONE_TEL,
  THREADS,
  TIKTOK,
  getSiteUrl,
} from "@/lib/site";

const gallery = [
  {
    src: "/photos/fruit.webp",
    width: 640,
    height: 640,
    alt: "Seasonal fruit grazing table with cascading grapes",
  },
  {
    src: "/photos/platter.webp",
    width: 480,
    height: 640,
    alt: "Sandwich and wrap platter ready to share",
  },
  {
    src: "/photos/spread.webp",
    width: 640,
    height: 640,
    alt: "A colourful party spread on a blush linen",
  },
  {
    src: "/photos/red-floral.webp",
    width: 360,
    height: 640,
    alt: "Catering display styled with red florals and linens",
  },
  {
    src: "/photos/tablescape.webp",
    width: 640,
    height: 640,
    alt: "Candlelit florals beside a catering table",
  },
  {
    src: "/photos/grazing.webp",
    width: 640,
    height: 360,
    alt: "Long grazing table dressed in white",
  },
  {
    src: "/photos/birthday.webp",
    width: 360,
    height: 640,
    alt: "Themed first birthday setup with catering",
  },
  {
    src: "/photos/bites-a.webp",
    width: 480,
    height: 640,
    alt: "Sharing bites arranged for a party table",
  },
  {
    src: "/photos/bites-b.webp",
    width: 480,
    height: 640,
    alt: "A tray of savoury party bites",
  },
];

const offerings = [
  {
    index: "01",
    title: "Platters",
    copy: "Sandwich and wrap platters, fresh, colourful, and made for sharing. A little something for everyone at birthdays, showers, office lunches, and everything in between.",
    image: "/photos/platter.webp",
    alt: "Sandwich and wrap platter ready to share",
    width: 480,
    height: 640,
  },
  {
    index: "02",
    title: "Slider trays",
    copy: "A tray of sliders just makes sense. Perfect for parties, showers, birthdays, or any get-together. Smash burger trays too, the kind guests reach for first. Skewers when you want something easy to pass.",
    image: "/photos/bites-b.webp",
    alt: "A tray of savoury party bites",
    width: 480,
    height: 640,
  },
  {
    index: "03",
    title: "Grazing tables",
    copy: "When the food is part of the decor. A full spread styled into the room, from an intimate table to a celebration of 160, with the linens and the last bite placed on purpose.",
    image: "/photos/fruit.webp",
    alt: "Seasonal fruit grazing table with cascading grapes",
    width: 640,
    height: 640,
  },
  {
    index: "04",
    title: "Kids munch cups",
    copy: "Our little munch cups are made for the kiddos. Individual portions, easy to grab, and one less thing for you to worry about. Add them onto any catering order.",
    image: "/photos/bites-a.webp",
    alt: "Individual party portions for a kids table",
    width: 480,
    height: 640,
  },
];

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    name: "Little Bites",
    alternateName: "Little Bites GTA",
    description:
      "Party and event catering across the Greater Toronto Area. Platters, slider trays, grazing tables, kids munch cups, and white glove setup.",
    url: siteUrl,
    image: [`${siteUrl}/photos/fruit.webp`, `${siteUrl}/brand/logo.jpg`],
    logo: `${siteUrl}/brand/logo.jpg`,
    telephone: PHONE_TEL,
    email: EMAIL,
    servesCuisine: "Party catering",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Toronto Area",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [INSTAGRAM_PROFILE, TIKTOK, FACEBOOK, THREADS, DAILY_BITE],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip" href="#spread">
        Skip to the spread
      </a>
      <SiteHeader />
      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-copy">
            <p className="eyebrow">Catering for parties and events</p>
            <h1>
              Little bites.
              <span>Big celebrations.</span>
            </h1>
            <p className="lede">
              Platters, slider trays, grazing tables, and little munch cups,
              styled and set so you can actually enjoy the party. Serving the
              GTA.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#order">
                Plan your party
              </a>
              <a className="btn btn-ghost" href="#gallery">
                See the tables
              </a>
            </div>
            <p className="hero-note">Custom menus. Full setup when you want it.</p>
          </div>
          <div className="hero-stage">
            <div className="hero-photo hero-photo-main">
              <Image
                src="/photos/fruit.webp"
                alt="Seasonal fruit grazing table with cascading grapes"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 58vw"
              />
            </div>
            <div className="hero-photo hero-photo-side">
              <Image
                src="/photos/red-floral.webp"
                alt="Catering display styled with red florals"
                fill
                sizes="28vw"
              />
            </div>
            <div className="hero-photo hero-photo-side">
              <Image
                src="/photos/birthday.webp"
                alt="Themed first birthday setup"
                fill
                sizes="28vw"
              />
            </div>
          </div>
        </section>

        <p className="ribbon" aria-hidden="true">
          <span>
            Platters · Slider trays · Grazing tables · Kids munch cups · Sweet
            treats · White glove setup ·
          </span>
          <span>
            Platters · Slider trays · Grazing tables · Kids munch cups · Sweet
            treats · White glove setup ·
          </span>
        </p>

        <section className="section" id="spread">
          <div className="section-intro">
            <p className="eyebrow">The spread</p>
            <h2>Food that belongs in the photos.</h2>
            <p>
              Fresh, colourful, and made for sharing. Tell us the day and we
              will build the table around it.
            </p>
          </div>
          <div className="offering-list">
            {offerings.map((item) => (
              <article key={item.index} className="offering">
                <div className="offering-photo">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 860px) 100vw, 42vw"
                  />
                </div>
                <div className="offering-copy">
                  <p className="index">{item.index}</p>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className="glove">
            <div>
              <p className="eyebrow">White glove</p>
              <h2>We do not just drop the food.</h2>
              <p>
                Luxury catering with full setup, styling, and takedown. Linens,
                serving pieces, florals, warmers, and the final placement, so
                the whole display feels like one idea and you can greet your
                guests instead of fussing with the table.
              </p>
            </div>
            <Image
              src="/photos/tablescape.webp"
              alt="Candlelit florals beside a styled catering table"
              width={640}
              height={640}
              sizes="(max-width: 860px) 100vw, 40vw"
            />
          </aside>
        </section>

        <section className="occasions" id="occasions">
          <div className="section-intro light">
            <p className="eyebrow">Occasions</p>
            <h2>Whatever you are gathering for.</h2>
            <p>
              Birthdays, showers, weddings, corporate events, office lunches,
              and intimate celebrations. Custom menus, and a full service setup
              when you want the room styled too. Themed parties are welcome.
            </p>
          </div>
          <ul className="occasion-grid">
            <li>
              <strong>Birthdays</strong>
              <span>First birthdays through the big ones, cups for the kids included.</span>
            </li>
            <li>
              <strong>Showers</strong>
              <span>Pretty tables, easy bites, and nothing for you to plate.</span>
            </li>
            <li>
              <strong>Weddings</strong>
              <span>Mini eats and grazing, styled so the food is part of the room.</span>
            </li>
            <li>
              <strong>Work gatherings</strong>
              <span>Office lunches and corporate events that still feel considered.</span>
            </li>
            <li>
              <strong>Intimate tables</strong>
              <span>Smaller celebrations, with the same care in the details.</span>
            </li>
            <li>
              <strong>Themed parties</strong>
              <span>A cozy fall table or a full storybook setup. You lead.</span>
            </li>
          </ul>
        </section>

        <section className="section" id="gallery">
          <div className="section-intro">
            <p className="eyebrow">Recent tables</p>
            <h2>A look at the setups.</h2>
          </div>
          <div className="gallery">
            {gallery.map((photo) => (
              <figure key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 700px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="section reels" id="reels">
          <div className="section-intro">
            <p className="eyebrow">In motion</p>
            <h2>Watch a setup come together.</h2>
            <p>
              Press play for the florals, the grazing table, and a birthday
              built around the bites.
            </p>
          </div>
          <ReelGrid />
        </section>

        <section className="order" id="order">
          <div className="order-copy">
            <p className="eyebrow">How to order</p>
            <h2>Send a note. We will take it from there.</h2>
            <ol>
              <li>Tell us the occasion, the date, and how many guests.</li>
              <li>
                Pick the bites you are hoping for. We shape a custom menu
                around them.
              </li>
              <li>
                We set the table, style it if you would like, and leave you
                free to enjoy the room.
              </li>
            </ol>
            <p className="offer">
              Planning ahead for 2027? Book your 2027 event in 2026 and receive
              10% off your catering package when you secure your date.
            </p>
            <p className="quiet">
              Every menu is custom, so the price follows your date and your
              guest count. Message us and we will put the spread together with
              you.
            </p>
            <p className="contact-line">
              <a href={INSTAGRAM_PROFILE}>Instagram</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </p>
          </div>
          <OrderBuilder />
        </section>
      </main>
      <footer className="site-footer">
        <div>
          <p className="footer-name">Little Bites</p>
          <p>Little bites. Big celebrations. Serving the GTA.</p>
        </div>
        <div className="footer-links">
          <a href={INSTAGRAM_PROFILE}>Instagram</a>
          <a href={TIKTOK}>TikTok</a>
          <a href={FACEBOOK}>Facebook</a>
          <a href={THREADS}>Threads</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
        </div>
        <p className="daily">
          For everyday meal prep, find{" "}
          <a href={DAILY_BITE}>The Daily Bite</a>.
        </p>
        <p className="credit">
          <a href="https://www.claudaura.ca">Website by ClaudAura</a>
        </p>
      </footer>
    </>
  );
}
