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
