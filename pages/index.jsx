import { useState } from 'react'
import { useRouter } from 'next/router'

// fetch data from API before page is rendered
export const getStaticProps = async () => {

  const res = await fetch('https://api.teleport.org/api/countries/')
  const data = await res.json()

  // provide component with information which is needed
  return{
    props: {
      data: data._links['country:items']
    }
  }
}

const index = (props) => {

  const [countryName, setCountryName] = useState('')
  const router = useRouter()

  /* 
    find the element in props which matches the user selection.  The get the country ISO code element from the index which the country object.
  */
  const getInformation = () => {
    const country = props.data.findIndex(el => el.name === countryName)
    const code = props.data[country].href.substr(props.data[country].href.length - 3)
    // push client to countries page with the params
    router.push(`/countries/${code}`)
  }

  return (
    <div>
      <div className='countryList'>
        <h2>
          Search For Country
        </h2>
        <p>
          eg:South Africa
        </p>
        {/* Create an input dropdown from the list of all countries in the api call  and set the country selected in state.*/}
        <div>
          <input 
            list="browser" 
            name="browser" 
            id="countries" 
            onChange={event => setCountryName(event.target.value)}
          />

          <datalist id="browser">
            {
              props.data.map(
                (el, index) => {
                  return (
                    <option value={el.name} key={index}/>
                  )
                }
              )
            }
          </datalist>
        </div>
        {/* Select country to search.  The users selection is held in state. */}
        <button onClick={() => getInformation()}>Get Information</button>
      </div>
    </div>
  )
}

export default index
