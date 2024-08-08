import React from "react";
import videoHomepage from "../../assets/video-homepage.mp4";

const Hompage = (props) => {
  return (
    <div className="homepage-container">
        
    
      <div className="home-main">
        {/* Homepaeg-video */}
        <div className="hompage-video">
          <video autoPlay muted loop>
            <source src={videoHomepage} type="video/mp4" />
          </video>
        </div>

        {/* Homepage-content */}
        <div className="hompage-content">
          <h1 className="content-title">Make forms worth filling out</h1>
          <div className="content-des">
            Get more data—like signups, feedback, and anything else—with forms
            designed to be <b>refreshingly different</b>.
          </div>
          <div className="content-btn ">
            <button className="content-btn-btn">Get started—it's free</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hompage;

//======================================================\\
/* Tag : <video width="750" height="500" controls >
       <source src="" type="video/mp4"/>
       </video>

       - controls : hiện thanh play , stop ... trong video.
       - autoPlay : cho video tự chạy.
       - muted : tắt âm lượng video.
       - loop : setup video chạy vô hạn.
*/
