import React from "react";

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3333/persons', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "name": this.name.value,
                "email": this.email.value,
                "password": this.password.value,
            }
        });
    };


    render() {
        return (
            <div className="flex flex-col place-items-center justify-center py-6">
                <div className="p-6 text-xl text-slate-600 shadow-lg w-80 h-[460px] bg-slate-200">

                    <div className="justify-center align-center flex flex-wrap flex-col">

                        <form onSubmit={this.handleSubmit} className="px-2 font-thin">
                            <div className="py-2">
                                <label htmlFor="name">Nome</label>
                                <input ref={(ref) => {this.name = ref}} className="w-full border border-slate-300" id="name" type="text" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="email">Email</label>
                                <input ref={(ref) => {this.email = ref}} className="w-full border border-slate-300" id="email" type="text" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="password">Password</label>
                                <input ref={(ref) => {this.password = ref}} className="w-full border border-slate-300" id="password" type="password" />
                            </div>
                            <div className="py-2 flex align-center justify-end">
                                <button className="w-32 border border-black bg-green-500 font-bold text-white py-2" type="submit">Submit</button>
                            </div>
                        </form>
                        {/* <div className="h-12 py-4">
                            <p className="text-base">Já possui conta?</p>
                        </div>
                        <div className="py-2 flex p-2 align-center justify-end">
                            <button className="w-32 border border-black bg-slate-500 font-bold text-white py-2" onClick={() => setMode('login')} >Login</button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}