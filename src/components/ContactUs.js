import React from 'react';

const ContactUs = () => {
    return (
        <section className='contact-us'>
            <div className="container">
                <div className="heading">Как с нами связаться?</div>
                <div className='contact-vk contacts-subheading'>Вконтакте:</div>
                <div className="contacts">
                    <div>
                        <span className="contact-name">Данил Кочергин</span> - <a href="https://vk.com/danil_he" className='contact-link' target="_blank">@danil_he</a>
                    </div>
                    <div>
                        <span className="contact-name">Сырцилин Сергей</span> - <a href="https://vk.com/kolbasa2004" className='contact-link' target="_blank">@kolbasa2004</a>
                    </div>
                </div>
                <div className="contact-email contacts-subheading">Email:</div>
                <div className="contacts">
                    <span className="contact-name">Сырцилин Сергей</span> - <span className="contact-link">sergey.sirtsilin@gmail.com</span>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;