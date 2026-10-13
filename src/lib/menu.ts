export type MenuItem = { name: string; description?: string; veg?: boolean };
export type MenuGroup = {
  id: string;
  title: string;
  note?: string;
  minimum?: string;
  items: MenuItem[];
};

export const menu: MenuGroup[] = [
  {
    id: "bites",
    title: "Bites",
    minimum: "Minimum order of 16 per item",
    items: [
      { name: "Hot Chicken Sliders", description: "pickles, onions, secret sauce" },
      { name: "Garden Sandwich", description: "arugula, tomato, onion, gourmet cheese, pesto aioli", veg: true },
      { name: "Veggie Rolls", description: "cabbage, carrot, green beans, spring onion", veg: true },
      { name: "Pani Puri Shots", description: "potato, chickpea, onion, cilantro", veg: true },
      { name: "Caprese Skewers", description: "tomato, basil, bocconcini", veg: true },
      { name: "Gobi 905", description: "cauliflower, spring onion, pepper, secret chilli sauce", veg: true },
      { name: "Charcuterie Cup", description: "Seasonal fruits, nuts, meats & cheese" },
      { name: "Lox Bites", description: "smoked salmon bites with cream cheese, capers & green onion" },
      { name: "Smash Burger", description: "caramelized onion, melted cheddar, house made animal sauce. Single or double. Beyond Meat smash slider available." },
      { name: "Cheese Pinwheel", description: "cream cheese, spring onion, pepper, jalapeño", veg: true },
      { name: "Mini Pizzas", description: "choice of: cheese, veggie, or pepperoni", veg: true },
      { name: "Glazed Meatballs", description: "choice of: chicken, turkey, or beef in marinara sauce" },
      { name: "Tea Bites", description: "choice of: cucumber, egg, or chicken", veg: true },
      { name: "Chicken Skewers", description: "tandoori grilled with house dip" },
      { name: "Paneer Skewers", description: "tandoori grilled with house dip", veg: true },
      { name: "Naan Tacos", description: "chicken, beef, or shrimp naan tacos with pickled onions, salsa & house sauce" },
      { name: "Crispy Roll", description: "deep fried roll, filled with seasoned and spiced potatoes and your choice of filling: mutton, chicken, fish, veggie, spicy butter chicken", veg: true },
    ],
  },
  {
    id: "bowls",
    title: "Bowls",
    note: "5oz cups",
    minimum: "Minimum order of 16 per item",
    items: [
      { name: "Mediterranean Salad", description: "pasta, arugula, tomato, olives, feta", veg: true },
      { name: "Creamy Macaroni", description: "cream sauce, onion, pepper, pomegranate", veg: true },
      { name: "Fruit Salad", description: "kiwi, grape, strawberry, mandarin, apple, pineapple", veg: true },
      { name: "Chaat 905", description: "papdi, potato, chickpea, cilantro, sev, pomegranate", veg: true },
      { name: "Tuscan Tortellini", description: "cheese tortellini, spinach, sundried tomato & herb pesto", veg: true },
      { name: "Your Choice Salad", description: "garden, caesar, greek, beans", veg: true },
    ],
  },
  {
    id: "platters",
    title: "Platters",
    note: "Each platter serves 8 to 10",
    items: [
      { name: "Veggie & Dip Platter", description: "Fresh seasonal vegetables with assorted house dips" },
      { name: "Charcuterie Platter", description: "Seasonal fruits, cheeses, meats, crackers & sweet bites" },
      { name: "Sandwich and Wrap Platter", description: "Assorted sandwiches and wraps including vegetarian options, made fresh with a variety of fillings and toppings" },
      { name: "Breakfast Brunch Platter", description: "A mix of pastries, breakfast bites, fresh fruit and brunch favourites perfect for morning gatherings" },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    note: "Trays: S serves 8 to 10, M serves 12 to 15, L serves 18 to 22",
    items: [
      { name: "Lasagna", description: "Beef or vegetarian lasagna layered with cheese & house tomato sauce" },
      { name: "Tuscan Penne", description: "Penne with sun-dried tomatoes, mushrooms & parmesan in a creamy sauce" },
      { name: "Spicy Rose Rigatoni", description: "Rigatoni in a spicy rosé sauce topped with parmesan & herbs" },
      { name: "Alfredo Fettuccine", description: "Creamy alfredo fettuccine finished with parmesan & herbs" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    note: "2oz cups",
    minimum: "Minimum order of 16 per flavour",
    items: [
      { name: "Chunky Brownie" },
      { name: "Strawberry Cheesecake" },
      { name: "Tiramisu" },
      { name: "Gulab Jamun" },
      { name: "Rasmalai" },
      { name: "Biscoff Cheesecake" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    note: "3L dispensers, refills available",
    items: [
      { name: "Strawberry Rhubarb Refresher" },
      { name: "Mango Mint Refresher" },
      { name: "Cucumber Lime Refresher" },
      { name: "Hibiscus Iced Tea" },
      { name: "Peach Iced Tea" },
      { name: "Citrus Mint Refresher" },
    ],
  },
  {
    id: "services",
    title: "Services",
    note: "Add these to any order",
    items: [
      { name: "Delivery", description: "Across the GTA, priced by distance" },
      { name: "White Glove Service", description: "Full setup, styling, and takedown" },
      { name: "On-site Service", description: "Add on: staff at your event, by the hour" },
      { name: "Additional Heat Lamp", description: "Keeps hot bites warm on the table" },
      { name: "Coffee & Tea Station", description: "Priced per guest" },
    ],
  },
];
