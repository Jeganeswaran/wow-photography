import React from "react";
import Post from "./post";
import { connect } from "react-redux";
import DynamicList from "../common/dynamiclist";
import { OpenImg } from "../modals/modalbtns";

const WinnerUser = ({ title, sub_description, image }) => {
  return (
    <div className="post">
     
      {image&& <div className="post-img-holder">
        <div className="post-img">
          <OpenImg modalProps={{ image: image }} src={image} alt={""} />
        </div>
      </div>}

      
      
      <div className="p-1 text-center"><div className="f-600 f-16">{title}</div> {sub_description}</div>
    </div>
  );
};

const WinnerCategory = ({ title, sub_description, users, fetching }) => {
  return (
    <div className="post-section bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="montserrat f-700 theme-red">{title}</h2>
          <p className="poppins">({sub_description})</p>
        </div>
        <div className="row">
          <DynamicList
            RenderItem={(props) => (
              <div className="col-md-4">
                <WinnerUser {...props} />
              </div>
            )}
            title="wow-picks"
            list={users}
            fetching={fetching}
          />
        </div>
      </div>
    </div>
  );
};

const WowWinners = ({ fetching, wow_winners }) => {
  return (
    <DynamicList
      RenderItem={(props) => (
        <div className="">
          <WinnerCategory {...props} />
        </div>
      )}
      title="wow-picks"
      list={wow_winners}
      fetching={fetching}
    />
  );
};

const mapStateToProps = ({ landing_page }) => ({
  wow_winners: landing_page.data.wow_winners || [],
  fetching: landing_page.fetching,
});

export default connect(mapStateToProps)(WowWinners);
