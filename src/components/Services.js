import React from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from './Title'


const Services = () => {
    const service = [
        {
            icon: <FaCocktail />,
            title: "free cocktail",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime!"
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime!"
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime!"
        },
        {
            icon: <FaBeer />,
            title: "srongest beer",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime!"
        }
    ]
  return (



    <section className="services">
        <Title title='services'/>
        <div className="services-center">
            {service.map((item, index) => {
                return(
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default Services