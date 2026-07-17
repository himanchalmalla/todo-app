import React, { useEffect, useState } from 'react'
import { testAPI } from '../services/test.services'

const TestPage = () => {
    const [data, setData] = useState();
    useEffect(() => {
      const fetchData = async () => {
        const response = await testAPI();
        console.log(response);
        setData(response.data);
      };

      fetchData();
    }, []);
  return (
    <div>
        <h1>Test Page</h1>
        {
            data?.success ? <p>{data?.message}</p> : <p style={{color:'red', fontWeight:'bold'}}>"OOPS!! Failed to connect to server Something went wrong"</p>
        }
    </div>
  )
}

export default TestPage
