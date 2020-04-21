package migrations

import (
	"fmt"

	"../domain"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func CreateRecipe() {
	db, err := gorm.Open("mysql", "root:fixins@tcp(localhost:3315)/recipe")

	if err != nil {
		fmt.Println(err.Error())
		panic("error establishing database connection")

	}

	defer db.Close()

	db.AutoMigrate(&domain.Recipe{})
}

func CreateIngredient() {
	db, err := gorm.Open("mysql", "root:fixins@tcp(localhost:3315)/recipe")

	if err != nil {
		fmt.Println(err.Error())
		panic("error establishing database connection")

	}

	defer db.Close()

	db.AutoMigrate(&domain.Ingredient{})
}

func CreateTag() {
	db, err := gorm.Open("mysql", "root:fixins@tcp(localhost:3315)/recipe")

	if err != nil {
		fmt.Println(err.Error())
		panic("error establishing database connection")

	}

	defer db.Close()

	db.AutoMigrate(&domain.Tag{})
}

func CreateDummyRecipe() {
	db, err := gorm.Open("mysql", "root:fixins@tcp(localhost:3315)/recipe")

	if err != nil {
		fmt.Println(err.Error())
		panic("error establishing database connection")

	}

	ingredient1 := domain.Ingredient{Name: "chicken", Quantity: 1, Unit: "lb."}
	ingredient2 := domain.Ingredient{Name: "rice", Quantity: 8, Unit: "oz."}

	recipe := domain.Recipe{Name: "chicken and rice", Ingredients: []*domain.Ingredient{&ingredient1, &ingredient2}, PrepTime: 8, BakeTime: 30}

	db.Create(&recipe)
	defer db.Close()

}
