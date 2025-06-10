import { apiService } from "./apiService";


async function login(email, senha) {
    return await apiService.post('/login', { email, senha })
}

async function logout() {
    return await apiService.delete('/logout')
}



export default { login, logout };