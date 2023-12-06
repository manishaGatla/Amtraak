from flask import jsonify
from MongoConnectionHelper import connect_to_mongodb
try:
    db = connect_to_mongodb()
except:
    print("unable to connect or already in running state")

def getAllStations():
    data = db["Stations"].find({})
    return data if data is not None else jsonify({"Success":False,"message":"No Stations Found"})