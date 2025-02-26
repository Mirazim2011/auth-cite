import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Alert,
} from "@mui/material";
import store from "../../store";
import { authAction } from "../../store/AuthSlice";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.get(
        "https://login-register-6f243-default-rtdb.firebaseio.com/auth.json"
      );

      if (!data) {
        setAlertMessage("Foydalanuvchi topilmadi.");
        setAlertType("error");
        return;
      }

      let users = false;
      const usersAuth = Object.values(data);

      usersAuth.forEach((user) => {
        if (user.username === username && user.password === password) {
          users = true;
        }
      });

      if (users) {
        store.dispatch(authAction.loginFn());
        setAlertMessage("Muvaffaqiyatli ro'yhatdan o'tildi!");
        setAlertType("success");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setAlertMessage("Foydalanuvchi yoki parol xato.");
        setAlertType("error");
      }
    } catch {}
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 350 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login Form
        </Typography>
        {alertMessage && (
          <Alert severity={alertType} sx={{ mb: 2 }}>
            {alertMessage}
          </Alert>
        )}
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Paper>
    </Box>
  );
}
