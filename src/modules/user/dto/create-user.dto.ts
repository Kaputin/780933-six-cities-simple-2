import {UserTypeEnum} from '../../../types/user-type.enum';

export default class CreateUserDto {
  public email!: string ;
  public avatarPath!: string;
  public name!: string;
  public type!: UserTypeEnum;
  public password!: string;
}
