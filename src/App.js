import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Jobs from './components/Jobs'

const url = 'https://my-react-projects-fake-api.herokuapp.com/tabs'

function App() {
  
  const [ isLoading, setIsLoading ] = useState(true)
  const [ jobs, setJobs ] = useState([])
  const [ value, setValue ] = useState(0)

  useEffect(() => {
    
      const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()

        return data
      }

      getData()
      .then(data => {
        setJobs(data)
        setIsLoading(false)
      })

  }, [])

  const getValue = (val) => {
    setValue(val)
  }

  return (
    <>
      { isLoading 
          ? <Loading /> 
          : 
          <Jobs 
            jobs={jobs} 
            jobIndex={jobs[value]} 
            getValue={getValue} 
            value={value}
          />
      }
    </>
  );
}

export default App;
