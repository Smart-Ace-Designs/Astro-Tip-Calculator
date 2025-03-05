import { atom } from "nanostores";

export const activeTip = atom<string>("15");
export const customTip = atom<string>("");
export const standardTip = atom<string>("15");
export const tip = atom<string>("15");

export const bill = atom<string>("");
export const party = atom<string>("");
