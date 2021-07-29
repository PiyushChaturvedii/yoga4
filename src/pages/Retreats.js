import React, { Component } from 'react'

export default class Retreats extends Component {
    render() {
        return (
            <div>
                <section class="section-retreats">
                    <div class="u-center-text u-margin-bottom-big">
                        <h2 class="heading-secondary">Most popular retreats</h2>
                    </div>
                    <div class="row">
                        <div class="col-1-of-3">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--1">&nbsp;</div>
                                    <h4 class="card__heading">
                                        <span class="card__heading-span card__heading-span--1"
                                        >The healing heart</span
                                        >
                                    </h4>
                                    <div class="card__details">
                                        <ul>
                                            <li>7 days retreat</li>
                                            <li>Up to 18 people</li>
                                            <li>Daily vegan meals</li>
                                            <li>Spiritual healing workshop</li>
                                            <li>Yoga level: beginner</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back card__side--back-1">
                                    <div class="card__cta">
                                        <div class="card__price-box">
                                            <p class="card__price-current">Currently</p>
                                            <p class="card__price-value">$800</p>
                                        </div>
                                        <a href="#" class="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1-of-3">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--2">&nbsp;</div>
                                    <h4 class="card__heading">
                                        <span class="card__heading-span card__heading-span--2"
                                        >The four elements</span
                                        >
                                    </h4>
                                    <div class="card__details">
                                        <ul>
                                            <li>7 days retreat</li>
                                            <li>Up to 16 people</li>
                                            <li>Daily vegan meals</li>
                                            <li>Ayurveda cooking workshop</li>
                                            <li>Yoga level: intermediate</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back card__side--back-2">
                                    <div class="card__cta">
                                        <div class="card__price-box">
                                            <p class="card__price-current">Currently</p>
                                            <p class="card__price-value">$1050</p>
                                        </div>
                                        <a href="#" class="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1-of-3">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--3">&nbsp;</div>
                                    <h4 class="card__heading">
                                        <span class="card__heading-span card__heading-span--3"
                                        >The Beauty Within</span
                                        >
                                    </h4>
                                    <div class="card__details">
                                        <ul>
                                            <li>10 days retreat</li>
                                            <li>Up to 12 people</li>
                                            <li>Daily vegan meals</li>
                                            <li>2 days silent Vipassana</li>
                                            <li>Yoga level: Advanced</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back card__side--back-3">
                                    <div class="card__cta">
                                        <div class="card__price-box">
                                            <p class="card__price-current">Currently</p>
                                            <p class="card__price-value">$1500</p>
                                        </div>
                                        <a href="#" class="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="u-center-text u-margin-top-huge">
                        <a href="#" class="btn btn--orange">See all retreats</a>
                    </div>
                </section>
            </div>
        )
    }
}
