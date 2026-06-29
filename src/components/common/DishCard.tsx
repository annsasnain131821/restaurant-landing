import { motion } from 'framer-motion';

type DishCardProps = {
  name: string;
  description: string;
  price: string;
  accent: string;
  icon: string;
  index: number;
};

function DishCard({ name, description, price, accent, icon, index }: DishCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01, rotate: -0.5 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <div className={`relative h-60 overflow-hidden rounded-[1.45rem] border border-white/10 bg-gradient-to-br ${accent} p-4`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_45%)]" />
        <div className="relative flex h-full flex-col justify-between rounded-[1.1rem] border border-white/10 bg-stone-950/30 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-200">
              Chef Special
            </span>
            <span className="text-2xl text-brand-500">{icon}</span>
          </div>

          <div className="space-y-3">
            <div className="h-10 w-24 rounded-full bg-white/10 blur-2xl" />
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.35em] text-stone-300">Signature plate</p>
              <p className="text-xl font-semibold text-white">{name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 pb-2 pt-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-100">
            {price}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-stone-300">{description}</p>
        <button className="mt-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-500/40 hover:bg-brand-500/20">
          Order now
        </button>
      </div>
    </motion.article>
  );
}

export default DishCard;
