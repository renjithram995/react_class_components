import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Renjith" },
  { id: "u2", name: "Qburst" },
  { id: "u3", name: "Company" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }
  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
