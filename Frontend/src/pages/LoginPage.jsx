import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ! use useActions from React_v19

  const handleLogin = (values) => {
    setLoading(true);
    setTimeout(() => {
      // Mock API response
      const mockUser = { id: 1, name: "Test User", email: values.email };
      const mockToken = "mock-jwt-token-123";

      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
      navigate("/games");
    }, 1000);
  };

  return (
    <Card title="Login" style={{ width: 400, margin: "100px auto" }}>
      <Form layout="vertical" onFinish={handleLogin}>
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
            Login
          </Button>
        </Form.Item>
        <Link to="/register">
          <p>Don't have an account? Register here.</p>
        </Link>
      </Form>
    </Card>
  );
};

export default LoginPage;
