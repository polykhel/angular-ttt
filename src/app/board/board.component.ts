import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  moveCount: number;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.moveCount = 0;
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  makeMove(idx: number): void {
    if (!this.winner) {
      if (!this.squares[idx]) {
        this.moveCount++;
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }

      this.winner = this.calculateWinner();
    }
  }

  calculateWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

}
