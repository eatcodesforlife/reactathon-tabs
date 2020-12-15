import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Jobs = ({jobIndex, jobs, getValue, value}) => {
    const { title, company, dates, duties} = jobIndex
    
    return (
        <section className='section'>
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {
                        jobs.map((job, index) => (
                            <h2 
                                key={job.id} 
                                onClick={()=> getValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}
                            >
                                {job.company}
                            </h2>
                        ))
                    }
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {
                        duties.map((desc, index) => (
                            <div className="job-desc" key={index}>
                                <FaAngleDoubleRight className='job-icon' />           
                                <p>{desc}</p>
                            </div>
                        ))
                    }
                </article>
            </div>            
        </section>
    )
}

export default Jobs
