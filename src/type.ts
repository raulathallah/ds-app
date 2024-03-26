export type Studio = {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  socialmedia: StudioSocialMedia;
  image: string;
  logo: string;
  rent: number;
};

type StudioSocialMedia = {
  instagram: string;
};
