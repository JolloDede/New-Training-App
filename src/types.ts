
export type Workout = {
    id: string;
    name: string;
    exercises: Exercise;
}

export type Exercise = {
    id: string;
    name: string;
    repetition: number;
    type: ExerciseType;
}

export enum SetState {
    Default,
    Done,
    Failed,
}

export enum ExerciseType {
    Strength = "Strength",
    Streching = "Streching",
    Element = "Element",
}