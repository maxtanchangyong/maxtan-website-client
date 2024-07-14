import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingGameComponent } from './jumping-game.component';

describe('JumpingGameComponent', () => {
  let component: JumpingGameComponent;
  let fixture: ComponentFixture<JumpingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumpingGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JumpingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
