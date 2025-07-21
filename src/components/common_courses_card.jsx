import '../styles.css'

function CommonCoursesCard({ imageUrl, title, description, year, semester }) {
    return (
        <div className='common-courses-card'>
            <img src={imageUrl} alt={title} />
            <div className='common-courses-card-content'>
                <div className='common-courses-card-content-title'>
                    {title}
                </div>
                <div className='common-courses-card-content-description'>
                    {description}
                </div>

                <div className='common-courses-card-content-semesterandyear'>
                    <span>Year: {year} - Semester {semester}</span>
                </div>
            </div>
        </div>
    );
}

export default CommonCoursesCard