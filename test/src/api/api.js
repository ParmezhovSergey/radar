import axios from "axios";

const url = "http://89.191.225.217/api/";

export async function getProducts(page) {
  try {
    const response = await axios.get(
      `http://89.191.225.217/api/get_products?page=${page}&limit=10`
    );
    const data = response.data;
    // localStorage.setItem("data", JSON.stringify(data.products));
    console.log("get", data);
    return data;
  } catch (e) {
    return "error";
  }
}

export async function signUp(user) {
  const { name, pass, fullName } = user;
  console.log("response", user);
  try {
    const response = await axios.post(
      "http://89.191.225.217/api/sign_up",
      { username: name, password: pass, full_name: fullName },
      {
        // withCredentials: true,
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    console.log("response:", data);
    return data;
  } catch (e) {
    return "error";
  }
}

export async function signIn(user) {
  const { name, pass } = user;
  console.log("response", user);
  try {
    const response = await axios.post(
      "http://89.191.225.217/api/sign_in",
      { username: name, password: pass },
      {
        withCredentials: true,
        origin: "http://192.168.2.57:3000/",
        
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://89.191.225.217/api/sign_in',
          // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
         'Access-Control-Allow-Credentials': 'true',
          // 'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type'
        },
      }
    );

    const data = response.data;
    console.log("response:", data);
    return data;
  } catch (e) {
    return "error";
  }
}

// export  function signIn(user) {
//   const { name, pass } = user;
//   fetch('http://89.191.225.217/api/sign_in', {
//       method: 'POST',
//       withCredentials: true,
      

//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           // "Control-Allow-Origin": "*",
//           // "referrerPolicy": "no-referrer",
//           // 'Authorization': 'Bearer '+ sessionStorage.getItem('B2B_USER_TOKEN'),
//           // cache: "no-store",
//       },
//       body: JSON.stringify({
//         name, pass
//     })
//   })
//       .then((res) => {
//           if (res.ok) {

//           } else {
//               return res.json().then((err) => { throw err });
//           }
//       })
//       .catch((error) => {
//           console.log('B2BMOTION ANALYTIC ERROR', error);
//       })
// }

export async function logout() {
  try {
    const response = await axios.post();
    const data = response.data;
    console.log("response:", data);
    return data;
  } catch (e) {
    return "error";
  }
}
