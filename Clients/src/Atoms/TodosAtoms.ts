import { atom } from "recoil";
import { ITodoResponseDatas , ITodo } from "../API/TodosApi";

export const stateTodoUpdateAtom = atom<boolean>({
  key: "stateTodoDetail",
  default: false,
});

export const todoListAtom = atom<ITodo[]>({
  key: "todoListAtom",
  default: [
    {
      title: "",
      content: "",
      id: "",
      createdAt: "",
      updatedAt: "",
    },
  ]
});