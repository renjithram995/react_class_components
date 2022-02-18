import { Fragment, Component } from "react";

import Users from "./Users";

import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
    static contextType = UsersContext
    constructor () {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }
    searchChangeHandler (even) {
        this.setState({
            searchTerm: even.target.value
        })
    }
    filterUsers () {
        this.setState({
            filteredUsers: this.context.users.filter(
                (user) =>
                  !this.state.searchTerm ||
                  !user.name ||
                  user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
              )
        })
    }
    render () {
        return (
            <Fragment>
              <div className={classes.finder}>
                <input type="search" onChange={this.searchChangeHandler.bind(this)} />
              </div>
              <Users users={this.state.filteredUsers} />
            </Fragment>
          );
    }
    componentDidMount () {
        debugger
        this.filterUsers()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.filterUsers()
        }
    }
}
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
    //   DUMMY_USERS.filter(
    //     (user) =>
    //       !searchTerm ||
    //       !user.name ||
    //       user.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   )
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

  
// };

export default UserFinder;
