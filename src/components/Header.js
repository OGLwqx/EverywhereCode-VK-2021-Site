import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className='header-nav'>
                <ul className='header-nav__list'>
                    <li className='header-nav__item'>Главная</li>
                    <li className='header-nav__item'>Услуги</li>
                    <li className='header-nav__item'>Связаться</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;