const weapons = ['candlestick', 'lead pipe', 'revolver', 'knife', 'M-16'];

const makeBroken = weapons.map(item => {
    return `broken ${item}`;
});

console.log(makeBroken);
