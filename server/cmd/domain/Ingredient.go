package domain

// Ingredient struct
type Ingredient struct {
	Base
	Name     string    `json:"name"`
	Quantity int       `json:"quantity"`
	Unit     string    `json:"unit"`
	Recipe   []*Recipe `json:"recipe" gorm:"many2many:recipe_ingredients"`
}
