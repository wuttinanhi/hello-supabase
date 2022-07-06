import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { UserHelper } from "../common/user.helper";
import { LogoutLink } from "../user/logout-link";

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);

  async function load() {
    const loadedUser = await UserHelper.getCurrentUser();
    setUser(loadedUser);
  }

  useEffect(() => {
    load();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <h1>Account</h1>
      <p>Email: {user.email}</p>
      <br />
      <LogoutLink></LogoutLink>
    </>
  );
}
