import { browser } from "$app/environment";
import { derived, writable } from "svelte/store";
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

// export const elementExercises = derived(exercises, ($exercises) => $exercises.filter((exer) => exer.type == ExerciseType.Element));
// export const strengthExercises = derived(exercises, ($exercises) => $exercises.filter((exer) => exer.type == ExerciseType.Strength));
// export const stretchExercises = derived(exercises, ($exercises) => $exercises.filter((exer) => exer.type == ExerciseType.Streching)); 