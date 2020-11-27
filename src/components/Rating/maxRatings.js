import rest from "../../db.json";

export class Ratings {
  static numberOneRating(best) {
    const restlen = Object.keys(rest.restaurants.restaurantList).length;
    //if this function is ran first time, there isn't best rating yet
    //so let the best rating be number bigger than 5
    if (best == null) best = 6;
    var sum = 0;
    var sumrev = 0;
    var rate;
    var maxrat = -1;
    var restname;
    var cats;
    var checkins;
    var time;

    //loop through restaurants
    for (var i = 0; i < restlen; i++) {
      //get restaurant
      const rat = rest.restaurants.restaurantList[i];
      //count that restaurant's reviews
      const revlen = Object.keys(rat.reviews).length;
      //get the amount of reviews
      sumrev += revlen;
      //loop through reviews
      for (var j = 0; j < revlen; j++) {
        sum += rat.reviews[j].rating;
        rate = sum / revlen;
        //check if rating is bigger than last one
        //and if it's smaller than the biggest
        if (rate > maxrat && rate < best) {
          maxrat = rate;
          restname = rat.name;
          cats = rat.categories;
          checkins = rat.checkIns;
          time = rat.openingHours[0].hours;
        }
      }
      sum = 0;
    }
    //if there aren't any reviews, rating is 0
    if (sumrev === 0) maxrat = 0;

    return [checkins, maxrat.toFixed(1), cats, restname, time];
  }
  static numberTwoRating() {
    //get the best rating
    var no1 = Ratings.numberOneRating()[1];
    var checkins = Ratings.numberOneRating(no1)[0];
    var no2 = Ratings.numberOneRating(no1)[1];
    var cats = Ratings.numberOneRating(no1)[2];
    var restname2 = Ratings.numberOneRating(no1)[3];
    var time2 = Ratings.numberOneRating(no1)[4];

    return [checkins, no2, cats, restname2, time2];
  }
}
