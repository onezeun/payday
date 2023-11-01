'use client';
import { useState, useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';
import DdayCounter from '_components/DdayCounter';
import CoinJar from './_components/CoinJar';

export default function Home() {
  const jsConfetti = useRef<JSConfetti | null>(null);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    jsConfetti.current = new JSConfetti();

    // 화면 전체에 대한 클릭 이벤트 핸들러
    const handleGlobalClick = (event: MouseEvent) => {
      setShaking(true);

      if (jsConfetti.current) {
        jsConfetti.current.addConfetti({
          emojis: ['🪙', '💸', '💰', '🤑'],
          emojiSize: 100,
          confettiNumber: 20,
        });
      }

      setTimeout(() => {
        setShaking(false);
      }, 500);
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <main className={`${shaking ? 'shake' : ''} flex flex-col items-center justify-between pt-20`}>
      <div>
        <DdayCounter />
      </div>
      <div className="relative w-full h-auto max-w-2xl">
        <CoinJar />
      </div>
    </main>
  );
}
