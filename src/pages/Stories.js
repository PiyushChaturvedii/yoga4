import React, { Component } from 'react'

export default class Stories extends Component {
    render() {
        return (
            <div>
                <section class="section-stories">
                    <div class="bg-video">
                        <video class="bg-video__content" autoplay muted loop>
                            <source src="img/video.mp4" type="video/mp4" />
                            <source src="img/video.webm" type="video/webm" />
                            Your browser is not supported!
                        </video>
                    </div>
                    <div class="u-center-text u-margin-bottom-big">
                        <h2 class="heading-secondary">What people say about us</h2>
                    </div>
                    <div class="row">
                        <div class="story">
                            <figure class="story__shape">
                                <img
                                    src="img/nat-8.jpg"
                                    alt="smiling woman in sitting prayer pose"
                                    class="story__img"
                                />
                                <figcaption class="story__caption">Alina Silva</figcaption>
                            </figure>
                            <div class="story__text">
                                <h3 class="heading-tertiary u-margin-bottom-small">
                                    I'll never forget this beautiful experience
                                </h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                                ipsum sapiente aspernatur libero repellat quis consequatur ducimus
                                quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
                                aspernatur libero repellat quis consequatur ducimus quam nisi
                                exercitationem omnis earum qui.
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="story">
                            <figure class="story__shape">
                                <img
                                    src="img/nat-9.jpg"
                                    alt="smiling woman in sitting prayer pose"
                                    class="story__img"
                                />
                                <figcaption class="story__caption">Summer Johnson</figcaption>
                            </figure>
                            <div class="story__text">
                                <h3 class="heading-tertiary u-margin-bottom-small">
                                    These amazing retreats have changed my life
                                </h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                                ipsum sapiente aspernatur libero repellat quis consequatur ducimus
                                quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
                                aspernatur libero repellat quis consequatur ducimus quam nisi
                                exercitationem omnis earum qui.
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="u-center-text u-margin-top-huge">
                        <a href="#" class="btn-text">Read more stories &rarr;</a>
                    </div>
                </section>
            </div>
        )
    }
}
