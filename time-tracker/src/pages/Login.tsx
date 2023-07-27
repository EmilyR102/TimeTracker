import Title from "../components/Title";
import InputUserPass from "../components/InputUserPass";

export default function Login() {
  return (
    <div className="login">
      <div className="app_title">
        <Title />
      </div>
      <InputUserPass authentication={"login"} />
    </div>
  );
}
