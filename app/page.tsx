'use client';
import { useState, useEffect } from 'react';
import DdayCounter from '_components/DdayCounter';

export default function Home() {


  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10">
      <DdayCounter />
    </main>
  );
}
