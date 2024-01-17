import React, { useState, useEffect } from "react";

const UlkelerBayrak = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay to mimic loading (you can replace this with actual loading logic)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        // Render a loader while the content is loading
        <div style={{ color: "black" }}>Yükleniyor...</div>
      ) : (
        // Render the content once loading is complete
        <div
          style={{
            background: "white",
            width: "75vh",
            height: "65vh",
            borderRadius: 8,
          }}
        >
          <iframe
            style={{ border: "none", width: "100%", height: "100%" }}
            src="js-flags-quiz-master/index.html"
            onLoad={() => setLoading(false)} // In case the iframe has its own loading logic
          ></iframe>
        </div>
      )}
    </>
  );
};

export default UlkelerBayrak;
