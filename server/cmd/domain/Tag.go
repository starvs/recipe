package domain

type Tag struct {
	Base
	Name    string    `json:"name"`
	Recipes []*Recipe `json:"recipes" gorm:"many2many:recipe_tags"`
}
