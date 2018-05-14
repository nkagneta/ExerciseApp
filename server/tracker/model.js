const ExercisesStack = [
        "Deadlift",
        "Bench",
        "Squat",
        "Run",
        "Bicep Curl",
        "Tricep Extension",
        "Jog",
        "Jumping Jacks",
        "Sit-up",
        "Pull-up",
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