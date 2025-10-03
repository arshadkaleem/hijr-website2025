import { Suspense } from 'react';
import JobsClient from './JobsClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <JobsClient />
    </Suspense>
  );
}
