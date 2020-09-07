package main

import (
	"net/http"

	"./models"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	models.ConnectDatabase()
	v1 := router.Group("/api")
	{
		v1.GET("/", func(c *gin.Context) {

			products := []models.Product{}
			models.DB.Find(&products)

			c.JSON(http.StatusOK, gin.H{
				"products": products,
			})

		})
	}
	router.Run(":9090")
}
