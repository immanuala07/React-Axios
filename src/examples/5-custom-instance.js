import { useEffect } from 'react';
import axios from "axios";

import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      // First request
      const response1 = await authFetch('/react-store-products');
      console.log(response1.data);

      // Second request
      const response2 = await axios.get(randomUserUrl);
      console.log(response2.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
