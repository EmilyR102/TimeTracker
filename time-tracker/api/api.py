from flask import Flask, session, request, redirect, jsonify
import pyrebase

app = Flask(__name__)

firebaseConfig = {
    "apiKey": "AIzaSyCWHeXSR1nre9xnmj-qrSg6B_FASivgWF4",
    "authDomain": "timetracker-6382d.firebaseapp.com",
    "projectId": "timetracker-6382d",
    "storageBucket": "timetracker-6382d.appspot.com",
    "messagingSenderId": "549388351380",
    "appId": "1:549388351380:web:6c5e1c2dafe60146f70181",
    "measurementId": "G-V8PSYX6468",
    "databaseURL": "",
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

app.secret_key = "secret"

@app.route("/signup", methods=['POST'])
def signup():
    """
    Create user. Return a redirect response with profile url
    """
    print("----------------SIGNUP----------------")
    email = request.form['email']
    password = request.form['password']

    try:
        user = auth.create_user_with_email_and_password(email,password)
        session["user_id"] = user["idToken"] #session needs cookies
        print("Redirecting to profile page...")
        return redirect('http://localhost:5000/profile')
    except Exception as e:
        print("----------------SIGNUP ERROR----------------")
        print("Invalid email or password. Try again!", e)
        return jsonify({"error": str(e)}), 400

@app.route("/login", methods=["POST"])
def login():
    """
    Signin user. Return a redirect response with profile url
    """
    print("----------------LOGIN----------------")
    email = request.form["email"]
    password = request.form["password"]

    try:
        user = auth.sign_in_with_email_and_password(email, password)
        session["user_id"] = user["idToken"]
        print("Redirecting to profile page...")
        return redirect('http://localhost:5000/profile')
    except Exception as e:
        print("----------------LOGIN ERROR----------------")
        print("Invalid email or password. Try again!", e)
        return jsonify({"error": str(e)}), 400

@app.route("/profile", methods=["GET"])
def profile():
    """
    Return user data
    """
    print("----------------PROFILE----------------")
    user_id = session.get("user_id")
    print("The user id is:\n", user_id)
    try:
        user_data = _get_user_data_by_id(user_id)
        print("Here is the user data:\n", user_data)
        return {
            "createdAt":user_data["createdAt"],
            "emailVerified": user_data["emailVerified"]
        }
    
    except Exception as e:
        print("----------------PROFILE ERROR----------------")
        print("Profile doesn't exist!")
        return jsonify({"error":str(e)}), 400

#Helpers
def _get_user_data_by_id(user_id):
    """
    Helper to return user data
    """
    user = auth.get_account_info(user_id)
    return user["users"][0]

if __name__ == "__main__":
    app.run()


# In this code snippet, we used the @app.route('/') decorator to associate the index() function with the root URL '/'. When a user visits http://localhost:5000/ (assuming your Flask app is running on port 5000), Flask will automatically call the index() function, and the response 'Hello, world!' will be sent back to the client as the HTTP response.

# user = auth.sign_in_with_email_and_password(email, password)

# info = auth.get_account_info(user['idToken'])
# print(info)

# auth.send_email_verification(user['idToken'])
# auth.send_password_reset_email(email)

# user = auth.create_user_with_email_and_password(email,password)
# print(user)


###### CORS ######
# from flask_cors import CORS

# CORS is required when you have a frontend application running on a different origin (domain, protocol, or port) than your backend API, and you want the frontend to make requests to the API. 

# CORS(app, supports_credentials=True, resources={r"*": {"origins": "http://localhost:3000"}})
#supports_credentials=True enables cookies between both ports