/*

const enterNames = document.querySelector('input[type="text"]');
const addBtn = document.querySelector('#addBtn');
const resBtn = document.querySelector('#resBtn');
const winnerBox = document.querySelector('#winnerBox');
const partBox = document.querySelector('#partBox');
const addSound = document.querySelector('#addSound');
const resSound = document.querySelector('#resSound');
const winSound = document.querySelector('#winSound');
const winText = document.querySelector('#winText');
const parText = document.querySelector('#parText');
document.getElementsByName('body').onload = myFocus();
let userNames = [];
let rand = null;

addBtn.addEventListener('click', addName);
addBtn.addEventListener('click', playAdd);
resBtn.addEventListener('click', resPage);
enterNames.addEventListener('keypress', enterName);
enterNames.addEventListener('focus', allClear);

function myFocus() {
    enterNames.focus();
}

function addName() {
    let userName = enterNames.value;
    if (userName.length > 25) {
        enterNames.style.border = '1px solid red';
        enterNames.style.color = 'red';
        enterNames.value = ' Name is too long!';
    } else if (userName === '') {
        enterNames.style.border = '1px solid red';
        enterNames.style.color = 'red';
        enterNames.value = ' Field is empty!';
    } else if (userName !== 'end' && userName !== 'End' && userName !== 'END') {
        parText.style.display = 'block';
        userNames.push(userName);
        partBox.innerHTML = userNames;
        enterNames.value = '';
        myFocus();
    } else {
        remList();
        showWinner();
        winText.style.display = 'block';
        winnerBox.innerHTML = userNames[rand];
        winnerBox.style.border = '1px solid red';
        winnerBox.style.boxShadow = '0 0 8px';
    }
}

function enterName(e) {
    if (e.keyCode === 13) {
        playAdd();
        addName();
    }
}

function showWinner() {
    playWin();
    for (let i = 0; i < userNames.length; i++) {
        rand = Math.floor(Math.random(userNames.length) * userNames.length);
        enterNames.value = '';
    }
}

function allClear() {
    this.value = '';
    this.style.border = '1px solid silver',
        this.style.color = 'black';
}

function remList() {
    addBtn.removeEventListener('click', addName);
    enterNames.removeEventListener('keypress', enterName);
}

function resPage() {
    location.reload();
}

function playAdd() {
    addSound.play();
}

function playWin() {
    winSound.play();
}

*/


// Encapsulation
(function () {
    const winnerPicker = {
        enterNames: document.querySelector('input[type="text"]'),
        addBtn: document.querySelector('#addBtn'),
        resBtn: document.querySelector('#resBtn'),
        winnerBox: document.querySelector('#winnerBox'),
        partBox: document.querySelector('#partBox'),
        addSound: document.querySelector('#addSound'),
        resSound: document.querySelector('#resSound'),
        winSound: document.querySelector('#winSound'),
        winText: document.querySelector('#winText'),
        parText: document.querySelector('#parText'),
        inputFocus: function () {
            document.getElementsByName('body').onload = this.myFocus();
        },
        userNames: [],
        rand: null,
        init: function () {
            this.addBtn.addEventListener('click', winnerPicker.addName);
            this.addBtn.addEventListener('click', this.playAdd);
            this.resBtn.addEventListener('click', this.resPage);
            this.enterNames.addEventListener('keypress', this.enterName);
            this.enterNames.addEventListener('focus', this.allClear);
        },
        myFocus: function () {
            this.enterNames.focus();
        },
        userName: this.enterNames,
        addName: function () {
            this.userName = winnerPicker.enterNames.value.trim();
            if (this.userName.length > 25) {
                this.enterNames.style.border = '1px solid red';
                this.enterNames.style.color = 'red';
                this.enterNames.value = ' Name is too long!';
            } else if (this.userName === '') {
                this.enterNames.style.border = '1px solid red';
                this.enterNames.style.color = 'red';
                this.enterNames.value = ' Field is empty!';
            } else if (this.userName !== 'end' && this.userName !== 'End' && this.userName !== 'END') {
                winnerPicker.parText.style.display = 'block';
                winnerPicker.userNames.push(this.userName);
                winnerPicker.partBox.innerHTML = winnerPicker.userNames.join(', ');
                winnerPicker.enterNames.value = '';
                winnerPicker.myFocus();
            } else {
                winnerPicker.remList();
                winnerPicker.showWinner();
                winnerPicker.winText.style.display = 'block';
                winnerPicker.winnerBox.innerHTML = winnerPicker.userNames[winnerPicker.rand];
                winnerPicker.winnerBox.style.border = '1px solid red';
                winnerPicker.winnerBox.style.boxShadow = '0 0 8px';
            }
        },
        enterName: function (e) {
            if (e.keyCode === 13) {
                winnerPicker.playAdd();
                winnerPicker.addName();
            }
        },
        showWinner: function () {
            this.playWin();
            for (let i = 0; i < this.userNames.length; i++) {
                this.rand = Math.floor(Math.random(this.userNames.length) * this.userNames.length);
                this.enterNames.value = '';
            }
        },
        allClear: function () {
            this.value = '';
            this.style.border = '1px solid silver',
                this.style.color = 'black';
        },
        remList: function () {
            this.addBtn.removeEventListener('click', this.addName);
            this.enterNames.removeEventListener('keypress', this.enterName);
        },
        resPage: function () {
            location.reload();
        },
        playAdd: function () {
            winnerPicker.addSound.play();
        },
        playWin: function () {
            winnerPicker.winSound.play();
        }
    }
    winnerPicker.inputFocus();
    winnerPicker.init();
})()