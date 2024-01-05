import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Hourglass } from 'react-loader-spinner'; // Import Hourglass from the appropriate library

const Books = () => {
  const fetchedData = useSelector((state) => state.data);
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  // Filter books based on the search term
  const filteredData = fetchedData.books
    ? fetchedData.books.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Update search term when the user types in the input box
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setResult("");
    } 
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "10vh" }}>
      <div className='search' style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10vh" }}>
        <input
          type="text"
          style={{ width: "15vw", margin: "0", marginBottom: "5vh" }}
          placeholder='Search Books...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="" style={{ width: "30px", height: "30px", position: "relative", right: "15%", top: "1.5vh" }} />
      </div>

      {filteredData.length === 0 ? (<div style={{padding: "20vh 0"}}>
        <Hourglass
          visible={true}
          height={80}
          width={80}
          ariaLabel="hourglass-loading"
          wrapperStyle={{ marginTop: "6vh" }}
          wrapperClass=""
          colors={['white', '#72a1ed']}
        />
      </div>
        
      ) : (
        <div className="contentDisplay" style={{ display: "grid", gridTemplateColumns: "repeat(3,0.3fr)", columnGap: "150px", justifyItems: "center", rowGap: "100px", marginTop: "6vh" }}>
          {filteredData.map((e, i) => (
            <div className='display' key={i} style={{ padding: "50px" }}>
              <img
                src={e.imageLinks.thumbnail}
                alt=""
                style={{
                  width: "150px",
                  height: "250px",
                  animation: filteredData.length === 0 ? "skeleton-loading 1s linear" : "none",
                }}
                className='bookImage'
              />
              <div className='details'>
                <h4 style={{ width: "147px", textAlign: "center", marginTop: "10px" }}>{e.title}</h4>
                <div>
                  {e.averageRating ? (
                    <span>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                        <p>{e.averageRating}⭐ </p>
                        <p style={{ color: "green" }}>FREE</p>
                      </div>
                    </span>
                  ) : (
                    <span>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                        <p>UR</p>
                        <p style={{ color: "green" }}>FREE</p>
                      </div>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display search result message */}
      <p>{result}</p>
    </div>
  );
};

export default Books;
