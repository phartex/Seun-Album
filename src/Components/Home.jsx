import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SeunImage  from "../Image/dede-shot.jpg"
import Nav from "./Nav.jsx";

function Homepage() {
//   const [reviews, setReviews] = useState([]);

  
  const reviews = [
    {
      name: "fateru Tobi",
      content: "i love every piece of this album, God bless minister seun"
    },
    {
      name: "fateru Tobi",
      content: "i love every piece of this album, God bless minister seun"
    },
    {
      name: "Seun Dede",
      content: "its an amazing album"
    }
  ];
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5070/api/reviews"); // Replace with your endpoint
        const data = await response.json();
        // setReviews(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Nav />
      <section>
        <div className="bg-black md:h-screen pt-24 md:pt-20 px-10 pb-6 md:pb-0">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 md:px-12">
            <div className="pt-5 md:pt-0 text-center md:text-start">
              <p className="text-yellow-800 text-[4em] font-bold md:font-semibold md:text-[10em]">SEUN</p>
              <p className="text-yellow-800 text-[4em] font-bold md:font-semibold md:text-[10em]">DEDE</p>
            </div>
            <div>
              <img
                src={SeunImage}
                alt="seun "
                width={400}
                height={700}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="md:px-10 md:py-5">
          <p className="text-center text-5xl font-semibold pt-16 text-yellow-800">Reviews</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {reviews.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 h-48 flex flex-col justify-between"
              >
                <p className="text-center text-gray-600 text-lg pt-4 italic font-medium">
                  {post.content}
                </p>
                <p className="text-center text-2xl font-semibold">{post.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 pb-4">
            <Link
              to="/create-review"
              className="border-2 border-yellow-800 px-6 py-4 text-yellow-800 hover:bg-yellow-800 hover:text-white font-semibold rounded-lg shadow"
            >
              Write a Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
