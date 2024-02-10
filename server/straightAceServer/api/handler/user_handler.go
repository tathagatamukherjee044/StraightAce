package handler

import (
	"StraightAceServer/internal/serverutils"
	"StraightAceServer/service"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func GetUser(c *fiber.Ctx) error {
	// return c.Status(200).JSON(fiber.Map{
	// 	"streak":  1,
	// 	"message": "Congratulation on completing your lesson",
	// })

	localClaims := c.Locals("user")
	if localClaims == false {
		return c.Status(200).JSON(fiber.Map{
			"message": "No User found",
		})
	}
	user, err := serverutils.DecodeJWT(localClaims)
	if err != nil {

		fmt.Println(err)
		return c.Status(400).JSON(fiber.Map{
			"error": "cant decode accessToken",
		})
	}
	log.Println(user.ID)

	dbUser := service.FindUserByID(user.ID.Hex())

	return c.Status(200).JSON(fiber.Map{
		"streak":  dbUser.Streak,
		"message": "Congratulation on completing your lesson",
	})
}
