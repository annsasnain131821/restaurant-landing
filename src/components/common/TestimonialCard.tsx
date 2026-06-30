import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  index: number;
};

function TestimonialCard({ name, role, quote, rating, image, index }: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full border border-white/15 object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="text-sm text-stone-300">{role}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1 text-brand-400">
        {Array.from({ length: rating }).map((_, starIndex) => (
          <FiStar key={starIndex} className="h-4 w-4" />
        ))}
      </div>

      <p className="mt-6 text-sm leading-7 text-stone-300">“{quote}”</p>

      <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-300">
        <span className="font-semibold text-white">Luxury dining review</span> · Elevated service, attention to detail, and impeccable presentation.
      </div>
    </motion.article>
  );
}

export default TestimonialCard;
