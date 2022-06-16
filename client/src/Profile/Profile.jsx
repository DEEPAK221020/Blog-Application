import "./profile.css";
// import Sidebar from "../../components/sidebar/Sidebar";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import axios from "axios";

export default function Profile() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setname] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    
    axios.get('http://localhost:8000/profile').then(res=>{
        console.log(res);
    })
    
  }, []);
// imp      
//   const { user, dispatch } = useContext('');
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch({ type: "UPDATE_START" });
    // const updatedUser = {
    //   userId: user._id,
    //   username,
    //   email,
    //   password,
    // };

//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append("name", filename);
//       data.append("file", file);
//       updatedUser.profilePic = filename;
//       try {
//         await axios.post("/upload", data);
//       } catch (err) {}
//     }
//     try {
//       const res = await axios.put("/users/" + user._id, updatedUser);
//       setSuccess(true);
//       dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
//     } catch (err) {
//       dispatch({ type: "UPDATE_FAILURE" });
    // }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {/* <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            /> */}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Name</label>
          <input
            type="text"
            // placeholder={user.username}
            onChange={(e) => setname(e.target.value)}
          />
          <label>Username</label>
          <input
            type="text"
            // placeholder={user.email}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          <Link to='/'style={{ marginBottom: 50 , textAlign: 'center' }}><button className="settingsSubmit" > Go Back </button></Link>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}