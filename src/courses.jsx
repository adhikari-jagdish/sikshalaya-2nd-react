import './styles.css'
import CommonCoursesCard from './components/common_courses_card';
import CommonTitles from './components/common_titles';

function Courses() {
    return (
        <main>
            <CommonTitles title={"OUR COURSES"}
                description={"Best Courses in Sikshalaya for every student's growth."} />

            <div className='our-courses'>
                <CommonCoursesCard
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_5.jpg"}
                    title={"CSIT"}
                    description={"Computer Science and Information Technology"}
                    year={4}
                    semester={8}
                />

                <CommonCoursesCard
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_7.jpg"}
                    title={"BCA"}
                    description={"Bachelors of computer application"}
                    year={4}
                    semester={8}
                />

            </div>
        </main>
    )
}

export default Courses;