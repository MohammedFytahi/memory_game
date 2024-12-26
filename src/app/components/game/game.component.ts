import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  sequence: string[] = [];
  userInputs: string[] = [];
  isGameOver: boolean = false;
  score: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.isGameOver = false;
    this.score = 0;
    this.sequence = this.gameService.generateSequence();
  }

  handleInput(color: string): void {
    this.userInputs.push(color);

    if (!this.gameService.isSequenceCorrect(this.userInputs, this.sequence)) {
      this.isGameOver = true;
      return;
    }

    if (this.userInputs.length === this.sequence.length) {
      this.score++;
      this.userInputs = [];
      this.sequence = this.gameService.generateNextStep(this.sequence);
    }
  }
}
