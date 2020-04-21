package main

import (
	"log"
	"net/http"

	"./migrations"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	migrations.CreateRecipe()
	migrations.CreateIngredient()
	migrations.CreateTag()

	migrations.CreateDummyRecipe()

	log.Fatal(http.ListenAndServe(":7000", nil))
}
