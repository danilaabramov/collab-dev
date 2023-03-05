import TeamVacancyCard from "../components/TeamVacancyCard";

function HomePage() {
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
            chat: 'https://example.com/chat/java-developer'
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
            chat: 'https://example.com/chat/frontend-developer'
        }
    ];


    return (
        <div style={{justifyContent: 'center', width: '100vw', display: 'flex'}}>
            <div className="team-page" style={{width: 800}}>
                {vacancies.map((vacancy, index) => (
                    <TeamVacancyCard
                        key={index}
                        image={vacancy.image}
                        title={vacancy.title}
                        description={vacancy.description}
                        requirements={vacancy.requirements}
                        stack={vacancy.stack}
                        chat={vacancy.chat}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage
