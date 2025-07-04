import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/firebaseConfig';

export function useAdmin() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user) return;

    const ref = doc(db, 'usuarios', user.uid);
    getDoc(ref).then((snap) => {
      const data = snap.data();
      setIsAdmin(data?.role === 'admin');
    });
  }, 