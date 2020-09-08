package main

import (
	"net/http"

	"github.com/dlottermann/golang-fullstack/models"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	models.ConnectDatabase()
	v1 := router.Group("/api")
	{
		v1.GET("/", func(c *gin.Context) {

			products := []models.Product{}
			//models.DB.Find(&products)

			models.DB.Preload("Plans").Find(&products)

			c.JSON(http.StatusOK, gin.H{
				"products": products,
			})

		})
	}
	router.Run(":9090")
}
