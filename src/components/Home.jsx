import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeCard from './CoffeCard';

const Home = () => {
    const coffe = useLoaderData()
    const [coffees, setCoffees] = useState(coffe)
    console.log(coffees);
    return (
        <div>
            <h2 className='text-4xl'>Coffe Bazar </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    coffe.map(singleCoffe => <CoffeCard
                        coffees={coffees}
                        setCoffees={setCoffees}
                        key={singleCoffe._id}
                        coffe={singleCoffe}
                    ></CoffeCard>)
                }
            </div>
        </div>
    );
};

export default Home;