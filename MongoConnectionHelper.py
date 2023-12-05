import pymongo

from urllib.parse import quote
from pymongo.server_api import ServerApi

def connect_to_mongodb():
    uri = "mongodb+srv://sxa86400:Riteesh1234@cluster0.u0ifmyj.mongodb.net/" # "mongodb+srv://sxa86400:"+quote("Riteesh@1234")+"@cluster0.u0ifmyj.mongodb.net/"
    client = pymongo.MongoClient(uri, server_api=ServerApi('1'))

    try:
        db = client.Amtrak
        return db
    except Exception as e:
        print(e)






