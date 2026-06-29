import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const highlights = [
  {
    title: 'Restaurant Story',
    text: 'Born from a love of intimate evenings, our dining room blends modern artistry with timeless hospitality.',
  },
  {
    title: 'Experience',
    text: 'Every course is designed to feel effortless, elevated, and deeply personal from the first welcome to the final sip.',
  },
  {
    title: 'Chef Signature',
    text: 'Our culinary team layers bold flavor, delicate texture, and striking presentation in every plate.',
  },
];

function AboutRestaurant() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_38%)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <SectionTitle
              eyebrow="About Restaurant"
              title="Luxury fine dining, reimagined"
              description="At Aurelia, elegance meets warmth through candlelit interiors, precise service, and a menu shaped by seasonal artistry."
              className="max-w-xl"
            />

            <div className="mt-8 space-y-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-stone-300">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury restaurant interior"
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.2rem] border border-white/15 bg-stone-950/70 px-5 py-4 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Chef Signature</p>
                <p className="mt-2 text-lg font-semibold text-white">Seasonal tasting menus with a bold, contemporary soul.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutRestaurant;
