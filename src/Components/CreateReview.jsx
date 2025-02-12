import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import { encryptData } from '../Services/AESEncryptionHelper';



const CreateReview = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const secretKey = 't8TS+0ZAa0nDUyL2smoV+RupUX2iBtgRDJUgyHEkumU='; 


  const handleSubmit = async (e) => {
   
    e.preventDefault();
    setIsLoading(true);
 
    try {
      const { encryptedData: encryptedName, iv: nameIv } = encryptData(name, secretKey);
      const { encryptedData: encryptedContent, iv: contentIv } = encryptData(review, secretKey);
      // const response = await fetch('http://localhost:5070/api/Reviews', {
        const response = await fetch('https://albumwebapi.runasp.net/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // name:name,
          // content: review,
          name: encryptedName,
          content: encryptedContent,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      toast.success(`Thank you, ${name}, for your review!`, {
        position: 'top-right',
        autoClose: 5000,
      });

      setName('');
      setReview('');

      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      toast.error('There was an issue submitting your review.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Nav />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-yellow-800 mb-4">Write a Review</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-600">
              Your Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="border-2 w-full px-4 py-2 border-yellow-800 text-white bg-yellow-800 hover:text-white font-semibold rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0115.07-5.21l1.1 1.1A10 10 0 0012 2v10h10a8 8 0 11-18.07 3.29l-1.1-1.1A10 10 0 0024 12h-12z"
                  />
                </svg>
              </div>
            ) : (
              'Submit Review'
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateReview;

// wwIYSHDHeSKHMDNscDcy1CnNjnIvLB1Uo2R+TtWf5AEp4dfwADn+kKg5VFWeaBN9PSvjKBSdTj6J/YuC2ERBB9JzofoV7ek9lJGvaMwPGGIHxsFEHC4HM2YPFK+8rhXB9wI+vDhOnnWlX6cYIESr6dGrJpJSqj0eM63oK3UH3GvQlBj2G8cu+fGiiP++E/v1Dsgg3jy5T/Zslvuj1Qmi30wFr1sG8eItxzAVeVH04v+FTZ2TUJUbkfBQGv1rPj05MSPF7nv07abazBSZ5IXOBhrIBrEgyieb/MRmxpmZXs1OqKAaxZ47QlqKv/AhE30rWGpSVmG1HpRbnQY8GhkEQQ==