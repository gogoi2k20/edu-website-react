import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "26cff644-dbbb-40a2-85f5-e770e4b503ff");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>
                    Send Us a Message
                    <img src={message_icon} />
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et reprehenderit officia provident ex, quisquam vel quos doloremque esse fugiat dolor pariatur aliquam nostrum architecto qui sit magni ea aliquid.
                    ossimus, voluptatem ratione! Vel est explicabo nihil repellat iste fugit, non delectus atque, veritatis ipsum sunt tempora.
                </p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> contact@university.com</li>
                    <li> <img src={phone_icon} alt="" /> +91 7884560000</li>
                    <li> <img src={location_icon} alt="" /> University of Science</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>
                        Your name
                    </label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>
                        Phone number
                    </label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>
                        Write your message here
                    </label>
                    <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact