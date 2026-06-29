import Container from '../common/Container';
import DishCard from '../common/DishCard';
import SectionTitle from '../common/SectionTitle';

type Dish = {
  name: string;
  description: string;
  price: string;
  accent: string;
  icon: string;
};

const dishes: Dish[] = [
  {
    name: 'Golden Truffle Risotto',
    description:
      'Creamy arborio rice finished with black truffle, parmesan foam, and crisp sage for a luxurious finish.',
    price: '$24',
    accent: 'from-amber-900 via-orange-800 to-stone-900',
    icon: '✦',
  },
  {
    name: 'Charred Lobster Tail',
    description:
      'Sweet lobster paired with smoked butter, citrus glaze, and delicate herb oil on a warm brioche base.',
    price: '$32',
    accent: 'from-sky-900 via-cyan-800 to-stone-900',
    icon: '❋',
  },
  {
    name: 'Velvet Chocolate Dome',
    description:
      'A decadent dark chocolate dome with salted caramel center, roasted hazelnut praline, and vanilla bean cream.',
    price: '$18',
    accent: 'from-fuchsia-900 via-rose-800 to-stone-900',
    icon: '✧',
  },
];

function FeaturedDishes() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.2),transparent_45%)]" />
      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Featured Dishes"
            title="A curated taste of indulgence"
            description="Discover three signature plates crafted with rich textures, refined ingredients, and a modern culinary finish."
            className="max-w-2xl"
          />

          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10 px-5 py-3 text-sm font-semibold text-brand-100 transition hover:border-brand-500/50 hover:bg-brand-500/20"
          >
            Reserve a table
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <DishCard key={dish.name} {...dish} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedDishes;
