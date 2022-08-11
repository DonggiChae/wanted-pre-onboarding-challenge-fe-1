import { atom } from "recoil";

export const isTodoDetailAtom = atom<boolean>({
  key: "isTodoDetail",
  default: false,
});
