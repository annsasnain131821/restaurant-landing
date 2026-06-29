import Layout from '../components/layout/Layout';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const architectureCards = [
  {
    title: 'Layout system',
    text: 'Shared shell components for navigation, footer, and page composition.',
  },
  {
    title: 'Shared primitives',
    text: 'Reusable button, container, and section title utilities for consistent UI.',
  },
  {
    title: 'Scalable content layers',
    text: 'Ready for sections, sections data, and future feature modules.',
  },
];

function Home() {
  return (
    <Layout>
      <main className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Architecture"
            title="Scalable foundation for a premium restaurant experience"
            description="This shell establishes the reusable layout, shared UI primitives, and future-ready content boundaries for the site."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {architectureCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Prepare next section</Button>
            <Button variant="secondary">Add content modules</Button>
          </div>
        </Container>
      </main>
    </Layout>
  );
}

export default Home;
