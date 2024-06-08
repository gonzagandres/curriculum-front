import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExperienceService from "../../services/ExperienceService";

const ListExperience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => fetchExperiences(), []);

    const fetchExperiences = () => { 
        ExperienceService.getAllExperiences()
            .then((response) => {
                setExperiences(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching experiences:", error);
            });
    };

    const deleteExperience = (id) => {
        ExperienceService.deleteExperience(id)
            .then(() => {
                // Update the experiences list after deletion
                setExperiences(
                    experiences.filter((experience) => experience.id !== id)
                );
            })
            .catch((error) => {
                console.error("Error deleting experience:", error);
            });
    };

    return (
        <div className="container">
            <Link to="/add-experience" className="btn btn-primary mb-2">
                Add Experience
            </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {experiences &&
                        experiences.map((experience) => (
                            <tr key={experience.id}>
                                <td>{experience.id}</td>
                                <td>{experience.job_title}</td>
                                <td>{experience.company}</td>
                                <td>
                                    <Link
                                        to={`/edit-experience/${experience.id}`}
                                        className="btn btn-info"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        style={{ marginLeft: "10px" }}
                                        onClick={() =>
                                            deleteExperience(experience.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListExperience;
