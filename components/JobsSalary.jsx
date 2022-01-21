import { useState, useEffect } from 'react'

const JobsSalary = (props) => {
  // State
  const [lower, setLower] = useState('')
  const [mid, setMid] = useState('')
  const [upper, setUpper] = useState('')

  // convert the salary information to a string which is rounded and separated for display purposes.
  const makeDisplayNum = input => {
    if(input !== undefined){
      const round = parseFloat(input).toFixed(2)
      const split = round.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      return split
    }
    return ''
    
  }

  // This updates the display only when props change.
  useEffect(() => {
    setLower(makeDisplayNum(props.data[0]))
    setMid(makeDisplayNum(props.data[1]))
    setUpper(makeDisplayNum(props.data[2]))
  }, [props])
  
  
  return (
    <div className='jobSalary'>
      <div>
        <p>
          25th
        </p>
        <p>
          ${lower}         
         </p>
      </div>
      <div>
        <p>
          50th
        </p>
        <p>
          ${mid}
        </p>
      </div>
      <div>
        <p>
          75th
        </p>
        <p>
          ${upper}
        </p>
      </div>
    </div>
    
  )
}

export default JobsSalary
