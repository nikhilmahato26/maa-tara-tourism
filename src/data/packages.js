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
  { 
    id: 1, 
    title: 'Thailand', 
    subtitle: 'Bangkok, Pattaya', 
    duration: '4 Nights / 5 Days', 
    price: 27500, 
    image: beachImg,
    itinerary: 'Bangkok 2 Nights, Pattaya 2 Nights',
    visaAirFareExtra: true
  },
  { 
    id: 2, 
    title: 'Thailand', 
    subtitle: 'Phuket, Pattaya, Bangkok', 
    duration: '6 Nights / 7 Days', 
    price: 32500, 
    image: beachImg,
    itinerary: 'Phuket 2 Nights, Pattaya 2 Nights, Bangkok 2 Nights',
    visaAirFareExtra: true
  },
  { 
    id: 3, 
    title: 'Dubai', 
    subtitle: 'Dhow Cruise & Dubai Creek Skyline', 
    duration: '4 Nights / 5 Days', 
    price: 31999, 
    image: modernCityImg,
    itinerary: 'Evening Dhow Cruise Ride, Dubai Creek Skyline Views, Buffet Dinner, Half-day Dubai City Tour covering iconic landmarks & cultural heritage, Thrilling Desert Safari with dune bashing - camel ride & live shows, Leisure day to explore Dubai Mall - Aquarium - Ferrari World & more, Shopping - entertainment & modern attractions for a perfect Dubai trip',
    visaAirFareExtra: true
  },
  { 
    id: 4, 
    title: 'Malaysia & Singapore', 
    subtitle: 'Kuala Lumpur, Singapore', 
    duration: '6 Nights / 7 Days', 
    price: 67999, 
    image: modernCityImg,
    itinerary: 'Kuala Lumpur 3 Nights, Singapore 3 Nights',
    visaAirFareExtra: true
  },
  { 
    id: 5, 
    title: 'Switzerland', 
    subtitle: '3N Zurich & 3N Paris', 
    duration: '6 Nights / 7 Days', 
    price: 126999, 
    image: snowImg,
    itinerary: 'Zurich 3 Nights, Paris 3 Nights',
    visaAirFareExtra: true
  },
  { 
    id: 6, 
    title: 'Sri Lanka', 
    subtitle: 'Exotic Island Tour', 
    duration: '7 Nights / 8 Days', 
    price: 54999, 
    image: beachImg,
    itinerary: 'Kandy 2 Nights, Nuwara Eliya 1 Night, Yala 1 Night, Bentota 2 Nights, Colombo 1 Night',
    visaAirFareExtra: true
  },
  { 
    id: 7, 
    title: 'Bangladesh', 
    subtitle: 'Dhaka, Cox\'s Bazar, Rangamati, Chittagong', 
    duration: '7 Nights / 8 Days', 
    price: 41999, 
    image: greenHillsImg,
    itinerary: 'Dhaka 3 Nights, Cox Bazar 2 Nights, Rangamati 1 Night, Chhita Gaon 1 Night',
    visaAirFareExtra: true
  }
];

export const featuredDomestic = [
  { 
    id: 1, 
    title: 'Kumaon', 
    duration: '14 Days', 
    price: 23500, 
    highlights: 'Scenic lakes, Mountain views', 
    image: greenHillsImg,
    itinerary: 'Lucknow 1 Night, Nainital 2 Nights Covering Lake Tours and Ranikhet, Kausani 1 Night Covering Baijanath, Bagheshwar, Chaukori / Patal Bhuvaneshwari 1 Night, Munsyari 2 Nights, Almora 2 Nights.',
    dates: '21/06, 20/09, 07/11/2025',
    trainFareIncluded: true
  },
  { 
    id: 2, 
    title: 'North India', 
    duration: '13 Days', 
    price: 24000, 
    highlights: 'Heritage, Culture, Mountains', 
    image: palaceImg,
    itinerary: 'Agra 2 Nights covering Fatehpur Sikri, Mathura 1 Night covering Vrindavan, Delhi 2 Nights, Haridwar 3 Nights covering Dehradun & Rishikesh Mussoorie 1 Night.',
    dates: '10/10, 21/11, 23/12/2025',
    trainFareIncluded: true
  },
  { 
    id: 3, 
    title: 'Shimla Manali', 
    duration: '15 Days', 
    price: 26500, 
    highlights: 'Snow, Valleys, Adventure', 
    image: snowImg,
    itinerary: 'Simla 2 Nights, Manali 3 Nights covering Manikaran, Chamunda 2 Nights covering Chamundadevi, Jwala-mukhi, Dharamshala, Dalhousie 2 Nights covering Khajjiar, Amritsar 1 Night covering Wagha Border.',
    dates: '17/09, 07/11/2025',
    trainFareIncluded: true
  },
  { 
    id: 4, 
    title: 'Kinnaur Kalpa', 
    duration: '12 Days', 
    price: 23500, 
    highlights: 'Himalayas, Monasteries', 
    image: snowImg,
    itinerary: 'Simla 1 Night, Sarahan 1 Night, Kalpa 2 Nights, Sangla 2 Nights covering Chitkul and Reckong - Peo, Rampur / Kingal 1 Night.',
    dates: '10/10, 31/10/2025',
    trainFareIncluded: true
  },
  { 
    id: 5, 
    title: 'Kashmir', 
    subtitle: 'Vaishno Devi', 
    duration: '14 Days', 
    price: 24500, 
    highlights: 'Shikara Ride, Gardens, Pilgrimage', 
    image: snowImg,
    itinerary: 'Jammu 1 Night, Srinagar 4 Nights covering Gulmarg, Sonmarg and Mughal Gardens, Pahalgam 2 Nights, Katra 2 Nights covering Vaishnodevi (Katra to Vaishnodevi and Darshan on foot. Helicopter own cost).',
    dates: '25/06, 26/09, 01/11, 22/11/2025',
    trainFareIncluded: true
  },
  { 
    id: 6, 
    title: 'Leh Ladakh Kargil', 
    duration: '10 Days', 
    price: 31000, 
    highlights: 'Pangong Lake, Nubra Valley', 
    image: snowImg,
    itinerary: 'Leh 5 Nights, Nubra 2 Nights, Pangong 1 Night, Kargil 1 Night.',
    dates: '15/06, 24/07, 21/09, 03/10/2025',
    trainFareIncluded: true
  },
  { 
    id: 7, 
    title: 'Kerala Kanyakumari', 
    duration: '14 Days', 
    price: 26500, 
    highlights: 'Backwaters, Beaches', 
    image: backwatersImg,
    itinerary: 'Kochi 1 Night, Munnar 2 Nights, Kumily 2 Nights, covering Periyar Forest & Spice Garden, Kottayam 1 Night (Kottayam to Alleppey Back Water) Trivandrum 1 Night covering Kovalam Beach, Kanyakumari 2 Nights.',
    dates: '12/09, 22/10, 27/12/25 & 07/01/26',
    trainFareIncluded: true
  },
  { 
    id: 8, 
    title: 'Rajasthan', 
    duration: '16 Days', 
    price: 28000, 
    highlights: 'Forts, Palaces, Desert', 
    image: palaceImg,
    itinerary: 'Jaipur 2 Nights, Pushkar 2 Nights covering Ajmer, Udaipur 2 Nights Covering Chittor, Haldighati, Mt. Abu 2 Nights, Jodhpur 1 Night, Jaisalmer 2 Nights Covering Sonar Kellah, Khuri / Sam, Bikaner 1 Night.',
    dates: '12/09, 19/10, 27/12/2025',
    trainFareIncluded: true
  },
  { 
    id: 9, 
    title: 'Mumbai Goa', 
    duration: '15 Days', 
    price: 29000, 
    highlights: 'Beaches, Nightlife, Heritage', 
    image: beachImg,
    itinerary: 'Jalgaon 1 Night, Aurangabad 2 Nights covering Ajanta, Ellora, Mahabaleshwar 2 Nights Ganapatipule 1 Night, Goa 3 Nights covering North Goa & South Goa, Mumbai 2 Nights.',
    dates: '27/10, 26/12/2025',
    trainFareIncluded: true
  },
  { 
    id: 10, 
    title: 'Arunachal Pradesh', 
    duration: '11 Days', 
    price: 27500, 
    highlights: 'Tawang, Monasteries', 
    image: snowImg,
    itinerary: 'Guwahati 2 Nights, Bhalukpong / Tezpur 1 Night, Dirang 1 Night, Tawang 3 Nights, Bomdila 1 Night.',
    dates: '12/07, 13/10/2025',
    trainFareIncluded: true
  },
  { 
    id: 11, 
    title: 'Andaman', 
    duration: '7 Days', 
    price: 22500, 
    highlights: 'Cellular Jail, Radhanagar Beach', 
    image: beachImg,
    itinerary: "Portblair 4 Nights covering Cellular Jail, Ross Island, Ross Hill, Corbyn's Cove Sea Beach etc. Havlok 1 Night covering Radhanagar Sea Beach, Neil Island - 1 Night, Baratang.",
    dates: "10/10, 25/12, 31/12/25 & 24/1/25, 17/2, 12/3 & Any Choice Date (4 Heads Min.)",
    trainFareIncluded: false,
    airFareExtra: true
  },
  { 
    id: 12, 
    title: 'Kedarnath Badrinath', 
    duration: '14 Days', 
    price: 31500, 
    highlights: 'Chardham, Spirituality', 
    image: templeImg,
    itinerary: 'Haridwar 2 Nights, Sitapur / Guptakashi 2 Nights, Kedarnath 1 Night, Pipalkoti 1 Night, Badrinath 2 Nights, Rudraprayag 1 Night.',
    dates: '26/06, 17/09/2025',
    trainFareIncluded: true
  },
  { 
    id: 13, 
    title: 'Shillong', 
    subtitle: 'Guwahati, Kaziranga', 
    duration: '10 Days', 
    price: 23500, 
    highlights: 'Waterfalls, Wildlife', 
    image: wildlifeImg,
    itinerary: '2 Nights Guwahati, 2 Nights Kaziranga, 3 Nights Shillong.',
    dates: '19/11, 25/12/25 & 14/01/25, 18/02/26',
    trainFareIncluded: true
  },
  { 
    id: 14, 
    title: 'Hyderabad', 
    subtitle: 'Vizag, Araku Valley', 
    duration: '10 Days', 
    price: 22500, 
    highlights: 'Charminar, Caves, Beaches', 
    image: palaceImg,
    itinerary: 'Vizag 3 Nights covering Arakuvalley. Hyderabad 3 Nights covering Ramoji Film City.',
    dates: '26/12/25 & 04/01/26',
    trainFareIncluded: true
  },
  { 
    id: 15, 
    title: 'South India', 
    duration: '14 Days', 
    price: 28500, 
    highlights: 'Temples, Hill Stations', 
    image: templeImg,
    itinerary: 'Mysore 3 Nights covering Belur, Halebeedu, Ooty 2 Nights, Wayanad 2 Nights, Coorg 2 Nights.',
    dates: '24/12/24 & 6/1/25, 12/2/25',
    trainFareIncluded: true
  },
  { 
    id: 16, 
    title: 'Gujarat', 
    duration: '15 Days', 
    price: 31500, 
    highlights: 'Rann of Kutch, Dwarka', 
    image: templeImg,
    itinerary: 'Vadodara 2 Night, Bhavnagar 1 Night, Diu 1 Night, Somnath 2 Nights, Dwarka 2 Nights, Little Rann 1 Night, Ahmedabad 2 Nights.',
    dates: '22/10, 12/11, 24/12/25 & 8/1/25, 11/2/26',
    trainFareIncluded: true
  },
  { 
    id: 17, 
    title: 'Madhya Pradesh', 
    duration: '17 Days', 
    price: 32500, 
    highlights: 'Khajuraho, National Parks', 
    image: palaceImg,
    itinerary: 'Khajuraho 2 Nights, Kanha 1 Night, Amarkantak 2 Nights, Jabalpur 2 Nights, Pachmarhi 2 Nights, Bhopal 2 Nights covering Sanchi, Bhimbetka, Indore 2 Nights covering Ujjain, Omkareshwar, Mandu.',
    dates: '21/11, 26/12/25 & 20/1/25, 17/2/26',
    trainFareIncluded: true
  },
  { 
    id: 18, 
    title: 'Dooars', 
    subtitle: 'Jungle Safari', 
    duration: '8 Days', 
    price: 18500, 
    highlights: 'Wildlife, Nature', 
    image: wildlifeImg,
    itinerary: 'Lataguri 3 Nights, Madarihat 2 Nights covering Garumara, Murti (any one Watch Tower), Bindu, Samsing Suntaley Khola covering Jaldapara Jungle Safari.',
    dates: '27/09, 03/10, 05/11, 18/12, 24/12, 29/12/2025',
    trainFareIncluded: true
  }
];
