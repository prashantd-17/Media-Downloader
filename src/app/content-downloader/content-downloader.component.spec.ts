import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDownloaderComponent } from './content-downloader.component';

describe('ContentDownloaderComponent', () => {
  let component: ContentDownloaderComponent;
  let fixture: ComponentFixture<ContentDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDownloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
