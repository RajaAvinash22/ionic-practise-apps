import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

const baseUrl = 'https://gofile.io/?t=uploadFiles';
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPE = 'video/mp4';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedVideo: string; 
  uploadedVideo: string;

  isUploading: boolean = false;
  uploadPercent: number = 0;
  videoFileUpload: FileTransferObject;
  loader;

  constructor(public navCtrl: NavController, private camera: Camera,
    private transfer: FileTransfer, private file: File,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }



  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await this.loader.present();
  }

  dismissLoader() {
    this.loader.dismiss();
  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ['Dismiss']
    });
    await alert.present();
  }

  cancelSelection() {
    this.selectedVideo = null;
    this.uploadedVideo = null;
  }

  selectVideo() {
    const options: CameraOptions = {
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options)
      .then(async (videoUrl) => {
        if (videoUrl) {
          this.showLoader();
          this.uploadedVideo = null;

          var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
          var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);

          dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;

          try {
            var dirUrl = await this.file.resolveDirectoryUrl(dirpath);
            var retrievedFile = await this.file.getFile(dirUrl, filename, {});

          } catch (err) {
            this.dismissLoader();
            return this.presentAlert("Error", "Something went wrong.");
          }

          retrievedFile.file(data => {
            this.dismissLoader();
            if (data.size > MAX_FILE_SIZE) return this.presentAlert("Error", "You cannot upload more than 5mb.");
            if (data.type !== ALLOWED_MIME_TYPE) return this.presentAlert("Error", "Incorrect file type.");

            this.selectedVideo = retrievedFile.nativeURL;
          });
        }
      },
        (err) => {
          console.log(err);
        });
  }

  uploadVideo() {
    var url = baseUrl ;

    var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);

    var options: FileUploadOptions = {
      fileName: filename,
      fileKey: "video",
      mimeType: "video/mp4"
    }

    this.videoFileUpload = this.transfer.create();

    this.isUploading = true;

    this.videoFileUpload.upload(this.selectedVideo, url, options)
      .then((data) => {
        this.isUploading = false;
        this.uploadPercent = 0;
        return JSON.parse(data.response);
      })
      .then((data) => {
        this.uploadedVideo = data.url;
        this.presentAlert("Success", "Video upload was successful.");
      })
      .catch((err) => {
        this.isUploading = false;
        this.uploadPercent = 0;
        this.presentAlert("Error", "Error uploading video.");
      });

    this.videoFileUpload.onProgress((data) => {
      this.uploadPercent = Math.round((data.loaded / data.total) * 100);
    });

  }

  cancelUpload() {
    this.videoFileUpload.abort();
    this.uploadPercent = 0;
  }

}
