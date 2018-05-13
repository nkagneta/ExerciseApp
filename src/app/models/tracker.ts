export class Tracker {

    Players: User[] = [];
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [];
}

export class User {
    Name: string;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerId: string;
    Chosen: boolean = false;
}