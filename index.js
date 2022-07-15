    function submitData(name, email) {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({name: name, email: email})
          };
          
          return fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
              return response.json();
            })
            .then(function(object) {
                document.body.innerHTML = `<p>${object.body.id}</p>`
            //   console.log(object);
            })
            .catch((error) => {
                document.body.innerHTML += `<p style = 'color: red'>${error.message}</p>`
            });
    }