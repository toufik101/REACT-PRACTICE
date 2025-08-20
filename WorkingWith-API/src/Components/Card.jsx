import React from 'react';

const Card = ({meals}) => {
    return (
        <div>
            <section className=' bg-white rounded-lg shadow-md overflow-hidden'>
                <img src={meals.strMealThumb}alt="meals" className='w-full h-48 md:h-56 object-cover hover:scale-105 transition-all duration-200 cursor-pointer'/>

                <div className='px-2 py-3'>
                    <h2 className='text-lg font-bold text-gray-800' >{meals.strMeal}</h2>
                    <p className='text-sm  text-gray-600 mt-2'> {meals.strInstructions.slice(0,100)}...... </p>
                    <a href="#" className='block mt-4 text-blue-400 hover:underline '> Learn More </a>
                </div>
            </section>
        </div>
    );
};

export default Card;