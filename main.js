async function getUsers() {
  try {
    let { data } = await axios.get("https://node-react-10.onrender.com/users");
    console.log(data);
    const html = data.users.map(
      (ele) =>
        `<tr>
      <td>${ele._id}</td>
      <td>${ele.userName}</td>
      <td>${ele.email}</td>
      <td class="d-flex gap-10 justifyContsnt">
      <a class="btn btn-primary" href="details.html?id=${ele._id}"  >Detailes</a>
      <button class="btn btn-danger" onclick="deleteUsers('${ele._id}')">Delete</button>
      <a class="btn btn-success" href="update.html?id=${ele._id}"  >UpDate</a>

      </td>
      </tr>`
    );
  

    document.querySelector(".tabel").innerHTML = html;
  } catch (error) {
    document.querySelector(".text-danger").innerHTML = "error!!!!";
  } finally {
    document.querySelector(".loader-contanier").classList.add("d-none");
  }
}

getUsers();
async function deleteUsers(id) {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await axios.delete(
        `https://node-react-10.onrender.com/users/${id}`
      );
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}
