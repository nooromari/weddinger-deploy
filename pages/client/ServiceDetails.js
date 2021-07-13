

import React from "react";
import Service from "../../components/service";
import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'
import {services_venues} from '../../data'
import ServiceDetails from '../../components/ServiceDetailsComponent'

export default () => {

  return (
    <div className="flex flex-col justify-between h-screen">
        <WeddHead title="Details" />
        < Header />
        <ServiceDetails services_venues={services_venues} />
        < Footer />
    </div>
    
  );
};

