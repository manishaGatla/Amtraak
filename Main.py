from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from flask import Flask, render_template, request, jsonify
import uvicorn
import LoginController
import StationsController
import TrainsController
from MongoConnectionHelper import connect_to_mongodb
from flask_cors import CORS

# app = FastAPI()
app = Flask(__name__)
CORS(app,resources={r"/*": {"origins": "*"}})
# origins = [
#     "http://localhost.tiangolo.com",
#     "https://localhost.tiangolo.com",
#     "http://localhost",
#     "http://localhost:4200",
#     "http://localhost:8080",
# ]
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
templates = Jinja2Templates(directory="templates")
@app.get('/getAllDetails/<string:email>')
def login(email):
    #data = request.get_json()
    
    user_type = LoginController.getAllUsersByEmail(email)
    
    return user_type
@app.post('/register')
def Register():
    print("request")
    data = request.get_json()
    print(data)
    register = LoginController.Register(data)
    if register:
        return jsonify({"Success": True})
    else:
        return jsonify({"Success":False,"message":"Unable to register! Please contact Admin"})
@app.get('/getAllStations')
def getAllStations():
    stations = StationsController.getAllStations()
    return stations
@app.post('/updateStation')
def updateStations():
    data = request.get_json()
    stations = StationsController.UpdateStations(data)
    return jsonify({"Success": True}) if stations else jsonify({"Success": False})
@app.post('/addStation')
def addStations():
    data = request.get_json()
    
    stations = StationsController.AddStations(data)
    return jsonify({"Success": True}) if stations else jsonify({"Success": False})

@app.get('/getAllTrains')
def getAllTrains():
    trains = TrainsController.getAllTrains()
    return trains
@app.post('/updateTrain')
def updateTrains():
    data = request.get_json()
    trains = TrainsController.UpdateTrains(data)
    return jsonify({"Success": True}) if trains else jsonify({"Success": False})
@app.post('/addTrain')
def addTrains():
    data = request.get_json()   
    trains = TrainsController.AddTrains(data)
    return jsonify({"Success": True}) if trains else jsonify({"Success": False})
@app.post('/searchTrain')
def SearchTrains():
    data = request.get_json()   
    trains = TrainsController.SearchTrains(data)
    return trains if not None else jsonify({"message":"Not Found"}) 
@app.post('/addSchedule')
def addSchedule():
    data = request.get_json()   
    trains = TrainsController.AddSchedule(data)
    return jsonify({"Success": True}) if trains else jsonify({"Success": False})


@app.route('/')
def root():
  return templates.TemplateResponse("index.html", {"request": request})


if __name__ == "__main__":
    #uvicorn.run("Main:app", host="127.0.0.1", port="5000",reload=False,log_level="info")
    app.run(port=5000,debug=True)
