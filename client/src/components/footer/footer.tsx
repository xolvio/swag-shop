import { Box, Stack, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

export interface SwagShopFooterProps {
  categories: {
    category: string;
    links: {
      label: string;
      url: string;
    }[];
  }[];
  phone: string;
  email: string;
  copyrights: string;
  address: string;
}

export const SwagShopFooter = (props: SwagShopFooterProps) => {
  const { categories, phone, email, copyrights, address } = props;

  return (
    <Box width="100%" sx={{ backgroundColor: "#272826" }}>
      <Stack maxWidth={"1200px"} px={3} py={8} mx="auto">
        <InfoSection phone={phone} email={email} />
        <Stack
          direction={"row"}
          spacing={4}
          justifyContent="space-between"
          width={"100%"}
          mb={5}
        >
          {categories.map((category) => (
            <Box flex={1} key={category.category}>
              <Typography
                variant={"h6"}
                sx={{ color: "white", height: "20px", marginBottom: "30px" }}
              >
                {category.category}
              </Typography>
              <Box>
                {category.links.map((link) => (
                  <Typography key={link.url} sx={{ color: "#6d6e6d", my: 1.5 }}>
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
          <Box flex={1}>
            <Typography
              variant={"h6"}
              sx={{ color: "white", height: "20px", marginBottom: "30px" }}
            >
              Our social network
            </Typography>
            <SocialIcons />
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={4}
          justifyContent="space-between"
          width={"100%"}
          mt={3}
        >
          <Box flex={1} sx={{ color: "#6d6e6d" }}>
            {copyrights}
          </Box>
          <Box flex={1} sx={{ color: "#6d6e6d" }}>
            {address}
          </Box>
          <Box flex={1} sx={{ color: "#6d6e6d" }}></Box>
          <Box flex={1} sx={{ color: "#6d6e6d" }}></Box>
        </Stack>
      </Stack>
    </Box>
  );
};

const InfoSection = (props: { phone: string; email: string }) => {
  const infoItems = [
    { name: "Delivery", icon: LocalShippingOutlinedIcon },
    { name: "Return and exchanges", icon: RestartAltOutlinedIcon },
    { name: props.phone, icon: LocalPhoneOutlinedIcon },
    { name: props.email, icon: EmailOutlinedIcon },
  ];

  return (
    <Stack
      direction={"row"}
      gap={5}
      justifyContent="space-between"
      width={"100%"}
      mb={5}
    >
      {infoItems.map((item) => {
        const Icon = item.icon;
        return (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              width: "300px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                width: "40px",
                height: "40px",
                borderRadius: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon fontSize={"medium"} sx={{ color: "rgb(89, 192, 152)" }} />
            </Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              {item.name}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};

const SocialIcons = () => {
  return (
    <Stack direction={"row"} spacing={1}>
      <FacebookOutlinedIcon sx={{ color: "#6d6e6d" }} />
      <YouTubeIcon sx={{ color: "#6d6e6d" }} />
      <InstagramIcon sx={{ color: "#6d6e6d" }} />
      <TwitterIcon sx={{ color: "#6d6e6d" }} />
      <TelegramIcon sx={{ color: "#6d6e6d" }} />
    </Stack>
  );
};
