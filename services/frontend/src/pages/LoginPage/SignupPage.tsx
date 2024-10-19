import { useState } from "react";
import SignForm from "./SignForm";
import { TextField, Button, Typography, Link } from "@mui/material";
import styles from "./LoginPage.module.scss";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userData = { email, username, password, confirmPassword };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.table(userData);
  };

  return (
    <div>
      <SignForm onSubmit={onSubmit} title="Create Account">
        <TextField
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          type="text"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          type="password"
          label="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <Button variant="contained" type="submit">
          Signup
        </Button>
      </SignForm>

      <Typography className={styles.formFooter} variant="body1">
        Already have an account? <Link href="/signup">Login!</Link>
      </Typography>
    </div>
  );
}
