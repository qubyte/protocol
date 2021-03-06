'use strict';

module.exports = {
    $id: 'https://protocol.automationcloud.net/schema.json',
    domains: {
        Generic: require('./generic'),
        FlightBooking: require('./flight-booking'),
        VacationRental: require('./vacation-rental'),
        MotorInsurance: require('./motor-insurance'),
        EventBooking: require('./event-booking'),
        Internal: require('./internal'),
    },
};
