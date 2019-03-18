
export class Location {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  price: string;
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
    name: 'Clearfield #1',
    street: '1234 North 9876 South',
    city: 'Clearfield',
    state: 'UT',
    zip: '84123',
    phone: '801-123-4567',
    price: '$2.13',
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
    name: 'Clearfield #2',
    street: '4321 North 6789 South',
    city: 'Clearfield',
    state: 'UT',
    zip: '84122',
    phone: '801-123-7654',
    price: '$2.23',
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
  },
  {
    name: 'Salt Lake City #1',
    street: '1234 North 9876 South',
    city: 'Salt Lake',
    state: 'UT',
    zip: '84123',
    phone: '801-123-4567',
    price: '$2.18',
    lat: 40.725928,
    long: -111.899107,
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
    name: 'Murry #1',
    street: '4321 North 6789 South',
    city: 'Murry',
    state: 'UT',
    zip: '84122',
    phone: '801-123-7654',
    price: '$2.26',
    lat: 40.633432,
    long: -111.882631,
    freal: true,
    slushie: true,
    madbrook: false,
    diesel: true,
    clear: true,
    rvdump: false,
    rvlane: false,
    marker: null
  },
  {
    name: 'Rexburg #1',
    street: '1234 North 9876 South',
    city: 'Rexburg',
    state: 'ID',
    zip: '84123',
    phone: '801-123-4567',
    price: '$2.33',
    lat: 43.826317,
    long: -111.812905,
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
    name: 'Rexburg 2',
    street: '4321 North 6789 South',
    city: 'Rexburg',
    state: 'ID',
    zip: '84122',
    phone: '801-123-7654',
    price: '$2.23',
    lat: 43.819984,
    long: -111.789070,
    freal: true,
    slushie: true,
    madbrook: false,
    diesel: true,
    clear: true,
    rvdump: false,
    rvlane: false,
    marker: null
  },
  {
    name: 'Provo #1',
    street: '1234 North 9876 South',
    city: 'Provo',
    state: 'UT',
    zip: '84123',
    phone: '801-123-4567',
    price: '$2.13',
    lat: 40.260417,
    long: -111.703205,
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
    name: 'Provo #2',
    street: '4321 North 6789 South',
    city: 'Provo',
    state: 'UT',
    zip: '84122',
    phone: '801-123-7654',
    price: '$2.23',
    lat: 40.244822,
    long: -111.657971,
    freal: true,
    slushie: true,
    madbrook: false,
    diesel: true,
    clear: true,
    rvdump: false,
    rvlane: false,
    marker: null
  },
];

export {locationList};
