
export class Location {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  lat: number;
  long: number;
  freal: boolean;
  slushie: boolean;
  madbrook: boolean;
  diesel: boolean;
  clear: boolean;
  rvdump: boolean;
  rvlane: boolean;
  marker: google.maps.Marker;
}

const locationList: Location[] = [
  {
    name: 'location 1',
    street: '1234 North 9876 South',
    city: 'West Point',
    state: 'UT',
    zip: '84123',
    phone: '801-123-4567',
    lat: 41.092964,
    long: -111.998218,
    freal: true,
    slushie: true,
    madbrook: true,
    diesel: true,
    clear: true,
    rvdump: true,
    rvlane: true,
    marker: null
  },
  {
    name: 'location 2',
    street: '4321 North 6789 South',
    city: 'Clearfield',
    state: 'UT',
    zip: '84122',
    phone: '801-123-7654',
    lat: 41.118056,
    long: -112.044772,
    freal: true,
    slushie: true,
    madbrook: false,
    diesel: true,
    clear: true,
    rvdump: false,
    rvlane: false,
    marker: null
  }
];

export {locationList};
