import './styles.css'
import DashboardBanner from './components/dashboard_banner.jsx'
import CommonTitles from './components/common_titles.jsx'

function Dashboard() {
    return (
        <main>
            <DashboardBanner />
            <CommonTitles title={"OUR VALUES"}
                description={"Guiding Principles that Shape Our Academic Community and Inspire Excellence."} />

            <CommonTitles title={"OUR PROGRAMS"}
                description={"Not just any programs, we provide the excellent teaching-learning experience to prepare you in your career."} />

        </main>
    )
}

export default Dashboard