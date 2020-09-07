package models

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// DB definition is
var DB *gorm.DB

// ConnectDataBase definition is
func ConnectDataBase() {

	dsn := "root:r00t@tcp(127.0.0.1:3307)/fullstack?charset=utf8mb4&parseTime=True&loc=Local"
	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	database.AutoMigrate(&Product{})

	DB = database
}
