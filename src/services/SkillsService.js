import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/skills';

const SkillsService = {
  getAllSkills: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw error;
    }
  },

  getSkillById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response;
    } catch (error) {
      console.error(`Error fetching skill with id ${id}:`, error);
      throw error;
    }
  },

  addSkill: async (skill) => {
    try {
      const response = await axios.post(BASE_URL, skill);
      return response;
    } catch (error) {
      console.error('Error adding skill:', error);
      throw error;
    }
  },

  updateSkill: async (id, skill) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, skill);
      return response;
    } catch (error) {
      console.error(`Error updating skill with id ${id}:`, error);
      throw error;
    }
  },

  deleteSkill: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting skill with id ${id}:`, error);
      throw error;
    }
  }
};

export default SkillsService;
