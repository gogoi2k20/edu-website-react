import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef()
    let tx = 0

    const slideForward=()=>{
        if(tx > -50){
            tx-=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx <0){
            tx+=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_1} />
                                <div>
                                    <h3>William Jackson 1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem deserunt nulla sit, repellendus eos doloribus tempora ab facere accusamus iste libero totam nesciunt quos odio perspiciatis facilis, ex alias sapiente.
                                Numquam ipsum accusamus perferendis harum quibusdam labore voluptates et dolores provident ullam. Neque alias, possimus doloremque et eum id fugit. Blanditiis ab aliquid asperiores rem ratione, sunt repellendus debitis ducimus.
                                e iure. Numquam ipsum harum maiores, adipisci quisquam laboriosam saepe ea nisi asperiores earum, hic nulla quidem eos, magni placeat?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_2} />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem deserunt nulla sit, repellendus eos doloribus tempora ab facere accusamus iste libero totam nesciunt quos odio perspiciatis facilis, ex alias sapiente.
                                Numquam ipsum accusamus perferendis harum quibusdam labore voluptates et dolores provident ullam. Neque alias, possimus doloremque et eum id fugit. Blanditiis ab aliquid asperiores rem ratione, sunt repellendus debitis ducimus.
                                e iure. Numquam ipsum harum maiores, adipisci quisquam laboriosam saepe ea nisi asperiores earum, hic nulla quidem eos, magni placeat?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_3} />
                                <div>
                                    <h3>William Jackson 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem deserunt nulla sit, repellendus eos doloribus tempora ab facere accusamus iste libero totam nesciunt quos odio perspiciatis facilis, ex alias sapiente.
                                Numquam ipsum accusamus perferendis harum quibusdam labore voluptates et dolores provident ullam. Neque alias, possimus doloremque et eum id fugit. Blanditiis ab aliquid asperiores rem ratione, sunt repellendus debitis ducimus.
                                e iure. Numquam ipsum harum maiores, adipisci quisquam laboriosam saepe ea nisi asperiores earum, hic nulla quidem eos, magni placeat?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_4} />
                                <div>
                                    <h3>William Jackson 4</h3>
                                    <span>Edusity, USA</span>
                                </div>

                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem deserunt nulla sit, repellendus eos doloribus tempora ab facere accusamus iste libero totam nesciunt quos odio perspiciatis facilis, ex alias sapiente.
                                Numquam ipsum accusamus perferendis harum quibusdam labore voluptates et dolores provident ullam. Neque alias, possimus doloremque et eum id fugit. Blanditiis ab aliquid asperiores rem ratione, sunt repellendus debitis ducimus.
                                e iure. Numquam ipsum harum maiores, adipisci quisquam laboriosam saepe ea nisi asperiores earum, hic nulla quidem eos, magni placeat?
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials