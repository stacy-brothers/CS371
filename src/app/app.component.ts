/// <reference types="@types/googlemaps" />
import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {locationList, Location} from './locationList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  @ViewChild('gmap') gmapElement: any;
  @ViewChild('filterPop') filterPop: any;
  @ViewChild('searchDiv') searchDiv: any;
  map: google.maps.Map;

  currentLat = 0;
  currentLong = 0;
  marker;
  selectedLoc: Location = null;
  showLocBar = false;
  widget;
  filters = {
    freal: false,
    slushie: false,
    madbrook: false,
    diesel: false,
    clear: false,
    rvdump: false,
    rvlane: false
  }

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    const mapProp = {
      // slc - 40.7608° N, 111.8910° W
      center: new google.maps.LatLng(40.7608, -111.8910),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      fullscreenControl: false
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    }
    this.searchDiv.index = 1;
    //this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.searchDiv);
    this.loadLocations();

    const widgetNode = <HTMLInputElement> document.getElementById('pac-input');
    this.widget = new google.maps.places.Autocomplete(
      widgetNode, {
        types: ['(regions)'],
        fields: ['geometry', 'formatted_address', 'types', 'scope'],
        componentRestrictions: {
          country: 'US'
        }
      }
    );
    this.widget.addListener('place_changed', this.onPlaceChanged.bind(this));
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        label: 'You are here!',
        icon: 'assets/loc.png'
      });
    } else {
      this.marker.setPosition(location);
    }
  }

  loadLocations() {
    let a = 0;
    locationList.forEach( loc => {
        const newLoc = new google.maps.LatLng(loc.lat, loc.long);
        const newMark = new google.maps.Marker({
          position: newLoc,
          map: this.map,
          icon: 'assets/gas_pinlet-2-medium_1_5.png'
        });
        newMark.addListener('click', this.selectLocation.bind(this, newMark, a) );
        newMark.setVisible(true);
        loc.marker = newMark;
        a++;
    });
  }

  selectLocation( mark, id ) {
    this.map.setCenter(mark.getPosition());
    this.selectedLoc = locationList[id];
    this.showLocBar = true;
  }

  closeLocBar() {
    this.showLocBar = false;
  }

  onPlaceChanged() {
    const place = this.widget.getPlace();
    if (place.geometry) {
      this.recenterMap(place);
    }
  }

  recenterMap(place) {
    this.map.panTo(place.geometry.location);
    if (place.types.includes('locality')) {
      this.map.setZoom(14);
    } else if (place.types.includes('postal_code')) {
      this.map.setZoom(15);
    } else if (place.types.includes('administrative_area_level_1')) {
      this.map.setZoom(6);
    } else {
      this.map.setZoom(13);
    }
  }

  openFilter() {
    const filterPop = this.filterPop.nativeElement;
    filterPop.style.display = 'block';
  }

  closeFilter() {
    const filterPop = this.filterPop.nativeElement;
    filterPop.style.display = 'none';
  }

  toggleFilter( value ) {
    if (this.filters[value] === true) this.filters[value] = false;
    else this.filters[value] = true;
    locationList.forEach( loc => {
      let hide = false;
      if ( this.filters.freal === true && loc.freal === false ) hide = true;
      else if ( this.filters.slushie === true && loc.slushie === false ) hide = true;
      else if ( this.filters.madbrook === true && loc.madbrook === false ) hide = true;
      else if ( this.filters.diesel === true && loc.diesel === false ) hide = true;
      else if ( this.filters.clear === true && loc.clear === false ) hide = true;
      else if ( this.filters.rvdump === true && loc.rvdump === false ) hide = true;
      else if ( this.filters.rvlane === true && loc.rvlane === false ) hide = true;
      if ( hide === true ) loc.marker.setVisible( false );
      else loc.marker.setVisible( true );
    });
  }

}
