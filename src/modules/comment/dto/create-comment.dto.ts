import {IsMongoId, IsString, Length} from 'class-validator';

export default class CreateCommentDto {
  @IsString({message: 'text is required'})
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public text!: string;

  @IsMongoId({message: 'offerId field must be valid an id'})
  public offerId!: string;

  public userId!: string;
}
