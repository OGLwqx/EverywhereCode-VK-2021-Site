import React from 'react';

const Main = () => {
    return (
        <section className='main'>
            <div className="main__heading">
                <h1 className="main__header">b3bra dev<br />- мы создаём будущее</h1>
            </div>
            <div className="main__persons">
                <div className="person-card">
                    <div className="person-card__heading">
                        <span className='person-card__person-name'>Данил Кочергин</span> - лидер команды
                    </div>
                    <div className="person-card__description">
                        Крайне ответственный и инициативный человек. Веб разработка у него в крови, эта профессия передалась ему от отца, а тому в свою очередь от своего отца, а этому уже вроде как от матери. Обходит препятствия на пути к решению проблемы на столько хорошо, что боится как бы не обойти само решение проблемы.
                    </div>
                </div>
                <div className="person-card">
                    <div className="person-card__heading">
                        <span className='person-card__person-name'>Сергей Сырцилин</span> - лидер команды №2
                    </div>
                    <div className="person-card__description">
                        Ещё с раннего детства хотел сотворить что-то своё, что-то великое. К сожалению в реальном мире для этого нужны большие средства, а виртуальный сайт, как ему казалось, сделать куда проще. Но вскоре обнаружелось что нужен напарник. Насмотревшись на успех выше описанного Данила (не путать с Даниилом) он решил связать свою жизнь с этой сферой (и немного даже с Данилом)
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;