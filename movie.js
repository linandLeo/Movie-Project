$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
});


const modal = {
    all: document.querySelector("#modal"),
    main: document.querySelector("#modal > main"),
    head: document.querySelector("#modal > header"),
    foot: document.querySelector("#modal > footer"),
    container: document.querySelector("#modal-container") // represents the background
}
const customHeaders = new Headers({
    'Content-Type': 'application/json'
})


// const renderMovies =


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
        $("#create").on("click", handleCreateUserView);
    })

    .catch((e) => {
        console.log("ERROR!!!!!!", e);
    });


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
//equal whole function and recall after complete to call again with new data


const handleDeleteView = (event) => {
    console.log("handle Delete")
    toggleModal();
    modal.head.innerHTML = `<h3>Do you wish to delete this User?</h3>`
    modal.main.innerHTML = "<p>If you delete this User its gone forever.</p>"
    modal.foot.innerHTML = mapUserToDelete(event.target.value);

    $("button.confirm").on("click", handleDoDelete);
    // renderMovies
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

    fetch("https://dazzling-antique-may.glitch.me/movies/" + event.target.value, {method: 'GET'})
        .then(res => res.json())
        .then(res => {

            modal.main.innerHTML = mapUserToUpdate(res);
            modal.foot.innerHTML = mapButtonsForUpdate(res.id);


            $("button.confirm.update").on("click", handleDoUpdate);
            // renderMovies

        })

};


const handleDoUpdate = (event) => {
    event.preventDefault();


    const form = document.forms.update;

    let data = {
        id: form.id.value,
        title: form.title.value,
        director: form.director.value,
        genre: form.genre.value,
        // rating: form.rating.value,

    }


    let settings = {
        headers: customHeaders,
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

const mapButtonsForUpdate = (id, type = 'update') => {
    return ` <form>
          <button class="confirm ${type}" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
            </form>`
}

const mapUserToUpdate = (data) => {
    return createForm("update", data)
}


const mapUserCreateForm = () => {
    return createForm("create")
}
const handleCreateUserView = (event) => {
    // TODO: Create form for users to fill out.
    // Inputs!

    modal.main.innerHTML = mapUserCreateForm();
    modal.foot.innerHTML = mapButtonsForUpdate(0, "create")

    $("button.confirm.create").on("click", handleDoCreateUser);
    enableModal();

}

const createForm = (name, data) => {
    if (!data) {
        data = {
            id: 0,
            title: "",
            director: "",
            genre: ""
        }
    }

    let {id, title, director, genre} = data;


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

const handleDoCreateUser = (event) => {
    // TODO: Create a new User!
    event.preventDefault();

    const form = document.forms.create;

    let data = {
        id: form.id.value,
        title: form.title.value,
        director: form.director.value,
        genre: form.genre.value,

    }

    // Data request to create a new one
    let settings = {
        headers: customHeaders,
        method: "POST",
        body: JSON.stringify(data)
    }


    fetch("https://dazzling-antique-may.glitch.me/movies/", settings)
        .then(res => res.json())
        .then(res => {
            console.log("res:", res)
        })

}


// function ajaxLoadstart(text)


// {
//     if(jQuery('body').find('#').attr('id') != 'resultLoading'){
//         jQuery('body').append('<div data-img ="3d Text-1s-280px.gif" id="myItem1"><div></div></div><div class="bg"></div></div>');
//     }


// }
// ;


