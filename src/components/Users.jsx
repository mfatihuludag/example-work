import React, { useState } from 'react'

const Users = () => {
  const [create, setCreate] = useState({name:"", mail:"", year:"", password:""})
  const [users, setUsers] = useState([])
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function register() {
    setUsers([...users, create])
    setCreate({name: "", mail: "", year: "", password: ""})
  }

  return (
    <div className='userinfo'>
      <input
        placeholder="İsim"
        value={create.name}
        onChange={(e) => setCreate({...create, name: e.target.value})}
      />
      <input 
        placeholder='E-mail'
        value={create.mail}
        onChange={(e) => setCreate({...create, mail: e.target.value})} 
      />
      <input 
        placeholder='Yaş'
        value={create.year}
        onChange={(e) => setCreate({...create, year: e.target.value})} 
      />
      <div className="password-field">
        <input 
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder='Şifre'
          value={create.password}
          onChange={(e) => setCreate({...create, password: e.target.value})} 
        />
        {create.password.length > 0 && (
          <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      <button onClick={register}>Kayıt Ol</button>
    </div>
  )
}

export default Users