import axios from 'axios';

class ApiService {
    static async getNavbarData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/navbar`);
            return response.data;
        } catch (error) {
            console.error('Error fetching navbar data:', error);
            throw error;
        }
    }

    static async getFooterData() {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/footer`);
          return response.data;
        } catch (error) {
          console.error('Error fetching footer data:', error);
          throw error;
        }
      }

    static async getAboutData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/about`);
            return response.data;
        } catch (error) {
            console.error('Error fetching about data:', error);
            throw error;
        }
    }

    static async getContactData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/contact`);
            return response.data;
        } catch (error) {
            console.error('Error fetching contact data:', error);
            throw error;
        }
    }

    static async getSupportData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/support`);
            return response.data;
        } catch (error) {
            console.error('Error fetching support data:', error);
            throw error;
        }
    }

    static async getHomeData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/home`);
            return response.data;
        } catch (error) {
            console.error('Error fetching home data:', error);
            throw error;
        }
    }

    static async getCareerData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/career`);
            return response.data;
        } catch (error) {
            console.error('Error fetching career data:', error);
            throw error;
        }
    }
}

export default ApiService;
