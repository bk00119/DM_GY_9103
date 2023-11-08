import Link from "./Link"

export default function Menu(){
  const links = [
    { label: 'home', path: '/' },
    { label: 'button', path:'/button' },
    { label: 'accordion', path: '/accordion' },
    { label: 'modal', path: '/modal' },
  ]
  const renderedLinks = links.map((link) => {
    return (
      <Link 
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold "
      >
        {link.label}
      </Link>
    )
  })

  return (
    <div>
      {renderedLinks}
    </div>
  )
}