import Link from "next/link";
import RegisterForm from "../user/register-form";

export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <br />
      <Link href="/login">Login</Link>
    </>
  );
}
