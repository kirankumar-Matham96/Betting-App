import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ! use useActions from React_v19

  const handleRegister = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log("User Registered:", values);
      navigate("/login");
    }, 1000);
  };

  return (
    <Card title="Register" style={{ width: 400, margin: "100px auto" }}>
      <Form layout="vertical" onFinish={handleRegister}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Register
          </Button>
        </Form.Item>
        <Link to="/login">
          <p>Already have an account? Login here.</p>
        </Link>
      </Form>
    </Card>
  );
};

export default RegisterPage;
