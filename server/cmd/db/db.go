package db

import (
	"log"

	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

func InitDB() {
	var err error
	DB, err = gorm.Open("mysql", "root:fixins@tcp(localhost:3315)/recipe?parseTime=true")

	if err != nil {
		log.Panic(err)
	}

	if err = DB.DB().Ping(); err != nil {
		log.Panic(err)
	}
}
