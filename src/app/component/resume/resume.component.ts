import { Component } from '@angular/core';

// External Libraries
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  public pdfSource = "./assets/resume.pdf";
}
