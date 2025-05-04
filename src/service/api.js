const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export async function loginUser({ email, password }) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error("Login incorrecto");
    return await res.json();
  }

export async function registerUser({ nombre, email, password }) {
const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, password })
});
if (!res.ok) throw new Error("Registro incorrecto");
return await res.json();
}

export async function getProducts() {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Error al cargar productos");
    return await res.json();
  }
  
export async function getCategory(categoria) {
    const res = await fetch (`${API_URL}/products/category/${categoria}`);
    if(!res.ok) throw new Error("Error al cargar productos");
    return await res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw new Error("No se pudo cargar el producto");
    return await res.json();
  }