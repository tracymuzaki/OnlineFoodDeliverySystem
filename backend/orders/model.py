from backend.db import db
from dataclasses import dataclass

@dataclass
class Order(db.Model):
    __tablename__ = "orders"
    id:int
    quantity:int
    location:str
    user_id:int
    food_item_id:int

    id = db.Column(db.Integer, primary_key = True)
    quantity = db.Column(db.Integer)
    location = db.Column(db.String(255),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    food_item_id = db.Column(db.Integer, db.ForeignKey('food_items.id'))
    status=db.Column(db.String(25), nullable=True)


    def __init__(self, quantity,location,user_id,food_item_id,status):
     self.quantity = quantity
     self.location = location
     self.user_id = user_id
     self.food_item_id = food_item_id
     self.status=status
     
    

    def __repr__(self):
        return f"<Order {self.user_id} >"
