import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SkillService from "../../services/SkillsService";

const AddSkill = () => {

    const [skill_name, setSkill] = useState("");
    const [proficiency_level, setLevel] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchSkill();
        }
    }, [id]);

    const fetchSkill = () => {
        SkillService.getSkillById(id)
            .then((response) => {
                const skill = response.data;
                setSkill(skill.skill_name);
                setLevel(skill.proficiency_level);
            })
            .catch((error) => {
                console.error('Error fetching skill:', error);
            });
    }

    const saveOrUpdateSkill = (e) => {
        e.preventDefault();
        const skill = { skill_name, proficiency_level };

        if (id) {
            SkillService.updateSkill(id, skill)
                .then(() => {
                    navigate("/skills");
                })
                .catch((error) => {
                    console.error('Error updating skill:', error);
                });
        } else {
            SkillService.addSkill(skill)
                .then(() => {
                    navigate("/skills");
                })
                .catch((error) => {
                    console.error('Error adding skill:', error);
                });
        }
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                <h2 className='text-center'>{id ? "Edit Skill" : "Add Skill"}</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label>Skill Name:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter skill name'
                                value={skill_name}
                                onChange={(e) => setSkill(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label>Proficiency Level:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter proeficiency level'
                                value={proficiency_level}
                                onChange={(e) => setLevel(e.target.value)}
                            />
                        </div>
                        <button onClick={saveOrUpdateSkill} className='btn btn-success'>
                            {id ? "Update" : "Save"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSkill
