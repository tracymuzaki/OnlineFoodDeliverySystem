from backend.db import db
from dataclasses import dataclass
from datetime import datetime

@dataclass
class FoodItem(db.Model):
  __tablename__ = 'food_items'

  name:str
  price:int
  price_unit:str
  image:str
  stock:int
  category_id:int

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100),unique=True)
  price = db.Column(db.String(255))  
  price_unit = db.Column(db.String(10),default='UGX')
  image = db.Column(db.String(200))
  stock = db.Column(db.Integer)
  category_id = db.Column(db.Integer,db.ForeignKey('categories.id'))
  created_by  = db.Column(db.Integer,db.ForeignKey('users.id'))
  orders = db.Relationship("Order",backref="fooditem")
  created_at = db.Column(db.String(255),nullable=True, default =datetime.now())
  updated_at = db.Column(db.String(255),nullable=True, onupdate=datetime.now())
  
  


  def __init__(self, name,image,price,price_unit,category_id,stock,created_by,created_at,updated_at):
   self.name = name
   self.image = image
   self.price = price
   self.price_unit = price_unit
   self.category_id = category_id
   self.stock = stock
   self.created_by = created_by
   self.created_at = created_at
   self.updated_at =updated_at

  

  def __repr__(self):
        return f"<FoodItem {self.name} >"
  

        
