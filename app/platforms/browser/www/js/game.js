class game {
    constructor() {
        this.inprogress = true;
        this.winner = null;
        this.currentTurn = game.O;
        this.movesmade = 0;
        this.squares = new Array(9).fill().map(s => new square())

        this.makemove=function(i) {
            if (this.inprogress && !this.squares[i].value) {
                this.squares[i].value = this.currentTurn
    
                this.movesmade++;
                this.checkwinner()
                this.currentTurn = (this.currentTurn == game.O) ? game.X : game.O
            }
        }
    
        this.checkwinner=function(){
            const winningcombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
            winningcombination.forEach((wc) => {
                const [a, b, c] = wc;
                const sqa = this.squares[a];
                const sqb = this.squares[b];
                const sqc = this.squares[c];
    
                if (sqa.value && sqa.value == sqb.value && sqa.value == sqc.value) {
                    this.inprogress = false
                    this.winner = sqa.value;
                    sqa.isHighlighted = sqb.isHighlighted = sqc.isHighlighted = true;
                }
            })
    
    
            if (this.movesmade === this.squares.length) {
                this.inprogress = false
            }
        }
    }
}

game.O = 'O'
game.X = 'X'