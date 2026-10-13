"use client";

import { useState } from "react";
import { menu } from "@/lib/menu";

function Leaf() {
  return (
    <svg className="veg" viewBox="0 0 24 24" role="img" aria-label="Vegetarian">
      <title>Vegetarian</title>
      <path d="M20 4C11 4 5 8.5 5 15c0 1.7.5 3.2 1.3 4.4L4 21.7l1.3 1.3 2.4-2.4C8.9 21.5 10.4 22 12 22c6.5 0 9-7 8-18Zm-8.6 14.4-1.2-1.2c2.2-2.6 4.6-4.7 7.3-6.4-2.4 2-4.4 4.6-6.1 7.6Z" />
    </svg>
  );
}

export function MenuTabs() {
  const [active, setActive] = useState(menu[0].id);
  return (
    <div className="menu-tabs">
      <div className="tab-bar" role="tablist" aria-label="Menu categories">
        {menu.map((g) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            id={`tab-${g.id}`}
            aria-controls={`panel-${g.id}`}
            aria-selected={active === g.id}
            className={active === g.id ? "tab is-on" : "tab"}
            onClick={() => setActive(g.id)}
          >
            {g.title}
            <span className="tab-count">{g.items.length}</span>
          </button>
        ))}
      </div>
      {menu.map((g) => (
        <div
          key={g.id}
          role="tabpanel"
          id={`panel-${g.id}`}
          aria-labelledby={`tab-${g.id}`}
          hidden={active !== g.id}
          className="menu-panel"
        >
          <div className="panel-head">
            <h3>{g.title}</h3>
            <div className="panel-notes">
              {g.note ? <span>{g.note}</span> : null}
              {g.minimum ? <span className="min">{g.minimum}</span> : null}
            </div>
          </div>
          <ul className={g.items.some((i) => i.description) ? "menu-list" : "menu-list compact"}>
            {g.items.map((it) => (
              <li key={it.name}>
                <p className="item-name">
                  {it.name}
                  {it.veg ? <Leaf /> : null}
                </p>
                {it.description ? <p className="item-desc">{it.description}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="menu-foot">
        <Leaf /> Vegetarian. Every order is custom, so message us for pricing on your date and guest count.
      </p>
    </div>
  );
}
