import axios from "axios";
import {
  useState,
  useEffect
} from 'react';

const useDataFatch = (url,cb) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const {data:response} = await axios.get(url);

      if (cb){
        setData(cb(response));
      }else{
        setData(response);
      }
      // if (!cb){
      //   setData(response);
      // }
      setError('');
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error
  }
};

export default useDataFatch;