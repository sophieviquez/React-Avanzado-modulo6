import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// 1. Crear el contexto
const AuthContext = createContext();

// 2. Crear el Proveedor (provider) del contexto.
function AuthProvider({ children }) {
  // Aquí va mi lógica de autenticación
  const [isAuth, setIsAuth] = useState(false); // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null); // JWT Payload decodicado

  const login = (token) => {
    localStorage.setItem("token", token);
    const payload = jwtDecode(token);
    console.log(payload);
    setIsAuth(true);
    setUserPayload(payload);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUserPayload(null);
  };

  // Verificar si existe un token en el localStorage, y si es válido lo va a cargar para evitar que el usuario tenga que volver a iniciar sesión.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = jwtDecode(token);
      setIsAuth(true);
      setUserPayload(payload);
    }
  }, []);

  const data = {
    // Aquí van los datos que quiero compartir de forma global
    isAuth,
    userPayload,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
