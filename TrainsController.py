from bson import ObjectId
from flask import jsonify
from MongoConnectionHelper import connect_to_mongodb
try:
    db = connect_to_mongodb()
except:
    print("unable to connect or already in running state")

def getAllTrains():
    data = list(db["Trains"].find({}))
    print(data)
    if(data is not None):
        for d in data:
            d["_id"]=str(d["_id"])
    return data if data is not None else jsonify({"Success":False,"message":"No Trains Found"})
def AddTrains(data):
    data_insert = db["Trains"].insert_one(data)
    if(data_insert):
        return "success"
    return "failure"
def UpdateTrains(data):   
    data_update = db["Trains"].update_one({"_id":ObjectId(data["_id"])},{"$set":{"name":data.get('name'),"startStation":data.get('startStation'),"destinationStation":data.get('destinationStation')}})
    if(data_update):
        return "success"
    return "failure"

def SearchTrains(data):
    
    query = {}
    if(data.get('name') is not None and data.get('name')!=''):
        query["name"]= data.get('name')
    if(data.get('startStation') is not None and data.get('startStation')!=''):
        query["startStation"]= data.get('startStation')
    if(data.get('destinationStation') is not None and data.get('destinationStation')!=''):
        query["destinationStation"]= data.get('destinationStation')
    print(data)
    print(query)
    trainDetails = list(db["Trains"].find(query))
    if(trainDetails is not None):
        for d in trainDetails:
            d["_id"]=str(d["_id"])
    return trainDetails if trainDetails is not None else jsonify({"Success":False,"message":"No Trains Found"})



    


    