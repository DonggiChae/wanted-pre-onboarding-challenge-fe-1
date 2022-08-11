import { atom } from "recoil";

export const stateSignUpAtom = atom<boolean>({
  key: "stateSignUp",
  default: false,
});

export const hastokenAtom = atom<boolean>({
  key: "token",
  default: false,
});