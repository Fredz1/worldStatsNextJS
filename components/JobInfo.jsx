import { useState } from 'react'
import JobsSalary from './JobsSalary'

const JobInfo = props => {
  // State
  const [job, setJob] = useState('');
  const [salaryInfo, setSalaryInfo] = useState([]);

  
  /* 
    update job title for display .
    find the selected job title in the array and put the information into an array.
    if nothing is found the array is empty inorder for component to display nothing.
  */
  const salary = title => {
    setJob(title)
    const info = props.data.salaries.filter(
      el => el.job.title === title
    )
    if(info.length !== 0){
      const getSalary = info[0].salary_percentiles
      return setSalaryInfo([getSalary.percentile_25 , getSalary.percentile_50, getSalary.percentile_75])
    } else {
      setSalaryInfo([])
    }
    
  }
  
  
  return (
    <div className='jobinfo'>
      <div className='jobSelect'>
        <p>Estimated Salary</p>
        <div>
          {/* 
            create and populate input list of jobs
          */}
          <input list="jobTitle" name="jobTitle" value={job} onChange={event => salary(event.target.value)}/>
          <datalist id="jobTitle">
            {
              props.data.salaries.map(
                (el, index) => {
                  return(
                    <option value={el.job.title} key={index} />
                  )
                }
              )
            }
          </datalist>
        
        </div>
      </div>
      {/* 
        send enpty array to component if job title cannot be found
        eg when user is editing the input.
      */}
      <div>
        {
          salaryInfo === [] ?
          ''
          :
          <JobsSalary data={salaryInfo}/>
        }
        
      </div>
    </div>
  )
}

export default JobInfo
