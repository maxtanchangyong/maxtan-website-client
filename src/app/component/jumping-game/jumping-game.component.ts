import { Component, ViewChild, ElementRef, Renderer2, inject, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-jumping-game',
  standalone: true,
  imports: [],
  templateUrl: './jumping-game.component.html',
  styleUrl: './jumping-game.component.css'
})
export class JumpingGameComponent implements AfterViewInit {
  @ViewChild('dino', { static: true }) dino!: ElementRef;
  @ViewChild('cactus', { static: true }) cactus!: ElementRef;

  private render = inject(Renderer2);

  private dinoTop: any;
  private cactusLeft: any;

  ngAfterViewInit(): void {
    this.render.listen('window', 'load', () => {
      this.dinoTop = this.dino.nativeElement.getBoundingClientRect().top;
      this.cactusLeft = this.cactus.nativeElement.getBoundingClientRect().left;
    });
  }

  jump() {
    if (this.dino.nativeElement.classList != "jump") {
      this.dino.nativeElement.classList.add("jump");
  
      setTimeout(() => {
        this.dino.nativeElement.classList.remove("jump");
      }, 300);
    }
  }

  private isAlive = setInterval(() => {
    // detect collision
    if (this.cactusLeft < 50 && this.cactusLeft > 0 && this.dinoTop >= 140) {
      // collision
      alert("Game Over!");
    }
  }, 10);
}
