from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from flask import Flask, render_template, request, jsonify
import uvicorn
import LoginController
from MongoConnectionHelper import connect_to_mongodb

# app = FastAPI()
app = Flask(__name__)
templates = Jinja2Templates(directory="templates")
@app.get('/login')
def login():
    data = request.get_json()
    username = data.get('email')
    password = data.get('password')
    

    user_type = LoginController.authenticate_user(username, password)
    
    if user_type:
        return jsonify({"success": True, "user_type": user_type})
    else:
        return jsonify({"success": False, "message": "Invalid username or password"})
@app.post('/register')
def Register():

    print("...................................................................")
    print("request")
    data = request.get_json()
    print(data)
    register = LoginController.Register(data)
    if register:
        return jsonify({"Success": True})
    else:
        return jsonify({"Success":False,"message":"Unable to register! Please contact Admin"})
@app.route('/')
def root():
  return templates.TemplateResponse("index.html", {"request": request})


if __name__ == "__main__":
    #uvicorn.run("Main:app", host="127.0.0.1", port="5000",reload=False,log_level="info")
    app.run(port=5000,debug=True)
