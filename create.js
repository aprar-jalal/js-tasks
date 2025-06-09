const addFormUser = document.querySelector(".create-user");
addFormUser.onsubmit = async function (e) {
  e.preventDefault();
  const user = {
    userName: e.target.userName.value,
    email: e.target.email.value,
    password: e.target.password.value,
    phone: e.target.phone.value,
  };
  try{
     document.querySelector(".loader-contanier").classList.remove('d-none');
  const response = await axios.post(
    "https://node-react-10.onrender.com/users",
    user
  );
  window.location.href = "./index.html";    
} catch(error){
document.querySelector(".text-danger").textContent="ERRROOORRRR!!!"
  }
};
