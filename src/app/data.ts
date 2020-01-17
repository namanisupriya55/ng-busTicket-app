import {formatDate} from '@angular/common';

export let data = {
     buses: [
    {
        busId: 1,
        busName: 'Yellow travels',
        source: 'Hyderabad',
        destination: 'bangalore',
        busType: 'AC',
        date: '14-0-2021',
        NOS: 40,
        availableSeats: 35,
        startTime: '9PM',
        arrivalTime: '6AM',
    },
    {
        busId: 2 ,
        busName: 'Garuda',
        source: 'Hyderabad',
        destination: 'Chennai',
        busType: 'AC',
        date: '14-0-2021',
        NOS: 40,
        availableSeats: 20,
        startTime: '9PM',
        arrivalTime: '6AM',
    },
    {
        busId: 3 ,
        busName: 'Volvo',
        source: 'Bangalore',
        destination: 'Hyderabad',
        busType: 'AC',
        date: '14-1-2021',
        NOS: 40,
        availableSeats: 20,
        startTime: '9PM',
        arrivalTime: '6AM',
    }
],
places: [
    {
        placeId: 1,
        placeName: 'Hyderabad'
    },
    {
        placeId: 2,
        placeName: 'Banglore'
    },
    {
        placeId: 3,
        placeName: 'Chennai'
    },
    {
        placeId: 4,
        placeName: 'Pune'
    },
    {
        placeId: 5,
        placeName: 'Mumbai'
    },
    {
        placeId: 6,
        placeName: 'Mysore'
    }
    ],
  users: [{
       username: 'supriya',
       password: 'supriya',
  }, {
       username: 'priya',
       password: 'priya',
  }]
}
