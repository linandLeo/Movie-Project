import {mapUserToRecord} from "./movie_map.js";
import {handleDeleteView,
} from "./movie_handlers.js";

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
    //     document.getElementById("data").innerHTML +=
    //         res.map(mapUserToRecord).join("");



        //event handlers!
        $(".delete").click(handleDeleteView);
        $(".edit").click(handleDisplayUpdate);
        $(".user-record").click(handleDisplayProfile);
        $("#create").click(handleCreateUserView);
    });

// function ajaxLoadstart(text)
// {
//     if(jQuery('body').find('#').attr('id') != 'resultLoading'){
//         jQuery('body').append('<div data-img ="3d Text-1s-280px.gif" id="myItem1"><div></div></div><div class="bg"></div></div>');
//     }
