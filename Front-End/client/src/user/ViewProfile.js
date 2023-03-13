import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewProfile() {
  // const [UserList, setUserList] = useState([]);
  // useEffect(() => {
  //   // if (
  //   //   localStorage.getItem("role") === "null" ||
  //   //   localStorage.getItem("role") != "3"
  //   // ) {
  //   //   window.location.href = "/login";
  //   // }
  //   getUserList();
  // }, []);

  // const getUserList = async () => {
  //   //const userid = { Cid: localStorage.getItem("Cid") };
  //   let id = localStorage.getItem("Cid");
  //  // console.log(userid);
  //   /* const response = await axios.get(
  //     "http://localhost:8081/getUserByRoleId",
  //     userid
  //   );
  //    setUserList(response.data);
  //   console.log(response.data);
  //   */

  //   axios.get(`http://localhost:8000/customers/id/${id}`).then(
  //     // axios.get(`http://localhost:8000/customers/id/1`).then(
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
  ////style={{ backgroundColor: "#7e41a5" }}

  const [user,setUser]=useState({
    cname:"",
    cphone:"",
    cemail:"",
    citypincode:""
});

const {cid}=useParams();

useEffect(()=>{

    loadUser();
},[]);

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8081/customers/id/${id}`)
        setUser(result.data)
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4 "> Donor Details</h2>
                <div className="card">
                    <div className="card-header">
                        My Profile id:{user.cid}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Name:</b>
                                {user.cname}
                            </li>
                            <li className="list-group-item">
                                <b>UserName:</b>
                                {user.cphone}
                            </li>
                            <li className="list-group-item">
                                <b>Email:</b>
                                {user.cemail}
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
