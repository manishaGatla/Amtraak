from bson import ObjectId
from flask import jsonify
from MongoConnectionHelper import connect_to_mongodb
try:
    db = connect_to_mongodb()
except:
    print("unable to connect or already in running state")


def AddSchedule(data):
    data_insert = db["Schedule"].insert_one(data)
    if(data_insert):
        return "success"
    return "failure"