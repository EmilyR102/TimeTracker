
import Title from "../components/Title";
import Button from "react-bootstrap/Button"

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="app_title">
        <Title />
      </div>
      <div className="btn">
        <Button href="/login" variant="light">
          Returning User
        </Button>
      </div>
      <div className="btn">
        <Button href="/signup" variant="light">
          New User
        </Button>
      </div>
    </div>
  );
}
