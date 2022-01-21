import Link from 'next/Link'

const FourOhFour = () => {
  return (
    <div className='errorPage'>
      <h1>OOPS</h1>
      <h1>404 - Page Not Found</h1>
      <h3>Or you are doing something you are not supposed to do</h3>
        &rarr; 
          <Link href="/">
            <a>
              Go back home
            </a>
          </Link >
        &larr;
    </div>
  )
}

export default FourOhFour