import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class User extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.data);
    }


    render(){
        return (
            <div>
                <ListGroup>
                    {this.props.data.map((obj, index)=>{
                        return <ListGroupItem>{index + 1}. {obj.Name}</ListGroupItem>
                    })}
                </ListGroup>
            </div>
        );
    }
}

export default User