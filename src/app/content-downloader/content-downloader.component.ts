import { Component } from '@angular/core';
import { VideoDownloaderService } from '../video-downloader.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-downloader',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './content-downloader.component.html',
  styleUrl: './content-downloader.component.css'
})
export class ContentDownloaderComponent {

  videoUrl: string = '';
  platform: string = 'youtube';
  videoInfo: any;
  instagramVideo: any;


  constructor(private http: HttpClient) {}

  fetchVideoInfo() {
    this.http.post('http://localhost:3000/api/fetch-info', {
      url: this.videoUrl,
      platform: this.platform
    }).subscribe((res: any) => {
      this.videoInfo = res;
    });
  }

  downloadVideo(downloadUrl: string) {
    window.open(downloadUrl, '_blank');
  }


  getVideoInfo() {
    const url = `http://localhost:3000/api/video-info?url=${encodeURIComponent(this.videoUrl)}&platform=${this.platform}`;
    
    this.http.get(url).subscribe((res: any) => {
      this.videoInfo = res;
      console.log('Video Info:', res);
    }, err => {
      console.error('Error fetching video info', err);
    });
  }

  // getInstagramVideo() {
  //   this.http.post('http://localhost:3000/api/instagram-video', { url: this.videoUrl }, { responseType: 'blob' })
  //     .subscribe(blob => {
  //       const downloadUrl = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = downloadUrl;
  //       a.download = 'instagram-video.mp4'; // you can dynamically name it if needed
  //       a.click();
  //       console.log(downloadUrl)
  //       window.URL.revokeObjectURL(downloadUrl); // cleanup
  //     }, error => {
  //       console.error('Download failed', error);
  //     });
  // }
 
  
  
  

  
}
