import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import GeneralInfoService from "../../services/GeneralInfoService";

const AddInfo = () => {
  
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
        if (id) {
            fetchInfo();
        }
    }, [id]);

    const fetchInfo = () => {
        GeneralInfoService.getGeneralInfoById(id)
            .then((response) => {
                const info = response.data;
                setDescription(info.description);
                setSummary(info.summary);
            })
            .catch((error) => {
                console.error('Error fetching general information:', error);
            });
    }

    const saveOrUpdateInfo = (e) => {
        e.preventDefault();
        const info = { description, summary };

        if (id) {
            GeneralInfoService.updateGeneralInfo(id, info)
                .then(() => {
                    navigate("/info");
                })
                .catch((error) => {
                    console.error('Error updating general information:', error);
                });
        } else {
            GeneralInfoService.addGeneralInfo(info)
                .then(() => {
                    navigate("/info");
                })
                .catch((error) => {
                    console.error('Error adding general information:', error);
                });
        }
    }

    return (
    <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3">
                <h2 className="text-center">{id ? "Edit General Information" : "Add General Information"}</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label>Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label>Summary:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success"
                            onClick={saveOrUpdateInfo}
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddInfo
