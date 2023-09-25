import React, { useState } from "react";
import List from "../common/list";
import { Link } from "react-router-dom";
import useDataSubmit from "../../hooks/http/useDataSubmit";
import LoadingBtn from "../common/loadingbtn";
import { photos_url } from "../../redux/actions/constants";
import { LabelIp } from "./contest";

const RequestModal = ({
  photo,
  categories,
  isContest,
  user,
  addPhotoSuccess,
  addToast,
  closeModal,
}) => {
  //terms
  const [terms, setTerms] = useState(false);

  //location
  const [location, setLocation] = useState(photo.location || "");

  //caption
  const [caption, setCaption] = useState(photo.caption || "");

  //camera_used
  const [camera_used, setCamera_used] = useState(photo.camera_used || "");

  //select category
  const [category, setCategory] = useState(photo.categories_id || "");

  // image type
  const [is_digital_art, setIs_digital_art] = useState(
    photo.is_digital_art || false
  );

  const { res, setReq } = useDataSubmit(
    (data) => {
      addPhotoSuccess(data);
      closeModal();
      addToast("Photo Submitted");
    },
    (data) => {
      addToast(data, false);
    }
  );

  return (
    <div className="container-fluid w-100">
      <div className="row">
        <div className="col-md-6 pr-md-2 pl-md-0">
          <div className="pay-prev-img">
            <img src={photo.thumbnail} alt="" />
          </div>
          <div>
            <div className="d-flex align-items-center form-group mb-2">
              <input
                type="checkbox"
                id="termsIp"
                checked={terms}
                className="mr-2"
                onChange={() => {
                  setTerms((term) => !term);
                }}
              />
              <span className="f-14 d-flex align-items-center">
                I agree to all{" "}
                <Link
                  className="theme-red ml-1"
                  to="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
              </span>
            </div>
            <p className="f-12 mb-1">
              You have {user.userprofile.points} points left.
            </p>
            <p className="f-10 theme-red">
              Note: Categories and photos cannot be changed after submission
            </p>
          </div>
        </div>
        <div className="col-md-6 pl-md-2 pr-md-0">
          <label className="f-14">Choose a Option *</label>
          <div className="d-flex mb-2">
            <div className="form-check mr-3">
              <input
                className="form-check-input"
                type="radio"
                checked={!is_digital_art}
                name="is_digital_art"
                id="intPhotographs"
                onChange={() => {
                  setIs_digital_art((term) => !term);
                }}
              />
              <label className="f-14" htmlFor="intPhotographs">
                Photographs
              </label>
            </div>
            <div className="form-check mr-3">
              <input
                className="form-check-input"
                type="radio"
                checked={is_digital_art}
                name="is_digital_art"
                id="intDigitalArt"
                onChange={() => {
                  setIs_digital_art((term) => !term);
                }}
              />
              <label className="f-14" htmlFor="intDigitalArt">
                Digital Art
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="f-14">Category </label>
            <select
              value={category}
              onChange={({ target }) => setCategory(target.value)}
              className="form-control f-14"
            >
              <List
                RenderItem={({ name, id }) => (
                  <option value={id}>{name}</option>
                )}
                title="cats"
                list={[{ id: "", name: "Change Category" }, ...categories.data]}
              />
            </select>
          </div>
          {is_digital_art === false ? (
            <LabelIp
              label="Camera Used"
              value={camera_used}
              onChange={(val) => setCamera_used(val)}
            />
          ) : (
            ""
          )}
          {is_digital_art === false ? (
            <LabelIp
              label="Location (optional)"
              value={location}
              onChange={(val) => setLocation(val)}
            />
          ) : (
            ""
          )}
          <LabelIp
            label="Caption (optional)"
            value={caption}
            onChange={(val) => setCaption(val)}
          />
        </div>
        <div className="col-md-12 p-md-0">
          <div>
            {user.userprofile && user.userprofile.points ? (
              <div className="form-group">
                <LoadingBtn
                  disabled={category && photo && terms && (is_digital_art || (camera_used && location)) ? false : true}
                  fetching={res.fetching}
                  className="btn btn-theme btn-block"
                  title="Submit"
                  onClick={() => {
                    setReq((x) => ({
                      ...x,
                      count: x.count + 1,
                      config: {
                        url: photos_url + "photo_submit/",
                        method: "POST",
                        data: [
                          {
                            categories: category,
                            location,
                            is_digital_art,
                            photo: photo.id,
                            camera_used,
                            caption,
                          },
                        ],
                      },
                    }));
                  }}
                />
              </div>
            ) : (
              <div className="form-group">
                <Link to="/upgrade" className="btn btn-theme btn-block">
                  Pay and Submit
                </Link>
              </div>
            )}
          </div>
          {isContest && (
            <div className="form-group">
              <Link
                to="/my-profile/enter-to-contest"
                className="btn f-14 btn-primary btn-block"
              >
                Add more photos
              </Link>
            </div>
          )}
          {isContest && (
            <div className="form-group">
              <Link
                to="/my-profile/private-photographs"
                className="btn f-14 btn-danger btn-block"
              >
                Submit Later
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
