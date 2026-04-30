import "./Login.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <img src={images.calendar} alt="calendar" />
          <h2>ConsultHub</h2>
        </div>

        <p className="auth-subtitle">Sign in to your account</p>

        <Input label="Email" placeholder="Enter your email" />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Link to="/forgot-password" className="forgot">
          Forgot password?
        </Link>

        <Button>
          <img src={images.vector} alt="" className="btn-icon" />
          Sign In
        </Button>

        <p className="register">
          Don’t have an account?{" "}
          <Link to="/register" className="link">
            Register as Student
          </Link>
        </p>

        <p className="note">
          Lecturer accounts are created by administrators
        </p>
      </div>
    </div>
  );
};

export default Login;