import portrait1 from '../assets/portrait_1.png';
import portrait2 from '../assets/portrait_2.png';
import portrait3 from '../assets/portrait_3.png';
import snowImg from '../assets/snow_mountains.png';
import beachImg from '../assets/international_beach.png';
import templeImg from '../assets/pilgrimage_temple.png';
import wildlifeImg from '../assets/wildlife.png';
import greenHillsImg from '../assets/green_hills.png';
import modernCityImg from '../assets/modern_city.png';
import palaceImg from '../assets/palace.png';
import backwatersImg from '../assets/backwaters.png';

export const companyInfo = {
  name: 'Maa Tara Tourism',
  phones: ['+91 9163264242', '+91 9836352490'],
  email: 'maataratourism18@gmail.com',
  address: '272, M.I.D Road, Kolkata – 700060',
  description: 'Maa Tara Tourism is a trusted travel agency offering domestic and international tour packages, customized holidays, hotel booking, air ticket booking, car rentals, corporate tours, school excursions, pilgrimage tours and event services. We specialize in carefully planned itineraries with affordable pricing and personalized customer support.',
  socials: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
  stats: [
    { value: '20+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Travelers' },
    { value: '100+', label: 'Tour Packages' },
    { value: '24×7', label: 'Customer Support' },
  ]
};

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sen',
    text: 'Maa Tara Tourism made our family vacation absolutely perfect! Best service and great deals.',
    rating: 5,
    image: portrait1
  },
  {
    id: 2,
    name: 'Priya Das',
    text: 'Amazing experience and very easy booking process. Highly recommend their customized tour packages.',
    rating: 5,
    image: portrait2
  },
  {
    id: 3,
    name: 'Amit Mukherjee',
    text: 'Customer support was awesome and our trip to Darjeeling was unforgettable!',
    rating: 5,
    image: portrait3
  }
];

export const galleryImages = [
  { src: snowImg, alt: 'Mountains' },
  { src: beachImg, alt: 'Beaches' },
  { src: templeImg, alt: 'Temples' },
  { src: backwatersImg, alt: 'Adventure' },
  { src: palaceImg, alt: 'Heritage' },
  { src: snowImg, alt: 'Snow' },
  { src: wildlifeImg, alt: 'Wildlife' },
  { src: greenHillsImg, alt: 'Hills' },
  { src: modernCityImg, alt: 'International Cities' },
  { src: greenHillsImg, alt: 'Group Tours' },
];
