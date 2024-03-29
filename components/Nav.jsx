import Link from "next/link";

const links = [
    { path: '/', name: 'home'},
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' },
]

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    return (<nav className={`${containerStyles}`}>
        {links.map((link, indexedDB) => {
            return <Link href={link.path}>{link.name}</Link>
        })}
    </nav>
    )
}

export default Nav;