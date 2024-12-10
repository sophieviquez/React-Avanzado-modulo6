import { useState, useEffect } from "react";
import { getMeUserService } from "@/services/userServices";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { status, data } = await getMeUserService(token);
        if (status === 200) {
          setUser(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <>
      <h1>Dashboard</h1>
      {user?.first_name && <h4>Nombre: {user.first_name}</h4>}
      {user?.last_name && <h4>Apellido: {user.last_name}</h4>}
      {user?.gender && <p>Genero: {user.gender}</p>}
      {user?.email && <p>Email: {user.email}</p>}
      {user?.role && <p>Role: {user.role}</p>}
    </>
  );
};
export default Dashboard;
