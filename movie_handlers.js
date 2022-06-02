//
// const modal = {
//     all: document.querySelector("#modal"),
//     main: document.querySelector("#modal > main"),
//     head: document.querySelector("#modal > header"),
//     foot: document.querySelector("#modal > footer"),
//     container: document.querySelector("#modal-container") // represents the background
// }
//
//
//  const handleDeleteView = (event) => {
//     console.log("handle Delete")
//     toggleModal();
//
//     modal.head.innerHTML = `<h3>Do you wish to delete this User?</h3>`
//     modal.main.innerHTML = "<p>If you delete this User its gone forever.</p>"
//     modal.foot.innerHTML = mapUserToDelete(event.target.value);
//
//     $("button.confirm").click(handleDoDelete);
//
// };
//
// const handleDoDelete = (event) => {
//     event.preventDefault();
//
//     fetch("https://dazzling-antique-may.glitch.me/movies" + event.target.value)
//         .then(res => res.json())
//         .then(res => {
//             console.log("res :", res);
//             disableModal();
//         })
// }
//
// //Modal
//  const toggleModal = () => {
//     // show hide modal logic
//     modal.container.classList.toggle("hide")
//     modal.all.classList.toggle("hide");
// }
//
//  const enableModal = () => {
//     modal.container.classList.remove("hide")
//     modal.all.classList.remove("hide");
// }
//
//  const disableModal = () => {
//     modal.container.classList.add("hide")
//     modal.all.classList.add("hide");
// }
