import {OfferTypeEnum} from '../../../types/offer-type.enum.js';
import {OfferCityEnum} from '../../../types/offer-city.enum';
import {Convenience} from '../../../types/сonvenience.type';
import {CoordinatesType} from '../../../types/coordinates.type';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: OfferCityEnum;
  public previewImage!: string;
  public image!: string;
  public premium!: boolean;
  public rating!: number;
  public type!: OfferTypeEnum;
  public roomsNumber!: number;
  public guestsNumber!: number;
  public price!: number;
  public facilities!: Convenience[];
  public userId!: string;
  public commentsNumber!: number;
  public coordinates!: CoordinatesType;
}
