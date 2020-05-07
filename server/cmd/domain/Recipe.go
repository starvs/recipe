package domain

// Recipe struct
type Recipe struct {
	Base
	Name        string        `json:"name"`
	Tags        []*Tag        `json:"tags" gorm:"many2many:recipe_tags"`
	Ingredients []*Ingredient `json:"ingredients" gorm:"many2many:recipe_ingredients"`
	PrepTime    int           `json:"prepTime"`
	BakeTime    int           `json:"bakeTime"`
	BakeTemp    int           `json:"bakeTemp"`
}
