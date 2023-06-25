import { Component } from '@angular/core';
import { userProfilePhoto } from '../models/userProfilePhoto';
import { UploadService } from '../services/upload.service';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {

  constructor(private uploadSer: UploadService) { }

  public upload(event: any) {

    if (event.target.files && event.target.files[0]) {


      const formdata = new FormData();
      formdata.append('photo', event.target.files[0]);
      console.log(formdata.get('photo'));
      const modelImage = new userProfilePhoto(formdata, 'PhotoName', 'UserProfilePhoto');
        this.uploadSer.sendModelToAPI(modelImage).subscribe((res => {
        console.log(res);
      }),
        (error) => {
          console.log(error);
        });
    }
  }
      // const max_size = 9999999;
      // const max_height = 100000;
      // const max_width = 10000;

      // if (event.target.files[0].size > max_size) {
      //   let error = 'حجم تصویر بارگذاری شده باید کمتر از' + max_size / 1000 + 'Kb باشد.';
      //   console.log(error);
      //   return false;
      // }

      // const reader = new FileReader();
      // reader.onload = (e: any) => {
      //   let image = new Image();
      //   image.src = e.target.result;
      //   console.log(e.target);
      //   image.onload = (rs: any): any => {
      //     const img_height = rs.currentTarget['height'];
      //     const img_width = rs.currentTarget['width'];

      //     if (img_height > max_height && img_width > max_width) {
      //       let error = 'سایز مجاز برای بارگذاری تصویر: ' + max_height + '*' + max_width + 'px ';
      //       console.log(error);
      //       return false;
      //     } else {
            
           
        }



