import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import DishCard from '../common/DishCard';
import { menuItems } from '../../data/menu';

function FeaturedMenu() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Featured Menu"
            title="An exquisite tasting menu of signature favorites"
            description="Explore a refined selection of dishes that combine luxurious ingredients, modern technique, and unforgettable flavor profiles."
            className="max-w-2xl"
          />
          <motion.a
            href="#chef"
            whileHover={{ y: -2, scale: 1.02 }}
            className="inline-flex items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10 px-5 py-3 text-sm font-semibold text-brand-100 transition hover:border-brand-500/50 hover:bg-brand-500/20"
          >
            Meet the chef
          </motion.a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((dish, index) => (
            <DishCard key={dish.name} {...dish} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedMenu;
