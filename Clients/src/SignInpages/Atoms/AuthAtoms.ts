import { atom } from "recoil";
import { ITodoResponseDatas , ITodo } from "../../Todos/API/TodosApi";

export const stateSignUpAtom = atom<boolean>({
  key: "stateSignUp",
  default: false,
});

export const hastokenAtom = atom<boolean>({
  key: "token",
  default: false,
});

export const hasErrorAtom = atom<boolean>({
  key: "hasError",
  default: false,
});
