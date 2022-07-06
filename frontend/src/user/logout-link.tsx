import { UserHelper } from "../common/user.helper";

export function LogoutLink() {
  function signOut() {
    UserHelper.signOut();
    window.location.href = "/";
  }

  return (
    <button onClick={signOut} type="button">
      Logout
    </button>
  );
}
