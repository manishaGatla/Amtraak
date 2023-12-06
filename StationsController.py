from flask import jsonify
from MongoConnectionHelper import connect_to_mongodb
try:
    db = connect_to_mongodb()
except:
    print("unable to connect or already in running state")

def getAllStations():
    data = list(db["Stations"].find({}))
    print(data)
    if(data is not None):
        for d in data:
            d["_id"]=str(d["_id"])
    


    return data if data is not None else jsonify({"Success":False,"message":"No Stations Found"})