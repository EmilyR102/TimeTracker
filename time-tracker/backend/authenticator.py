
import pyrebase

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

email = 'test@gmail.com'
password = '123456'

user = auth.create_user_with_email_and_password(email,password)
print(user)



# // Import the functions you need from the SDKs you need
# import { initializeApp } from "firebase/app";
# import { getAnalytics } from "firebase/analytics";
# // TODO: Add SDKs for Firebase products that you want to use
# // https://firebase.google.com/docs/web/setup#available-libraries

# // Your web app's Firebase configuration
# // For Firebase JS SDK v7.20.0 and later, measurementId is optional
# const firebaseConfig = {
#   apiKey: "AIzaSyCWHeXSR1nre9xnmj-qrSg6B_FASivgWF4",
#   authDomain: "timetracker-6382d.firebaseapp.com",
#   projectId: "timetracker-6382d",
#   storageBucket: "timetracker-6382d.appspot.com",
#   messagingSenderId: "549388351380",
#   appId: "1:549388351380:web:6c5e1c2dafe60146f70181",
#   measurementId: "G-V8PSYX6468"
# };

# // Initialize Firebase
# const app = initializeApp(firebaseConfig);
# const analytics = getAnalytics(app);