package handlers

import (
	"encoding/json"
	"net/http"

	"../db"

	"../domain"
)

func Recipes(w http.ResponseWriter, r *http.Request) {
	var recipes []domain.Recipe

	db.DB.Set("gorm:auto_preload", true).Find(&recipes)

	json, _ := json.Marshal(recipes)
	w.Write(json)

}
