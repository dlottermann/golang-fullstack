package models

//Item is gorm.Model
type Item struct {
	ID        uint   `json:"-" gorm:"primary_key"`
	Name      string `json:"name"`
	ProductID uint   `json:"-"`
	Plans     []Plan `json:"cycle" gorm:"foreignkey:PlanID"`
}
