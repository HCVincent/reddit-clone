import { atom } from "recoil";

// defines the shape of the state object.
export interface AuthModalState {
    open: boolean;
    view: "login" | "signup" | "resetPassword";
}

// Defining state object that represents the initial state of the authentication modal.
const defaultModalState: AuthModalState = {
    open: false,
    view: "login"
}

// Defining an atom named `authModalState` using the `atom` function. 
// The atom represents the state of the authentication modal.
export const authModalState = atom<AuthModalState>({
    // The `key` property uniquely identifies the atom.
    key: "authModalState",
    // The `default` property is the initial state of the atom.
    default: defaultModalState
})