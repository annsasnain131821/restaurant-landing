import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data/testimonials';

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" />
      <Container className="relative">
        <SectionTitle
          eyebrow="Testimonials"
          title="What our guests say about the experience"
          description="Real reviews from guests who chose our restaurant for special evenings, celebrations, and unforgettable culinary journeys."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
