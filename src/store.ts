import { browser } from "$app/environment";
import { writable } from "svelte/store";

const LOCALSTORAGE_PREFIX = "TrainingApp-";

const initialValue = browser ? JSON.parse(window.localStorage.getItem(LOCALSTORAGE_PREFIX+"exercise") || "[]") : [];

export const exercises = writable<Exercise[]>(initialValue);
exercises.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem(LOCALSTORAGE_PREFIX+"exercise", JSON.stringify(value));
    }
})