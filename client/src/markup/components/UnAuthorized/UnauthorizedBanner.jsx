import React from "react";

const UnauthorizedBanner = () => {
  return (
    <div>
      <div>
        <div>
          <div class="breadcrumb-section breadcrumb-bg">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 text-center">
                  <div class="breadcrumb-text">
                    <p>Fresh and Organic</p>
                    <h1>
                      😕 Opps! You are not authorized to access this page.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedBanner;