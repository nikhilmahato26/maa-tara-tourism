import templeImg from '../assets/pilgrimage_temple.png';
import snowImg from '../assets/snow_mountains.png';
import beachImg from '../assets/international_beach.png';
import wildlifeImg from '../assets/wildlife.png';
import palaceImg from '../assets/palace.png';
import backwatersImg from '../assets/backwaters.png';
import modernCityImg from '../assets/modern_city.png';
import greenHillsImg from '../assets/green_hills.png';

export const customizedPackages = [
  { id: 1, title: 'Puri', duration: '5 Days', price: 6500, image: templeImg },
  { id: 2, title: 'Darjeeling', duration: '5 Days', price: 9500, image: greenHillsImg },
  { id: 3, title: 'Gangtok', duration: '5 Days', price: 9500, image: snowImg },
  { id: 4, title: 'Sundarban', duration: '3 Days', price: 4500, image: wildlifeImg },
  { id: 5, title: 'Lava Lolegaon', duration: '6 Days', price: 9200, image: greenHillsImg },
  { id: 6, title: 'Purulia', duration: '3 Days', price: 6200, image: greenHillsImg },
  { id: 7, title: 'Daringbari', duration: '4 Days', price: 8500, image: greenHillsImg },
  { id: 8, title: 'Bhitarkanika', duration: '4 Days', price: 8200, image: wildlifeImg },
  { id: 9, title: 'Silk Route', duration: '5 Days', price: 9200, image: snowImg },
  { id: 10, title: 'Almora', duration: 'Including Ranikhet', price: null, image: greenHillsImg },
  { id: 11, title: 'Sittong & Offbeat', duration: '7 Days', price: 12500, image: greenHillsImg },
  { id: 12, title: 'Ravangla', duration: '7 Days', price: 12500, subtitle: 'Pelling, Richenpong', image: snowImg },
];

export const internationalPackages = [
  { id: 1, title: 'Thailand', subtitle: 'Bangkok, Pattaya', duration: '4 Nights / 5 Days', price: 25500, image: beachImg },
  { id: 2, title: 'Thailand', subtitle: 'Phuket, Krabi, Bangkok', duration: '6 Nights / 7 Days', price: null, image: beachImg },
  { id: 3, title: 'Hong Kong', subtitle: 'Macau, Disneyland', duration: 'Customized', price: null, image: modernCityImg },
  { id: 4, title: 'Malaysia', subtitle: 'Singapore', duration: 'Customized', price: null, image: modernCityImg },
  { id: 5, title: 'Kuala Lumpur', subtitle: 'Singapore', duration: 'Customized', price: null, image: modernCityImg },
  { id: 6, title: 'Mauritius', subtitle: 'North, South', duration: 'Customized', price: null, image: beachImg },
  { id: 7, title: 'Sri Lanka', subtitle: 'Exotic Island Tour', duration: 'Customized', price: null, image: beachImg },
  { id: 8, title: 'Bangladesh', subtitle: 'Dhaka, Cox\'s Bazar, Rangamati, Chittagong', duration: 'Customized', price: null, image: greenHillsImg },
];

export const featuredDomestic = [
  { id: 1, title: 'Kumaon', duration: '14 Days', price: 23500, highlights: 'Scenic lakes, Mountain views', image: greenHillsImg },
  { id: 2, title: 'North India', duration: '13 Days', price: 24000, highlights: 'Heritage, Culture, Mountains', image: palaceImg },
  { id: 3, title: 'Shimla Manali', duration: '15 Days', price: 26500, highlights: 'Snow, Valleys, Adventure', image: snowImg },
  { id: 4, title: 'Kinnaur Kalpa', duration: '12 Days', price: 23500, highlights: 'Himalayas, Monasteries', image: snowImg },
  { id: 5, title: 'Kashmir', subtitle: 'Vaishno Devi', duration: '14 Days', price: 24500, highlights: 'Shikara Ride, Gardens, Pilgrimage', image: snowImg },
  { id: 6, title: 'Leh Ladakh Kargil', duration: '10 Days', price: 31000, highlights: 'Pangong Lake, Nubra Valley', image: snowImg },
  { id: 7, title: 'Kerala Kanyakumari', duration: '14 Days', price: 26500, highlights: 'Backwaters, Beaches', image: backwatersImg },
  { id: 8, title: 'Rajasthan', duration: '16 Days', price: 28000, highlights: 'Forts, Palaces, Desert', image: palaceImg },
  { id: 9, title: 'Mumbai Goa', duration: '15 Days', price: 29000, highlights: 'Beaches, Nightlife, Heritage', image: beachImg },
  { id: 10, title: 'Arunachal Pradesh', duration: '11 Days', price: 27500, highlights: 'Tawang, Monasteries', image: snowImg },
  { id: 11, title: 'Andaman', duration: '7 Days', price: 22500, highlights: 'Cellular Jail, Radhanagar Beach', image: beachImg },
  { id: 12, title: 'Kedarnath Badrinath', duration: '14 Days', price: 31500, highlights: 'Chardham, Spirituality', image: templeImg },
  { id: 13, title: 'Shillong', subtitle: 'Guwahati, Kaziranga', duration: '10 Days', price: 23500, highlights: 'Waterfalls, Wildlife', image: wildlifeImg },
  { id: 14, title: 'Hyderabad', subtitle: 'Vizag, Araku Valley', duration: '10 Days', price: 22500, highlights: 'Charminar, Caves, Beaches', image: palaceImg },
  { id: 15, title: 'South India', duration: '14 Days', price: 28500, highlights: 'Temples, Hill Stations', image: templeImg },
  { id: 16, title: 'Gujarat', duration: '15 Days', price: 31500, highlights: 'Rann of Kutch, Dwarka', image: templeImg },
  { id: 17, title: 'Madhya Pradesh', duration: '17 Days', price: 32500, highlights: 'Khajuraho, National Parks', image: palaceImg },
  { id: 18, title: 'Dooars', subtitle: 'Jungle Safari', duration: '8 Days', price: 18500, highlights: 'Wildlife, Nature', image: wildlifeImg }
];
