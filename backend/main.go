package main
git commit -m 'feat: Add backend initial config and models/migrations'
import (
	"github.com/dlottermann/golang-fullstack/backend/models"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	models.ConnectDatabase()
	// v1 := router.Group("/api")
	// {
	// 	v1.GET("/", func(c *gin.Context) {

	// 		var users []User

	// 		results, err := db.Query("SELECT user_name,user_email FROM users")
	// 		if err != nil {
	// 			panic(err.Error())
	// 		}

	// 		for results.Next() {
	// 			var user User
	// 			err = results.Scan(&user.Name, &user.Email)
	// 			if err != nil {
	// 				panic(err.Error())
	// 			}
	// 			users = append(users, user)
	// 		}

	// 		c.JSON(http.StatusOK, gin.H{
	// 			"result": users,
	// 		})

	// 	})
	// }
	router.Run(":9090")
}
