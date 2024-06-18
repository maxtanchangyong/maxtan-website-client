import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';

// Service
import { MobileViewService } from '../../service/mobile-view/mobile-view.service';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatIconModule, MatButtonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit, OnDestroy {

  public SKILLSETS = [
    { skillset: 'NodeJS', boxColor: '#573333ff', textColor: '#ffc08aff', svgIcon: './assets/nodejs.svg', flexDirection: 'row' },
    { skillset: 'Angular', boxColor: '#040316ff', textColor: '#ffc08aff', svgIcon: './assets/angular.svg', flexDirection: 'column' },
    { skillset: 'MySQL', boxColor: '#da6e44ff', textColor: '#040316ff', svgIcon: './assets/mysql.svg', flexDirection: 'column' },
    { skillset: 'Linux', boxColor: '#ffc08aff', textColor: '#040316ff', svgIcon: './assets/linux.svg', flexDirection: 'column' },
  ];

  public SERVICES = [
    { name: 'BrandReputationEnhancement', service: 'Brand Reputation Enhancement', description: 'Have something unique experience for your customer, have them trust in you.', svgIcon: './assets/handshake.svg' },
    { name: 'MoreIncomeLessTask', service: 'More Income, Less Task', description: 'Eliminate Repetitive Task, Focus on Your Business Core Values.', svgIcon: './assets/sales_amount.svg' },
    { name: 'ZeroInformationLag', service: 'Zero Information-Lag', description: 'You are the decision maker, all information of your business at one screen.', svgIcon: './assets/dashboard.svg' },
  ]

  // Dependency Injection
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private mobileViewService = inject(MobileViewService);

  // Variable
  private destroyed$ = new Subject<void>();
  public isMobileView: boolean = false;

  constructor() {
    this.SKILLSETS.forEach(element => {
      this.matIconRegistry.addSvgIcon(`${element.skillset}`, this.domSanitizer.bypassSecurityTrustResourceUrl(element.svgIcon));
    });
    this.SERVICES.forEach(element => {
      this.matIconRegistry.addSvgIcon(`${element.name}`, this.domSanitizer.bypassSecurityTrustResourceUrl(element.svgIcon));
    });
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/max_logo.svg'));
    this.matIconRegistry.addSvgIcon('email', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/email.svg'));
  }

  ngOnInit(): void {
    this.mobileViewService.isMobileView.pipe(takeUntil(this.destroyed$)).subscribe((result: boolean) => { this.isMobileView = result; });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
