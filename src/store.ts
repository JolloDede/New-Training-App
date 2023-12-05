import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { ExerciseType, type Exercise, type Workout } from "./types";

const LOCALSTORAGE_PREFIX = "TrainingApp-";

// Exercises
const initialValueExercise: Exercise[] = browser ? JSON.parse(window.localStorage.getItem(LOCALSTORAGE_PREFIX + "exercise") || "[]") : [];

export const exercises = writable<Exercise[]>(initialValueExercise);

exercises.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem(LOCALSTORAGE_PREFIX + "exercise", JSON.stringify(value));
    }
});

if (initialValueExercise.length > 0) {
    let updatedExercises = initialValueExercise.map((exer) => {
        if (exer.type) {
            return exer;
        } else {
            exer.type = ExerciseType.Strength;
            return exer;
        }
    })
    exercises.set(updatedExercises);
}

// Workout
const initialValueWorkout: Workout[] = browser ? JSON.parse(window.localStorage.getItem(LOCALSTORAGE_PREFIX + "workout") || "[]") : [];

export const workouts = writable<Workout[]>(initialValueWorkout);

workouts.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem(LOCALSTORAGE_PREFIX + "workout", JSON.stringify(value));
    }
});

if (initialValueWorkout.length > 0) {
    // let updatedExercises = initialValueWorkout.map((exer) => {
    //     if (exer.type) {
    //         return exer;
    //     } else {
    //         exer.type = ExerciseType.Strength;
    //         return exer;
    //     }
    // })
    // workouts.set(updatedExercises);
    workouts.set(initialValueWorkout);
}