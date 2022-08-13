import { atom } from "recoil";
import { ResponseDatas, Todo } from "./API/TodosApi";

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

export const todoListAtom = atom<Todo[]>({
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