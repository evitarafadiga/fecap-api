export const ProfileCard = ({ id, name, email, password, created_at }) => {
    return (
        <div className="flex items-center h-[250px] w-[230px] justify-center">
            <div className="max-w-xs">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
                        <table className="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">ID</td>
                                    <td className="px-2 py-2">{id}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">E-mail</td>
                                    <td className="px-2 py-2">{email}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Senha</td>
                                    <td className="px-2 py-2">{password}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Criado em</td>
                                    <td className="px-2 py-2">{created_at}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
};