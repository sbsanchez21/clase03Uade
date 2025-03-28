
function getUsers(page) {
    //1 preparar
    // https://reqres.in/api/users?page=1
    const respuesta = fetch(`https://reqres.in/api/users?page=${page}`);

    //2 invocar
    respuesta
        .then(response => response.json())
        .then(responseJson => procesarUsers(responseJson))//fulfilled
        .catch(error => dibujarError(error))//rejected
}

function procesarUsers(data) {
    const users = data.data;
    let rows = '';
    for(let user of users) {
        console.log(user);
        rows += `
        <tr>
            <td>${user.id}</th>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>
                <img src="${user.avatar}">
            </td>
        </tr>
        `
    }
    document.getElementById('usersRows').innerHTML = rows;
}

function dibujarError(error) {
    console.log(error);
    const alerta = `<div class="alert alert-danger" role="alert">
        ${error.toString()}
    </div>`;
    document.getElementById('msj').innerHTML = alerta;
}

// document.getElementById('btnGetUsers').addEventListener('click',getUsers);

