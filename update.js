const editUSer=document.querySelector('.edit-user');

async function getUsersFromDetails(){
    try{
    const param =new URLSearchParams(window.location.search);
    const userid = param.get('id');
    const {data}=await axios.get(`https://node-react-10.onrender.com/users/${userid}`);
    document.querySelector('.user-email').placeholder=data.user.email;
    document.querySelector('.user-phone').placeholder=data.user.phone;
editUSer.onsubmit=async function(e){
  e.preventDefault()
  const user ={
    userName: e.target.userName.value
  };
  try{
const updateData = await axios.put(
 ` https://node-react-10.onrender.com/users/${userid}`
  );   window.location.href = "./index.html";  
  }catch(error){
   alert("erreo")
  }

}
}catch(error){
 Swal.fire("some thing went wrong!!");
}
}
getUsersFromDetails()


