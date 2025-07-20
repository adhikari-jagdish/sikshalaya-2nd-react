import './styles.css'
import DashboardBanner from './components/dashboard_banner.jsx'
import CommonTitles from './components/common_titles.jsx'
import CommonOurProgramsCard from './components/common_our_programs_card.jsx'
import CommonOurValuesCard from './components/common_our_values_card.jsx'

function Dashboard() {
    return (
        <main>
            <DashboardBanner />
            <CommonTitles title={"OUR VALUES"}
                description={"Guiding Principles that Shape Our Academic Community and Inspire Excellence."} />

            <div className='our-values-grid'>
                <CommonOurValuesCard
                    iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                    title={"Academic Excellence"} />
                <CommonOurValuesCard
                    iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/innovation.png"}
                    title={"Innovation & Creativity"} />
                <CommonOurValuesCard
                    iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Integrity.png"}
                    title={"Integrity & Ethics"} />
                <CommonOurValuesCard
                    iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Student-Centered.png"}
                    title={"Student-Centered Learning"} />

            </div>

            <CommonTitles title={"OUR PROGRAMS"}
                description={"Not just any programs, we provide the excellent teaching-learning experience to prepare you in your career."} />


            <div className='our-programs'>
                <CommonOurProgramsCard
                    title={"CSIT"}
                    description={"Not just any programs, we provide the excellent teaching-learning experience to prepare you in your career."}
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_9.jpg"}
                />

                <CommonOurProgramsCard title={"BCA"}
                    description={"BBA program affiliated with Far Western University is a four-year, eight-semester course designed to equip students with foundational and advanced knowledge in business management. "}
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_6.jpg"}
                />
            </div>



        </main>
    )
}

export default Dashboard