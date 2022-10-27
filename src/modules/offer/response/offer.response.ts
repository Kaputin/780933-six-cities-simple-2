import {Expose, Type} from 'class-transformer';
import UserResponse from '../../user/response/user.response.js';

export default class OfferResponse {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: string;

  @Expose()
  public city!: string;

  @Expose()
  public image!: string[];

  @Expose()
  public previewImage!: string;

  @Expose()
  public premium!: boolean;

  @Expose()
  public type!: string;

  @Expose()
  public guestsNumber!: number;

  @Expose()
  public roomsNumber!: number;

  @Expose()
  public price!: number;

  @Expose()
  public facilities!: object[];

  @Expose({ name: 'userId'})
  @Type(() => UserResponse)
  public user!: UserResponse;

  @Expose()
  public coordinates!: object;

  @Expose()
  public commentCount!: number;
}
