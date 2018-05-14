const ExercisesStack = [
        "Deadlift 45 lbs",
        "Deadlift 90 lbs",
        "Deadlift 135 lbs",
        "Deadlift 180 lbs",
        "Deadlift over 180 lbs",
        "Bench 45 lbs",
        "Bench 90 lbs",
        "Bench 135 lbs",
        "Bench 180 lbs",
        "Bench over 180 lbs",
        "Squat 45 lbs",
        "Squat 90 lbs",
        "Squat 135 lbs",
        "Squat 180 lbs",
        "Squat over 180 lbs",
        "Jog for 10 minutes",
        "Bicep Curl (10 reps)",
        "Tricep Extension (10 reps)",
        "Jumping Jacks (set of 20)",
        "Sit-ups (10 reps)",
        "Pull-up (3 reps)",
];
var iCurrentExercise = 0;

var iCurrentPicture = 0;

function Tracker() {
    this.Players = [];

    this.PlayedExercises = [];

    this.GetExercises = (playerId) =>{   
        if(this.Players.some(x=> x.PlayerId == playerId)){
            
        }else{
            this.Players.push({PlayerId: playerId, Name: playerId });
        }
        return ExercisesStack;
    }

    this.SubmitExercise = (text, playerId) => {
        this.PlayedExercises.push({ Text: text, PlayerId: playerId });
    }

}

module.exports = Tracker;