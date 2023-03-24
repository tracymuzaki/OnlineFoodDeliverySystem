from flask import jsonify,request,Blueprint
from backend.orders.model import Order
from backend.db import db
from datetime import datetime

# creating a blueprint for orders
orders = Blueprint('orders',__name__,url_prefix='/orders')

# endpoint to create an order
@orders.route('/create', methods=['POST'])
def create_new_order():
    quantity=request.json['quantity']
    location = request.json['location']
    user_id = request.json['user_id']
    status = request.json['status']
    food_item_id= request.json['food_item_id']


# validating the created order
    if not quantity:
        return jsonify({'error':"quantity of item required"}),400

    if not location:
        return jsonify({'error':"location required"}),400
    

# storing an order
    new_order= Order(quantity=quantity,location=location,user_id=user_id,status=status,food_item_id=food_item_id)
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'success':'You have successfully placed your order'})

#get,edit and delete food order by id
@orders.route('/order/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_order(id):
    order = Order.query.get_or_404(id)

    if request.method == 'GET':
        response = {
            "id":order.id,
            "quantity": order.quantity,
            "location":order.location,
            "status":order.status
          
        }
        return {"success": True, "order": response,"message":"Food order details retrieved"}

    elif request.method == 'PUT':
        data = request.get_json()

        if not data['quantity']:
            return jsonify({"message":"Food order quantity is required"})
    
        if not data['location']:
            return jsonify({"message":"Food order location is required"})
    
        
        order.quantity = data['quantity']
        order.location = data['location']
        order.updated_at = datetime.utcnow()
        db.session.add(order)
        db.session.commit()
        return {"message": f"{order.quantity}  Food order updated successfully"}

    elif request.method == 'DELETE':
        db.session.delete(order)
        db.session.commit()
        return {"message": f"{order.quantity} Food order successfully deleted."}   
  
        
  
   





        


