from flask import Flask, session, render_template, request, redirect, jsonify
import pyrebase

app = Flask(__name__)

firebaseConfig = {
  'apiKey': "AIzaSyCWHeXSR1nre9xnmj-qrSg6B_FASivgWF4",
  'authDomain': "timetracker-6382d.firebaseapp.com",
  'projectId': "timetracker-6382d",
  'storageBucket': "timetracker-6382d.appspot.com",
  'messagingSenderId': "549388351380",
  'appId': "1:549388351380:web:6c5e1c2dafe60146f70181",
  'measurementId': "G-V8PSYX6468",
  'databaseURL': "",
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

app.secret_key = 'secret'



@app.route("/login")
def login():
    return {"users":["User1", "User2", "User3"]}
    # if 'user' in session:
    #     return f"Welcome {session['user']}"
    
    # if request.method == 'POST':
    #     email = request.form['email']
    #     password = request.form['password']
    #     print(email)
    #     print(password)

    #     try:
    #         user = auth.sign_in_with_email_and_password(email, password)
    #         session['user'] = email
    #         #a block of information that you can store anything in.
    #         return jsonify({"success":True, "message":"Success!"})

    #     except Exception:
    #         return jsonify({"success":False, "message":"Failed to login"})

@app.route("/signup", methods=['POST'])
def signup():
    ...

if __name__ == "__main__":
    app.run(debug=True) #since we're in dev mode
    


# In this code snippet, we used the @app.route('/') decorator to associate the index() function with the root URL '/'. When a user visits http://localhost:5000/ (assuming your Flask app is running on port 5000), Flask will automatically call the index() function, and the response 'Hello, world!' will be sent back to the client as the HTTP response.

# user = auth.sign_in_with_email_and_password(email, password)

# info = auth.get_account_info(user['idToken'])
# print(info)

# auth.send_email_verification(user['idToken'])
# auth.send_password_reset_email(email)

# user = auth.create_user_with_email_and_password(email,password)
# print(user)
