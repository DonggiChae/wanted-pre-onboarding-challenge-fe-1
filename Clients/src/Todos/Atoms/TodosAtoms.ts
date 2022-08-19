import { atom } from "recoil";
import { ITodoResponseDatas , ITodo } from "../API/TodosApi";

export const stateTodoUpdateAtom = atom<boolean>({
  key: "stateTodoUpdate",
  default: false,
});

export const stateTodoDetailAtom = atom<string>({
  key: "stateTodoDetail",
  default: "",
});

export const stateCreateTodoAtom = atom<boolean>({
  key: "CreateTodo",
  default: false,
});

export const todoListAtom = atom<ITodo[]>({
  key: "todoListAtom",
  default: [
  ]
});