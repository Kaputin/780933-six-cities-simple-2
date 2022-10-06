import typegoose, {defaultClasses, getModelForClass, Ref, Severity} from '@typegoose/typegoose';
import {OfferTypeEnum} from '../../types/offer-type.enum.js';
import {UserEntity} from '../user/user.entity.js';
import {OfferCityEnum} from '../../types/offer-city.enum.js';
import {CoordinatesType} from '../../types/coordinates.type.js';
import {Convenience} from '../../types/сonvenience.type';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true, required: true, default: ''})
  public description!: string;

  @prop({required: true, default: ''})
  public postDate!: Date;

  @prop({required: true})
  public city!: OfferCityEnum;

  @prop({required: true, default: ''})
  public previewImage!: string;

  @prop({required: true, default: ''})
  public image!: string;

  @prop({required: true, default: false})
  public premium!: boolean;

  @prop({required: true, default: 1})
  public rating!: number;

  @prop({
    type: () => String,
    enum: OfferTypeEnum
  })
  public type!: OfferTypeEnum;

  @prop({required: true, default: 1})
  public roomsNumber!: number;

  @prop({required: true, default: 1})
  public guestsNumber!: number;

  @prop({required: true, default: 100})
  public price!: number;

  @prop({required: true})
  public facilities!: Convenience[];

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId!: Ref<UserEntity>;

  @prop({required: true})
  public coordinates!: CoordinatesType;
}

export const OfferModel = getModelForClass(OfferEntity);
