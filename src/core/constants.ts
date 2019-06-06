export const PROD = process.env.PROD ? process.env.PROD : false;

export const MONGODB_URI_BASE = process.env.MONGODB_URI_BASE;
export const MONGODB_DB_PROD = process.env.MONGODB_DB_PROD;
export const MONGODB_DB_DEV = process.env.MONGODB_DB_DEV;
export const MONGODB_DB = PROD ? MONGODB_DB_PROD : MONGODB_DB_DEV;
export const MONGODB_URI_FULL = MONGODB_URI_BASE + MONGODB_DB + '?retryWrites=true';

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
export const AWS_REGION = process.env.AWS_REGION;

export const AWS_BUCKET_DEV = process.env.AWS_BUCKET_DEV;
export const AWS_BUCKET_PHOTOS = PROD ? process.env.AWS_BUCKET_PHOTOS : AWS_BUCKET_DEV;

export const FACEBOOK_ID = process.env.FACEBOOK_ID;
export const FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;

export const INSTAGRAM_ID = process.env.INSTAGRAM_ID;
export const INSTAGRAM_SECRET = process.env.INSTAGRAM_SECRET;

export const TWITTER_KEY = process.env.TWITTER_KEY;
export const TWITTER_SECRET = process.env.TWITTER_SECRET;

export const GOOGLE_ID = process.env.GOOGLE_ID;
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
