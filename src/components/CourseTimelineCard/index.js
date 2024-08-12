import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-time-line-card-container">
      <div className="courseTitle-duration-container">
        <h1 className="courseTitle-head">{courseTitle}</h1>
        <p>
          <AiFillClockCircle className="AiFillClockCircle-icon" />
          {duration}
        </p>
      </div>
      <p className="description-para">{description}</p>
      <ul className="tagsList-container">
        {tagsList.map(eachItem => (
          <li className="tagsList-item-container">
            <p key={eachItem.id}>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
