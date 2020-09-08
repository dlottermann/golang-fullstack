package models

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// DB definition is
var DB *gorm.DB

// ConnectDatabase definition is
func ConnectDatabase() {

	dsn := "root:r00t@tcp(127.0.0.1:3307)/?parseTime=True"
	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	//Create database
	database.Exec("CREATE DATABASE fullstack")
	database.Exec("USE fullstack")

	//Migrate structs
	database.AutoMigrate(&Product{}, &Plan{})

	// Initial data insert
	database.Create(&Product{Name: "Plano P", ID: 5})
	database.Create(&Plan{Description: "monthly", Months: 1, PriceRenew: "24.19", PriceOrder: "24.19", ProductID: 5})
	database.Create(&Plan{Description: "semiannually", Months: 6, PriceRenew: "128.34", PriceOrder: "128.34", ProductID: 5})
	database.Create(&Plan{Description: "biennially", Months: 24, PriceRenew: "393.36", PriceOrder: "393.36", ProductID: 5})
	database.Create(&Plan{Description: "triennially", Months: 36, PriceRenew: "561.13", PriceOrder: "561.13", ProductID: 5})
	database.Create(&Plan{Description: "quarterly", Months: 3, PriceRenew: "67.17", PriceOrder: "67.17", ProductID: 5})
	database.Create(&Plan{Description: "annually", Months: 12, PriceRenew: "220.66", PriceOrder: "220.66", ProductID: 5})

	database.Create(&Product{Name: "Plano M", ID: 6})
	database.Create(&Plan{Description: "monthly", Months: 1, PriceRenew: "29.69", PriceOrder: "29.69", ProductID: 6})
	database.Create(&Plan{Description: "semiannually", Months: 6, PriceRenew: "159.54", PriceOrder: "159.54", ProductID: 6})
	database.Create(&Plan{Description: "biennially", Months: 24, PriceRenew: "532.56", PriceOrder: "532.56", ProductID: 6})
	database.Create(&Plan{Description: "triennially", Months: 36, PriceRenew: "764.22", PriceOrder: "764.22", ProductID: 6})
	database.Create(&Plan{Description: "quarterly", Months: 3, PriceRenew: "82.77", PriceOrder: "82.77", ProductID: 6})
	database.Create(&Plan{Description: "annually", Months: 12, PriceRenew: "286.66", PriceOrder: "286.66", ProductID: 6})

	database.Create(&Product{Name: "Plano Business", ID: 7})
	database.Create(&Plan{Description: "monthly", Months: 1, PriceRenew: "44.99", PriceOrder: "44.99", ProductID: 7})
	database.Create(&Plan{Description: "semiannually", Months: 6, PriceRenew: "257.94", PriceOrder: "257.94", ProductID: 7})
	database.Create(&Plan{Description: "biennially", Months: 24, PriceRenew: "983.76", PriceOrder: "983.76", ProductID: 7})
	database.Create(&Plan{Description: "triennially", Months: 36, PriceRenew: "1439.64", PriceOrder: "1439.64", ProductID: 7})
	database.Create(&Plan{Description: "quarterly", Months: 3, PriceRenew: "131.97", PriceOrder: "131.97", ProductID: 7})
	database.Create(&Plan{Description: "annually", Months: 12, PriceRenew: "503.88", PriceOrder: "503.88", ProductID: 7})

	database.Create(&Product{Name: "Empreendedor", ID: 329})
	database.Create(&Product{Name: "Negócios", ID: 332})

	database.Create(&Product{Name: "Plano Turbo", ID: 335})
	database.Create(&Plan{Description: "monthly", Months: 1, PriceRenew: "47.24", PriceOrder: "47.24", ProductID: 335})
	database.Create(&Plan{Description: "semiannually", Months: 6, PriceRenew: "270.84", PriceOrder: "270.84", ProductID: 335})
	database.Create(&Plan{Description: "biennially", Months: 24, PriceRenew: "1032.95", PriceOrder: "1032.95", ProductID: 335})
	database.Create(&Plan{Description: "triennially", Months: 36, PriceRenew: "1511.62", PriceOrder: "1511.62", ProductID: 335})
	database.Create(&Plan{Description: "quarterly", Months: 3, PriceRenew: "138.57", PriceOrder: "138.57", ProductID: 335})
	database.Create(&Plan{Description: "annually", Months: 12, PriceRenew: "529.07", PriceOrder: "529.07", ProductID: 335})

	database.Create(&Product{Name: "Presença Digital", ID: 341})
	database.Create(&Plan{Description: "monthly", Months: 1, PriceRenew: "14.99", PriceOrder: "14.99", ProductID: 341})

	DB = database
}
