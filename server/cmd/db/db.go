package db

import (
	"fmt"
	"log"

	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

func InitDB() {
	var err error
	fmt.Println("WE DOING DIGITAL OCEAN THINGS")
	DB, err = gorm.Open("mysql", "root:fixins@tcp(recipe_mysql:3306)/recipe?parseTime=true")

	if err != nil {
		log.Panic(err)
	}

	if err = DB.DB().Ping(); err != nil {
		log.Panic(err)
	}
}
