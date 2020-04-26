package migrations

import (
	"../db"
	"../domain"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func CreateRecipe() {
	db.DB.AutoMigrate(&domain.Recipe{})
}

func CreateIngredient() {
	db.DB.AutoMigrate(&domain.Ingredient{})
}

func CreateTag() {
	db.DB.AutoMigrate(&domain.Tag{})
}

func CreateDummyRecipe() {
	ingredient1 := domain.Ingredient{Name: "chicken", Quantity: 1, Unit: "lb."}
	ingredient2 := domain.Ingredient{Name: "rice", Quantity: 8, Unit: "oz."}
	ingredient3 := domain.Ingredient{Name: "rice", Quantity: 16, Unit: "oz."}
	ingredient4 := domain.Ingredient{Name: "salt", Quantity: 3, Unit: "oz."}

	tag1 := domain.Tag{Name: "easy"}
	tag2 := domain.Tag{Name: "meat"}
	tag3 := domain.Tag{Name: "salty"}

	recipe := domain.Recipe{Name: "chicken and rice", Ingredients: []*domain.Ingredient{&ingredient1, &ingredient2}, Tags: []*domain.Tag{&tag1, &tag2}, PrepTime: 8, BakeTime: 30}
	recipe2 := domain.Recipe{Name: "salt chicken and much rice", Ingredients: []*domain.Ingredient{&ingredient1, &ingredient3, &ingredient4}, Tags: []*domain.Tag{&tag1, &tag2, &tag3}, PrepTime: 8, BakeTime: 30}

	db.DB.Where(domain.Recipe{Name: recipe.Name}).FirstOrCreate(&recipe)
	db.DB.Where(domain.Recipe{Name: recipe2.Name}).FirstOrCreate(&recipe2)
}
