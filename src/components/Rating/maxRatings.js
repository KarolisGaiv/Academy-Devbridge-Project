import rest from "../../db.json";

export class Ratings {
  static numberOneRating(best) {
    const restlen = Object.keys(rest.restaurants.restaurantList).length;
    if (best == null) best = 6;
    var sum = 0;
    var sumrev = 0;
    var rate;
    var maxrat = -1;
    var restname;
    var cats;
    var checkins;
    var time;

    for (var i = 0; i < restlen; i++) {
      const rat = rest.restaurants.restaurantList[i];
      const revlen = Object.keys(rat.reviews).length;
      sumrev += revlen;
      for (var j = 0; j < revlen; j++) {
        sum += rat.reviews[j].rating;
        rate = sum / revlen;
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
    if (sumrev === 0) maxrat = 0;

    return [checkins, maxrat.toFixed(1), cats, restname, time];
  }
  static numberTwoRating() {
    var no1 = Ratings.numberOneRating()[1];
    var checkins = Ratings.numberOneRating(no1)[0];
    var no2 = Ratings.numberOneRating(no1)[1];
    var cats = Ratings.numberOneRating(no1)[2];
    var restname2 = Ratings.numberOneRating(no1)[3];
    var time2 = Ratings.numberOneRating(no1)[4];

    return [checkins, no2, cats, restname2, time2];
  }
}
