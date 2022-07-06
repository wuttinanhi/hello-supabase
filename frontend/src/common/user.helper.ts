import { Helper } from "./helper";

export class UserHelper extends Helper {
  public static async getCurrentUser() {
    return this.supabase.auth.user();
  }

  public static async signOut() {
    return this.supabase.auth.signOut();
  }
}
