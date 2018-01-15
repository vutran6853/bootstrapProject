let app = angular.module ("HangmanApp", []);
app.controller ("GameController",["$scope", function($scope){


let words = ["rat", "cat", "bat", "mat"];
$scope.incorrectLettersChosen = [];
$scope.correctLettersChosen = [];
$scope.guesses = 6;
$scope.displayWord = "";
$scope.input = {
    letter: ""
}


let selectRandomWord = function(){
    let index = Math.round(Math.random()*words.length);
    return words[index];
}

let newGame = function(){
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses = 6;
    $scope.displayWord = "";

    selectedWord = selectRandomWord();
    let tempDisplayWord = "";
    console.log(selectedWord);
    for (let i = 0; i < selectedWord.length; i++) {
        tempDisplayWord += "*";
    }
    console.log(tempDisplayWord)
    $scope.displayWord = tempDisplayWord;
}

$scope.letterChosen = function(){

    for (let i = 0; i <$scope.correctLettersChosen.length; i++) {
        if($scope.correctLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.input.letter = "";
            return;    
        }
    }

    for (let i = 0; i <$scope.correctLettersChosen.length; i++) {
        if($scope.inCorrectLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.input.letter = "";
            return;
        }
    }

}

newGame();


}])