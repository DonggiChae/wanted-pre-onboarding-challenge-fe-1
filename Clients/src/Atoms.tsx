import { atom } from "recoil";
import { ITodoResponseDatas , ITodo } from "./API/TodosApi";

export const stateSignUpAtom = atom<boolean>({
  key: "stateSignUp",
  default: false,
});

export const hastokenAtom = atom<boolean>({
  key: "token",
  default: false,
});

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