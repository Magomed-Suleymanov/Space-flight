import React from 'react';
import Stack from '@mui/material/Stack';
import { Skeleton } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <Stack>
      <Skeleton variant="rectangular" width={210} height={250} />
      <Skeleton height={50} variant="text" />
      <Skeleton variant="text" width={60} height={40} />
    </Stack>
  );
};

export default SkeletonLoader;
