const NavLink = ({ href, title }) => {
    return (
        <a href={href} className="block py-2 pl-3 pr-4 ">
            {title}
        </a>
    )
}

export default NavLink