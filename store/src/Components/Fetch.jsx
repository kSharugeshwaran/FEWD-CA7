import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';  // Fix the import statement
import { setFetchedData } from './Redux/action';

const Fetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reactnd-books-api.udacity.com/books", {
          headers: {
            'Authorization': 'whatever-you-want',
            'Content-Type': 'application/json', // You may need to specify the content type based on your API requirements
          },
        });

        const result = await response.json();
        dispatch(setFetchedData(result));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div></div>
  );
};

export default Fetch;
