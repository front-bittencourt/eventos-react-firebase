import React, { useState } from 'react';
import './login.css';
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(resultado => {
            setMsgTipo('sucesso')
        }).catch(error => {
            setMsgTipo('error')
        });
    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div class="text-center mb-4">
                    <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Acessar</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />

                <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Acessar</button>

                <div className="msg-login text-white text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado! &#128526;</span>}
                    {msgTipo === 'error' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>}
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href="#" className="mx-2">Recuperar senha</a>
                    <span className="text-white">&#9733;</span>
                    <Link to='usuarionovo' className="mx-2">Cadastre-se </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;