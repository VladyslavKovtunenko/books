import React from 'react'
import {Table} from 'react-bootstrap'

class User extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.data.map);
        console.log(this.props.data[0]);
        console.log(this.props.data[1]);
    }


    render(){
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <td>Number</td>
                        <td>Name</td>
                        <td>Title</td>
                        <td>Year</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((obj, index) =>{
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{obj.Name}</td>
                                    <td>{obj.Title}</td>
                                    <td>{obj.Year}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default User