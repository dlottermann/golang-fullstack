package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/dlottermann/golang-fullstack/models"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	models.ConnectDatabase()
	v1 := router.Group("/prices")
	{
		v1.GET("/", func(c *gin.Context) {

			products := []models.Product{}

			models.DB.Preload("Plans").Find(&products)

			c.JSON(http.StatusOK, gin.H{
				"products": products,
			})

		})

		v1.GET("/:ID", func(c *gin.Context) {

			ID, _ := strconv.ParseInt(c.Params.ByName("ID"), 10, 64)

			fmt.Println(ID)

			product := []models.Product{}

			models.DB.Preload("Plans").First(&product, ID)

			c.JSON(http.StatusOK, gin.H{
				"product": product,
			})

		})
	}
	router.Run(":9090")
}
