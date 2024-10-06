import { Box, Stack, Badge, Button, Input } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export interface SwagShopHeaderProps {
  cart: { itemCount: string };
}

export const SwagShopHeader = (props: SwagShopHeaderProps) => {
  const { cart } = props;

  return (
    <Box width="100%" mb={2}>
      <Stack
        maxWidth={'1200px'}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={3}
        mx="auto"
      >
        <Box>{logo}</Box>
        {/*<Stack direction="row" width={'60%'}>*/}
        {/*  <Button sx={{*/}
        {/*    backgroundColor: '#e6e6e6',*/}
        {/*    minWidth: '28px',*/}
        {/*    color: '#808080',*/}
        {/*    fontSize: '12px',*/}
        {/*    '&:hover': {*/}
        {/*      backgroundColor: '#e6e6e6',*/}
        {/*      opacity: 1,*/}
        {/*    },*/}
        {/*  }}>All</Button>*/}
        {/*  <Input fullWidth={true} placeholder={"Search"} sx={{ pl: 2, border: 'none' }} />*/}
        {/*  <Button*/}
        {/*    sx={{*/}
        {/*      backgroundColor: 'rgb(89, 192, 152)',*/}
        {/*      minWidth: '28px',*/}
        {/*      '&:hover': {*/}
        {/*        backgroundColor: 'rgb(89, 192, 152)',*/}
        {/*        opacity: 1,*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <SearchOutlinedIcon sx={{ color: 'white' }} />*/}
        {/*  </Button>*/}
        {/*</Stack>*/}
        <Stack direction="row" gap={2}>
          <PersonOutlineOutlinedIcon sx={{ color: 'rgb(89, 192, 152)' }} />
          <FavoriteBorderOutlinedIcon sx={{ color: 'rgb(89, 192, 152)' }} />
          <Badge badgeContent={cart.itemCount}>
            <ShoppingCartOutlinedIcon sx={{ color: 'rgb(89, 192, 152)' }} />
          </Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="129"
    height="40"
    viewBox="0 0 129 40"
    data-testid="xolvio-logo"
    className="XolvioLogo__StyledIcon-sc-1u5g2k0-0 jPqJPl"
  >
    <title>Xolvio logo</title>
    <rect fill="rgb(89, 192, 152)" width="40" height="40"></rect>
    <g>
      <rect fill="white" x="11.51" y="12.06" width="16.98" height="3.74"></rect>
      <polygon fill="white" points="28.49 29.03 28.49 33.36 11.51 21.8 11.51 17.47 28.49 29.03"></polygon>
      <rect fill="white" x="24.75" y="6.64" width="3.74" height="3.74"></rect>
    </g>
    <path fill="rgb(35, 31, 32)" d="M105.44,9.19h3.64v3.55h-3.64v-3.55Zm0,5.19h3.64V30.39h-3.64V14.38Z"></path>
    <path
      fill="rgb(35, 31, 32)"
      d="M113.15,16.41c1.61-1.61,3.7-2.5,5.87-2.5,2.33,0,4.26,.78,5.87,2.3,1.67,1.61,2.62,3.82,2.62,6.02,0,2.42-.78,4.44-2.38,6.08-1.61,1.67-3.67,2.51-6.05,2.51s-4.35-.84-5.99-2.56c-1.52-1.64-2.36-3.67-2.36-5.93s.84-4.32,2.42-5.9m5.96,10.7c2.71,0,4.53-1.85,4.53-4.92,0-2.74-1.97-4.62-4.53-4.62s-4.53,1.94-4.53,4.71c0,3.01,1.79,4.83,4.53,4.83"
    ></path>
    <polygon
      className="cls-2"
      points="54.95 30.39 50.86 30.39 56.29 22.07 51.49 14.38 55.66 14.38 58.44 18.94 61.27 14.38 65.62 14.38 60.53 21.98 65.68 30.39 61.45 30.39 58.26 25.29 54.95 30.39"
    ></polygon>
    <path
      fill="rgb(35, 31, 32)"
      d="M67.16,16.41c1.61-1.61,3.7-2.5,5.87-2.5,2.33,0,4.26,.78,5.87,2.3,1.67,1.61,2.62,3.82,2.62,6.02,0,2.42-.78,4.44-2.39,6.08-1.61,1.67-3.67,2.51-6.05,2.51s-4.35-.84-5.99-2.56c-1.52-1.64-2.36-3.67-2.36-5.93s.84-4.32,2.42-5.9m5.96,10.7c2.71,0,4.53-1.85,4.53-4.92,0-2.74-1.97-4.62-4.53-4.62s-4.53,1.94-4.53,4.71c0,3.01,1.79,4.83,4.53,4.83"
    ></path>
    <rect className="cls-2" x="83.37" y="9.19" width="3.64" height="21.2"></rect>
    <polygon
      className="cls-2"
      points="94.46 30.39 88.37 14.38 92.34 14.38 96.07 25.02 99.91 14.38 103.79 14.38 97.38 30.39 94.46 30.39"
    ></polygon>
  </svg>
);
