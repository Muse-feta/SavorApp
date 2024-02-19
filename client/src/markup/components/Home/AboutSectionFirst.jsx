import React from 'react'

const AboutSectionFirst = () => {
  return (
    <div>
      <div class="abt-section mb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="abt-bg">
                <a
                  href="https://www.youtube.com/watch?v=DBLlFWYcIGQ"
                  class="video-play-btn popup-youtube"
                >
                  <i class="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="abt-text">
                <p class="top-sub">Since Year 1999</p>
                <h2 className=' font-extrabold text-5xl'>
                  We are <span class="orange-text">Savor</span>
                </h2>
                <p>
                  Etiam vulputate ut augue vel sodales. In sollicitudin neque et
                  massa porttitor vestibulum ac vel nisi. Vestibulum placerat
                  eget dolor sit amet posuere. In ut dolor aliquet, aliquet
                  sapien sed, interdum velit. Nam eu molestie lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente facilis illo repellat veritatis minus, et labore
                  minima mollitia qui ducimus.
                </p>
                <a href="about.html" class="boxed-btn mt-4">
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionFirst