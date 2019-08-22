import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { BookingDetails, BookingResponse, TimeSlot, Utilities, CourtDetails, PaymentDetails, UtilityInfoDetails } from './model/booking-detail';

import { BookingInforComponent } from './booking-infor/booking-infor.component';

import * as _ from "lodash";
import { MatDialog } from '@angular/material/dialog';
import { SearchEvent } from '../shared/Events/searchEvent';
import { ConstantsFile } from '../shared/constants-file';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { BookingPopupConfirmationComponent } from './booking-popup-confirmation/booking-popup-confirmation.component';



@Component({
  selector: 'app-booking-outlet',
  templateUrl: './booking-outlet.component.html',
  styleUrls: ['./booking-outlet.component.css']
})
export class BookingOutletComponent implements OnInit {

  isLoaded = false;
  startDate: any;
  // Court Details
  courtListSlots = [{ description: 'Court 1', code: 1 },
  { description: 'Court 2', code: 2 },
  { description: 'Court 3', code: 3 },
  { description: 'Court 4', code: 4 },
  { description: 'Court 5', code: 5 },
  { description: 'Court 6', code: 6 }];

  // Individual Courts Collection
  // TODO : Remove these fields
  firstCourtDetails: CourtDetails;
  secondCourtDetails: CourtDetails;
  thirdCourtDetails: CourtDetails;
  fourthCourtDetails: CourtDetails;
  fifthCourtDetails: CourtDetails;
  sixthCourtDetails: CourtDetails;

  // Total Courts Response
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
  ];

  newSlot = {};

  constructor(private bookingService: BookingService,
    public dialog: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.startDate = moment();
    // this.bookingService.getDetails().subscribe((response: any) => {
    //   console.log(this);

    //   const courtResponse = response[0].courtDetailsList;

    //   _.forEach(this.courtListSlots, (item) => {
    //     this.createCourtDetailsFromResponse(courtResponse, item);
    //   })

    //   this.isLoaded = true;

    // });
    this.fetchBookingDetails();
    this.bookingService.refresh.subscribe(x => this.populateTable(x));

  }

  populateTable(response) {
    const courtResponse = response.courtDetailsList;
    _.forEach(this.courtListSlots, (item) => {
      this.createCourtDetailsFromResponse(courtResponse, item);
    });
  }


  isSlotAvailable(slotArgs, courtArgs): boolean {
    let slot = null;
    if (courtArgs == ConstantsFile.COURT1 && this.firstCourtDetails && this.firstCourtDetails.timeSlotDetails) {
      slot = _.find(this.firstCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs })
    }

    if (courtArgs == ConstantsFile.COURT2 && this.secondCourtDetails && this.secondCourtDetails.timeSlotDetails) {
      slot = _.find(this.secondCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs })
    }

    if (courtArgs == ConstantsFile.COURT3 && this.thirdCourtDetails && this.thirdCourtDetails.timeSlotDetails) {
      slot = _.find(this.thirdCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs })
    }

    if (courtArgs == ConstantsFile.COURT4 && this.fourthCourtDetails && this.fourthCourtDetails.timeSlotDetails) {
      slot = _.find(this.fourthCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs })
    }

    if (courtArgs == ConstantsFile.COURT5 && this.fifthCourtDetails && this.fifthCourtDetails.timeSlotDetails) {
      slot = _.find(this.fifthCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs })
    }

    if (courtArgs == ConstantsFile.COURT6 && this.sixthCourtDetails && this.sixthCourtDetails.timeSlotDetails) {
      slot = _.find(this.sixthCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs })
    }

    if (slot) {
      return true;
    } else {
      return false;
    }
  }

  onOpen(slotArgs, courtArgs: string) {
    let bookingDetail: any = {
      courtName: courtArgs, timeSlotDetails: []
    };

    let slot = null;

    if (courtArgs == ConstantsFile.COURT1 && this.firstCourtDetails && this.firstCourtDetails.timeSlotDetails) {
      slot = _.find(this.firstCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs });
    }

    if (courtArgs == ConstantsFile.COURT2 && this.secondCourtDetails && this.secondCourtDetails.timeSlotDetails) {
      slot = _.find(this.secondCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs });
    }

    if (courtArgs == ConstantsFile.COURT3 && this.thirdCourtDetails && this.thirdCourtDetails.timeSlotDetails) {
      slot = _.find(this.thirdCourtDetails.timeSlotDetails, function (o) {
        return o.timeSlotCode == slotArgs
      });
    }

    if (courtArgs == ConstantsFile.COURT4 && this.fourthCourtDetails && this.fourthCourtDetails.timeSlotDetails) {
      slot = _.find(this.fourthCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs });
    }

    if (courtArgs == ConstantsFile.COURT5 && this.fifthCourtDetails && this.fifthCourtDetails.timeSlotDetails) {
      slot = _.find(this.fifthCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs });
    }

    if (courtArgs == ConstantsFile.COURT6 && this.sixthCourtDetails && this.sixthCourtDetails.timeSlotDetails) {
      slot = _.find(this.sixthCourtDetails.timeSlotDetails, function (o) { return o.timeSlotCode == slotArgs });
    }

    if (slot) {
      // let tempSlot = _.cloneDeep(bookingDetail);

      bookingDetail.timeSlotDetails.push({
        timeSlotCode: slot.timeSlotCode,
        timeSlotDescription: slot.timeSlotDescription,
        bookingDetails: { bookingName: slot.bookingDetails.bookingName, mobilenumber: slot.bookingDetails.mobilenumber },
        slotBooked: slot.slotBooked,
        utilityInfoDetails: _.map(slot.utilityInfoDetails, (item) => {
          return { utilityName: item.utilityName, utilityQuantity: item.utilityQuantity, utilityPrice: item.utilityPrice }
        }),
        paymentDetails: {
          paymentMode: slot.paymentDetails ? slot.paymentDetails.paymentMode : '',
          isPaymentDone: slot.paymentDetails ? slot.paymentDetails.isPaymentDone : false
        }
      });

      let dialog = this.dialog.open(BookingInforComponent, { data: bookingDetail, width: '600px' });
      dialog.afterClosed().subscribe(result => {

        if(result){
          let formatedDate = moment(this.startDate, 'DD-MMM-YYYY').format('DD-MM-YYYY');
          this.bookingService.updateTimeSlotDetails(formatedDate, result).subscribe(response => {
            if (response) {
              this.bookingService.refresh.next(response);
              this.toastr.success("Slot Updated");
            }
          });
        }
    

      });
    } else {
      // create a new booking
      bookingDetail.timeSlotDetails.push({
        timeSlotCode: slotArgs,
        bookingDetails: { bookingName: '', mobilenumber: '' },
        slotBooked: false,
        utilityInfoDetails: [],
        paymentDetails: {}
      });


      let dialog1 = this.dialog.open(BookingInforComponent, { data: bookingDetail, width: '600px' });
      dialog1.afterClosed().subscribe(result => {
        if(result){
          let formatedDate = moment(this.startDate, 'DD-MMM-YYYY').format('DD-MM-YYYY');
        this.bookingService.updateTimeSlotDetails(formatedDate, result).subscribe(response => {
          if (response) {
            this.bookingService.refresh.next(response);
            this.toastr.success("Slot Updated");
          }
        });
        }
      });


    }

  }

  fetchBookingDetails() {
    if (this.startDate != null) {
      let formatedDate = moment(this.startDate, 'DD-MMM-YYYY').format('DD-MM-YYYY');
      this.bookingService.getDetails(formatedDate).subscribe((response: any) => {
        if (response != null && response.length > 0) {
          const courtResponse = response[0].courtDetailsList;
          _.forEach(this.courtListSlots, (item) => {
            this.createCourtDetailsFromResponse(courtResponse, item);
          })

          this.isLoaded = true;
        } else {
          this.toastr.error('No Booking Available For this Date');
          // _.forEach(this.courtListSlots, (item) => {
          //   this.createCourtDetailsFromResponse([], item);
          // });
          let dialog = this.dialog.open(BookingPopupConfirmationComponent, { data: "", width: '600px' });
          dialog.afterClosed().subscribe(result => this.createNewBookingDetails(result));
        }

      });
    }
  }

  createNewBookingDetails(result: string) {
    if (result === "OK") {
      let bookingInfoData = {

        "bookingDate": moment(this.startDate, 'DD-MMM-YYYY').format('DD-MM-YYYY'),
        "courtDetailsList": [
          {
            "courtName": "Court 1",
            "timeSlotDetails": [
              {
                "timeSlotCode": "6AM-7AM",
                "timeSlotDescription": "6AM -7AM",
                "isSlotBooked": false,
                "bookingDetails": {
                  "bookingName": "",
                  "mobilenumber": ""
                },
                "utilityInfoDetails": [],
                "paymentDetails": {}
              }]
          }

        ]
      }
      this.bookingService.createNewBookingDate(bookingInfoData).subscribe(response => {
        _.forEach(this.courtListSlots, (item) => {
          this.createCourtDetailsFromResponse(response, item);
        });
        this.isLoaded = true;
      })
    } else {
      this.isLoaded = false;
    }
  }

  onSave(slot) {
    console.log(slot);
  }

  private getBlankCourtDetails(slotArgs: string, courtArgs: number, courtNameArgs: string): CourtDetails {
    let utilities = <UtilityInfoDetails>{}

    let paymentDetails = <PaymentDetails>{}
    let bookingDetails = <BookingDetails>{
      bookingDetailsId: 0,
      bookingName: '',
      mobilenumber: '',
      timeSlotInfo: 0
    }
    let timeSlot = <TimeSlot>{
      bookingDetails: bookingDetails,
      timeSlotId: 0,
      timeSlotCode: '',
      timeSlotDescription: '',
      courtInfo: 0,
      utilityInfoDetails: {},
      paymentDetails: {},
      slotBooked: false
    }
    let newSlot = <CourtDetails>{
      courtId: courtArgs,
      courtPrice: 0,
      courtName: courtNameArgs,
      timeSlotDetails: [timeSlot]
    }

    return newSlot;
  }

  private getSlotDetails(slotArgs: string): TimeSlot {

    let utilities = <Utilities>{
      name: '',
      price: 0,
      quantity: 0
    };


    let bookingDetails = <BookingDetails>{
      bookingDetailsId: 0,
      bookingName: '',
      mobilenumber: '',
      timeSlotInfo: 0
    };
    let timeSlot = <TimeSlot>{
      bookingDetails: bookingDetails,
      timeSlotId: 0,
      timeSlotCode: '',
      timeSlotDescription: '',
      courtInfo: 0,
      utilityInfoDetails: {},
      paymentDetails: {},
      slotBooked: false
    }
    return timeSlot;
  }


  private createCourtDetailsFromResponse(courtResponse: any, courtArgs: any) {

    const courtDetails = _.filter(courtResponse, (element: CourtDetails) => {
      return element.courtName == courtArgs.description;
    });

    switch (courtArgs.description) {
      case ConstantsFile.COURT1:
        if (courtDetails.length > 0) {
          this.firstCourtDetails = courtDetails[0];
          this.totalResponse.push(this.firstCourtDetails);
        } else {
          this.populatecourtDetailsEmptyResponse(courtArgs, this.firstCourtDetails)
        }
        break;


      case ConstantsFile.COURT2:
        if (courtDetails.length > 0) {
          this.secondCourtDetails = courtDetails[0];
          this.totalResponse.push(this.secondCourtDetails);
        } else {
          this.populatecourtDetailsEmptyResponse(courtArgs, this.secondCourtDetails)
        }
        break;

      case ConstantsFile.COURT3:
        if (courtDetails.length > 0) {
          this.thirdCourtDetails = courtDetails[0];
          this.totalResponse.push(this.thirdCourtDetails);
        } else {
          this.populatecourtDetailsEmptyResponse(courtArgs, this.thirdCourtDetails)
        }
        break;

      case ConstantsFile.COURT4:
        if (courtDetails.length > 0) {
          this.fourthCourtDetails = courtDetails[0];
          this.totalResponse.push(this.fourthCourtDetails);
        } else {
          this.populatecourtDetailsEmptyResponse(courtArgs, this.fourthCourtDetails)
        }
        break;

      case ConstantsFile.COURT5:
        if (courtDetails.length > 0) {
          this.fifthCourtDetails = courtDetails[0];
          this.totalResponse.push(this.fifthCourtDetails);
        } else {
          this.populatecourtDetailsEmptyResponse(courtArgs, this.fifthCourtDetails)
        }
        break;

      case ConstantsFile.COURT6:
        if (courtDetails.length > 0) {
          this.sixthCourtDetails = courtDetails[0];
          this.totalResponse.push(this.sixthCourtDetails);
        } else {
          this.populatecourtDetailsEmptyResponse(courtArgs, this.sixthCourtDetails)
        }
        break;

    }


  }

  private populatecourtDetailsEmptyResponse(courtArgs: any, courtDetails: CourtDetails) {
    courtDetails = this.getBlankCourtDetails('', courtArgs.code, courtArgs.description);
    this.totalResponse.push(courtDetails);
  }

}
