import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source).url();
}

export async function getPosts() {
  return client.fetch(`*[_type == "post"]{
    _id,
    title, slug, mainImage}`);
}

export async function getSpecials() {
  return client.fetch(
    `*[_type == "specials"]{
      _id,
      actionName,
      description,
      startDate,
      endDate,
      "lotteries": lotteries[]-> { lotteryName },
      "imageUrl": image.asset->url
    }`,
  );
}

export async function getMapCoords() {
  return client.fetch(
    `*[_type == "mapCoords"]{
      _id,
      place,
      latitude,
      longitude
    }`,
  );
}

export async function getMomentaryLotteries() {
  return client.fetch(
    `*[_type == "momentaryLottery"]{
      _id,
      title,
      ticketPrice,
      mainPrize,
      "imageUrl": image.asset->url
    }`,
  );
}

export const getWinners = async () => {
  return client.fetch(
    `*[_type == "winners"]{
    _id,
    name,
    region,
    amount,
    price,
    company,
    "companyLogo": companyLogo.asset->url,
    "thumbnail": video.thumbnail.asset->url,
    "videoUrl": video.videoUrl
  }`,
  );
};

export const getRecentWins = async () => {
  return client.fetch(
    `*[_type == "recentWin"]{
      _id,
      recentWin,
      date,
      drawNumber,
      prizeAmount,
      "iconUrl": icon.asset->url
    }`,
  );
};

export const getLotteryTickets = async () => {
  return client.fetch(
    `*[_type == "lotteryTickets"]{
      _id,
      lotteryName,
      superPrize,
      drawNumber,
      drawDate,
      ticketPrice,
      "imageUrl": image.asset->url
    }`,
  );
};

export const getNews = async () => {
  return client.fetch(
    `*[_type == "news"]{
      _id,
      newsTitle,
      drawDate,
      "image": image.asset->url
    }`,
  );
};

export const getPromoCharity = async () => {
  return client.fetch(
    `*[_type == "promoCharity"]{
      _id,
      title,
      description,
      date,
      companyName,
      ticketPrice,
      "companyLogo": companyLogo.asset->url,
      "bannerImage": bannerImage.asset->url
    }`,
  );
};
