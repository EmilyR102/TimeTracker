from flask import Flask, session, render_template, request, redirect, jsonify
from flask_cors import CORS #so requests from frontend are handled correctly
import pyrebase


app = Flask(__name__)
CORS(app)

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


@app.route("/login", methods=["POST"])
def login():
    email = request.form["email"]
    password = request.form["password"]

    try:
        user = auth.sign_in_with_email_and_password(email, password)
        session["user_id"] = user["idToken"]
        return redirect('http://localhost:3000/profile')

    except Exception as e:
        print("Oh noooo! Failed with exception ", e)
        return jsonify({"error": str(e)}), 400


@app.route("/profile", methods=["GET"])
def profile():
    user_id = session.get("user_id")

    try:
        user_data = get_user_data_by_id(user_id)
        print(user_data)
        return {
            "createdAt":user_data["createdAt"],
            "emailVerified": user_data["emailVerified"]
        }
    
    except Exception as e:
        return "Profile doesn't exist!", 400

def get_user_data_by_id(user_id):
    user = auth.get_account_info(user_id)
    return user["users"][0]

if __name__ == "__main__":
    app.run(debug=True)  # since we're in dev mode

# @app.route("/signup", methods=['POST'])
# def signup():
#     email = request.form['email']
#     password = request.form['password']

#     try:
#         user = auth.create_user_with_email_and_password(email,password)
#         session["user"] = email
#         redirect("/home")
#     except Exception:
#         print("Invalid email or password. Try again!")


# In this code snippet, we used the @app.route('/') decorator to associate the index() function with the root URL '/'. When a user visits http://localhost:5000/ (assuming your Flask app is running on port 5000), Flask will automatically call the index() function, and the response 'Hello, world!' will be sent back to the client as the HTTP response.

# user = auth.sign_in_with_email_and_password(email, password)

# info = auth.get_account_info(user['idToken'])
# print(info)

# auth.send_email_verification(user['idToken'])
# auth.send_password_reset_email(email)

# user = auth.create_user_with_email_and_password(email,password)
# print(user)
