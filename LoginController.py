from MongoConnectionHelper import connect_to_mongodb
try:
    db = connect_to_mongodb()
except:
    print("unable to connect or already in running state")

def authenticate_user(email, password):
    
    if db is not None:
        admin_collection = db["Admins"]
        passenger_collection = db["Customers"]

        
        valid = admin_collection.find_one({"username": email, "password": password})
        
        
    
        if(passenger_collection.find_one({"username": email, "password": password})):
            return "passenger"

    return None
def Register(data):
    customers_collection  = db["Customers"]

    data_insert = customers_collection.insert_one(data)
    if(data_insert):
        return "success"
    return None

