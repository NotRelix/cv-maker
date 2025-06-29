import "../styles/Education.css"

const Education = ({ userInfo }) => {
  if (userInfo.educationList.length === 0) return null;
  return (
    <section className="user-cv__education">
      <h1 className="education__title">Education Background</h1>
      <hr />
      <div className="education__list">
        {userInfo.educationList.map((education) => (
          <div className="education__container">
            <div className="education__top-container">
              <div className="education__school">
                <h1 className="education__university">{education.university}</h1>
                <p className="education__course">{education.course}</p>
              </div>
              <div className="education__year">
                <p>{education.startingYear}-{education.graduatingYear}</p>
              </div>
            </div>
            <div className="education__middle-container">
              {education.gpa && <p className="education__gpa">GPA: {education.gpa}</p>}
              <ul className="education__additional-info">
                {education.additionalInfo.map((info) => (
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

export default Education