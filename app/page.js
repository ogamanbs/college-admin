'use client'
import React, {useState} from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import NormalLoginPage from '@/components/NormalLoginPage';

export default function Home() {
  const [response, setResponse] = useState("");

  if(!response) {
    return <NormalLoginPage />;
  }

  return (
    <Dashboard />
  );
}
