package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	api := app.Group("/go/api") 

	api.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello from Golang Microservice!")
	})

	err := app.Listen(":8080")
	if err != nil {
		panic(err)
	}
}