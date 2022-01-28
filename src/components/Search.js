import React from "react";

class Search extends React.Component{
    state={
        username:""
    };


handleUserNameChange=e=>{
    const value=e.target.value;
    this.setState({
        username: value
    });
};
render(){
    const {fetchData} =this.props;
    const {username} = this.state;
    return(
        <div className="bg-dark">
            <div className="container py-5">

    )
}
}