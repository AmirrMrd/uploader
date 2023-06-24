import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uploader';
  constructor(private http: HttpClient){

  }
  upload (fileToUpload:any):any {
    if (fileToUpload.target.files && fileToUpload.target.files[0]) {
      const max_size = 300000;
      const max_height = 512;
      const max_width = 512;
    
      if (fileToUpload.target.files[0].size > max_size) {
        let error = 'حجم تصویر بارگذاری شده باید کمتر از' + max_size / 1000 + 'Kb باشد.' ;
        console.log(error);
        return false;
      }
      
      const formData = new FormData();
      
      const reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        console.log(e.target);
        image.onload = (rs:any):any => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];
      
          if (img_height > max_height && img_width > max_width) {
            let error = 'سایز مجاز برای بارگذاری تصویر: ' + max_height + '*' + max_width + 'px ';
            console.log(error);
            return false;
          } else {
            formData.append('fileName', fileToUpload.target.files[0].name)
            formData.append('file', fileToUpload.target.files[0])
            formData.append('folder', 'folderName')
          }
        };
      };
      reader.readAsDataURL(fileToUpload.target.files[0]);
      this.http.post('', formData).subscribe(() => {
        // File append success logic
      });
    }
  }
}
