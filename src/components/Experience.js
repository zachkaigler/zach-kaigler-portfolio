import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { jobs } from '../jobdata'

const Experience = () => {
    const [activeJob, setActiveJob] = useState(jobs[0])

    const jobLabels = jobs.map((job) => {
        return (
            <p className={ activeJob.company === job.company ? "selected-job" : ""}
               onClick={() => setActiveJob(job)}
               key={uuidv4()}
            >{job.company}</p>
        )
    })

    const responsibilities = activeJob.responsibilities.map((resp) => {
        return (
            <p key={uuidv4()}
               className="resp-item">{resp}</p>
        )
    })

    return (
        <section id="experience">
            <div className="section">
                <div className="experience">
                    <div className="jobs-container">
                        <div className="jobs-left">
                            {jobLabels}
                        </div>
                        <div className="jobs-right">
                            <p className="title">{activeJob.title}</p>
                            <p className="company">{activeJob.company} <span>| {activeJob.dates}</span> </p>
                            <div className="line experience-line"></div>
                            {responsibilities}
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Experience
