class Game {
    constructor() {
        this.ducks = [];
    }
    generateOneDuck() {
        const randNum = Math.floor(Math.random()*4);
        switch (randNum) {
            case 0:
                return new MallardDuck();
            case 1:
                return new ReadHeadDuck();
            case 2:
                return new RubberDuck();
            case 3:
                return new DecoyDuck();
            default:
                return null;
        }
    }
    play() {
        if(this.ducks.length >= 10)
            clearInterval(timer);
        let temp = this.generateOneDuck();
        this.ducks.push(temp);
        temp.display();
    }
    replay() {
        $('#board').empty();
        $('#output').empty();
        this.ducks = [];
    }
}

$(window).load(function () {
    game = new Game();
    $('#restart').bind('click',()=>{
        game.replay();
        timer = setInterval('game.play()', 50);
    });
    timer = setInterval('game.play()', 50);
})