import {useDispatch, useSelector} from "react-redux";
import {useState} from 'react'
import {fetchPostProject} from "../redux/slices/projects";
import {Link, useNavigate} from "react-router-dom";

function AddProjectPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {types, skills} = useSelector((state) => state.projects);
    const [isFocused1, setIsFocused1] = useState(false)
    const [isFocused2, setIsFocused2] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [activeType, setIActiveType] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [title, setTitle] = useState('')
    const [addSkills, setAddSkills] = useState([])
    const [description, setDescription] = useState('')

    const handlePostChange = () => {
        dispatch(fetchPostProject({
            title,
            description,
            skills: addSkills,
            soft_delete: false,
            project_type: Object.keys(types.items)[activeType]
        }))
    };

    return (<div className="job-openings">
            <div className="job-openings-container">
                <div className="team-vacancy-card" style={{padding: '20px'}}>
                    <div className="team-vacancy-card-content" style={{width: '100%'}}>

                        <div className={isFocused1 ? "active-registration-form__group" : "registration-form__group"}>
                            <input className="registration-form__input"
                                   onFocus={() => setIsFocused1(true)}
                                   onBlur={() => setIsFocused1(false)}
                                   type="text" id="title" value={title}
                                   onChange={e => setTitle(e.target.value)}
                                   style={{paddingTop: 9, borderRadius: 10, fontSize: 20, fontWeight: 'bold'}}
                                   placeholder='Название'
                                   autoFocus/>
                        </div>

                        <ul className="team-vacancy-card-stack-list">
                            <li>Тип проекта:</li>
                            {Object.keys(types.items).map((item, index) => (
                                <li className='team-vacancy-card-type' key={index}
                                    style={{borderBottom: activeType === index ? '2px solid blue' : 0}}
                                    onClick={() => setIActiveType(index)}>#{types.items[item]}</li>))}
                        </ul>

                        <div className={isFocused2 ? "active-registration-form__group" : "registration-form__group"}>
                        <textarea className="registration-form__input"
                                  onFocus={() => setIsFocused2(true)}
                                  onBlur={() => setIsFocused2(false)}
                                  id="description" value={description}
                                  onChange={e => setDescription(e.target.value)}
                                  style={{
                                      paddingTop: 9, borderRadius: 10, resize: 'none',
                                      fontFamily: 'inherit',
                                      fontSize: 'inherit',
                                      height: 100
                                  }}
                                  placeholder='Описание'
                                  autoFocus/>
                        </div>

                        <ul className="team-vacancy-card-stack-list">
                            {addSkills.map((item, index) => (
                                <li className="team-vacancy-card-stack-item" key={index}
                                    onClick={() => setAddSkills(s => s.filter(n => n !== item))}>- {skills.items[item]}</li>))}
                        </ul>
                        <div className={isFocused ? "active-registration-form__group" : "registration-form__group"}
                             style={{marginBottom: 0}}>
                            <input className="registration-form__input"
                                   onFocus={() => setIsFocused(true)}
                                   onBlur={() => setIsFocused(false)}
                                   type="text" value={searchTerm}
                                   onChange={(e) => setSearchTerm(e.target.value)}
                                   style={{paddingTop: 9, borderRadius: 10}}
                                   placeholder='Начните искать навык, например, git'
                            />
                        </div>
                        {
                            Object.keys(skills.items).filter(key => skills.items[key].toLowerCase()
                                .includes(searchTerm.toLowerCase())).length && searchTerm ?
                                <ul className="team-vacancy-card-stack-list"
                                    style={{gap: 0, border: '1px solid #ccc', marginTop: 0, borderRadius: 10}}>
                                    {Object.keys(skills.items).filter(key => skills.items[key].toLowerCase()
                                        .includes(searchTerm.toLowerCase())).map((item, index) => (
                                        <li className="add-project-stack-item" key={index} style={{borderRadius: 9}}
                                            onClick={() => setAddSkills(s => s.indexOf(item) === -1 ? [...s, Number(item)] : s)}>{skills.items[item]}</li>))}
                                </ul> : null
                        }

                        <Link to='/'>
                        <button className="registration-form__submit" type="submit" onClick={handlePostChange}>Создать
                            проект
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProjectPage
