import Link from "next/link"

const Nav = () => {
  return (
    <div className="header">
      <h1>
        Country Information
      </h1>
      <nav>
        <Link href='/'>
          <a>Select a New Country</a>
        </Link>
        
      </nav>
    </div>
  )
}

export default Nav