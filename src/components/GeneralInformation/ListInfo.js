import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GeneralInfoService from "../../services/GeneralInfoService";
import { Link } from "react-router-dom";

const ListInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => fetchInfo(), []);

    const fetchInfo = () => {
        GeneralInfoService.getGeneralInfo()
            .then((response) => {
                setInfo(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching general information:", error);
            });
    };

    const deleteInfo = (id) => {
        GeneralInfoService.deleteGeneralInfo(id)
            .then(() => {
                setInfo(info.filter((info) => info.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting general information:", error);
            });
    };

    return (
        <div className="container">
            <Link to="/add-info" className="btn btn-primary mb-2">
                Add General Information
            </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {info &&
                        info.map((info) => (
                            <tr key={info.id}>
                                <td>{info.id}</td>
                                <td>{info.description}</td>
                                <td>{info.summary}</td>
                                <td>
                                    <Link
                                        to={`/edit-info/${info.id}`}
                                        className="btn btn-info"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteInfo(info.id)}
                                        className="btn btn-danger"
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

export default ListInfo;
