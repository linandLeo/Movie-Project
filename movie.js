const modal = {
    all: document.querySelector("#modal"),
    main: document.querySelector("#modal > main"),
    head: document.querySelector("#modal > header"),
    foot: document.querySelector("#modal > footer"),
    container: document.querySelector("#modal-container") // represents the background
}

// const renderMovies=


fetch("https://dazzling-antique-may.glitch.me/movies")
    .then((res) => {
        return res.json();
        //    should be the whole thing in function
    })
    .then((res) => {
        console.log(res);
        document.getElementById("data").innerHTML +=
            res.map(mapUserToRecord).join("");
        $(".delete").on("click", handleDeleteView);
        $(".edit").on("click", handleDisplayUpdate);
    })

    .catch((e) => {
        console.log("ERROR!!!!!!", e);
    });
//equal whole function and recall after complete to call again with new data


// $("#create").click(handleCreateUserView);
const handleDeleteView = (event) => {
    console.log("handle Delete")
    toggleModal();
    modal.head.innerHTML = `<h3>Do you wish to delete this User?</h3>`
    modal.main.innerHTML = "<p>If you delete this User its gone forever.</p>"
    modal.foot.innerHTML = mapUserToDelete(event.target.value);

    $("button.confirm").on("click", handleDoDelete);

};

const handleDoDelete = (event) => {
    event.preventDefault();
    fetch("https://dazzling-antique-may.glitch.me/movies/" + event.target.value, {method: 'delete'})
        .then(res => res.json())
        .then(res => {
            console.log("res :", res);
            disableModal();
        })
}

//Modal after click delete button turns on
const toggleModal = () => {
    // show hide modal logic
    modal.container.classList.toggle("hide")
    modal.all.classList.toggle("hide");
}

const enableModal = () => {
    modal.container.classList.remove("hide")
    modal.all.classList.remove("hide");
}

const disableModal = () => {
    modal.container.classList.add("hide")
    modal.all.classList.add("hide");
}

const mapUserToDelete = (id) => {
    return `<form>
          <button class="confirm delete" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
    </form>`
}

const handleDisplayUpdate = (event) => {
    enableModal();
    //console.log("event :", event);

    //TODO: Get Data from user by Id
    //TODO: Map to update form
    //TODO: Add handlers

    fetch("https://dazzling-antique-may.glitch.me/movies/" + event.target.value, {method: 'PUT'})
        .then(res => res.json())
        .then(res => {

            modal.main.innerHTML = mapUserToUpdate(res);
            modal.foot.innerHTML = mapButtonsForUpdate(res.id);


            $("button.confirm.update").on("click", handleDoUpdate);


        })

};

// Example: PUT fetch request
const handleDoUpdate = (event) => {
    event.preventDefault();

    const movies = document.forms.update;

    let data = {
        id: movies.id.value,
        title: movies.title.value,
        director: movies.director.value,
        genre: movies.genre.value
    }

    let settings = {
        method: "PUT",
        body: JSON.stringify(data)
    }

    fetch("https://dazzling-antique-may.glitch.me/movies/" + event.target.value, settings)
        .then(res => res.json())
        .then(res => {
            console.log("res:", res);
            // TODO: use this value to update the field record in the table
            disableModal();
        })
}
// .then((res) => {
//     console.log(res);
//     document.getElementById("data").innerHTML +=
//         res.map(mapUserToRecord).join("");
const mapButtonsForUpdate = (id, type = 'update') => {
    return ` <form>
          <button class="confirm ${type}" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
            </form>`
}


//
//
const mapUserToRecord = ({title, director, rating, genre, id}) => {
    return `<tr data-id="${id}" >
                       <td data-id="${id}" class="user-record"> ${rating}</td>
                       <td data-id="${id}" class="user-record">${director}</td>
                       <td data-id="${id}" class="user-record">${title}</td>
                       <td data-id="${id}" class="user-record">${genre}</td>
                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="edit" value="${id}">Edit</button>
                       </td>
                   </tr>`
};


const mapUserToUpdate = (data) => {
    return createForm("update", data)
}

const mapUserCreateForm = () => {
    return createForm("create")
}

const createForm = (name, data) => {
    if (!data) {
        data = {
            id: 0,
            title: "",
            director: "",
            genre: ""
            // gender: "",
            // email: "",
            // dateOfBirth: "",
            // phone: "",
            // picture: ""
        }
    }

    let {id, title, director, genre} = data;

    // handle Z in data for timezone, might need to add back for update
    // if(data) dateOfBirth = dateOfBirth.slice(0, dateOfBirth.length-1);

    return `
    <form name="${name}">
        <input type="hidden" name="id" value="${id}">
        <label for="field1">Title</label><input type="text" name="title" value="${title}" id="field1">
        <label for="field2">Director</label><input type="text" name="director" value="${director}" id="field2">
        <label for="field3">Genre</label><input type="text" name="genre" value="${genre}" id="field3">
        <label for="field4">ID</label><input type="text" name="id" value="${id}" id="field4">
    </form>
    `
}


const mapUserToView =
    ({id, title, director, genre}) => {

        // handle Z in data for timezone, might need to add back for update
        // dateOfBirth = dateOfBirth.slice(0, dateOfBirth.length-1);

        console.log("title", title)
        return `
       <div class="profile">
                <section class="header">
                    <img src="${picture}" alt="${firstName} ${lastName}" class="profile-img" />
                    <h3 class="profile-header">${firstName} ${lastName}</h3>
                    <p class="sub-header"><a href="mailto:">${email}</a></p>
                </section>

                <section class="location">
                    <h4>Address</h4>
                    <div class="address">${location.street}</div>
                    <div class="address">${location.city}, ${location.state}</div>
                </section>

                <section class="details">
                    <h4>Details</h4>
                    <div>Phone: <span>${phone}</span> </div>
                    <div>Gender: <span>${gender}</span></div>
                    <div>Title:  <span>${title}</span></div>
                </section>
       </div>
`
    }

//
//


// function ajaxLoadstart(text)


// {
//     if(jQuery('body').find('#').attr('id') != 'resultLoading'){
//         jQuery('body').append('<div data-img ="3d Text-1s-280px.gif" id="myItem1"><div></div></div><div class="bg"></div></div>');
//     }


// }
// ;


// just putting random code
