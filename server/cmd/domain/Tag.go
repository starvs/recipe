package domain

type Tag struct {
	Base
	Name    string
	Recipes []*Recipe `gorm:"many2many:recipe_tags"`
}
