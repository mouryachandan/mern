import { useEffect, useState } from "react";
import Crad from "./component/card";
import axios from "axios";
function App(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://mern-lvo5.onrender.com");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <Crad key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}
export default App;