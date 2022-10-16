import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 8;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;
const MIN_RATING = 1;
const MAX_RATING = 5;
const MIN_COMMENTS = 1;
const MAX_COMMENTS = 50;
const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
const MIN_RATING_COUNT = 1;
const MAX_RATING_COUNT = 1000;
export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const createdDate =  dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<{name: string, latitude: string, longitude: string}>(this.mockData.city);
    const previewImage = getRandomItem<string>(this.mockData.previewImage);
    const image = getRandomItem<string>(this.mockData.image);
    const premium = Math.random() < 0.5;
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const ratingCount = generateRandomValue(MIN_RATING_COUNT, MAX_RATING_COUNT).toString();
    const type = getRandomItem<string>(this.mockData.type);
    const roomsNumber = generateRandomValue(MIN_ROOMS, MAX_ROOMS).toString();
    const guestsNumber = generateRandomValue(MIN_GUESTS, MAX_GUESTS).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const userName = getRandomItem<string>(this.mockData.users);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatars);
    const userType = getRandomItem<string>(this.mockData.userType);
    const commentsNumber = generateRandomValue(MIN_COMMENTS, MAX_COMMENTS).toString();
    const latitude = city.latitude;
    const longitude = city.longitude;

    return [
      title,
      description,
      createdDate,
      city.name,
      previewImage,
      image,
      premium,
      rating,
      ratingCount,
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
      longitude
    ].join('\t');
  }
}
