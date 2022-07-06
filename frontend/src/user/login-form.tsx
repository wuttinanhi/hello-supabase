import { useState } from "react";
import { supabase } from "../supabase-client";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin() {
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      window.location.href = "/account";
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <h1>Login Form</h1>
      <h3 style={{ color: "red" }}>{errorMessage}</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email:</label>
        <br />

        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
