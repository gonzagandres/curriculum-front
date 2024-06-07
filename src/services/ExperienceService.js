import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/experience';

const ExperienceService = {
  getAllExperiences: async () => {
    try {
    return await axios.get(BASE_URL);
    } catch (error) {
      console.error('Error fetching experiences:', error);
      throw error;
    }
  },

  getExperienceById: async (id) => {
    try {
      return await axios.get(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error fetching experience with id ${id}:`, error);
      throw error;
    }
  },

  addExperience: async (experience) => {
    try {
      return await axios.post(BASE_URL, experience);
    } catch (error) {
      console.error('Error adding experience:', error);
      throw error;
    }
  },

  updateExperience: async (id, experience) => {
    try {
      return await axios.put(`${BASE_URL}/${id}`, experience);
    } catch (error) {
      console.error(`Error updating experience with id ${id}:`, error);
      throw error;
    }
  },

  deleteExperience: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting experience with id ${id}:`, error);
      throw error;
    }
  }
};

export default ExperienceService;
