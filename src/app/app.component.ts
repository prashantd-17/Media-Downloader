import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentDownloaderComponent } from "./content-downloader/content-downloader.component";

@Component({
  selector: 'app-root',
  imports: [ContentDownloaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yt-downloader-frontend';
}
