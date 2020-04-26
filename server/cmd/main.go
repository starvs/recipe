package main

import (
	"log"
	"net/http"

	"./db"
	"./handlers"

	"./migrations"
	"github.com/go-chi/chi"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	db.InitDB()

	migrations.CreateRecipe()
	migrations.CreateIngredient()
	migrations.CreateTag()

	migrations.CreateDummyRecipe()

	router := chi.NewRouter()
	router.Route("/recipes", func(r chi.Router) {
		r.Get("/", handlers.Recipes)
	})

	log.Fatal(http.ListenAndServe(":7000", router))
}
