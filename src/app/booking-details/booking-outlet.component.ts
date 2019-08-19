import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { BookingDetails, BookingResponse, TimeSlot, Utilities, CustomerDetails, CourtDetails } from './model/booking-detail';

import { BookingInforComponent } from './booking-infor/booking-infor.component';

import * as _ from "lodash";
import { MatDialog } from '@angular/material/dialog';
import { SearchEvent } from '../shared/Events/searchEvent';



@Component({
  selector: 'app-booking-outlet',
  templateUrl: './booking-outlet.component.html',
  styleUrls: ['./booking-outlet.component.css']
})
export class BookingOutletComponent implements OnInit {

  timeSlots = ['6AM-7AM', '8AM-9AM', '10AM-11AM', '11AM-12PM'];
  isLoaded = false;

  courtListSlots = [ {description: 'Court 1', code: 1}, 
                      {description: 'Court 2', code: 2}, 
                      {description: 'Court 3', code: 3}, 
                      {description: 'Court 4', code: 4},
                      {description: 'Court 5', code: 5},
                      {description: 'Court 6', code: 6}]

  courtList = [ {description: 'Court 1', code: 1},
  
   { description: 'Court 3', code: 3} ];

  firstCourtDetails: CourtDetails;
  secondCourtDetails: CourtDetails;
  thirdCourtDetails: CourtDetails;

  totalResponse: Array<CourtDetails> = [];

  timeSlotsDetails = [
    {
      description: '6AM - 7AM',
        code: '6AM-7AM'
    },
    {
      description: '7AM - 8AM',
        code: '7AM-8AM'
    },
    {
      description: '8AM - 9AM',
        code: '8AM-9AM'
    },
    {
      description: '9AM - 10AM',
        code: '9AM-10AM'
    },
    {
      description: '10AM - 11AM',
        code: '10AM-11AM'
    },
    {
      description: '11AM - 12PM',
        code: '11AM-12PM'
    },
    {
      description: '12PM - 1PM',
        code: '12PM-1PM'
    },
    {
      description: '1PM - 2PM',
        code: '1PM-2PM'
    },
    {
      description: '2PM - 3PM',
        code: '2PM-3PM'
    },
    {
      description: '3PM - 4PM',
        code: '3PM-4PM'
    },
    {
      description: '4PM - 5PM',
        code: '4PM-5PM'
    },
    {
      description: '5PM - 6PM',
        code: '5PM-6PM'
    },
    
    {
      description: '6PM - 7PM',
        code: '6PM-7PM'
    },
    {
      description: '7PM - 8PM',
        code: '7PM-8PM'
    },
    {
      description: '8PM - 9PM',
        code: '8PM-9PM'
    },
    {
      description: '9PM - 10PM',
        code: '9PM-10PM'
    },
    {
      description: '10PM - 11PM',
        code: '11PM-12AM'
    }
  ]

  
  newSlot = {};


  constructor(private bookingService: BookingService, 
    public dialog: MatDialog,
    private searchEvent: SearchEvent) { }

  ngOnInit() {

    this.bookingService.getDetails().subscribe((response: any)=> {
      console.log(this);

      const courtResponse = response.courtDetails;
      this.searchEvent.event.subscribe((data) => {
        if(data && this.dialog) {
        
          let searchArray = [];
          
          const firstSerach = _.filter(this.firstCourtDetails.timeSlots, (item: TimeSlot)=> {

            return item.bookingDetails.customerDetails.mobile == data.toString();
          });

          const secondSerach = _.filter(this.secondCourtDetails.timeSlots, (item: TimeSlot)=> {

            return item.bookingDetails.customerDetails.mobile == data.toString();
          });

          const thirdSerach = _.filter(this.thirdCourtDetails.timeSlots, (item: TimeSlot)=> {

            return item.bookingDetails.customerDetails.mobile == data.toString();
          });    
          
          searchArray.push(firstSerach);
          searchArray.push(secondSerach);
          searchArray.push(thirdSerach);
        }
      })

        // court 1
        // const courtOneDetails = _.filter(courtResponse, (element: CourtDetails) => {
        //   return element.courtId == 1;
        // });

        // this.firstCourtDetails = courtOneDetails[0];
        // this.totalResponse.push(this.firstCourtDetails);
        // console.log(this.firstCourtDetails);

        // console.log(this);

        //     //     // Court 3
        // const courtThreeDetails = _.filter(courtResponse, (element: CourtDetails) => {
        //   return element.courtId == 3;
        // });

        // if (courtThreeDetails.length > 0) {
        //   this.thirdCourtDetails = courtThreeDetails[0];
        //   this.totalResponse.push(this.thirdCourtDetails);
        //   console.log(this.thirdCourtDetails);
        // } else {
        //   this.thirdCourtDetails = this.getBlankCourtDetails('', 3, 'Court 3');
        //   this.totalResponse.push(this.thirdCourtDetails);
        //   console.log(this.thirdCourtDetails);
        //   console.log(this.totalResponse);
        // }

        _.forEach(this.courtListSlots, (item) => {
          this.createCourtDetailsFromResponse(courtResponse, item);
        })

        this.isLoaded = true;
        
    })

  }


  isSlotAvailable(slotArgs, courtArgs): boolean {
    let slot = null;
    if (courtArgs == 1 && this.firstCourtDetails && this.firstCourtDetails.timeSlots) {
      slot = _.find(this.firstCourtDetails.timeSlots, function (o) { return o.timeSlot == slotArgs })
    }

    if (courtArgs == 2 && this.secondCourtDetails && this.secondCourtDetails.timeSlots) {
      slot = _.find(this.secondCourtDetails.timeSlots, function (o) { return o.timeSlot == slotArgs })
    }

    if (courtArgs == 3 && this.thirdCourtDetails && this.thirdCourtDetails.timeSlots) {
      slot = _.find(this.thirdCourtDetails.timeSlots, function (o) { return o.timeSlot == slotArgs })
    }

    if (slot) {
      return true;
    } else {
      return false;
    }
  }

  onOpen(slotArgs, courtArgs: number, courtNameArgs: string) {
    let slot = null;
    if (courtArgs == 1 && this.firstCourtDetails && this.firstCourtDetails.timeSlots) {
      slot = _.find(this.firstCourtDetails.timeSlots, function (o) { return o.timeSlot == slotArgs })
    }

    if (courtArgs == 3 && this.thirdCourtDetails && this.thirdCourtDetails.timeSlots) {
      slot = _.find(this.thirdCourtDetails.timeSlots, function (o) { 
        return o.timeSlot == slotArgs 
      });
    }

    if (slot) {
      let tempSlot = _.cloneDeep(slot);
      let dialog = this.dialog.open(BookingInforComponent, { data: tempSlot, width: '600px' });
      dialog.afterClosed().subscribe(result => {
        console.log('closed');
        console.log(slot);
      });
    } else {
      // create a new booking
      this.newSlot = this.getSlotDetails(slotArgs);

      // if (courtArgs == 3) {
      //   this.thirdCourtDetails.timeSlots.push(newSlot);
      // }

      let dialog1 = this.dialog.open(BookingInforComponent, { data: this.newSlot, width: '600px' });
      dialog1.afterClosed().subscribe(result => {
        console.log('closed');
        console.log(this.newSlot);
      });


    }

  }

  onSave(slot) {
    console.log(slot);
  }

  private getBlankCourtDetails(slotArgs: string, courtArgs: number, courtNameArgs: string): CourtDetails {
    let utilities = <Utilities>{
      name: '',
      price: 0,
      quantity: 0
    }

    let customerDetails = <CustomerDetails>{
      name: '',
      mobile: '',
      utilities: [utilities]
    }
    let bookingDetails = <BookingDetails>{ customerDetails: customerDetails }
    let timeSlot = <TimeSlot>{ timeSlot: slotArgs, bookingDetails: bookingDetails }
    let newSlot = <CourtDetails>{
      courtId: courtArgs,
      courtPrice: 0,
      courtName: courtNameArgs,
      timeSlots: [timeSlot]
    }

    return newSlot;
  }

  private getSlotDetails(slotArgs: string): TimeSlot {

    let utilities = <Utilities>{
      name: '',
      price: 0,
      quantity: 0
    };

    let customerDetails = <CustomerDetails>{
      name: '',
      mobile: '',
      utilities: [utilities]
    };

    let bookingDetails = <BookingDetails>{ customerDetails: customerDetails };
    let timeSlot = <TimeSlot>{ timeSlot: slotArgs, bookingDetails: bookingDetails };
    return timeSlot;
  }


  private createCourtDetailsFromResponse(courtResponse: any, courtArgs: any){

    const courtDetails = _.filter(courtResponse, (element: CourtDetails) => {
      return element.courtId == courtArgs.code;
    });

    switch(courtArgs.code) {
      case 1: 
      if(courtDetails.length > 0){
        this.firstCourtDetails = courtDetails[0];
        this.totalResponse.push(this.firstCourtDetails);
      } else {
        this.populatecourtDetailsEmptyResponse(courtArgs, this.firstCourtDetails)
      }
      break;
     

      case 2:
      if(courtDetails.length > 0){
      this.secondCourtDetails = courtDetails[0];
      this.totalResponse.push(this.secondCourtDetails);
      } else {
        this.populatecourtDetailsEmptyResponse(courtArgs, this.secondCourtDetails)
      }
      break;

      case 3:
      if(courtDetails.length > 0){
      this.thirdCourtDetails = courtDetails[0];
      this.totalResponse.push(this.thirdCourtDetails);
      } else {
        this.populatecourtDetailsEmptyResponse(courtArgs, this.thirdCourtDetails)
      }
      break;

    }
    
    
  }

  private populatecourtDetailsEmptyResponse(courtArgs: any, courtDetails: CourtDetails){
    courtDetails = this.getBlankCourtDetails('', courtArgs.code, courtArgs.description);
    this.totalResponse.push(courtDetails);
  }

}
