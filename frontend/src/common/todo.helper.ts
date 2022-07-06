import { UserHelper } from "./user.helper";

export interface ITodo {
  id: number;
  name: string;
  userid: string;
}

export class TodoHelper extends UserHelper {
  public static async getTodos() {
    const userId = await this.getUserId();

    let { data: todos, error } = await this.supabase
      .from("todos")
      .select("*")
      .eq("userid", userId);

    if (error) throw error;

    return todos as ITodo[];
  }

  public static async addTodo(name: string) {
    const userId = await this.getUserId();

    const { data, error } = await this.supabase
      .from("todos")
      .insert([{ name: name, userid: userId }]);

    if (error) throw error;

    return data[0] as ITodo;
  }

  public static async removeTodo(id: any) {
    const { error } = await this.supabase.from("todos").delete().eq("id", id);
    if (error) throw error;
  }

  public static async editTodo(id: any, newName: string) {
    const { data, error } = await this.supabase
      .from("todos")
      .update({ name: newName })
      .eq("id", id);

    if (error) throw error;

    return data[0] as ITodo;
  }
}
