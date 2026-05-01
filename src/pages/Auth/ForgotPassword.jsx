import "./Login.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <img src={images.calendar} alt="calendar" />
          <h2>SmartSchedule</h2>
        </div>

        <h3 className="auth-title">Forgot your password?</h3>

        <p className="auth-description">
          Enter your email address and we'll send you instructions to reset your password
        </p>

        <Input label="Email" placeholder="Enter your email" />

        <Button>
          <img src={images.mail} alt="" className="btn-icon" />
          Send Reset Link
        </Button>

        <p className="register">
          <Link to="/" className="link">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;