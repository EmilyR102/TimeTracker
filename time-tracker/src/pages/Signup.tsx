import Title from "../components/Title";
import InputUserPass from "../components/InputUserPass";
import "../App.css";

export default function Signup() {
  return (
    <div className="Signup">
      <div className="app_title">
        <Title />
      </div>
      <InputUserPass authentication={"signup"} />
    </div>
  );
}
