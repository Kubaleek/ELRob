import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ElectroLoading() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getRandomPosition = (size: number) => {
    const x = Math.random() * size;
    const y = Math.random() * size;
    return { x, y };
  };

  if (!isClient) return null;

  return (
    <div className="relative flex items-center justify-center h-screen bg-[#141414] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#1b1b1b] to-[#141414]"></div>
      <motion.div className="w-40 h-40 border-8 border-t-[#ef9c00] border-[#7f7f7f] rounded-full relative" animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} style={{ boxShadow: '0 0 25px rgba(239, 156, 0, 0.8)', filter: 'blur(6px)' }}>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}>
          {[...Array(10)].map((_, i) => {
            const { x, y } = getRandomPosition(20);
            return (
              <motion.div
                key={i}
                className={`w-2 h-2 bg-[#ef9c00] rounded-full absolute`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  animation: `ping 2s ease-in-out infinite`,
                }}
              ></motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-[#ef9c00] absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} style={{ filter: 'drop-shadow(0 0 10px rgba(239, 156, 0, 0.9))' }}> <path   strokeLinecap="round"   strokeLinejoin="round"   strokeWidth={2}   d="M13 10V3L4 14h7v7l9-11h-7z" /></motion.svg>
      {[...Array(20)].map((_, i) => {
        const { x, y } = getRandomPosition(100);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ef9c00]"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${y}%`,
              left: `${x}%`,
              opacity: Math.random(),
            }}
            animate={{ y: ['0%', '100%', '0%'], opacity: [1, 0.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          />
        );
      })}
    </div>
  );
}
