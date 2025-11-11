import React, { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const payload = jwtDecode(token)
        setUser(payload)
      } catch {
        localStorage.removeItem('token')
      }
    }
  }, [])

  const login = async (email, password) => {
    // 🔸 Simulación de login
    if (email === 'admin@test.com' && password === '1234') {
      localStorage.setItem('token', 'fakeToken')
      setUser({ email, rol: 'ADMIN' })
      return
    }
    if (email === 'user@test.com' && password === '1234') {
      localStorage.setItem('token', 'fakeToken')
      setUser({ email, rol: 'USER' })
      return
    }
    throw new Error('Credenciales inválidas')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
