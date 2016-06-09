import React from 'react'
import ReactDOM from 'react-dom'
import User from '../components/user'

function getBooksReadByUser (user){
    var request = new XMLHttpRequest();
    request.open('GET', '/user/' + user, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            console.log(resp);

            ReactDOM.render(<User data = {JSON.parse(resp)}/>, document.getElementById('container'));
        }
    };

    request.send();
}

export default getBooksReadByUser