import { atom } from "recoil";

export const stateSignUpAtom = atom<boolean>({
  key: "stateSignUp",
  default: false,
});
