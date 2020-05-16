package domain

type RecipeIngredient struct {
	Base
	Quantity     int         `json:"quantity"`
	Unit         string      `json:"unit"`
	Recipe       *Recipe     `json:"recipe"`
	RecipeID     string      `json:"recipeId"`
	Ingredient   *Ingredient `json:"ingredient"`
	IngredientID string      `json:"ingredientId"`
}

func (*RecipeIngredient) TabeleName() string {
	return "recipe_ingredient"
}
