export const Navbar = ( { loadHome, loadLogin, loadRegister}) => {
    return (
        <div className="text-slate-500 text-2xl w-screen h-12 bg-slate-200 flex justify-center align-center shadow-md ">
            <button onClick={loadHome}>HOME</button>
            <div className="w-32"></div>            
            <button onClick={loadLogin}>LOGIN</button>
            <div className="w-32"></div>            
            <button onClick={loadRegister}>REGISTRAR</button>
        </div>
    )
};