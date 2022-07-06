import { UserHelper } from "../common/user.helper";

export function LogoutLink() {
  function signOut() {
    UserHelper.signOut();
    window.location.href = "/";
  }

  return (
    <a onClick={signOut} href="#">
      Logout
    </a>
  );
}
