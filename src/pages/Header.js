import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div class="navbar">
                    <input type="checkbox" class="navbar__checkbox" id="navbar-toggle" />
                    <label for="navbar-toggle" class="navbar__button">
                        <span class="navbar__icon">&nbsp;</span>
                    </label>
                    <div class="navbar__background">&nbsp;</div>
                    <nav class="navbar__nav">
                        <ul class="navbar__list">
                            <li class="navbar__item">
                                <a href="#" class="navbar__link"
                                ><span>01</span>About Body & Mind</a
                                >
                            </li>
                            <li class="navbar__item">
                                <a href="#" class="navbar__link"><span>02</span>Your benefits</a>
                            </li>
                            <li class="navbar__item">
                                <a href="#" class="navbar__link"><span>03</span>Popular tours</a>
                            </li>
                            <li class="navbar__item">
                                <a href="#" class="navbar__link"><span>04</span>Stories</a>
                            </li>
                            <li class="navbar__item">
                                <a href="#" class="navbar__link"><span>05</span>Book now</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <header class="header">
                    <div class="header__logo-box">
                        <img src="img/logo-white.png" alt="Logo" class="header__logo" />
                    </div>
                    <div class="header__text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary__text--main"> body & mind</span>
                            <span class="heading-primary__text--sub"
                            >discover yourself and find inner peace</span
                            >
                        </h1>
                        <a href="#" class="btn btn--white btn--animated">Our Yoga Retreats</a>
                    </div>
                </header>

            </div>
        )
    }
}
