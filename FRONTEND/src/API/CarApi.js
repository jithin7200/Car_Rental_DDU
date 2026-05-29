const baseurl = "http://localhost:3000"

// read 

export const getdata = async () => {

  const res = await fetch(`${baseurl}/car/getCars`, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: "include",
  });

  return res.json();
};

// LOIGN COOKIE

export const LoginUser = async (postData) => {
  const res = await fetch(`${baseurl}/user/userLogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  })
  return res.json()

}

// ================= REGISTER =================

export const RegisterUser = async (postData) => {

  const res = await fetch(
    `${baseurl}/user/userRegister`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  );

  return res.json();
};