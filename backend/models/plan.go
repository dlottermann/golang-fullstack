package models

//Plan is gorm.Model
type Plan struct {
	ID          uint   `json:"-" gorm:"primary_key"`
	Description string `json:"description"`
	Months      int    `json:"month"`
	PlanID      uint   `json:"-"`
}
