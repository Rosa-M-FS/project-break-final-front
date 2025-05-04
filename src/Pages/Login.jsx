import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/api";
import styles from "./Login.module.css";

const Login = ( )=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          const { token, usuario } = await loginUser({ email, password });
         
          localStorage.setItem("token", token);
          localStorage.setItem("usuario", JSON.stringify(usuario));
          navigate("/"); 
        } catch (err) {
          setError("Email o contraseña incorrectos");
        }
    }
    return (
        <div className={styles.loginContainer}>
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.button}>Entrar</button>
          </form>
        </div>
      );
};

export default Login;

