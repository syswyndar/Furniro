export const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between py-4 px-10">
                <div>
                    <img className="w-[150px]" src="/Logo.jpg" alt="logo" />
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}