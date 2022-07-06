import { useState } from "react";
import { supabase } from "../supabase-client";

export default function UserDisplay() {
  const [user, setUser] = useState<any>(null);

  supabase.auth.onAuthStateChange((e, session) => {
    if (session) {
      console.log(session);
      setUser(session.user);
    } else {
      setUser(null);
    }
  });

  return <p>{JSON.stringify(user)}</p>;
}
