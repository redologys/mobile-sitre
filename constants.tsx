
import React from 'react';
import { 
  Smartphone, Wrench, Globe, ShieldCheck, DollarSign, Printer, 
  CreditCard, Zap, Award 
} from 'lucide-react';
import { Service, NavLink, Review } from './types';

export const STORE_IMAGES = [
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzvoO5U-KMgSYLbvKbylt1P0djbMb3oZnnqnsTyLXUp0LC3Va8d7KnlMBdU4S1wtjfxma7GZS6cBnMtw2nZAQMM6OkJ0ofRFwKhXzosCTigVZaZIwSybNWUvktji_abtA9tjhszi2cIviQn=s680-w680-h510-rw", // Repair Station
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy-3vwhIZfIpDjFVsOqBBEcv-No6WImlABy5JvNkUXkAkYUKeMq6S48GEn0H0YMrg2IdqXIBPwN--qB_MKfDwIDOpbvr-gXg9sL_MNQw2h63mVlKdvooqQJFw_T_6pYrLXBiwAgbNKa8wYe=s680-w680-h510-rw", // Service Counter
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxUS6oHJieBfvX7BHYM5tq7lZwRtG-TOfA9SWbOpV8Hr6o5pnf9iORCCQ8La6pdF1E9bdu9SGpE-vke29QaYF_sSKALhiV1dPWb3Mxz3I5MMpScgzVnAN1iNZ3eofBQrj4dKHrHLvzjey8=s680-w680-h510-rw", // Accessories Wall
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz4lUxgXEV6hTK4_9J19tb-uhIHhgCQuGkGGLxH5cQY-71ICyG0Kr67a5HIc5lvaX5E-8gRpjggG5dOxN1LHq57Wt7hew-hhzVSJFxM5Xp7-bfSsa-nK7aTqK7kOTmgKtI9LhR88Ark2gEb=s680-w680-h510-rw", // Product Displays
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyYWxfg_nFLgvmubEs9yBuddiyiL9UMqTgFmIGUkN16Bmliz2P60gaUT9vGSoPd7_pOJ4ggS5nzm_TBqVzhrAgCipK8pobRF2-ltpDOAkNXQOu8NurrcjkDk2mRO6gcDTrzAX8f=s680-w680-h510-rw"  // Wider Interior
];

export const SERVICES: Service[] = [
  { id: '1', category: "Core Utility", icon: Wrench, title: "Mobile Repairs", description: "High-precision board repair, glass replacement, and battery optimization for flagship devices." },
  { id: '2', category: "Global Reach", icon: Globe, title: "Phone Unlocking", description: "Official carrier white-listing for permanent network freedom across all international bands." },
  { id: '3', category: "Certified Marketplace", icon: Smartphone, title: "Buy & Sell", description: "Rigorous 40-point inspection on all pre-owned inventory with comprehensive shop warranties." },
  { id: '4', category: "Defense", icon: ShieldCheck, title: "Device Protection", description: "Custom-fit screen armor and impact-certified cases from the world's leading tech brands." },
  { id: '5', category: "Financial", icon: DollarSign, title: "Money Transfer", description: "Institutional-grade secure transfers. Fast, encrypted, and reliable global remittances." },
  { id: '6', category: "Documentation", icon: Printer, title: "Print & Photo", description: "Industrial-capacity high-resolution printing and large-scale document duplication." },
  { id: '7', category: "Connectivity", icon: CreditCard, title: "Bill Payments", description: "Direct ecosystem integration for all major mobile carriers and utility providers." },
  { id: '8', category: "Infrastructure", icon: Zap, title: "Power Systems", description: "Wholesale MFi-certified charging solutions and ultra-fast data sync hardware." },
  { id: '9', category: "B2B Strategy", icon: Award, title: "Wholesale Supply", description: "Preferred inventory partner for regional retailers, offering bulk high-margin tech accessories." }
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'The Studio', href: '#gallery' },
  { name: 'Expertise', href: '#why-us' },
  { name: 'Feedback', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const REVIEWS: Review[] = [
  { name: "Jessica M.", text: "The only place I trust with my iPhone. Screen was fixed in 20 mins and looks perfect. Truly professional service!", date: "2 weeks ago", rating: 5 },
  { name: "David R.", text: "Best tech shop in Brooklyn. Great selection of cases and the money transfer service is super reliable. 10/10 recommended.", date: "1 month ago", rating: 5 },
  { name: "Amara K.", text: "Excellent prices and very honest technicians. They fixed my charging port when others said it couldn't be done.", date: "3 months ago", rating: 5 }
];

export const CONTACT_INFO = {
  address: "1134 Liberty Ave, Brooklyn, NY 11208",
  phone: "(929) 789 2786",
  hours: "Open until 9 PM",
  mapsLink: "https://maps.app.goo.gl/9Gq3v3x9C4W2Wv3F7"
};
