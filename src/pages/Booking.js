import React, { Component } from 'react'

export default class Booking extends Component {
    render() {
        return (
            <div>
                <section class="section-booking">
                    <div class="row">
                        <div class="booking">
                            <div class="booking__form">
                                <form action="#" class="form">
                                    <div class="u-margin-bottom-medium">
                                        <h2 class="heading-secondary">Start booking now</h2>
                                    </div>
                                    <div class="form__group">
                                        <input
                                            type="text"
                                            class="form__input"
                                            placeholder="Full name"
                                            id="name"
                                            required
                                        />
                                        <label for="name" class="form__label">Full name</label>
                                       
                                    </div>
                                    <div class="form__group">
                                        <input
                                            type="email"
                                            class="form__input"
                                            placeholder="Email address"
                                            id="email"
                                            required
                                        />
                                        <label for="email" class="form__label">Email address</label>
                                    </div>

                                    <div class="form__group u-margin-bottom-medium">
                                        <div class="form__radio-group">
                                            <input
                                                type="radio"
                                                class="form__radio-input"
                                                id="first"
                                                name="experience"
                                            />
                                            <label for="first" class="form__radio-label">
                                                <span class="form__radio-button"></span>
                                                First-timer</label
                                            >
                                        </div>

                                        <div class="form__radio-group">
                                            <input
                                                type="radio"
                                                class="form__radio-input"
                                                id="not-first"
                                                name="experience"
                                            />
                                            <label for="not-first" class="form__radio-label">
                                                <span class="form__radio-button"></span>
                                                Experienced</label
                                            >
                                        </div>
                                    </div>

                                    <div class="form__group"></div>
                                    <button class="btn btn--orange">Continue &rarr;</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
