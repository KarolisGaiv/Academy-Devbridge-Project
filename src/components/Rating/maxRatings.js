import rest from "../../db.json";

export class Ratings {
  static numberOneRating(best) {
    const restlen = Object.keys(rest.restaurants.restaurantList).length;
    if (best == null) best = 6;
    let sum = 0;
    let reviews_sum = 0;
    let current_rating;
    let max_rating = -1;
    let max_rating_sum;
    let max_rating_reviewers;
    let index;

    for (let i = 0; i < restlen; i++) {
      const restaurant = rest.restaurants.restaurantList[i];
      const reviews_length = Object.keys(restaurant.reviews).length;
      reviews_sum += reviews_length;

      for (let j = 0; j < reviews_length; j++) {
        sum += restaurant.reviews[j].rating;
        current_rating = sum / reviews_length;
        if (current_rating > max_rating && current_rating < best) {
          max_rating = current_rating;
          max_rating_sum = sum;
          max_rating_reviewers = reviews_length;
          index = i;
        }
      }
      sum = 0;
    }
    // if there werent any reviews, the number cant be null and still has to be shown
    if (reviews_sum === 0) max_rating = 0;

    return [max_rating.toFixed(1), max_rating_sum, max_rating_reviewers, index];
  }
  static numberTwoRating() {
    let no1_rating = Ratings.numberOneRating()[0];
    let no2_rating = Ratings.numberOneRating(no1_rating)[0];
    let max_rating_sum = Ratings.numberOneRating(no1_rating)[1];
    let max_rating_reviewers = Ratings.numberOneRating(no1_rating)[2];
    let index = Ratings.numberOneRating(no1_rating)[3];

    return [no2_rating, max_rating_sum, max_rating_reviewers, index];
  }
  static finalRating(old_sum, old_reviewers, new_value) {
    let final_rating = (old_sum + new_value) / (old_reviewers + 1);
    return final_rating.toFixed(1);
  }
  static numberOneCheckIns() {
    let index = Ratings.numberOneRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let checkins = restaurant.checkIns;
    return checkins;
  }
  static numberTwoCheckIns() {
    let index = Ratings.numberTwoRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let checkins = restaurant.checkIns;
    return checkins;
  }
  static numberOneCategories() {
    let index = Ratings.numberOneRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let categories = restaurant.categories;
    return categories;
  }
  static numberTwoCategories() {
    let index = Ratings.numberTwoRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let categories = restaurant.categories;
    return categories;
  }
  static numberOneTitle() {
    let index = Ratings.numberOneRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let title = restaurant.name;
    return title;
  }
  static numberTwoTitle() {
    let index = Ratings.numberTwoRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let title = restaurant.name;
    return title;
  }
  static numberOneHours() {
    let index = Ratings.numberOneRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let hours = restaurant.openingHours[0].hours;
    hours = hours.substring(0, 2) + ":00 " + hours.substring(3, 7) + ":00";
    return hours;
  }
  static numberTwoHours() {
    let index = Ratings.numberTwoRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let hours = restaurant.openingHours[0].hours;
    hours = hours.substring(0, 2) + ":00 " + hours.substring(3, 7) + ":00";
    return hours;
  }
  static numberOneImage() {
    let index = Ratings.numberOneRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let image = restaurant.image;
    return image;
  }
  static numberTwoImage() {
    let index = Ratings.numberTwoRating()[3];
    const restaurant = rest.restaurants.restaurantList[index];
    let image = restaurant.image;
    return image;
  }

  static countRating(i) {
    let restaurantList = rest.restaurants.restaurantList;
    let index = i;
    let rating = Number(
      (
        Object.values(restaurantList[i].reviews)
          .map((x) => x.rating)
          .reduce((a, b) => a + b, 0) / restaurantList[i].reviews.length
      ).toFixed(1)
    );

    if (!rating) {
      rating = 0.0;
    }

    let ratingSum = Object.values(restaurantList[i].reviews)
      .map((x) => x.rating)
      .reduce((a, b) => a + b, 0);

    let ratingReviewers = restaurantList[i].reviews.length;

    return [rating, ratingSum, ratingReviewers, index];
  }

  static showHours(i) {
    const restaurant = rest.restaurants.restaurantList[i];
    let hours = restaurant.openingHours[0].hours;
    hours = hours.substring(0, 2) + ":00 " + hours.substring(3, 7) + ":00";
    return hours;
  }
}
