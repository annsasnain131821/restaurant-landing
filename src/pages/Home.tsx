import Layout from '../components/layout/Layout';
import AboutRestaurant from '../components/sections/AboutRestaurant';
import FeaturedDishes from '../components/sections/FeaturedDishes';
import WhyChooseUs from '../components/sections/WhyChooseUs';

function Home() {
  return (
    <Layout>
      <main>
        <AboutRestaurant />
        <FeaturedDishes />
        <WhyChooseUs />
      </main>
    </Layout>
  );
}

export default Home;
