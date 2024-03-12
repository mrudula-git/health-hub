"use client"
import { useState } from 'react';
import './sliding.css';

const texts = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];

const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-red-500",
  "bg-indigo-500",
];

export default function Scroller({ speed = 50000 }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <div>
      <div className="h-full">
        <br/>
      <h1 className="text-5xl font-bold mb-4 text-center my-5">Title Here</h1>
        <div className="flex container overflow-hidden mx-auto">
          {[0, 0, 0].map((el, key) => (
            <section
              key={key}
              className={`scroll-container flex ${isHovered ? 'paused' : ''}`}
              style={{ "--speed": `${speed}ms` }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {texts.map((t, key) => (
                <div className={`image`} key={key}>
                  <div className={`scroll-card mx-2 p-8 rounded shadow min-w-64 min-h-64 flex justify-center items-center my-5 ${colors[key % colors.length]}`}
                   >
                    {t}
                  </div>
                </div>
              ))}
            </section>
          ))}
         
        </div>
      </div>
    </div>
  );
}
