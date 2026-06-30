export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Amelia Hart',
    role: 'Food Critic',
    quote:
      'Each course arrived like a polished work of art, balancing flavor and texture with impeccable finesse. Every detail felt deliberate and elevated.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Julian Park',
    role: 'Corporate Guest',
    quote:
      'The service was seamless and the atmosphere felt luxurious without ever being cold. This is the kind of restaurant you choose for an unforgettable evening.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Noémie Laurent',
    role: 'Culinary Enthusiast',
    quote:
      'Bold flavors, precise plating, and a refined pace made the tasting menu feel extraordinary. The room itself was an elegant backdrop to the meal.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
  },
];
