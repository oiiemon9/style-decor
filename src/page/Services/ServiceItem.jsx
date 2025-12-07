import React from 'react';
import { Link } from 'react-router';

const ServiceItem = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="aspect-square">
        <img
          className="h-full w-full object-cover"
          src={service.serviceImage}
          alt={service.serviceTitle}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.serviceTitle}</h2>
        <p>{service.location}</p>
        <h2 className="text-lg font-bold">
          ${service.price}{' '}
          <span className="text-xs font-normal">{service.unit}</span>
        </h2>
        <div className="card-actions justify-end">
          <Link to={`/services/${service._id}`} className="btn">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

// {"_id":{"$oid":"6934fd554975e2cb41747c96"},"serviceTitle":"wadding plan","price":"50","category":"wedding","unit":"per-floor","serviceImage":"https://i.ibb.co/hF3Dk5M5/unnamed-24.png","description":"sdfsdfsfefsfsdf","createdAt":{"$date":{"$numberLong":"1765080405219"}}}
