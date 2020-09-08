package models

//Plan is gorm.Model
type Plan struct {
	ID          uint   `json:"-" gorm:"primary_key"`
	Description string `json:"description"`
	Months      int    `json:"months"`
	PriceRenew  string `json:"priceRenew"`
	PriceOrder  string `json:"priceOrder"`
	ProductID   uint   `json:"-"`
}
