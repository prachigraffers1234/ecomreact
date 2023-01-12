import React, { useEffect, useState } from "react";
import UserHeader from "../UserHeader/UserHeader";
import profilepic from "../../images/proimg.png";
import "./Myprofile.css";
import axios from "axios";
import {
  FaEdit,
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { Base_url } from "../Vendor/env";

export default function Myprofile() {
  const url = Base_url;
  const [profileImg, setProfileImg] = useState(profilepic);
  const [path, setPath] = useState();
  const [myProfile, setMyProfile] = useState({
    fullname: "",
    address: "",
    email: "",
    contactnum: "",
    profileImage: "",
  });
  const handleChange = (e) => {
    setMyProfile({ ...myProfile, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    // setData1({ })
    setProfileImg(URL.createObjectURL(e.target.files[0]));

    myProfile((pre) => {
      pre = { ...pre, profile: e.target.files[0] };
      return pre;
    });
    console.log(e.target.files);
  };

  useEffect(() => {
    let header = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .post(url + "/getUserDetails", {}, { header: header })
      .then((val) => {
        let value = val.data.result;
        setPath(
            value.profileImage
              ? "data:image/png;base64, " + value.profileImage
              : profileImg
          );
          console.log(value.profileImage);
        setMyProfile({
          fullname: value.name,
          address: value.address,
          email: value.email,
          contactnum: Number(value.mobile),
          profile: value.profileImage ? value.profileImage : profileImg,

        });
      }, [])
      .catch();

    // alert("submitted")
    // e.preventDefault()
    // localStorage.setItem("profileData", JSON.stringify(payload))
  });

  function profileSave(e) {
    e.preventDefault();
    let payload = {
      name: myProfile.fullname,
      address: myProfile.address,
      email: myProfile.email,
      mobile: Number(myProfile.contactnum),
    };
  }

  return (
    <section>
      <UserHeader />
      <div className="profilefullpg">
        <div className="more-size">
          <div className="profilepg">
            <div className="proleft">
              <div>
                <h1>My profile</h1>
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                </ul>
              </div>
            </div>
            <div className="proright">
              <div className="probox">
                <div className="profilediv">
                  <div className="profileimg">
                    <img src={path} />
                  </div>
                  <div>
                    <h2>Name</h2>
                    <h5>Email</h5>
                  </div>
                </div>
                <div className="mypro">
                  <h6>My profile</h6>
                  <form>
                    <div className="profilefrm">
                      <p>
                        <span>
                          <FaUserCircle />
                        </span>
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="fullname"
                          value={myProfile.fullname}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <i>
                          <FaEdit />
                        </i>
                      </p>
                      <p>
                        <span>
                          <FaUserCircle />
                        </span>
                        <input
                          type="text"
                          placeholder="Address"
                          name="address"
                          value={myProfile.address}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <i>
                          <FaEdit />
                        </i>
                      </p>
                      <p>
                        <span>
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={myProfile.email}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <i>
                          <FaEdit />
                        </i>
                      </p>
                      <p>
                        <span>
                          <FaPhone />
                        </span>
                        <input
                          type="number"
                          placeholder="Phone Number"
                          name="contactnum"
                          value={myProfile.contactnum}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <i>
                          <FaEdit />
                        </i>
                      </p>
                      <p>
                        <span>
                          <FaLock />
                        </span>
                        <input
                          type="file"
                          onChange={handleImage}
                        />
                        <i>
                          <FaEdit />
                        </i>
                      </p>
                      <input
                        type="submit"
                        value="Save Changes"
                        className="savebtn"
                        onClick={profileSave}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
