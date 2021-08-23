import React from 'react';
import ReactDOM from 'react-dom';
import jdata from './data'

function Card(props) {
    
    return (

        <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs lg:order-none">
            <div>
            <img src={props.imgsrc} alt="Abstract Design" className="w-full h-40 sm:h-48 object-cover"></img>
            </div>
            <div className="py-5 px-6 sm:px-8">
                <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">{props.title}</h2>
                <p className="text-gray-500">Capital : <span className="font-semibold"> {props.sub} </span> </p>
            </div>
        </div>
            
    )

}

function ncard(value)
{
    return(

        <Card 
                imgsrc = {value.flag} 
                title = {value.name}
                sub = {value.capital}
            />

    )
}

ReactDOM.render(
    <>

        <div className="text-center text-3xl p-6 mb-12 bg-gray-200 rounded-md text-gray-500">List of Countries</div>

        <div className="min-h-screen max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">

            {jdata.map(ncard)}

        </div>
       
    </>
    
    ,document.getElementById('root'));

