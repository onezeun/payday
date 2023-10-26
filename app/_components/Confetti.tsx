'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CreateTypes, Options } from 'canvas-confetti';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

function getAnimationSettings(angle: number, originX: number): Options {
  return {
    particleCount: 3,
    angle,
    spread: 30,
    origin: { x: originX },
    colors: ['#bb0000', '#ffffff'],
  };
}

export default function SchoolPride(): JSX.Element {
  const refAnimationInstance = useRef<CreateTypes | null>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const getInstance = useCallback((instance: CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      const id: any = setInterval(nextTickAnimation, 16);
      setIntervalId(id);
    }
  }, [nextTickAnimation, intervalId]);

  const stopAnimation = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    if (refAnimationInstance.current) {
      refAnimationInstance.current = null; // 애니메이션 인스턴스를 null로 설정하여 중지
    }
  }, [intervalId]);

  useEffect(() => {
    startAnimation();
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <>
      <div className="fixed top-2 right-2">
        {/* <button className="px-3 py-1.5 mr-3 bg-white bg-opacity-80 text-black font-semiboldrounded-lg hover:bg-opacity-100 transition duration-300 ease-in-out" onClick={startAnimation}>
          효과켜기
        </button> */}
        <button className="px-3 py-1.5 mr-3 bg-white bg-opacity-80 text-black font-semiboldrounded-lg hover:bg-opacity-100 transition duration-300 ease-in-out" onClick={stopAnimation}>
          효과끄기
        </button>
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
