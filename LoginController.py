from MongoConnectionHelper import connect_to_mongodb
try:
    db = connect_to_mongodb()
except:
    print("unable to connect or already in running state")

def authenticate_user(username, password, isAdmin):
    
    if db is not None:
        admin_collection = db["Admins"]
        passenger_collection = db["Passengers"]

        if(isAdmin):
            if(admin_collection.find_one({"username": username, "password": password})):
                return "admin"
        else:
            if(passenger_collection.find_one({"username": username, "password": password})):
                return "passenger"

    return None
def Register(data):
    customers_collection  = db["Customers"]

    data_insert = customers_collection.insert_one(data.get('name'),data.get('email'),data.get('phoneNumber'),data.get('password'),data.get('Password'),data.get('dob'),data.get('gender'))
    if(data_insert):
        return "success"
    return None

