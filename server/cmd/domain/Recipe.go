package domain

// Recipe struct
type Recipe struct {
	Base
	Name        string
	Tags        []*Tag        `gorm:"many2many:recipe_tags"`
	Ingredients []*Ingredient `gorm:"many2many:recipe_ingredients"`
	PrepTime    int
	BakeTime    int
	BakeTemp    int
}
