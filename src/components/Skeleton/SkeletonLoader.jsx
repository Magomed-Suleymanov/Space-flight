import React from 'react';
import Stack from '@mui/material/Stack';
import { Skeleton } from '@mui/material';

const SkeletonLoader = () => {
  const skeleton = [1, 2, 3, 4, 5, 6];

  return skeleton.map((index) => {
    return (
      <Stack key={index}>
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ margin: 'auto' }}
          width={120}
          height={40}
        />
        <Skeleton
          variant="text"
          width={150}
          height={60}
          sx={{ margin: 'auto' }}
        />
      </Stack>
    );
  });
};

export default SkeletonLoader;
