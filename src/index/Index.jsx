import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Stack,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Divider
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Carousel from 'react-multi-carousel';
import { ChevronLeft, ChevronRight, MapPin, Search, ShoppingCart, Zap } from 'lucide-react';
import Drawer from './Drawer';
import ItemCarousel from './ItemCarousel';
import ItemSection from './ItemSection';
import 'react-multi-carousel/lib/styles.css';

const Index = () => {
  return (
    <>
      <Box component='nav' py={2}>
        <Container maxWidth='lg' sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Grid container spacing={{ xs: .5, sm: 1 }} justifyContent='space-between'>
            <Grid xs={10.5} sm={10.8} md={11.2} order={{ xs: 2, sm: 3 }}>
              <Stack spacing={{ xs: 1, sm: 2 }} width='100%' direction='row'>
                <OutlinedInput
                  id='search'
                  size='small'
                  style={{
                    width: '100%',
                    backgroundColor: '#e6e6e6'
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <Search />
                    </InputAdornment>
                  }
                  placeholder='Buscar producto'
                />

                <IconButton>
                  <ShoppingCart color='#e6e6e6' />
                </IconButton>

                <Drawer />
              </Stack>
            </Grid>

            <Grid order={{ xs: 3, sm: 3 }} xs={12}>
              <Stack spacing={{ xs: .5, sm: 1 }} mt={{ xs: 1, sm: 0 }} direction='row' alignItems='center'>
                <Stack spacing={{ xs: .5, sm: 1 }} direction='row' alignItems='center'>
                  <MapPin color='#FFFFFF' />
                  <Stack spacing={{ xs: .5, sm: 0 }} direction={{ xs: 'row', sm: 'column' }}>
                    <Typography opacity={.6} color='#e6e6e6' fontSize={{ xs: 14, sm: 12 }}>Enviar a</Typography>
                    <Typography color='#fff' fontWeight={{ xs: 500, sm: 600 }} fontSize={14}>Pcia. Roque Sáenz, Chaco.</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid order={1} xs={1.5} sm={1} md={.8}>
              <Typography color='#fff' fontSize={26} fontFamily='Timing'>ER</Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <Box
        position='relative'
        height='100%'
        maxHeight={{ xs: 250, sm: 300, md: 400 }}
      >
        <Carousel
          infinite
          autoPlay
          swipeable
          autoPlaySpeed={4000}
          responsive={responsiveBanner}
          minimumTouchDrag={20}
          keyBoardControl={false}
          customTransition='transform 700ms ease-out'
          transitionDuration={700}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          customLeftArrow={<CustomBannerButtonLeft />}
          customRightArrow={<CustomBannerButtonRight />}
          containerClass='carousel-banner'
          sliderClass='carousel-banner-slider'
        >
          {[1, 2, 3].map((item, index) => (
            <img
              key={index}
              loading='eager'
              alt={`img-${index}`}
              src={require(`../assets/image/${item}.jpg`)}
              style={{
                width: '-webkit-fill-available',
                height: '-webkit-fill-available',
                objectFit: 'cover',
              }}
            />
          ))}
        </Carousel>

        <div className='carousel-backdrop' />
      </Box>

      <Container maxWidth='lg' sx={{ px: { xs: 0, sm: 1, md: 3 } }} style={{ position: 'relative' }}>

        <Stack direction='row' pl={{ xs: 1, sm: 0 }} pr={{ xs: 1, sm: 0 }} alignItems='center' justifyContent='space-between'>
          <Stack direction='row' spacing={.5} alignItems='center'>
            <Zap size={20} strokeWidth={3} color='red' />
            <Typography fontWeight={700} color='red'>Ofertas</Typography>
          </Stack>
          <Stack component={Link} to='/' direction='row' spacing={.2} alignItems='center'>
            <Typography fontSize={14} color='#1b1b1b'>Ver más</Typography>
            <ChevronRight size={20} strokeWidth={1} color='#1b1b1b' />
          </Stack>
        </Stack>
        <Carousel
          partialVisible
          responsive={responsiveOffer}
          keyBoardControl={false}
          transitionDuration={300}
          minimumTouchDrag={15}
          customTransition='transform 300ms linear'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          customLeftArrow={<CustomButtonOfferLeft />}
          customRightArrow={<CustomButtonOfferRight />}
          containerClass='carousel-offer'
          children={indumentaria.map((item) => <ItemCarousel key={item.id} item={item} />)}
        />

        <Box mt={4} bgcolor='#FFFFFF' borderRadius={{ xs: 0, sm: 1 }} boxShadow='0px 0px 5px 2px rgba(0,0,0,.2)'>
          <Stack direction='row' p={1} alignItems='center' justifyContent='space-between' borderLeft='1px solid rgba(0, 0, 0, 0.12)' borderRight='1px solid rgba(0, 0, 0, 0.12)' borderTop='1px solid rgba(0, 0, 0, 0.12)'>
            <Typography fontWeight={700} color='#1b1b1b' fontSize='1.2rem'>Remeras</Typography>
            <Stack component={Link} to='/' direction='row' spacing={.2} alignItems='center'>
              <Typography fontSize={14} color='#1b1b1b'>Ver más</Typography>
              <ChevronRight size={20} strokeWidth={1} color='#1b1b1b' />
            </Stack>
          </Stack>

          <Grid
            container
            spacing={1}
            m={0}
            sx={{
              '--Grid-borderWidth': '1px',
              borderTop: 'var(--Grid-borderWidth) solid',
              borderLeft: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
              },
            }}
          >
            {indumentaria.slice(0, 8).map((item) => (
              <Grid key={item.id} xs={6} sm={4} md={3} lg={2}>
                <ItemSection item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5} bgcolor='#FFFFFF' borderRadius={{ xs: 0, sm: 1 }} boxShadow='0px 0px 5px 2px rgba(0,0,0,.2)'>
          <Stack direction='row' p={1} alignItems='center' justifyContent='space-between' borderLeft='1px solid rgba(0, 0, 0, 0.12)' borderRight='1px solid rgba(0, 0, 0, 0.12)' borderTop='1px solid rgba(0, 0, 0, 0.12)'>
            <Typography fontWeight={700} color='#1b1b1b' fontSize='1.2rem'>Camperas</Typography>
            <Stack component={Link} to='/' direction='row' spacing={.2} alignItems='center'>
              <Typography fontSize={14} color='#1b1b1b'>Ver más</Typography>
              <ChevronRight size={20} strokeWidth={1} color='#1b1b1b' />
            </Stack>
          </Stack>

          <Grid
            container
            spacing={1}
            m={0}
            sx={{
              '--Grid-borderWidth': '1px',
              borderTop: 'var(--Grid-borderWidth) solid',
              borderLeft: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
              },
            }}
          >
            {indumentaria.slice(0, 8).map((item) => (
              <Grid key={item.id} xs={6} sm={4} md={3} lg={2}>
                <ItemSection item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5} height={50} />
      </Container>

      <Box component='footer' py={3}>
        <Container maxWidth='lg' sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Typography
            color='#e6e6e6'
            fontSize={20}
            lineHeight={1}
            fontFamily='Timing'
          >
            El Ropero
          </Typography>
          <Grid container spacing={{ xs: .5, sm: 1 }}>
            <Grid component='ul' xs={6} sm={6} md={3} style={{ listStyleType: 'none', paddingInlineStart: 8 }}>
              <Typography mb={.5} component='li' color='#e6e6e6' fontSize={14}>Contacto</Typography>
              <Typography mb={.5} component='li' color='#e6e6e6' fontSize={14}>Ayuda</Typography>
              <Typography component='li' color='#e6e6e6' fontSize={14}>Blog</Typography>
            </Grid>

            <Grid component='ul' xs={6} sm={6} md={3} style={{ listStyleType: 'none', paddingInlineStart: 8 }}>
              <Typography component='li' color='#e6e6e6' fontSize={14}>Envíos</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Index;

const responsiveBanner = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CustomBannerButtonLeft = ({ onClick }) => (
  <button
    onClick={() => onClick()}
    className='arrowButton arrowLeft'
  >
    <ChevronLeft size={40} strokeWidth={1} color='#0077E6' />
  </button>
);

const CustomBannerButtonRight = ({ onClick }) => (
  <button
    onClick={() => onClick()}
    className='arrowButton arrowRight'
  >
    <ChevronRight size={40} strokeWidth={1} color='#0077E6' />
  </button>
);


const responsiveOffer = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    partialVisibilityGutter: 40
  },
  tablet2: {
    breakpoint: { max: 1200, min: 900 },
    items: 4,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 900, min: 700 },
    items: 3,
    partialVisibilityGutter: 30
  },
  mobile2: {
    breakpoint: { max: 700, min: 464 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 170
  }
};

const CustomButtonOfferLeft = ({ onClick }) => (
  <button
    onClick={() => onClick()}
    className='arrowButtonOffer arrowOfferLeft'
  >
    <ChevronLeft size={25} strokeWidth={3} color='#0077E6' />
  </button>
);

const CustomButtonOfferRight = ({ onClick }) => (
  <button
    onClick={() => onClick()}
    className='arrowButtonOffer arrowOfferRight'
  >
    <ChevronRight size={25} strokeWidth={3} color='#0077E6' />
  </button>
);






















const indumentaria = [
  {
    id: 1,
    image: "https://img.freepik.com/fotos-premium/camiseta-polo-camisa-basica-media-manga-usada-maniqui-negro-t-s-blanco-blanco-diseno-limpio_655090-1403655.jpg",
    name: "Chomba Básica Polo",
    offer_price: 5900,
    price: 6200
  },
  {
    id: 2,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f3c9ecb03ab9455f8cdaadde0115a1c3_9366/Pantalon_Essentials_Outline_Logo_Negro_HC9176_01_laydown.jpg",
    name: "Pantalón Deportivo Adidas",
    price: 11000
  },
  {
    id: 3,
    image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8f0140a36de3f7d8a7846ad23e180b87.jpg",
    name: "Chaqueta de Cuero",
    price: 120000
  },
  {
    id: 4,
    image: "https://i.pinimg.com/474x/bf/f5/2c/bff52ca4820d3afd85eb9722b5d79d94.jpg",
    name: "Vestido de Verano Casual",
    price: 26500
  },
  {
    id: 5,
    image: "https://ofelia.com.ar/storage/products/tP7AWyAQa5SbsXWkAbSJOzfu0GH0dBeoBQPoTulH.png",
    name: "Suéter de Lana",
    price: 49999
  },
  {
    id: 6,
    image: "https://static.vecteezy.com/system/resources/previews/019/428/313/non_2x/stack-of-folded-blue-jeans-on-a-white-background-photo.jpg",
    name: "Jeans Clásicos",
    offer_price: 23400,
    price: 25000
  },
  {
    id: 7,
    image: "https://www.camiseriaeuropea.com/cdn/shop/files/R991_001.jpg",
    name: "Camisa Formal Entallada",
    price: 16800
  },
  {
    id: 8,
    image: "https://resources.sears.com.mx/medios-plazavip/mkt/63375fca06869_61ec48gxu9l_ac_uy1000_jpg.jpg",
    name: "Falda de Algodón",
    price: 8000
  },
  {
    id: 9,
    image: "https://i.ebayimg.com/thumbs/images/g/oNYAAOSwTdVk3pik/s-l640.jpg",
    name: "Abrigo de Invierno",
    price: 150000
  },
  {
    id: 10,
    image: "https://static.vecteezy.com/system/resources/previews/003/358/376/non_2x/pair-of-black-color-fashion-sport-shoes-isolated-on-white-background-free-photo.jpg",
    name: "Zapatillas Deportivas",
    offer_price: 47750,
    price: 62000
  }
];