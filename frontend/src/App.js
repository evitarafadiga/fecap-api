import React, { useState, useEffect } from "react";
import { ProfileCard } from "./components/profileCard";
import { Navbar } from "./components/navbar";
import axios from "axios";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App(props) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState('register');

  useEffect(() => {

    (async () => {

      const data = await fetch('http://localhost:3333/persons')
        .then(response => response.json())
        .catch(error => {
          console.error("Erro ao buscar dados: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        })

      setData(data)
    })()

  }, [])

  if (loading) return (<div className="p-20 justify-center flex align-center text-3xl">Carregando...</div>);
  if (error) return (<div className="p-20 justify-center flex align-center text-3xl text-red-600">Erro!</div>);

  return (
    <div className="">
      <Navbar loadHome={() => setMode('home')} loadLogin={() => setMode('login')} loadRegister={() => setMode('register')}></Navbar>
      {mode === 'home' && <>
        <div className="flex flex-col">
          <div className="p-6 px-40 text-xl font-thin text-slate-600">
            Cadastros existentes:
          </div>
          <div className="justify-center align-center flex flex-wrap flex-row">

            {data.map(function (d, i) {
              return (
                <ProfileCard key={i}
                  id={d.id}
                  name={d.name}
                  email={d.email}
                  password={d.password}
                  created_at={d.created_at}
                />
              )
            })}
          </div>
        </div>
      </>}

      {mode === 'login' && <>
        <LoginForm></LoginForm>
      </>}

      {mode === 'register' && <>
        <RegisterForm></RegisterForm>
      </>}
    </div>
  );
}

export default App;
