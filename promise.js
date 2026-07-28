

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register");
      resolve();
    }, 10000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login here");
      resolve();
    }, 2000);
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getData here");
      resolve();
    }, 5000);
  });
}
function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display here");
      resolve();
    }, 10000);
  });
}

// register()
//   .then(login)
//   .then(getData)
//   .then(displayData)
//   .catch((err) => {
//     console.log("Error", err);
//   });


console.log("run this");
