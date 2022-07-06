import { Helper } from "./helper";

export class UserHelper extends Helper {
  public static async getCurrentUser() {
    return this.supabase.auth.user();
  }

  protected static async getUserId() {
    const userData = await this.getCurrentUser();
    const userId = userData?.id;
    return userId;
  }

  public static async signOut() {
    return this.supabase.auth.signOut();
  }
}
