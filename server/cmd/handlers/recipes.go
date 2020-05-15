package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"../db"

	"../domain"
)

func GetRecipes(w http.ResponseWriter, r *http.Request) {
	var recipes []domain.Recipe

	db.DB.Set("gorm:auto_preload", true).Find(&recipes)

	json, _ := json.Marshal(recipes)
	w.Write(json)

}

func AddRecipe(w http.ResponseWriter, r *http.Request) {
	var recipe domain.Recipe

	err := json.NewDecoder(r.Body).Decode(&recipe)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	db.DB.Create(&recipe)

	fmt.Fprintf(w, "added receipe %s with %s", recipe.Name, recipe.ID)
}
