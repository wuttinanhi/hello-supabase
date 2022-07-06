import Link from "next/link";
import LoginForm from "../user/login-form";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <br />
      <Link href="/register">Register</Link>
    </>
  );
}
