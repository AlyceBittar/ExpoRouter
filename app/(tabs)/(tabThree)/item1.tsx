import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const ItemOne = () => {
  const router = useRouter();

  useEffect(() => {
    // This will immediately route the user to the root when the component mounts
    router.replace('/');
  }, [router]); // Depend on router to avoid unnecessary re-renders

  return null; // No UI needed, since you're redirecting immediately
};

export default ItemOne;