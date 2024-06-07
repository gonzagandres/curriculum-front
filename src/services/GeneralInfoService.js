import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/general-information';

const GeneralInfoService = {
  getGeneralInfo: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response;
    } catch (error) {
      console.error('Error fetching general information:', error);
      throw error;
    }
  },

  getGeneralInfoById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching general information with id ${id}:`, error);
      throw error;
    }
  },

  addGeneralInfo: async (info) => {
    try {
      const response = await axios.post(BASE_URL, info);
      return response.data;
    } catch (error) {
      console.error('Error adding general information:', error);
      throw error;
    }
  },

  updateGeneralInfo: async (info) => {
    try {
      const response = await axios.put(BASE_URL, info);
      return response.data;
    } catch (error) {
      console.error('Error updating general information:', error);
      throw error;
    }
  },

  deleteGeneralInfo: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting general information with id ${id}:`, error);
      throw error;
    }
  }
};

export default GeneralInfoService;
