import { motion } from 'framer-motion';
import { FiAward, FiClock, FiHeart } from 'react-icons/fi';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const chefStats = [
  {
    label: 'Years of mastery',
    value: '18+',
    icon: <FiClock className="h-5 w-5" />,
  },
  {
    label: 'International awards',
    value: '12',
    icon: <FiAward className="h-5 w-5" />,
  },
  {
    label: 'Signature experiences',
    value: '1200+',
    icon: <FiHeart className="h-5 w-5" />,
  },
];

function ChefSection() {
  return (
    <section id="chef" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_35%)]" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1529692236671-f1f1a1b54bca?auto=format&fit=crop&w=1200&q=80"
                alt="Chef preparing a signature dish"
                className="h-[520px] w-full rounded-[1.6rem] object-cover sm:h-[560px]"
              />
              <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-[1.4rem] bg-gradient-to-r from-white/10 to-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Chef Portrait</p>
                <p className="mt-3 text-xl font-semibold text-white">A visionary leader shaping every dish with precision and passion.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <SectionTitle
              eyebrow="Meet the Chef"
              title="A culinary storyteller with an eye for refinement"
              description="Leading our kitchen with a signature blend of artistry, technique, and luxurious hospitality. Every menu is crafted to feel intimate, memorable, and distinctly elevated."
              className="max-w-2xl"
            />

            <div className="mt-8 space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p className="text-base leading-8 text-stone-300">
                Chef Aurelio brings more than 18 years of fine dining experience to every table. His approach blends classical French technique with bold, modern sensibilities and an unwavering devotion to ingredient-led brilliance.
              </p>
              <p className="text-base leading-8 text-stone-300">
                From intimate tasting menus to grand celebratory evenings, the kitchen is driven by precision, elevated flavor, and a curated sense of occasion that feels both luxe and welcoming.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {chefStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-brand-500/10 text-brand-300">
                      {stat.icon}
                    </div>
                    <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-stone-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-brand-500/25 bg-brand-500/10 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Award-winning menus</p>
                  <p className="mt-3 text-lg font-semibold text-white">Michelin-worthy execution and global recognition.</p>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-stone-400">Seasonal craftsmanship</p>
                  <p className="mt-3 text-lg font-semibold text-white">A rotating menu built around rare produce and luxe culinary moments.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default ChefSection;
