package domain

// Ingredient struct
type Ingredient struct {
	Base
	Name             string `json:"name"`
	RecipeIngredient []*RecipeIngredient
}
