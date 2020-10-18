export class Allergies {
  constructor(score) {
    this.score = score > 256 ? score % 256 : score;
    this.allergens = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128,
    };
  }

  list() {
    let allergens = Object.keys(this.allergens);
    let allergyList = allergens.filter((allergen) => {
      return this.allergicTo(allergen);
    });
    return allergyList;
  }

  allergicTo(allergy) {
    let isAllergic = this.score & this.allergens[allergy];
    return isAllergic ? true : false;
  }
}
