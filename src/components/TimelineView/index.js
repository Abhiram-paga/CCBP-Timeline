import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList

  return (
    <div className="chrono-container">
      <div className="jouney-ccbp4-container">
        <h1 className="ccbp4-head">
          MY JOURNEY OF <br /> CCBP 4.0
        </h1>
      </div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={items}
        theme={{
          primary: 'blue',
          secondary: 'white',
          cardBgColor: 'white',
          cardForeColor: 'blue',
          titleColor: 'blue',
        }}
      >
        {timelineItemsList.map(eachObj => {
          if (eachObj.categoryId === 'COURSE') {
            return (
              <CourseTimelineCard courseDetails={eachObj} key={eachObj.id} />
            )
          } else if (eachObj.categoryId === 'PROJECT') {
            return (
              <ProjectTimelineCard projectDetails={eachObj} key={eachObj.id} />
            )
          }
          return null
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView
