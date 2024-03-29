export type Studio = {
  id: number;
  name: string;
  address: string;
  cityId: string;
  phone: string;
  isAC: boolean;
  isSpeaker: boolean;
  isRGB: boolean;
  isProperties: boolean;
  instagram: string;
  image: string[];
  logo: string;
  rent: number;
};

export type Review = {
  id: string;
  studioId: number;
  username: string;
  reviews: string;
  rating: string;
};

export type User = {
  username: string;
  phone: string;
  email: string;
  password: string;
};
