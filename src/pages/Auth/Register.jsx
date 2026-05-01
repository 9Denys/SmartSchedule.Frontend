import "./Login.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <img src={images.calendar} alt="calendar" />
          <h2>SmartSchedule</h2>
        </div>

        <h3 className="auth-title">Create Student Account</h3>

        <p className="auth-description">
          Register as a student to book consultations with lectures 
        </p>

        <Input label="Full Name" placeholder="Enter your full name" />
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" type="password" placeholder="Enter your password" />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />

        <Button>
          <img src={images.register} alt="" className="btn-icon" />
          Register
        </Button>

        <p className="register">
          Already have an account?{" "}
          <Link to="/" className="link">
            Sign In
          </Link>
        </p>

        <div className="auth-divider" />

        <p className="note">
          Lecturer accounts are created by administrators only
        </p>
      </div>
    </div>
  );
};

export default Register;