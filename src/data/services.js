import {
  Plane,
  Building2,
  Car,
  Train,
  Map,
  Users,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Palmtree,
  Tent,
  Utensils,
  PartyPopper,
  BookOpenCheck
} from 'lucide-react';

export const services = [
  { id: 1, title: 'Domestic Tour Packages', icon: Map },
  { id: 2, title: 'International Tour Packages', icon: Plane },
  { id: 3, title: 'Customized Tour Packages', icon: Map },
  { id: 4, title: 'Hotel Booking', icon: Building2 },
  { id: 5, title: 'Air Ticket Booking', icon: Plane },
  { id: 6, title: 'Car Booking', icon: Car },
  { id: 7, title: 'Train Ticket Assistance', icon: Train },
  { id: 8, title: 'Corporate Tours', icon: Briefcase },
  { id: 9, title: 'School Excursions', icon: GraduationCap },
  { id: 10, title: 'College Excursions', icon: GraduationCap },
  { id: 11, title: 'Group Tours', icon: Users },
  { id: 12, title: 'Family Holidays', icon: HeartHandshake },
  { id: 13, title: 'Pilgrimage Tours', icon: BookOpenCheck },
  { id: 14, title: 'Event Management', icon: PartyPopper },
  { id: 15, title: 'Catering Services', icon: Utensils },
];

export const inclusions = [
  'Accommodation',
  '3AC Train Fare (where applicable)',
  'Daily Breakfast',
  'Lunch',
  'Evening Tea & Snacks',
  'Dinner',
  'Sightseeing',
  'Deluxe Bus',
  'Traveller Vehicle',
  'Child Package Options',
  'Double Sharing Rooms',
];

export const exclusions = [
  'Air Ticket',
  'Guide Charges',
  'Camera Charges',
  'Mineral Water',
  'Coolie Charges',
  'Safari Charges',
  'Personal Expenses',
  'Food During Train Journey',
  'Anything Not Mentioned',
];

export const bookingRules = [
  { step: 1, title: '30% advance at booking' },
  { step: 2, title: '50% payment before journey' },
  { step: 3, title: 'Balance payment before departure' },
  { step: 4, title: 'Confirmation after payment' },
];

export const cancellationPolicy = [
  { days: '120 Days Before', fee: '5%' },
  { days: '90 Days Before', fee: '10%' },
  { days: '60 Days Before', fee: '20%' },
  { days: '40 Days Before', fee: '30%' },
  { days: '30 Days Before', fee: '40%' },
  { days: '20 Days Before', fee: '60%' },
  { days: '7 Days Before', fee: '80%' },
  { days: 'Within 72 Hours', fee: '100%' },
];

export const whyChooseUs = [
  'Affordable Packages',
  'Experienced Tour Planners',
  'Customized Tours',
  'Comfortable Hotels',
  'Train Booking',
  'Air Ticket Booking',
  'Car Rental',
  'Group Tours',
  'Corporate Tours',
  'Family Packages',
  'Pilgrimage Tours',
  'Trusted Service',
];
