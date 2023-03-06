import TeamVacancyCard from "../components/TeamVacancyCard";
import {useSelector} from "react-redux";
import {isProjectsLoaded} from "../redux/slices/projects";

function HomePage() {
    const IsProjectsLoaded = useSelector(isProjectsLoaded);
    const {projects, types, skills} = useSelector((state) => state.projects);

    return (
        <div className="job-openings">
            <div className="job-openings-container">
                {IsProjectsLoaded && projects.items.map((project, index) => (
                    <TeamVacancyCard
                        key={index}
                        // image={project.image}
                        title={project.title}
                        description={project.description}
                        stack={project.skills.map((item) => skills.items[item])}
                        type={types.items[project.project_type]}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage
