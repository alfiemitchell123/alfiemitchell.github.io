import React, { useState, useEffect } from 'react';
import { Rubik } from 'next/font/google';
import Comment from '../components/Comment';

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState({ currentUser: {}, comments: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('data.json');
        const jsonData = await res.json();

        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className={`${rubik.className}`}>

      <div className="commentContainer">
        {data.comments.map(comment => (
          <Comment
            key={comment.id}
            isReply={false}
            {...comment}
          />
        ))}
      </div>

    </main>
  )
}