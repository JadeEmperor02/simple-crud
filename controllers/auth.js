let users = require("../data");

// const login = (req, res) => {
//   const { name, email, passwordm } = req.body;
//   const user = {name: name}

//   res.status(200).json({ success: true, name: name });
// };
// const write = async (path, dataToWrite) => {
//   try {
//     let res = await writeFile(path, dataToWrite);
//     return res;
//   } catch (err) {
//     return `failed to write: ${err}`;
//   }
// };
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const date = new Date().getUTCDate;
  const user = {
    name: name,
    email: email,
    password: password,
    createdAt: date,
  };

  // let newData = users.find(item => item.email === users.email);
  let newUser = users.map((item) => {
    if (item.email === email) {
      res.status(400).json({ success: false, msg: "user already exists" });
    }

    return users;
  });
  newUser.push(user);

  res.status(200).json({ success: true, data: newUser });
};

module.exports = signup;
