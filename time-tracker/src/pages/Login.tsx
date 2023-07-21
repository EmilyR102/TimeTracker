import Title from "../components/Title";
import InputUserPass from "../components/InputLogin";
import '../App.css'

export default function Login() {
  return (
    <div className="Login">
      <div className="app_title">
        <Title />
      </div>
      <InputUserPass />
    </div>
  );
}
