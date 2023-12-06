from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from flask import Flask, render_template, request, jsonify
import uvicorn
import LoginController
import StationsController
from MongoConnectionHelper import connect_to_mongodb
from flask_cors import CORS

# app = FastAPI()
app = Flask(__name__)
CORS(app)
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
    print("In Stations")
    stations = StationsController.getAllStations()
    print(stations)
    return stations


@app.route('/')
def root():
  return templates.TemplateResponse("index.html", {"request": request})


if __name__ == "__main__":
    #uvicorn.run("Main:app", host="127.0.0.1", port="5000",reload=False,log_level="info")
    app.run(port=5000,debug=True)
