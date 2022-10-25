import { User } from './user.type.js';

export type CommentType = {
  text: string;
  postDate: Date;
  rating: number;
  user: User;
  offerId: number;
  ratingCount: number;
}
