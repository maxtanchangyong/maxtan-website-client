import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';

// Service
import { MobileViewService } from './service/mobile-view/mobile-view.service';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

// CDK
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, LayoutModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'maxtan-website-client';

  // Dependency Injection
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private responsive = inject(BreakpointObserver);
  private mobileViewService = inject(MobileViewService);

  // Variable
  private destroyed$ = new Subject<void>();
  public isMobileView: boolean = false;

  constructor() {
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('~/assets/max_logo.svg'));
  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.Handset).pipe(takeUntil(this.destroyed$)).subscribe((result) => {
      result.matches ? this.mobileViewService.setMobileView() : this.mobileViewService.setDesktopView();
    });
    this.mobileViewService.isMobileView.pipe(takeUntil(this.destroyed$)).subscribe((result: boolean) => { this.isMobileView = result; });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(); // trigger the unsubscribe
    this.destroyed$.complete(); // finalize & clean up the subject stream
  }
}
