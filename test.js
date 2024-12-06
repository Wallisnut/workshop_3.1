fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Application-key": "TU-API-KEY",
  },
  body: JSON.stringify({
    username: "yourname",
    password: "yourpassword",
  }),
});
