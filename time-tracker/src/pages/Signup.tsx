import Title from "../components/Title";
import InputUserPass from "../components/InputUserPass";

export default function Signup() {
  return (
    <div className="signup">
      <div className="app_title">
        <Title />
      </div>
      <InputUserPass authentication={"signup"} />
    </div>
  );
}
