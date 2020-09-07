package models

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// DB definition is
var DB *gorm.DB

// ConnectDatabase definition is
func ConnectDatabase() {

	dsn := "root:r00t@tcp(127.0.0.1:3307)/fullstack"
	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	database.AutoMigrate(&Product{})

	DB = database
}
