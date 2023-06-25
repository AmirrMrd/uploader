export class userProfilePhoto {
    formData: FormData;
    photoName: string;
    photofolderName: string;

    constructor (_formData : FormData , _photoName : string , _photofolderName : string) { 
      this.formData = _formData;
      this.photoName = _photoName;
      this.photofolderName = _photofolderName;
     }
    
  }