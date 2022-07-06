import { SupabaseClient } from "@supabase/supabase-js";

export class Helper {
  protected static supabase: SupabaseClient;

  public static setClient(client: SupabaseClient) {
    this.supabase = client;
  }
}
