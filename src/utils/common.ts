import crypto from 'crypto';
import { OfferTypeEnum } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { OfferCityEnum } from '../types/offer-city.enum.js';
import { UserTypeEnum } from '../types/user-type.enum.js';
import { User } from '../types/user.type.js';
import { CoordinatesType } from '../types/coordinates.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title,
    description,
    createdDate,
    city,
    previewImage,
    image,
    premium,
    rating,
    type,
    roomsNumber,
    guestsNumber,
    price,
    facilities,
    userName,
    email,
    avatarPath,
    userType,
    commentsNumber,
    latitude,
    longitude] = tokens;
  return {
    title,
    description,
    postDate: new Date(createdDate),
    city: OfferCityEnum[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
    previewImage,
    image,
    premium: premium === 'да'?? true,
    rating: Number(rating),
    type: OfferTypeEnum[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    roomsNumber: Number(roomsNumber),
    guestsNumber: Number(guestsNumber),
    price: Number(price),
    facilities: facilities.split(';')
      .map((name) => ({name})),
    user: {
      name: userName,
      email,
      avatarPath,
      type: UserTypeEnum[userType as 'Pro' | 'Common'],
    } as User,
    commentsNumber: Number(commentsNumber),
    coordinates: {
      latitude: Number(latitude),
      longitude: Number(longitude)
    } as CoordinatesType,
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};
