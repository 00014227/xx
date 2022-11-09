// async function getData(url) {
//   try {
//     const response = await fetch(url);
//             if (!response.ok) {
//               const message = "Error roy berdi, va status kodi: " + response.status;
//               throw new Error(message);
//             }
//     const data = await response.json();
//     // console.log(data);
//     // return data;
//       console.log(data[1].title);






//   } catch (error) {
//     console.log(error);
//   }
// }
// getData("http://localhost:3000/games");

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      const message = "Error roy berdi, va status kodi: " + response.status;
      throw new Error(message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const fifa = {
  title: "Fifa 22",
  description: "top ketidan yuguradigan 22 ta kishi haqida",
  "release-date": "23 Jun, 2020",
  imageURL:
    "https://cdn.akamai.steamstatic.com/steam/apps/969990/header.jpg?t=1631105562",
  developer: "Purple Lamp",
};


postData("http://localhost:3000/games", fifa);





// async function putData(url, data) {
//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       const message = "Error roy berdi, va status kodi: " + response.status;
//       throw new Error(message);
//     }
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }

// const fifa = {
//   title: "Fifa 5678",
//   description: "top ketidan yuguradigan 22 ta kishi haqida",
//   "release-date": "23 Jun, 2020",
//   imageURL:
//     "https://cdn.akamai.steamstatic.com/steam/apps/969990/header.jpg?t=1631105562",
//   developer: "Purple Lamp",
// };

// putData("http://localhost:3000/games/6", fifa)
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));

// async function deleteData(url) {
//   try {
//     const response = await fetch(url, {
//       method: "DELETE",
//     });

//     if (!response.ok) {
//       const message = "Error roy berdi, va status kodi: " + response.status;
//       throw new Error(message);
//     }

//     return true;
//   } 
  
//   catch (error) {
//     console.log(error);
//     return false;
//   }
// }

// deleteData("http://localhost:3000/games/3").then((rsp) => console.log(rsp));
