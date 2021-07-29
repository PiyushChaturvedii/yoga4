import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
               
                    <div class="row">
                        <div class="col-1-of-3">
                            <div class="footer__navigation">
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">About us</a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Contact</a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-1-of-3">
                            <div class="footer__logo-box">
                               
                                    <img
                                        srcset="img/logo-orange-1x.png 1x, img/logo-orange-2x.png 2x"
                                        alt="Full logo"
                                        class="footer__logo-box--img"
                                        src="img/logo-orange-2x.png 2x"
                                    />
                                  
                            </div>
                        </div>
                        <div class="col-1-of-3">
                            <div class="footer__navigation">
                                <ul class="footer__icon-list">
                                    <li class="footer__item">
                                        <a href="#" class="footer__icon-link"
                                        ><i
                                            class="flaticon-facebook-circular-logo footer__icon-link--facebook"
                                        ></i
                                            ></a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__icon-link"
                                        ><i
                                            class="flaticon-instagram-3 footer__icon-link--instagram"
                                        ></i
                                            ></a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__icon-link"
                                        ><i
                                            class="flaticon-pinterest-circular-logo-symbol footer__icon-link--pinterest"
                                        ></i
                                            ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
