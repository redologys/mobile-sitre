
export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: any;
}

export interface Review {
  name: string;
  text: string;
  date: string;
  rating: number;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
