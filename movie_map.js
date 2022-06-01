/**
 * It takes an object with the properties' id, firstName, lastName, picture, and title,
 * and returns a string that represents a table row with those properties
 * @returns A string of HTML that represents a table row.
 */

// We used object destructing in the prams instead of sending over the
    // whole item we are only capturing the field we are going to use here.
export const mapUserToRecord = ({title, director, rating, genre, id}) => {
        return `<tr data-id="${id}" >
                       <td data-id="${id}" class="user-record"> ${rating}
                       </td>
                       <td data-id="${id}" class="user-record">${director}. ${title} ${genre}</td>
              
                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="edit" value="${id}">Edit</button>
                       </td>
                   </tr>`
    };

export const mapUserToUpdate = (data) => {
    return createForm("update", data)
}

export const mapUserCreateForm = () => {
    return createForm("create")
}

export const createForm = (name, data) => {
    if(!data) {
        data = {
            id: 0,
            title: "",
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            dateOfBirth: "",
            phone: "",
            picture: ""
        }
    }

    let {id, title, firstName, lastName, gender,
        email, dateOfBirth, phone, picture} = data;

    // handle Z in data for timezone, might need to add back for update
    if(data) dateOfBirth = dateOfBirth.slice(0, dateOfBirth.length-1);

    return `
        <form name="${name}">
        <input type="hidden" name="id" value="${id}">
        <label for="field1">Title</label><input type="text" name="title" value="${title.toUpperCase()}" id="field1">
        <label for="field2">First Name</label><input type="text" name="firstName" value="${firstName}" id="field2">
        <label for="field3">Last Name</label><input type="text" name="lastName" value="${lastName}" id="field3">
        <label for="field4">Gender</label><input type="text" name="gender" value="${gender}" id="field4">
        <label for="field5">Email</label><input type="text" name="email" value="${email}" id="field5">
        <label for="field6">Date of Birth</label><input type="datetime-local" value="${dateOfBirth}" name="dateOfBirth" id="field6">
        <label for="field7">Phone</label><input type="text" name="phone" value="${phone}" id="field7">
        <label for="field8">Picture</label><input type="text" name="picture" value="${picture}" id="field8">
    </form>
    `
}



export const mapUserToView =
    ({id, title, firstName, lastName, gender, email, dateOfBirth, phone, picture, location}) => {

        // handle Z in data for timezone, might need to add back for update
        dateOfBirth = dateOfBirth.slice(0, dateOfBirth.length-1);

        console.log("location:", location)
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

export const mapButtonsForUpdate = (id,  type='update') => {
    return ` <form>
          <button class="confirm ${type}" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
            </form>`
}

export const mapUserToDelete = (id) => {
    return `<form>
          <button class="confirm delete" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
    </form>
  
    `
}
