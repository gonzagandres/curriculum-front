import React, { useEffect } from 'react'
import { useState } from 'react'
import SkillsService from '../../services/SkillsService';
import { Link } from 'react-router-dom';

const ListSkill = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => fetchSkills(), []);

    const fetchSkills = () => {
        SkillsService.getAllSkills()
            .then((response) => {
                setSkills(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching skills:", error);
            });
    };

    const deleteSkill = (id) => {
        SkillsService.deleteSkill(id)
            .then(() => {
                setSkills(skills.filter((skill) => skill.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting skill:", error);
            });
    };

  return (
    <div className='container'>
        <h2 className='text-center'>List of Skills</h2>
        <Link to='/add-skill' className='btn btn-primary mb-2'>
            Add Skill
        </Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Skill Name</th>
                    <th>Proficiency Level</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {skills &&
                    skills.map((skill) => (
                        <tr key={skill.id}>
                            <td>{skill.id}</td>
                            <td>{skill.skill_name}</td>
                            <td>{skill.proficiency_level}</td>
                            <td>
                                <Link
                                    to={`/edit-skill/${skill.id}`}
                                    className='btn btn-info'
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteSkill(skill.id)}
                                    className='btn btn-danger'
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListSkill