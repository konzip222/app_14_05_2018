import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.component.html',
  styleUrls: ['./img-cropper.component.scss']
})
export class ImgCropperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  savedImage: any = '';
  modalDisplay = 'none';
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      this.showModal();      
  }
  imageCropped(image: string) {
      this.croppedImage = image;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }

  showModal(){
    this.modalDisplay = 'block';
  }

  hideModal(){
    this.modalDisplay = 'none';
  }

  saveImg(){
    this.savedImage = this.croppedImage;
    this.hideModal();
  }
}
