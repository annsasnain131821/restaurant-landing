import Layout from '../components/layout/Layout';
import AboutRestaurant from '../components/sections/AboutRestaurant';
import FeaturedMenu from '../components/sections/FeaturedMenu';
import ChefSection from '../components/sections/ChefSection';
import Testimonials from '../components/sections/Testimonials';
import WhyChooseUs from '../components/sections/WhyChooseUs';

function Home() {
  return (
    <Layout>
      <main>
        <AboutRestaurant />
        <FeaturedMenu />
        <ChefSection />
        <Testimonials />
        <WhyChooseUs />
      </main>
    </Layout>
  );
}

export default Home;
