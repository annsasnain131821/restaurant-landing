import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiCoffee, FiStar } from 'react-icons/fi';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

type Benefit = {
  title: string;
  text: string;
  icon: JSX.Element;
};

const benefits: Benefit[] = [
  {
    title: 'Fresh Ingredients',
    text: 'Seasonal produce and ethically sourced ingredients bring vibrant flavor to every course.',
    icon: <FiCoffee className="h-5 w-5" />,
  },
  {
    title: 'Award Winning Chef',
    text: 'A celebrated culinary team crafts elevated dishes with precision, elegance, and soul.',
    icon: <FiAward className="h-5 w-5" />,
  },
  {
    title: 'Luxury Dining',
    text: 'Immersive service, ambient lighting, and thoughtful details create a memorable evening.',
    icon: <FiStar className="h-5 w-5" />,
  },
  {
    title: 'Online Reservation',
    text: 'Reserve your preferred table effortlessly with a seamless digital booking experience.',
    icon: <FiCalendar className="h-5 w-5" />,
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.16),transparent_35%)]" />
      <Container className="relative">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="The details that make every evening unforgettable"
          description="From sourcing ingredients to the final pour, every touchpoint is designed to feel luxurious, personal, and effortless."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.6rem] border border-white/15 bg-white/10 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-500">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{benefit.text}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
