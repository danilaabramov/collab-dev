import {useDispatch, useSelector} from "react-redux";
import TeamVacancyCard from "../components/TeamVacancyCard";
import {
    fetchAllProjects, fetchAllSkills, fetchAllTypes,
    isProjectsLoaded,
} from "../redux/slices/projects";
import {useEffect} from "react";

function HomePage() {
    const dispatch = useDispatch();
    const IsProjectsLoaded = useSelector(isProjectsLoaded);
    const {projects, types, skills} = useSelector((state) => state.projects);

    useEffect(() => {
        dispatch(fetchAllProjects());
        dispatch(fetchAllTypes());
        dispatch(fetchAllSkills());
    }, []);

    const vacancies = [
        {
            image: 'https://example.com/images/developer.png',
            title: 'Разработчик Java',
            description: 'Мы ищем опытного Java-разработчика для участия в разработке нашего продукта.',
            requirements: [
                'Опыт работы с Java не менее 3 лет',
                'Хорошее знание Spring Framework',
                'Опыт работы с базами данных, такими как PostgreSQL, MySQL'
            ],
            stack: ['Java', 'Spring Framework', 'PostgreSQL', 'MySQL'],
        },
        {
            image: 'https://example.com/images/frontend.png',
            title: 'Фронтенд-разработчик',
            description: 'Мы ищем опытного фронтенд-разработчика для создания пользовательского интерфейса',
            requirements: [
                'Опыт работы с React и Redux не менее 2 лет',
                'Хорошее знание JavaScript, HTML и CSS',
                'Опыт работы с RESTful API'
            ],
            stack: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS', 'RESTful API'],
        }
    ];

    return (
        <div className="project-page">
            <div className="project-page-container">
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
