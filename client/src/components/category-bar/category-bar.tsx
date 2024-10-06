import { Box, Stack } from '@mui/material';
import { useState } from 'react';

export interface CategoryBarProps {
  categories: { label: string; url: string }[];
}

export const CategoryBar = (props: CategoryBarProps) => {
  const { categories } = props;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Box sx={{ width: '100%', backgroundColor: '#e5eae6' }}>
      <Stack direction={'row'} justifyContent={'space-between'} maxWidth={'1200px'} mx="auto" px={3} py={1}>
        {categories.map((category) => (
          <Box
            key={category.label}
            sx={{
              px: 2,
              py: 0.5,
              borderRadius: 1,
              backgroundColor: selectedCategory.label === category.label ? 'rgb(89, 192, 152)' : 'transparent',
              color: selectedCategory.label === category.label ? 'white' : 'black',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              fontSize: '14px'
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category.label}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
