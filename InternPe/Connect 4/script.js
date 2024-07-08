// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById('gameBoard');
    const resetButton = document.getElementById('resetButton');
    const columns = 7;
    const rows = 6;
    const board = [];
    let currentPlayer = 'Red';
    let gameActive = true;

    // Initialize the game board
    for (let row = 0; row < rows; row++) {
        board[row] = [];
        for (let col = 0; col < columns; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => handleCellClick(row, col));
            gameBoard.appendChild(cell);
            board[row][col] = null;
        }
    }

    // Handle cell click
    function handleCellClick(row, col) {
        if (!gameActive) return;

        // Find the lowest empty cell in the column
        for (let r = rows - 1; r >= 0; r--) {
            if (!board[r][col]) {
                board[r][col] = currentPlayer;
                const cell = document.querySelector(`[data-row='${r}'][data-col='${col}']`);
                cell.classList.add(currentPlayer);

                if (checkWin(r, col)) {
                    gameActive = false;
                    setTimeout(() => alert(`${currentPlayer} Wins!`), 100);
                } else if (board.flat().every(cell => cell)) {
                    gameActive = false;
                    setTimeout(() => alert("It's a draw!"), 100);
                } else {
                    currentPlayer = currentPlayer === 'Red' ? 'Yellow' : 'Red';
                }
                break;
            }
        }
    }

    // Check for win
    function checkWin(row, col) {
        return (
            checkDirection(row, col, 1, 0) || // Horizontal
            checkDirection(row, col, 0, 1) || // Vertical
            checkDirection(row, col, 1, 1) || // Diagonal /
            checkDirection(row, col, 1, -1)   // Diagonal \
        );
    }

    // Check direction for win
    function checkDirection(row, col, rowDir, colDir) {
        let count = 0;
        for (let i = -3; i <= 3; i++) {
            const r = row + i * rowDir;
            const c = col + i * colDir;
            if (r >= 0 && r < rows && c >= 0 && c < columns && board[r][c] === currentPlayer) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }
        return false;
    }

    // Reset game
    resetButton.addEventListener('click', () => {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                board[row][col] = null;
                const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
                cell.classList.remove('Red', 'Yellow');
            }
        }
        currentPlayer = 'Red';
        gameActive = true;
    });
});

