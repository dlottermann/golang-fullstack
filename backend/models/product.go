package models

//Product is gorm.Model
type Product struct {
	ID   uint   `json:"id" gorm:"primary_key"`
	Name string `json:"name"`
}
