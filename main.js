

const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countLetter(row, letter) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const countFirstRow = countLetter(firstRow, letter);
    const countSecondRow = countLetter(secondRow, letter);

    if (countFirstRow > countSecondRow) {
        return firstRow;
    } else if (countSecondRow > countFirstRow) {
        return secondRow;
    } else {
        return 'Обидва ряди мають однакову кількість "' + letter + '" букв';
    }
}

document.getElementById('start').addEventListener('click', function() {
    const letter = prompt('Введіть букву для підрахунку:');
    const result = getRow(firstRow, secondRow, letter);
    alert('Рядок із більшою кількістю "' + letter + '" букв - це: ' + result);
});
