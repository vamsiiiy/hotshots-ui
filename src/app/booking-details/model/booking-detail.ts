export interface CourtDetails {
    courtId: number;
    courtPrice: number;
    courtName: string;
    timeSlotDetails: Array<TimeSlot>
    bookingInfo: number;
}

export interface TimeSlot {
    bookingDetails: BookingDetails;
    timeSlotId: number;
    timeSlotCode: string;
    timeSlotDescription: string;
    courtInfo: number;
    utilityInfoDetails: Array<UtilityInfoDetails>;
    paymentDetails: PaymentDetails;
    slotBooked: boolean;
}


export interface BookingDetails {
    bookingDetailsId: number;
    bookingName: string;
    mobilenumber: string;
    timeSlotInfo: number;
}

export interface CustomerDetails {
    name: string;
    mobile: string;
    utilities: Array<Utilities>;
}

export interface Utilities {
    name: string;
    price: number;
    quantity: number;
}


export interface BookingResponse {
    bookDate: string;
    bookingDetails: Array<BookingDetails>;
}

export interface UtilityInfoDetails {
    utilityName: string;
    utilityPrice: number;
    utilityQuantity: number;
}

export interface PaymentDetails {
    paymentMode: string;
    isPaymentDone: boolean;
}

export interface utilityDropDown {
    utilityItems: string,
    utilityValue: string
}