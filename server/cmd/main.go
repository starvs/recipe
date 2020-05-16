package main

import (
	"log"
	"net/http"

	"./db"
	"./handlers"

	"./migrations"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
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
	migrations.CreateRecipeIngredient()
	migrations.CreateTag()

	migrations.CreateDummyRecipe()

	router := chi.NewRouter()

	router.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://localhost:8080"}, // Use this to allow specific origin hosts
		// AllowedOrigins: []string{"*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	router.Route("/recipes", func(r chi.Router) {
		r.Get("/", handlers.GetRecipes)
		r.Post("/add", handlers.AddRecipe)
	})

	log.Fatal(http.ListenAndServe(":7000", router))
}
