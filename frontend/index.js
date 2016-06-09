import React from 'react'
import ReactDOM from 'react-dom'
import User from './src/components/user'
import getBooksReadByUser from "./src/requests/getBooksReadByUser";
import getAllWriters from "./src/requests/getAllWriters";
import getAllWritersWithNoBooks from "./src/requests/getWritersWithNoBooks";

// ReactDOM.render(<User/>, document.getElementById('container'));

document.getElementById('John').onclick = () => {
    getBooksReadByUser('John')
};

document.getElementById('James').onclick = () => {
    getBooksReadByUser('James')
};

document.getElementById('Jason').onclick = () => {
    getBooksReadByUser('Jason')
};

document.getElementById('writers').onclick = () => {
    getAllWriters()
};

document.getElementById('writersnobook').onclick = () => {
    getAllWritersWithNoBooks()
};
