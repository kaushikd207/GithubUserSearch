
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import UserCard from './components/User';
import React from "react";
class App extends React.Component {
    state = {
        user: null,
        error: null,
        loading: false,
    };
    fetchUserData = async username => {
        this.setState({loading:true},async() =>{
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            if (res.ok) {
                const data = await res.json();
                return this.setState({
                    user: data,
                    loading:false,
                });
            }
            const error = (await res.json()).message;
            this.setState({
                error,
                loading:false,
            });
        } catch (err) {
            this.setState({
                error: "Ther was some error",
                loading:false,
            });
        }
    });
};
    render() {
        const { error,loading,user } = this.state;
        return (
            <div>
                <Search fetchData={this.fetchUserData} />
                <div className='text-center pt-5'>
                {loading &&<p>Loading...</p>}
                {error && <p className='text-danger'>{error}</p>}
                {!loading && !error && <UserCard user={user}/> }
                </div>
            </div>
        );
    }
}
export default App;
