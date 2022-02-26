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
}
interface Resources {
  name: string;
  value: string;
}

export type { IRecipe, Resources };
