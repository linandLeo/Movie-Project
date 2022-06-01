import { mapUserToRecord } from "./maps.js";
fetch("https://dazzling-antique-may.glitch.me/movies")
    .then((res)=> {
        return res.json();
    })
    .then((res)=>{
        console.log(res);
    })

    .catch((e)=> {
        console.log("ERROR!!!!!!", e);
        document.getElementById("data").innerHTML +=
            res.data.map(mapUserToRecord).join("");

        //event handlers!
        $(".delete").click(handleDeleteView);
        $(".edit").click(handleDisplayUpdate);
        $(".user-record").click(handleDisplayProfile);
        $("#create").click(handleCreateUserView);
    });

