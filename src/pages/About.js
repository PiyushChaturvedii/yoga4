import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section class="section-about">
                    <div class="u-center-text u-margin-bottom-big">
                        <h2 class="heading-secondary">Amazing retreats for Yoga lovers</h2>
                    </div>

                    <div class="row">
                        <div class="col-1-of-2">
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Become one with nature
                            </h3>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                                alias autem? Eum, quam quia. Nesciunt dolore quibusdam architecto
                                laboriosam repudiandae nulla fugit. Quidem, voluptate alias
                                laborum sequi adipisci ipsa qui.
                            </p>
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Experience your spiritual awakening
                            </h3>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                                alias autem? Eum, quam quia. Nesciunt dolore quibusdam architecto
                                laboriosam.
                            </p>

                            <a href="#" class="btn-text">Learn more &rarr;</a>
                        </div>
                        <div class="col-1-of-2">
                            <div class="composition">
                                <img
                                    srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                                    sizes="(max-width: 900px) 17vw, (max-width: 600px) 25vw, 300px"
                                    alt="Photo 1"
                                    class="composition__photo composition__photo--p1"
                                    src="img/nat-1-large.jpg"
                                />

                                <img
                                    srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                                    sizes="(max-width: 900px) 17vw, (max-width: 600px) 25vw, 300px"
                                    alt="Photo 2"
                                    class="composition__photo composition__photo--p2"
                                    src="img/nat-2-large.jpg"
                                />

                                <img
                                    srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                                    sizes="(max-width: 900px) 17vw, (max-width: 600px) 25vw, 300px"
                                    alt="Photo 3"
                                    class="composition__photo composition__photo--p3"
                                    src="img/nat-3-large.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
