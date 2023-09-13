import React from "react";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3333/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "email": this.email.value,
                "password": this.password.value,
            }
        });
    };


    render() {
        return (
            <div className="flex flex-col place-items-center justify-center py-6">
                <div className="p-6 text-xl text-slate-600 shadow-lg w-80 h-96 bg-slate-200">

                    <div className="justify-center align-center flex flex-wrap flex-col">

                        <form onSubmit={this.handleSubmit} className="px-2 font-thin">
                            <div className="py-2">
                                <label htmlFor="email">Email</label>
                                <input ref={(ref) => {this.name = ref}} className="w-full border border-slate-300" placeholder="Nome" id="email" type="text" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="password">Password</label>
                                <input ref={(ref) => {this.email = ref}} className="w-full border border-slate-300" id="password" type="password"/>
                            </div>
                            <div className="py-2 flex align-center justify-end">
                                <button className="w-32 border border-black bg-green-500 font-bold text-white py-2" type="submit">Submit</button>
                            </div>
                        </form>

                        {/* <div className="h-12 py-4">
                            <p className="text-base">Não possui login?</p>
                        </div>
                        <div className="py-2 flex p-2 align-center justify-end">
                            <button className="w-32 border border-black bg-blue-500 font-bold text-white py-2" onClick={() => setMode('register')} >Registre-se</button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}