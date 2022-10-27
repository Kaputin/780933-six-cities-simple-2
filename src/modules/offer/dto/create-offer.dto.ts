import {OfferTypeEnum} from '../../../types/offer-type.enum.js';
import {OfferCityEnum} from '../../../types/offer-city.enum.js';
import {Convenience} from '../../../types/сonvenience.type.js';
import {CoordinatesType} from '../../../types/coordinates.type.js';
import {
  IsArray,
  IsBoolean,
  IsObject,
  IsDateString,
  IsEnum,
  IsInt,
  IsMongoId,
  Max,
  MaxLength,
  Min,
  IsString, Length
} from 'class-validator';

export default class CreateOfferDto {
  @IsString({message: 'title is required'})
  @Length(10, 100, {message: 'Min length is 10, max is 100'})
  public title!: string;

  @IsString({message: 'description is required'})
  @Length(20, 1024, {message: 'Min length is 20, max is 1024'})
  public description!: string;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate!: Date;

  @IsEnum(OfferCityEnum, {message: 'city must be Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf'})
  public city!: OfferCityEnum;

  @MaxLength(256, {message: 'Too short for field «previewImage»'})
  public previewImage!: string;

  @IsArray({message: 'facilities must be an array'})
  public image?: string[];

  @IsBoolean({message: 'premium must be an boolean'})
  public premium!: boolean;

  @IsEnum(OfferTypeEnum, {message: 'type must be Apartment, House, Room, Hotel'})
  public type!: OfferTypeEnum;

  @IsInt({message: 'roomsNumber must be an integer'})
  @Min(1, {message: 'Minimum roomsNumber is 1'})
  @Max(8, {message: 'Maximum roomsNumber is 8'})
  public roomsNumber!: number;

  @IsInt({message: 'guestsNumber must be an integer'})
  @Min(1, {message: 'Minimum guestsNumber is 1'})
  @Max(10, {message: 'Maximum guestsNumber is 10'})
  public guestsNumber!: number;

  @IsInt({message: 'price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 200000'})
  public price!: number;

  @IsArray({message: 'facilities must be an array'})
  public facilities!: Convenience[];

  @IsMongoId({message: 'userId field must be valid an id'})
  public userId!: string;

  @IsObject({message: 'coordinates must be an object'})
  public coordinates!: CoordinatesType;
}
