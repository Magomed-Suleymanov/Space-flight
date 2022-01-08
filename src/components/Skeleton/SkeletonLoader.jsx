import React from 'react';
import Stack from '@mui/material/Stack';
import { Skeleton } from '@mui/material';
import { skeletonStyle } from '../Main/styleMain';

const SkeletonLoader = () => {
  const skeleton = [1, 2, 3, 4, 5, 6];

  return skeleton.map((index) => {
    return (
      <Stack key={index}>
        <Skeleton
          animation="wave"
          variant="text"
          sx={skeletonStyle}
          width={120}
          height={40}
        />
        <Skeleton
          animation="wave"
          sx={skeletonStyle}
          variant="text"
          width={150}
          height={60}
        />
      </Stack>
    );
  });
};

export default SkeletonLoader;
