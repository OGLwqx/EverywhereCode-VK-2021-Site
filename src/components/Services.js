import React from 'react';

const Services = () => {
    return (
        <section className='services'>
            <h1 className="heading">НАШИ УСЛУГИ</h1>
            <div className="services__cards">
                <div className="service-card">
                    <div className="service-card__header">
                        Сайты
                    </div>
                    <div className="service-card__content">
                        Ну а кто сейчас без сайта? Предпрениматель без сайта как рыбак без прикормки.
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card__header">
                        Мини-приложения VK
                    </div>
                    <div className="service-card__content">
                        Перспективнейшая отрасль, много потенциальных пользователей, малая конкуренция.
                    </div>
                </div>
                
                <div className="service-card">
                    <div className="service-card__header">
                        Скрипты
                    </div>
                    <div className="service-card__content">
                        Если что-то можно автоматизировать, то это нужно автоматизировать, что мы и сделаем.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;