class Duck {
    constructor() {
        this.id = Duck.incrementId();
        this.alive = true;
        this.flyBehavior = null;
        this.quackBehavior = null;
    }
    static incrementId() {
        if(!this.latestId)
            this.latestId = 1;
        else
            this.latestId++;
        return this.latestId;
    }
    display() {
        let addDiv = $("<div class='ducks'></div>");
        addDiv.attr('id', this.id);
        const pos = randPos();
        addDiv.css({'left': pos[0], 'top': pos[1]});
        addDiv.bind({
            mouseover: () => {
                if(this.alive){
                    this.performFly();
                    this.performQuack();
                }
            },
            click: () => {
                    if(this.alive){
                        this.died();
                        this.alive = false;
                        this.performFly();
                        this.performQuack();
                    }else {
                        addDiv.css('display', 'none');
                    }
                }
            });
        $('#board').append(addDiv);
    }
    performFly() {
        const output = $('#output');
        output.append('Duck '+this.id+':\n');
        output.append(this.flyBehavior()+'\n');
        output.scrollTop(output[0].scrollHeight);
    }
    performQuack() {
        const output = $('#output');
        output.append(this.quackBehavior()+'\n\n');
        output.scrollTop(output[0].scrollHeight);
    }
    died() {
        this.flyBehavior = FlyBehavior['FlyNoWay'];
        this.quackBehavior = QuackBehavior['MuteQuack'];
        $('#'+this.id).animate({opacity: 0.5});
        const output = $('#output');
        output.append("Boom~\n");
        output.scrollTop(output[0].scrollHeight);
    }
}

class MallardDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = FlyBehavior['FlyWithWings'];
        this.quackBehavior = QuackBehavior['Quack'];
    }
    display() {
        super.display();
        $('#'+this.id).css('background-image', 'url(\'./img/duck1.png\')');
    }
}

class ReadHeadDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = FlyBehavior['FlyWithWings'];
        this.quackBehavior = QuackBehavior['Quack'];
    }
    display() {
        super.display();
        $('#'+this.id).css('background-image', 'url(\'./img/duck2.png\')');
    }
}

class RubberDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = FlyBehavior['FlyNoWay'];
        this.quackBehavior = QuackBehavior['Squeak'];
    }
    display() {
        super.display();
        $('#'+this.id).css('background-image', 'url(\'./img/duck3.png\')');
    }
}

class DecoyDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = FlyBehavior['FlyNoWay'];
        this.quackBehavior = QuackBehavior['MuteQuack'];
    }
    display() {
        super.display();
        $('#'+this.id).css('background-image', 'url(\'./img/duck4.png\')');
    }
}

