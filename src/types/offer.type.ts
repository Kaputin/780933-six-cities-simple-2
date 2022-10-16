import { Convenience } from './сonvenience.type.js';
import { OfferTypeEnum } from './offer-type.enum.js';
import { User } from './user.type.js';
import { OfferCityEnum} from './offer-city.enum.js';
import { CoordinatesType } from './coordinates.type';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: OfferCityEnum;
  previewImage: string;
  image: string;
  premium: boolean;
  rating: number;
  ratingCount: number;
  type: OfferTypeEnum;
  roomsNumber: number;
  guestsNumber: number;
  price: number;
  facilities: Convenience[];
  user: User;
  commentsNumber: number;
  coordinates: CoordinatesType;
}
