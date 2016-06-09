import React from 'react'
import ReactDOM from 'react-dom'
import Writers from '../components/writters'

function getAllWritersWithNoBooks (){
    var request = new XMLHttpRequest();
    request.open('GET', '/writers', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            console.log(resp);

            ReactDOM.render(<Writers data = {JSON.parse(resp)}/>, document.getElementById('container'));
        }
    };

    request.send();
}

export default getAllWritersWithNoBooks