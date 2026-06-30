export type MenuItem = {
  name: string;
  description: string;
  price: string;
  accent: string;
  icon: string;
};

export const menuItems: MenuItem[] = [
  {
    name: 'Golden Truffle Risotto',
    description:
      'Creamy arborio rice finished with black truffle, parmesan foam, and crisp sage for a luxurious finish.',
    price: '$24',
    accent: 'from-amber-900 via-orange-800 to-stone-900',
    icon: '?',
  },
  {
    name: 'Charred Lobster Tail',
    description:
      'Sweet lobster paired with smoked butter, citrus glaze, and delicate herb oil on a warm brioche base.',
    price: '$32',
    accent: 'from-sky-900 via-cyan-800 to-stone-900',
    icon: '?',
  },
  {
    name: 'Velvet Chocolate Dome',
    description:
      'A decadent dark chocolate dome with salted caramel center, roasted hazelnut praline, and vanilla bean cream.',
    price: '$18',
    accent: 'from-fuchsia-900 via-rose-800 to-stone-900',
    icon: '?',
  },
  {
    name: 'Seared Wagyu Carpaccio',
    description:
      'Ultra-tender beef with aged pecorino, wild rocket, pickled citrus, and a drizzle of aged balsamic.',
    price: '$28',
    accent: 'from-emerald-900 via-teal-800 to-stone-900',
    icon: '?',
  },
  {
    name: 'Saffron Lobster Bisque',
    description:
      'Velvety bisque enriched with saffron, cognac, and a hint of crème fraîche for a refined palate.',
    price: '$21',
    accent: 'from-purple-900 via-violet-800 to-stone-900',
    icon: '?',
  },
];
