<script lang="ts">
	import { ExerciseType } from "../types";

    export let SelectedType: ExerciseType;
</script>

<select bind:value={SelectedType} class="text-sapphire-700 p-2 rounded-lg">
    <!-- Enums Suck in Typescript -->
    <option value={ExerciseType.Strength}>
        {ExerciseType.Strength}
    </option>
    <option value={ExerciseType.Streching}>
        {ExerciseType.Streching}
    </option>
    <option value={ExerciseType.Element}>
        {ExerciseType.Element}
    </option>
</select>
