function Login () {
    return (
        <>
            <div className=" h-screen w-screen bg-[#f1f3fb]">
                <div className="p-[20px] nav h-[100px] flex flex-row justify-between items-center">
                    <div className="pl-[30px] nav-left flex">
                        <span className="logo"><img className="w-[65px] h-[65px]" src="./src/assets/papis-logo.png" alt="Papis Logo" /></span>
                        <span className="text-[35px]"><b>Papis</b></span>
                    </div>
                    <div className="nav-right">
                        <ul className="nav list-none flex">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;