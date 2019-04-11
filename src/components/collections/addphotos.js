import React from 'react'
import useDataSubmit from '../../hooks/http/useDataSubmit';
import { photos_url } from '../../redux/actions/constants';
import Loader from '../common/loader';

const AddPhotos = ({addToast, addPhotoSuccess}) => {

    const { setReq, res } = useDataSubmit(
        (data) => {
            addPhotoSuccess(data);
        },
        (data) => {
            addToast(data, false);
        }
    );

    //handle file input change
    const handleChange = (e) => {
        const files = [...e.target.files];
        if(files.length > 0){
            const photo = files[0];
            //check if file size less than 20MB
            if(photo.size > 20971520){
                addToast("Image size must be less than 20MB", false);
                return;
            }
            let postData = new FormData();
            postData.append("photo", photo);
            setReq(x => ({
                ...x,
                count: x.count + 1,
                config: { 
                    url: photos_url,
                    method: "POST", 
                    data: postData,
                    crossDomain: true,
                    contentType: false,
                    processData: true
                }
            }))
        }
    }

    return (
        <label
            className="image-upload-section flex-center text-center"
            htmlFor="addPhoto"
        >
            { 
                res.fetching ? 
                <Loader /> :
                <div>
                    <input 
                        id="addPhoto" 
                        name="photo" 
                        onChange={handleChange}
                        style={{ display: `none` }} 
                        type="file" 
                        accept="image/*"
                    />
                    <i className="fa fa-plus"></i>
                    <p>Add new photograph</p>
                </div>
            }
        </label>
    )
}

export default AddPhotos