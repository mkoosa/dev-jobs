export interface Job {
  company: string;
  contract: string;
  description?: string;
  id: number;
  location: string;
  logo: string;
  logoBackground?: string;
  position: string;
  postedAt: string;
  requirements: {
    items: string[];
  };
  // role?: object;
  role: {
    items: string[];
    content: string;
  };
  website?: string;
}
