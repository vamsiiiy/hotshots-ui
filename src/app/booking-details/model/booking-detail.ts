export interface CourtDetails {
    courtId: number;
    courtPrice: number;
    courtName: string;
    timeSlots: Array<TimeSlot>
}

export interface TimeSlot {
    timeSlot : string;
    bookingDetails: BookingDetails;
}


export interface BookingDetails {
    customerDetails: CustomerDetails;
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