const [ width, height ] = process.stdout.getWindowSize();
// all project in one file <3

// Color magic
const COLOR = {
    "Reset": "\x1b[0m",
    "Bright": "\x1b[1m",
    "Dim": "\x1b[2m",
    "Underscore": "\x1b[4m",
    "Blink": "\x1b[5m",
    "Reverse": "\x1b[7m",
    "Hidden": "\x1b[8m",
    "FgBlack": "\x1b[30m",
    "FgRed": "\x1b[31m",
    "FgGreen": "\x1b[32m",
    "FgYellow": "\x1b[33m",
    "FgBlue": "\x1b[34m",
    "FgMagenta": "\x1b[35m",
    "FgCyan": "\x1b[36m",
    "FgWhite": "\x1b[37m",
    "BgBlack": "\x1b[40m",
    "BgRed": "\x1b[41m",
    "BgGreen": "\x1b[42m",
    "BgYellow": "\x1b[43m",
    "BgBlue": "\x1b[44m",
    "BgMagenta": "\x1b[45m",
    "BgCyan": "\x1b[46m",
    "BgWhite": "\x1b[47m"
};

// Black magic
const KEY = {
    UP: '\u001B\u005B\u0041',
    DONW: '\u001B\u005B\u0042',
    LEFT: '\u001B\u005B\u0044',
    RIGHT: '\u001B\u005B\u0043',
    CTRL_C: '\u0003'
};

// 
const figures = [
    [
        [' ', '█', ' '],
        ['█', '█', '█']
    ],
    [
        ['N', 'o', 'd', 'e'],
        [' ', ' ', 'J', 'S']
    ],
    [
        ['█', '█', '█', '█'],
        [' ', ' ', ' ', '█']
    ],
    [
        ['K', 'a', 'P', 'P', 'a'],
        ['<', '-', '-', '-', '>']
    ],
    [
        ['░', 'Г', 'У', 'С', 'Я', '░', '▄', '▀', '▀', '▀', '▄', '░', 'Р', 'А', 'Б', 'О', 'Т', 'Я', 'Г', 'И', '░'],
        ['▄', '█', '█', '█', '▀', '░', '◐', '░', '░', '░', '▌', '░', '░', '░', '░', '░', '░', '░', ' ', ' ',' '],
        ['░', '░', '░', '░', '▌', '░', '░', '░', '░', '░', '▐', '░', '░', '░', '░', '░', '░', '░', ' ', ' ',' '],
        ['░', '░', '░', '░', '▐', '░', '░', '░', '░', '░', '▐', '░', '░', '░', '░', '░', '░', '░', ' ', ' ',' '],
        ['░', '░', '░', '░', '▌', '░', '░', '░', '░', '░', '▐', '▄', '▄', '░', '░', '░', '░', '░', ' ', ' ',' '],
        ['░', '░', '░', '░', '▌', '░', '░', '░', '░', '▄', '▀', '▒', '▒', '▀', '▀', '▀', '▀', '▄', ' ', ' ',' '],
        ['░', '░', '░', '▐', '░', '░', '░', '░', '▐', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▀', '▀', '▄',' '],
        ['░', '░', '░', '▐', '░', '░', '░', '░', '▐', '▄', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▀'],
        ['░', '░', '░', '░', '▀', '▄', '░', '░', '░', '░', '▀', '▄', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒'],
        ['░', '░', '░', '░', '░', '░', '▀', '▄', '▄', '▄', '▄', '▄', '█', '▄', '▄', '▄', '▄', '▄', '▄', '▄', '▄'],
        ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '▌', '▌', '░', '▌', '▌', '░', '░', '░', '░', '░'],
        ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '▌', '▌', '░', '▌', '▌', '░', '░', '░', '░', '░'],
        ['░', '░', '░', '░', '░', '░', '░', '░', '░', '▄', '▄', '▌', '▌', '▄', '▌', '▌', '░', '░', '░', '░', '░']
    ],
    [
        '░░░░░░░ ▄▄▀▀▀▀▀▀▄▄░░░░░░'.split(''),
        '░░░░░▄▀░░░░░░░░░░▀▄░░░░░'.split(''),
        '░░░▄▀░░░░░░░░░░░░░░▀▄░░░'.split(''),
        '░░▄░░░░░░░░░░░░░░░░░░▄░░'.split(''),
        '░▄░░░▄▄░░░░░░░░░░▄▄░░░▄░'.split(''),
        '░░░░▌░░█░░░░░░░░▐░░█░░░░'.split(''),
        '░▌░░▀██▀░▄████▄░▒▀██░░▐░'.split(''),
        '░░░░▒▒▒▒░█▄▄▄▄█░▒▒▒▒░░░░'.split(''),
        '░▀░░▒▒░░░░░░░░░░▒▒▒░░▀░░'.split(''),
        '░░▀▄░▒░░░░░░░░░░▒▒░▄▀░░░'.split(''),
        '░░░░▀▄▒░░░░░░░░░▒ ▄▀░░░░'.split(''),
        '░░░░░░░▀▀▀▀▀▀▀▀▀░░░░░░░░'.split('')
    ],
    [
        '░░PHP!░░░░░░░░░░░░░░'.split(''),
        '░░░░▄▀▀▀▀▀█▀▄▄▄▄░░░░'.split(''),
        '░░▄▀▒▓▒▓▓▒▓▒▒▓▒▓▀▄░░'.split(''),
        '▄▀▒▒▓▒▓▒▒▓▒▓▒▓▓▒▒▓█░'.split(''),
        '█▓▒▓▒▓▒▓▓▓░░░░░░▓▓█░'.split(''),
        '█▓▓▓▓▓▒▓▒░░░░░░░░▓█░'.split(''),
        '▓▓▓▓▓▒░░░░░░░░░░░░█░'.split(''),
        '▓▓▓▓░░░░▄▄▄▄░░░▄█▄▀░'.split(''),
        '░▀▄▓░░▒▀▓▓▒▒░░█▓▒▒░░'.split(''),
        '▀▄░░░░░░░░░░░░▀▄▒▒█░'.split(''),
        '░▀░▀░░░░░▒▒▀▄▄▒▀▒▒█░'.split(''),
        '░░▀░░░░░░▒▄▄▒▄▄▄▒▒█░'.split(''),
        '░░░▀▄▄▒▒░░░░▀▀▒▒▄▀░░'.split(''),
        '░░░░░▀█▄▒▒░░░░▒▄▀░░░'.split(''),
        '░░░░░░░░▀▀█▄▄▄▄░░░░░'.split('')
    ],
    [
        '░░░░░███████ ]▄▄▄▄▄▄▄▄▃'.split(''),
        '▂▄▅█████████▅▄▃▂       '.split(''),
        'I███████████████████]  '.split(''),
        '. ◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤...   '.split('')
    ],
    [
        '░░░░░░░░▄▄▄▀▀▀▄▄███▄'.split(''),
        '░░░░░▄▀▀░░░░░░░▐░▀██▌'.split(''),
        '░░░▄▀░░░░▄▄███░▌▀▀░▀█'.split(''),
        '░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌'.split(''),
        '░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄'.split(''),
        '░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄'.split(''),
        '░░░░░░░░░░░░░▐░░░░▐███████████▄'.split(''),
        '░ЗАПУСКАЙ░░░░▐░░░░▐█████████████▄'.split(''),
        '░ТУКАНА░░░░░░░▀▄░░░▐██████████████▄'.split(''),
        '░РАБОТЯГИ░░░░░░░▀▄▄████████████████▄'.split(''),
        '░░░░░░░░░░░░░░░░░░░░░░░░█▀██████    '.split('')
    ]
];

let score = 0;

let figure = {};

let map = [];

const createEmptyRow = (symbol = 0, w = width) => {
    const row = [];
    for(let j = 0; j < w; j++) row.push(symbol);
    return row;
};

for(let i = 0; i < height; i++) {
    map[i] = createEmptyRow();
}


const setFigure = id => {
    let newFigure = figures[id].slice();
    newFigure = newFigure.map(row => row.slice());

    figure = {
        x: Math.round(width / 2),
        y: 2,
        map: newFigure,
        width: figures[id][0].length,
        height: figures[id].length
    };
};

const clear = ()=> console.log('\x1Bc');


const draw = ()=> {
    clear();

    const topText = `█%s${' '.repeat(width / 2  - 5)} Score: ${score}`;
    console.log(`${topText}${' '.repeat(width - topText.length + 2)}`, COLOR.BgCyan);
    console.log(`%s${'█'.repeat(width)}`, COLOR.BgCyan);

    for(let y = 3; y < height - 1; y++) {
        let row = '%s▓%s';

        for(let x = 0; x < width - 1; x++) {
            let symbol = ' ';

            if (x >= figure.x && x < (figure.x + figure.width)  &&  y >= figure.y && y < (figure.y + figure.height)) {
                symbol = figure.map[y - figure.y][x - figure.x] || ' ';
            }
            
            if (map[y][x]) {
                symbol = map[y][x];
            }

            row += symbol;
        }

        console.log(row,  COLOR.BgCyan,  COLOR.BgGreen);
    }
};

const rotateLeft = ()=> {
    let newMap = [];

    let maxWidth = figure.map.length;
    for(let y = 0; y < figure.map.length; y++) {
        if (maxWidth < figure.map[y].length) maxWidth = figure.map[y].length;
    }

    for(let y = 0; y <= maxWidth; y++) {
        newMap.push(createEmptyRow(' ', maxWidth))
    }
    
    figure.map.forEach((row, y) => (
        row.forEach((symbol, x) => {
            newMap[y][maxWidth - x] = figure.map[y][x];
        })
    ));

    figure.map = newMap;
};

const onKeyPress = key => {
    if (key == '1') rotateLeft();
    if (key == KEY.LEFT && figure.x > 0) figure.x--;
    if (key == KEY.RIGHT && (figure.x + figure.width + 2) <= width) figure.x++;
    if (key == KEY.DONW && figure.y + figure.height <= height - 2) {
        moveDown();
        moveDown();
    }

    draw();
};


// keys
const initEvents = ()=> {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    process.stdin.on('data', key => {
        if (key == KEY.CTRL_C) {
            console.log(`%s`,COLOR.Reset);
            process.exit();
        }
        else {
            onKeyPress(key);
        }
    });
}

const moveDown = ()=> {
    let needNewFigure = !(figure.y + figure.height <= height - 2);

    const lastRow = figure.map[figure.map.length - 1];
    lastRow.forEach((symbol, x) => {
        if (map[figure.y + figure.map.length][figure.x + x] !== 0) needNewFigure = true;
    });

    if (needNewFigure) {

        figure.map.forEach((row, y) => {
            row.forEach((symbol, x) => {
                map[figure.y + y][figure.x + x] = symbol;
            });
        });

        const newFigureID = Math.floor(Math.random() * figures.length);
        setFigure(newFigureID);
    }

    let isFullRow;

    map.some(row =>  {
        isFullRow = true;
        
        row.forEach((s, i) => {
            if (!s && i < width - 1) isFullRow = false;
        });

        return isFullRow;
    });


    if (isFullRow) {
        map.unshift(createEmptyRow());
        map = map.splice(0, map.length);
        score += 100;
    }

    if (!needNewFigure) figure.y++;
};

setFigure(0);
initEvents();
draw();

setInterval(() => {
    moveDown();
    draw();
}, 1000);