import Title from "../components/Title";
import InputUserPass from "../components/InputUserPass";
import '../App.css'

export default function Login() {
  return (
    <div className="Login">
      <div className="app_title">
        <Title />
      </div>
      <InputUserPass authentication={"login"} />
    </div>
  );
}
