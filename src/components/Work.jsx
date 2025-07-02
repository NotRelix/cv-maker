import "../styles/Education.css"

const Work = ({ userInfo }) => {
  if (userInfo.workList.length === 0) return null;
  return (
    <section className="user-cv__education">
      <h1 className="education__title">Work Experience</h1>
      <hr />
      <div className="education__list">
        {userInfo.workList.map((work, index) => (
          <div className="education__container" key={index}>
            <div className="education__top-container">
              <div className="education__school">
                <h1 className="education__university">{work.position}</h1>
                <p className="education__course">{work.workplace}</p>
              </div>
              <div className="education__year">
                <p>{work.startingWorkYear}-{work.endWorkYear}</p>
              </div>
            </div>
            <div className="education__middle-container">
              <ul className="education__additional-info">
                {work.additionalWorkInfo.map((info) => (
                  <li>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work;