const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while(minesPlanted < minesAmount){
        const rowSel = parseInt(Math.random() * rows, 10)
        const colSel = parseInt(Math.random() * columns, 10)
        if(!board[rowSel][colSel].mined) {
            board[rowSel][colSel].mined = true;
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, cols, minesAmount) => {
    const board = createBoard(rows, cols);
    spreadMines(board, minesAmount);
    return board;
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const cols = [col - 1, col, col + 1]
    rows.forEach(r => {
        cols.forEach(c => {
            const diferent = r !== row | c !== col
            const validRow = r >= 0 && r < board.length
            const validCol = c >= 0 && c < board[0].length

            if(diferent && validCol && validRow){
                neighbors.push(board[r][c]);
            }
        })
    })
    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbors) => result && !neighbors.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board, row, col) => {
    const field = board[row][col]
    if(!field.opened){
        field.opened = true
        if(field.mined){
            field.exploded = true
        }else if(safeNeighborhood(board, row, col)){ 
            getNeighbors(board, row, col).forEach(n => openField(board, n.row, n.col))
        }else{
            const neighbors = getNeighbors(board, row, col)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

const fields = board => [].concat(...board);
const hasExplosion = board => fields(board).filter(field => field.exploded).length > 0
const pending = field => (field.mined && !field.flagged)||(!field.mined && !field.opened)
const wonGame = board => fields(board).filter(pending).length === 0
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)

export { 
    createMinedBoard ,
    cloneBoard,
    openField,
    hasExplosion,
    wonGame,
    showMines
}