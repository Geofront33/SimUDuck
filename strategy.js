let FlyBehavior = {
    'FlyWithWings': function (id) {
        return 'Duck ' + id + ':\n' + 'I can fly\n';
    },
    'FlyNoWay': function (id) {
        return 'Duck ' + id + ':\n' + 'I can\'t fly\n';
    }
};
let QuackBehavior = {
    'Quack': function () {
        return 'Quack!\n\n';
    },
    'Squeak': function () {
        return 'Squeak!\n\n';
    },
    'MuteQuack': function () {
        return '......\n\n';
    }
};