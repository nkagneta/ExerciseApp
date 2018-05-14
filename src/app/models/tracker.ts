export class Tracker {

    Players: User[] = [];
    Picture: {
        url: string
    };
    PlayedExercises: Exercise[] = [];
}

export class User {
    Name: string;
    MyExercises: string[];
}

export class Exercise {
    Text: string;
    PlayerId: string;
}