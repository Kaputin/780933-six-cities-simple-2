import { readFileSync } from 'fs';
import { OfferTypeEnum } from '../../types/offer-type.enum.js';
import { Offer } from '../../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';
import { OfferCityEnum } from '../../types/offer-city.enum.js';
import { UserTypeEnum } from '../../types/user-type.enum.js';
import { User } from '../../types/user.type.js';
import { CoordinatesType } from '../../types/coordinates.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([ title,
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
        password,
        userType,
        commentsNumber,
        latitude,
        longitude
      ]) => ({
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
          password,
          type: UserTypeEnum[userType as 'Pro' | 'Common'],
        } as User,
        commentsNumber: Number(commentsNumber),
        coordinates: {
          latitude: Number(latitude),
          longitude: Number(longitude)
        } as CoordinatesType,
      }));
  }
}
