package domain

type RecipeIngredient struct {
	Base
	Quantity     int    `json:"quantity"`
	Unit         string `json:"unit"`
	Recipe       *Recipe
	RecipeID     string
	Ingredient   *Ingredient
	IngredientID string
}

func (*RecipeIngredient) TabeleName() string {
	return "recipe_ingredient"
}
