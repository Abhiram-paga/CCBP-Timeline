import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectDetails

  return (
    <div className="project-time-line-card">
      <img src={imageUrl} className="project-image" alt='project'/>
      <div className="projectTitle-duration-container">
        <h1 className="projectTitle-heading">{projectTitle}</h1>
        <p className="duration-para">
          <AiFillCalendar /> {duration}
        </p>
      </div>
      <p className="description-para">{description}</p>
      <a href={projectUrl} target="_blank" className="anchor-tag">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
