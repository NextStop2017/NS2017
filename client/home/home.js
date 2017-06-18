import React from "react";

export const Home = () => {
  var divStyle = {
    marginBottom:30,
  };
  return (
    <div>
      <div style={divStyle}>
        <img src={"http://lovely-pepa.com/wp-content/uploads/2017/06/ITALIA2-28-1920x760.jpg"} className="img-fluid"/>
      </div>
      <div>
        <center><h1>旅想地</h1></center>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={"http://lovely-pepa.com/wp-content/uploads/2017/06/ITALIA2-28-1920x760.jpg"} className="img-thumbnail"/>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
