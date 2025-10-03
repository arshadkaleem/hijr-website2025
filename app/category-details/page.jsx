import React, { Suspense } from 'react';
import CategoryDetails from './CategoryDetailsClient';

export default function CategoryDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryDetails />
    </Suspense>
  );
}