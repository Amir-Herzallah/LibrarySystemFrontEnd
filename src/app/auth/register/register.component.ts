import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

declare const google: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  map: any;
  apiKey = 'AIzaSyD60XPPRRymyAQBR96wuHOPUNh8HVRt9bo';
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  constructor(private formBuilder: FormBuilder,private userService : UserService, private adminService: AdminService) {}

  ngAfterViewInit() {
    this.loadGoogleMaps();
    this.getLocation();
  }
  
  regForm : FormGroup = new FormGroup( {
    first_Name: new FormControl("", Validators.required),
    last_Name: new FormControl("", Validators.required),
    location_Latitude: new FormControl("", Validators.required),
    location_Longitude: new FormControl("", Validators.required),
    phone_Number: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    profile_Img_Path: new FormControl("", Validators.required),
    registration_Date : new FormControl(),
    is_Activated : new FormControl()
  });

  loadGoogleMaps() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
    script.onload = () => {
      this.initMap();
    };

    document.body.appendChild(script);
  }

  initMap(): void {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    this.addMapClickListener();
  }

  addMapClickListener(): void {
    google.maps.event.addListener(this.map, 'click', (event: any) => {
      this.regForm.patchValue({
        location_Latitude: event.latLng.lat(),
        location_Longitude: event.latLng.lng(),
      });
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.regForm.patchValue({
            location_Latitude: position.coords.latitude,
            location_Longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  
  user_pData: any;
  uploadImage(file: any) {
    if (file.length === 0)
      return;

    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.userService.uploadAttachment(formData);
  }

  Register() {
    this.regForm.value.is_Activated = "1";
    this.regForm.value.registration_Date = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd');
    console.log(this.regForm.value);
    this.regForm.value.location_Latitude = String(this.regForm.value.location_Latitude);
    this.regForm.value.location_Longitude = String(this.regForm.value.location_Longitude);

    this.userService.CreateUser(this.regForm.value);
  }
}
