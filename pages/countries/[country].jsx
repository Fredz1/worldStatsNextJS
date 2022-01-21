import GeneralInfo from '../../components/GeneralInfo'
import JobInfo from '../../components/JobInfo'


// params are passed to page by context
export const getServerSideProps = async (context) => {
  try{
    // make fetch requests to API as general information and salaries are provided by separatly by the API
    const general = await fetch(
      `https://api.teleport.org/api/countries/iso_alpha2%3A${context.params.country}/`
    )
    const salaries = await fetch(
      `https://api.teleport.org/api/countries/iso_alpha2%3A${context.params.country}/salaries/`
    )
  
    // convert to json
    const data = await general.json()
    const salaryData = await salaries.json()
    return {
      props: {
        general: data,
        salaries: salaryData
      }
    }
  } catch(error){
    // if the user selects an none existent country or something goes wrong with fetching data they will be sent to 404 page
    return {
      notFound: true
    }
  }
}

// reuseable components to display information.
const country = props => {
  return (
    <div>
      <div>
        <GeneralInfo data={props.general} />
      </div>
      <div>
        <JobInfo data={props.salaries} />
      </div>
    </div>
  )
}

export default country
