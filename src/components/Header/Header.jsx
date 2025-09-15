const Header = ({ data }) => {
    const logOutUser = () => {
        localStorage.setItem("loggedInUser", null);
        window.location.reload();
    };

    return (
        <div className="p-6 flex justify-between border-b-1">
            <h1 className="text-2xl font-medium">
                Hello <br />{" "}
                <span className="text-3xl font-semibold">
                    {data?.firstName?.toUpperCase()} 😃
                </span>
            </h1>
            <button
                className="bg-red-400 rounded-md px-2 h-12 w-24 font-medium"
                onClick={logOutUser}
            >
                Log Out
            </button>
        </div>
    );
};

export default Header;
