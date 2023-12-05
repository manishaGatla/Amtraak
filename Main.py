from flask import Flask, render_template, request, jsonify
import LoginController
from MongoConnectionHelper import connect_to_mongodb

app = Flask(__name__)

@app.route('/login', methods=['GET'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    isAdmin  = data.get('isAdmin')

    user_type = LoginController.authenticate_user(username, password, isAdmin)
    
    if user_type:
        return jsonify({"success": True, "user_type": user_type})
    else:
        return jsonify({"success": False, "message": "Invalid username or password"})
@app.route('/register', methods=['POST'])
def Register():
    data = request.get_json()
    print(data)
    # name = data.get('name')
    # email = data.get('email')
    # password = data.get('password')
    # phoneNumber = data.get('phoneNumber')
    # dob = data.get('dob')
    # gender = data.get('gender')

    

    register = LoginController.Register(data)
    if register:
        return jsonify({"Success": True})
    else:
        return jsonify({"Success":False,"message":"Unable to register! Please contact Admin"})
@app.route('/')
def root():
  return render_template('index.html')
if __name__ == "__main__":
    app.run(port=5000,debug=True)
