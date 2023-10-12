import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { ExerciseType, type Exercise } from "./types";

const LOCALSTORAGE_PREFIX = "TrainingApp-";

const initialValue: Exercise[] = browser ? JSON.parse(window.localStorage.getItem(LOCALSTORAGE_PREFIX+"exercise") || "[]") : [];

export const exercises = writable<Exercise[]>(initialValue);

exercises.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem(LOCALSTORAGE_PREFIX+"exercise", JSON.stringify(value));
    }
});

if (initialValue.length > 0) {
    let updatedExercises = initialValue.map((exer) => {
        if (exer.type) {
            return exer;
        }else {
            exer.type = ExerciseType.Strength;
            return exer;
        }
    })
    exercises.set(updatedExercises);
}