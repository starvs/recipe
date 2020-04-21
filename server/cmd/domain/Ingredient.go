package domain

// Ingredient struct
type Ingredient struct {
	Base
	Name     string
	Quantity int
	Unit     string
	Recipe   []*Recipe `gorm:"many2many:recipe_ingredients"`
}
