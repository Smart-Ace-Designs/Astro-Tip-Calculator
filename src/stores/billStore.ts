import { atom } from "nanostores";

export const tipPerPerson = atom<string>("0.00");

export const getTipPerPerson = (): string => {
  return tipPerPerson.get();
};

export const subscribeToTipPerPerson = (callback: (value: string) => void) => {
  return tipPerPerson.subscribe(callback);
};

export const totalPerPerson = atom<string>("0.00");

export const getTotalPerPerson = (): string => {
  return totalPerPerson.get();
};

export const subscribeToTotalPerPerson = (
  callback: (value: string) => void,
) => {
  return totalPerPerson.subscribe(callback);
};
