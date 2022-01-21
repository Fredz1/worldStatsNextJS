// Display the countries name and other general infomation.
const dataInfo = props => {

  return (
    <div className="generalInfo">
        <h2>
          {props.data.name}
        </h2>
        <div>
          <div>
            <p>
              CONTINENT
            </p>
            <p>
              {
                props.data._links !== undefined?
                  props.data._links['country:continent'].name
                  :
                  'No Info'
              }
            </p>
          </div>
          <div>
            <p>
              POPULATION
            </p>
            <p>
              {/* 
                split the number into groups of 3 for display.
              */}
              {
                props.data.population  !== undefined? 
                  props.data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                  :
                  'No Info'
              }
            </p>
          </div>
          <div>
            <p>
              CURRENCY
            </p>
            <p>
              {
                props.data.currency_code !== undefined ? 
                  props.data.currency_code
                  :
                  'No Info'
              }
            </p>
          </div>
          
        </div>
    </div>
  )
}

export default dataInfo
