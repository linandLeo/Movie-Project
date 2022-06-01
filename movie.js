import {mapUserToRecord} from "./movie_map.js";

fetch("https://dazzling-antique-may.glitch.me/movies")
    .then((res)=> {
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        document.getElementById("data").innerHTML +=
            res.map(mapUserToRecord).join("");
    })

    .catch((e)=> {
        console.log("ERROR!!!!!!", e);

    // .then(res => res.json())
    // .then(res => {
    //         console.log("res:", res)




        //event handlers!
        $(".delete").click(handleDeleteView);
        $(".edit").click(handleDisplayUpdate);
        $(".user-record").click(handleDisplayProfile);
        $("#create").click(handleCreateUserView);
    });

