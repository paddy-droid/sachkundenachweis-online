'use client';

import { useEffect, useState } from 'react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  relative_time_description: string;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Was unsere Kunden sagen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{review.author_name}</p>
                <div className="flex items-center">
                  {'⭐'.repeat(review.rating)}
                  <span className="text-gray-500 ml-2 text-sm">{review.relative_time_description}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.google.com/maps/place/Hundeschule+Willenskraft+%26+Akademie+(Hundetrainer-Ausbildung)/@46.6274485,13.3656955,599m/data=!3m2!1e3!4b1!4m6!3m5!1s0x476f031276ffcde3:0x4ccb6663ec089bf2!8m2!3d46.6274448!4d13.3682704!16s%2Fg%2F11cn9jdxqq?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Weitere Bewertungen auf Google lesen
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;