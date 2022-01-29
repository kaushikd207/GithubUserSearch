
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import React from "react";
class App extends React.Component{
    state={
        user:null
    };
   fetchUserData = async username=>{
       try{
           const res=await fetch(`https://api.github.com/users/${username}`);
           if(res.ok){
               const data=await res.json();
               return this.setState({
                   user:data
               });
           }
       }catch(arr){
           console.log(arr);
       }
   };
    render(){
       return <Search fetchData={this.fetchUserData}/>;
    }
}
export default App;
