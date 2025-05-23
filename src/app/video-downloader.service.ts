import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDownloaderService {

  // private serverUrl = 'https://youtube-video-downloader-rgg5.onrender.com/youtube/thumbnail';
  // private videoUrl = 'https://youtube-video-downloader-rgg5.onrender.com/youtube/download';
  // private backendUrl = 'https://youtube-video-downloader-rgg5.onrender.com';
  private apiKey = 'AIzaSyAZ1H37-neG-t57d4XOgdIRcgRIJ4piQ-8';
  // AIzaSyCSMlaBDsEFzqzLHwHKJidr5hROh4UQOfY  -- My Key

  private serverUrl = 'http://localhost:3001/youtube/thumbnail';
  private videoUrl = 'http://localhost:3001/youtube/download';
  private backendUrl = 'http://localhost:3001';
  constructor(private http: HttpClient) {}
 
  getVideoDetails(videoId: string): Observable<any> {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${this.apiKey}&part=snippet,contentDetails`;
    return this.http.get(apiUrl);
 }

 getDownloadUrl(videoId: string, quality: string): any {
  return `${this.videoUrl}?videoId=${videoId}&quality=${quality}`;
}

  downloadThumbnail(videoId: string): Observable<{ [quality: string]: string }> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('videoId', videoId);

    return this.http.get<{ [quality: string]: string }>(this.serverUrl, { headers, params });
  }

  downloadImage(videoId: string, quality: string): Observable<Blob> {
    const downloadUrl = `https://youtube-video-downloader-rgg5.onrender.com/youtube/thumbnail?videoId=${videoId}&quality=${quality}`;
    return this.http.get(downloadUrl, { responseType: 'blob' });
  }
  getAvailableVideoFormats(videoId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/youtube/video-formats?videoId=${videoId}`);
  }
}
