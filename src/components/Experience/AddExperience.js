import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExperienceService from "../../services/ExperienceService";
import { useParams } from "react-router-dom";

const AddExperience = () => {
    const [job_title, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchExperience();
        }
    }, [id]);

    const fetchExperience = () => {
        ExperienceService.getExperienceById(id)
            .then((response) => {
                const experience = response.data;
                setJobTitle(experience.job_title);
                setCompany(experience.company);
            })
            .catch((error) => {
                console.error('Error fetching experience:', error);
            });
    };

    const saveOrUpdateExperience = (e) => {
        e.preventDefault();
        const experience = { job_title, company };

        if (id) {
            ExperienceService.updateExperience(id, experience)
                .then(() => {
                    navigate("/experiences");
                })
                .catch((error) => {
                    console.error('Error updating experience:', error);
                });
        } else {
            ExperienceService.addExperience(experience)
                .then(() => {
                    navigate("/experiences");
                })
                .catch((error) => {
                    console.error('Error adding experience:', error);
                });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">{id ? "Edit Experience" : "Add Experience"}</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Job Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter job title"
                                    className="form-control"
                                    value={job_title}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Company</label>
                                <input
                                    type="text"
                                    placeholder="Enter company"
                                    className="form-control"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-success" onClick={saveOrUpdateExperience}>
                                Save
                            </button>
                            &nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={() => navigate("/experiences")}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddExperience;
