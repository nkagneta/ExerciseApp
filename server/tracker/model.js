var axios = require("axios");

const QuotesStack = [
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
var iCurrentQuote = 0;



var iCurrentPicture = 0;

function Tracker() {
    this.Players = [];

    this.PlayedQuotes = [];

    this.GetQuotes = (playerId) =>{   
        if(this.Players.some(x=> x.PlayerId == playerId)){
            
        }else{
            this.Players.push({PlayerId: playerId, Name: playerId, Score: 0 });
        }
        return QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7);
    }
    
    this.FlipPicture = () => {
         this.Picture = PicturesStack[iCurrentPicture = (iCurrentPicture+1) % PicturesStack.length ];
         this.PlayedQuotes = [];
    }

    this.SubmitQuote = (text, playerId) => {
        if(playerId == this.DealerId) throw Error("Dealer can't submit a quote");
        this.PlayedQuotes.push({ Text: text, PlayerId: playerId });
    }

    this.ChooseQuote = text => {
        const chosenQuote = this.PlayedQuotes.find(x=> x.Text ==text)
        chosenQuote.Chosen = true;
        this.Players.find(x=> x.PlayerId == chosenQuote.PlayerId).Score++;
        this.DealerId = this.Players[this.Players.findIndex(x=> x.PlayerId == this.DealerId) + 1 % this.Players.length ].PlayerId;
    } 
}

module.exports = Tracker;