import axios from "axios";

export const getUserData = async (status) => {
    return await axios
    .get(`http://localhost:8080/getUsers/${status}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        console.log(response);
        return response.data ;
      });
  };

  export const updateUserStatus = async (data) => {
    return await axios
      .post(
        'http://localhost:8080/updateUser/',
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(response => {
          return response.data
      })
  }