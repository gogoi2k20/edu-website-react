import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt='' className='about-img' />
                <img src={play_icon} alt='' className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, excepturi incidunt? Illum corporis sed itaque
                    repudiandae nisi eius consequatur officiis quas, nobis
                    reprehenderit rem odit magnam quidem adipisci vitae esse!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus deleniti saepe id. Nobis doloremque quibusdam omnis quas.
                    Atque minima provident eum architecto, similique nesciunt sed,
                    voluptas odit ratione, deleniti repellat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, excepturi incidunt? Illum corporis sed itaque
                    repudiandae nisi eius consequatur officiis quas, nobis
                    reprehenderit rem odit magnam quidem adipisci vitae esse!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus deleniti saepe id. Nobis doloremque quibusdam omnis quas.
                    Atque minima provident eum architecto, similique nesciunt sed,
                    voluptas odit ratione, deleniti repellat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, excepturi incidunt? Illum corporis sed itaque
                    repudiandae nisi eius consequatur officiis quas, nobis
                    reprehenderit rem odit magnam quidem adipisci vitae esse!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus deleniti saepe id. Nobis doloremque quibusdam omnis quas.
                    Atque minima provident eum architecto, similique nesciunt sed,
                    voluptas odit ratione, deleniti repellat.
                </p>
            </div>
        </div>
    )
}

export default About