import axios from "axios";

const doLogin = async () => {
  const array = [];
  for (let x = 0; x < 100000; x++) {
    array.push(x);
  }
  console.log("Login");
};

export const getUserData = async (setUserData) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        headers: {
          Authorization: "Bearer ",
          "x-api-key": "sadjklashdjkashdasjkhda",
        },
      }
    );

    setUserData(data);
  } catch (error) {}
};
