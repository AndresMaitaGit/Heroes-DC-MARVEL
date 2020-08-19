import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');
    }

    return (
        <div className="container mt-5 text-center">
            <h1>Héroes de Marvel y DC</h1>
            <hr />

            <button
                className="btn btn-outline-success px-5 btn-lg"
                onClick= {handleLogin}

            >
                Ingresar

            </button>
        </div>
    )
}
