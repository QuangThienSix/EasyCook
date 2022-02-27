interface IRecipe {
  recipeId: number;
  nameRecipe: string;
  urlImage: string;
  avatarImage: string;
  clock: string;
  numberViewted: number;
  rating: number;
  resources: Resources[];
  tutorial: Resources[];
  recipefor?: Array<string>;
  typeOfDish?: Array<string>;
  seasons?: Array<string>;
  mealfor?: string,
  likeUser: number,
  likeUserSeen: number,
}
interface Resources {
  name: string;
  value: string;
}

export type { IRecipe, Resources };
