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
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
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

        if(!skill_name || !proficiency_level) {
            alert("Please enter skill name and proficiency level");
            return;
        }

        if (id) {
            SkillService.updateSkill(id, skill)
                .then(() => {
                    navigate("/");
                })
                .catch((error) => {
                    console.error('Error updating skill:', error);
                });
        } else {
            SkillService.addSkill(skill)
                .then(() => {
                    navigate("/");
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
                        <button className="btn btn-success" onClick={saveOrUpdateSkill}>
                                Save
                            </button>
                            &nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={() => navigate("/")}>
                                Cancel
                            </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSkill
