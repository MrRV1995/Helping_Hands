import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewProfile() {
  // const [UserList, setUserList] = useState([]);
  // useEffect(() => {
  //   // if (
  //   //   localStorage.getItem("role") === "null" ||
  //   //   localStorage.getItem("role") != "2"
  //   // ) {
  //   //   window.location.href = "/login";
  //   // }
  //   getUserList();
  // }, []);
  // // getUserList();
  // const getUserList = async () => {
  //   //const userid = { userId: localStorage.getItem("userid") };
  //   // let userid = localStorage.getItem("userid");
  //   let rid = localStorage.getItem("Rid");
  //   //console.log(userid);
  //   /* const response = await axios.get(
  //     "http://localhost:8081/getUserByRoleId",
  //     userid
  //   );
  //    setUserList(response.data);
  //   console.log(response.data);
  //   */
  //   // let userid=6
  //   axios.get(`http://localhost:8000/donors/id/1`).then(
  //     (response) => {
  //       console.log(response.data);
  //       setUserList([{ ...response.data }]);
  //     },
  //     (error) => {
  //       console.log(error.data);
  //       //toast.error("Error deleting project.. Try Again");
  //     }
  //   );
  // };
  // ////style={{ backgroundColor: "#7e41a5" }}
  // return (
  //   <body class="view">
  //     <div className="container col-12 viewuser">
  //       <h1 className="text-center text-light">My Profile</h1>
  //       <table className="table hover">
  //         <thead>
  //           <tr className></tr>
  //         </thead>
  //         <tbody>
  //           {UserList.map((user) => {
  //             return (
  //               <>
  //                  <tr>
  //                   <td>Name :</td>
  //                   <td>{user.rname}</td>
  //                 </tr>
  //                 <tr>
  //                   <td>Address :</td>
  //                   <td>{user.raddr}</td>
  //                 </tr>
  //                 <tr>
  //                   <td>Phone :</td>
  //                   <td>{user.rphone}</td>
  //                 </tr>
  //                 <tr>
  //                   <td>Email :</td>
  //                   <td>{user.remail}</td>
  //                 </tr>
  //                 <tr>
  //                   <td>City :</td>
  //                   <td>{user.citypincode}</td>
  //                 </tr>
  //               </>
  //             );
  //           })}
  //           ;
  //         </tbody>
  //       </table>
  //     </div>
  //   </body>
  // );

  const [user,setUser]=useState({
    rname:"",
    rphone:"",
    remail:"",
    citypincode:""
  });
  
  const {rid}=useParams();
  
  useEffect(()=>{
  
    loadUser();
  },[]);
  
    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8081/donor/id/${rid}`)
        setUser(result.data)
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4 "> Donor Details</h2>
                <div className="card">
                    <div className="card-header">
                        My Profile id:{user.rid}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Name:</b>
                                {user.rname}
                            </li>
                            <li className="list-group-item">
                                <b>UserName:</b>
                                {user.rphone}
                            </li>
                            <li className="list-group-item">
                                <b>Email:</b>
                                {user.remail}
                            </li>
                        </ul>
                    </div>
                </div>
             
                </div>
                </div>
                </div>
  );
}

export default ViewProfile;
