import { Box, Button, Input, Stack, TextField, Typography } from '@mui/material';

export interface SubscribeBarProps {
  content: {
    header: string;
    copy: string;
  };
}

export const SubscribeBar = (props: SubscribeBarProps) => {
  const { content } = props;

  return (
    <Box width="100%" mb={5}>
      <Stack
        maxWidth={'1200px'}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={3}
        mx="auto"
      >
        <Box width={'40%'}>
          <Typography variant={'h5'} fontWeight={'500'} mb={1}>
            {content.header}
          </Typography>
          <Typography variant={'body1'}>{content.copy}</Typography>
        </Box>
        <Box width={'50%'} sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
          <TextField
            variant={'outlined'}
            placeholder={'Enter your email'}
            sx={{
              flex: 1,
              '&::after': {
                content: 'none',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px',
              },
            }}
          />
          <Button
            sx={{
              backgroundColor: 'rgb(89, 192, 152)',
              color: 'white',
              width: '200px',
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: 'rgb(89, 192, 152)',
                opacity: 1,
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
