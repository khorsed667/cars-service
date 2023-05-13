import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {

    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="text-center my-8">
            <div className="space-y-4">
                <h3 className="font-bold text-orange-500 text-xl">Service</h3>
                <p className="font-bold text-4xl">Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(serve => <ServiceCard
                        key={serve._id}
                        serve={serve}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;