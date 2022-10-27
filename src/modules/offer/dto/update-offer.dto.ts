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
  Max,
  MaxLength,
  Min,
  IsString,
  Length,
  IsOptional
} from 'class-validator';

export default class CreateOfferDto {
  @IsOptional()
  @IsString({message: 'title is required'})
  @Length(10, 100, {message: 'Min length is 10, max is 100'})
  public title?: string;

  @IsOptional()
  @IsString({message: 'description is required'})
  @Length(20, 1024, {message: 'Min length is 20, max is 1024'})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate?: Date;

  @IsOptional()
  @IsEnum(OfferCityEnum, {message: 'city must be Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf'})
  public city?: OfferCityEnum;

  @IsOptional()
  @MaxLength(256, {message: 'Too short for field «previewImage»'})
  public previewImage?: string;

  @IsOptional()
  @IsArray({message: 'facilities must be an array'})
  public image?: string[];

  @IsOptional()
  @IsBoolean({message: 'premium must be an boolean'})
  public premium?: boolean;

  @IsOptional()
  @IsEnum(OfferTypeEnum, {message: 'type must be Apartment, House, Room, Hotel'})
  public type?: OfferTypeEnum;

  @IsOptional()
  @IsInt({message: 'roomsNumber must be an integer'})
  @Min(1, {message: 'Minimum roomsNumber is 1'})
  @Max(8, {message: 'Maximum roomsNumber is 8'})
  public roomsNumber?: number;

  @IsOptional()
  @IsInt({message: 'guestsNumber must be an integer'})
  @Min(1, {message: 'Minimum guestsNumber is 1'})
  @Max(10, {message: 'Maximum guestsNumber is 10'})
  public guestsNumber?: number;

  @IsOptional()
  @IsInt({message: 'price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 200000'})
  public price?: number;

  @IsOptional()
  @IsArray({message: 'facilities must be an array'})
  public facilities?: Convenience[];

  @IsOptional()
  @IsObject({message: 'coordinates must be an object'})
  public coordinates?: CoordinatesType;
}
