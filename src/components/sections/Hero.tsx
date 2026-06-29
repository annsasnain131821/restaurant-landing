import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_25%)]" />
      <Container className="relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37] backdrop-blur">
            <span className="text-base">✦</span>
            Fine Dining • Seasonal Tasting • Private Dining
          </div>

          <h1 className="text-4xl font-semibold leading-[0.95] tracking-[0.02em] text-white sm:text-5xl lg:text-7xl">
            Where every course feels like a celebration.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
            Discover an intimate dining experience shaped by exquisite cuisine, candlelit elegance, and impeccable service.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Book Table</Button>
            <Button variant="secondary">Explore Menu</Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#A1A1AA]">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              Open nightly from 5:00 PM
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              Downtown • Reservations Preferred
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 top-6 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 px-4 py-3 text-sm font-semibold text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 backdrop-blur">
            <div className="flex items-center gap-2">
              <span>★★★★★</span>
              <span className="text-white/80">Michelin Quality</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#111116] p-5 sm:p-8">
              <div className="relative h-[420px] overflow-hidden rounded-[1.3rem] border border-white/10 bg-gradient-to-br from-[#1a1a22] via-[#101015] to-[#0B0B0F]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2),_transparent_35%)]" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-center text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37] backdrop-blur">
                    Restaurant Image Placeholder
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-[#A1A1AA]">
                <span>Chef’s tasting experience</span>
                <span>Reservations • 24/7 concierge</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
