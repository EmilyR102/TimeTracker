import pyrebase

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

email = "test@gmail.com"
password = "123456"

user = auth.sign_in_with_email_and_password(email, password)

# info = auth.get_account_info(user['idToken'])
# print(info)

# auth.send_email_verification(user['idToken'])
auth.send_password_reset_email(email)

# user = auth.create_user_with_email_and_password(email,password)
# print(user)
