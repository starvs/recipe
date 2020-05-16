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

func CreateRecipeIngredient() {
	db.DB.AutoMigrate(&domain.RecipeIngredient{})
}

func CreateTag() {
	db.DB.AutoMigrate(&domain.Tag{})
}

func CreateDummyRecipe() {

	chicken := domain.Ingredient{Name: "chicken"}
	rice := domain.Ingredient{Name: "rice"}
	salt := domain.Ingredient{Name: "salt"}

	tag1 := domain.Tag{Name: "easy"}
	tag2 := domain.Tag{Name: "meat"}
	tag3 := domain.Tag{Name: "salty"}

	recipe := domain.Recipe{
		Name: "chicken and rice",
		RecipeIngredients: []*domain.RecipeIngredient{
			{
				Ingredient: &chicken,
				Quantity:   16,
				Unit:       "oz",
			},
			{
				Ingredient: &rice,
				Quantity:   12,
				Unit:       "oz",
			},
		},
		Tags:     []*domain.Tag{&tag1, &tag2},
		PrepTime: 8,
		BakeTime: 30,
	}

	recipe2 := domain.Recipe{
		Name: "salty chicken and rice",
		RecipeIngredients: []*domain.RecipeIngredient{
			{
				Ingredient: &chicken,
				Quantity:   2,
				Unit:       "lbs",
			},
			{
				Ingredient: &rice,
				Quantity:   80,
				Unit:       "grams",
			},
			{
				Ingredient: &salt,
				Quantity:   2,
				Unit:       "tbs",
			},
		},
		Tags:     []*domain.Tag{&tag1, &tag2, &tag3},
		PrepTime: 8,
		BakeTime: 30,
	}

	// recipe2 := domain.Recipe{Name: "salt more chicken and much rice", Ingredients: []*domain.Ingredient{&ingredient1, &ingredient3, &ingredient4}, Tags: []*domain.Tag{&tag1, &tag2, &tag3}, PrepTime: 8, BakeTime: 30}

	db.DB.Where(domain.Recipe{Name: recipe.Name}).FirstOrCreate(&recipe)
	db.DB.Where(domain.Recipe{Name: recipe2.Name}).FirstOrCreate(&recipe2)
}
