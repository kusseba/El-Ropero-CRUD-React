import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import ItemCarousel from './ItemCarousel';
import ItemSection from './ItemSection';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';

const Index = () => {
  const [state, setState] = useState();

  useEffect(() => { getIndex() }, []);

  const getIndex = async () => {
    try {
      const token = localStorage.getItem('@token');
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/index/`, { headers: { 'Authorization': `Token ${token}` } });
      setState(data);
    } catch {
      toast.error('Error al iniciar sesión');
    }
  }

  if (!state) return <Loader />
  return (
    <>
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
              src={require(`../../assets/image/${item}.jpg`)}
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

        {
          !!state.oferts[0] &&
          <>
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
              children={state.oferts.map((item) => <ItemCarousel key={item.id} item={item} />)}
            />
          </>
        }

        {
          !!state.sections[0] && state.sections.map((item, index) => (
            <Box key={index} mt={4} bgcolor='#FFFFFF' borderRadius={{ xs: 0, sm: 1 }} boxShadow='0px 0px 5px 2px rgba(0,0,0,.2)'>
              <Stack direction='row' p={1} alignItems='center' justifyContent='space-between' borderLeft='1px solid rgba(0, 0, 0, 0.12)' borderRight='1px solid rgba(0, 0, 0, 0.12)' borderTop='1px solid rgba(0, 0, 0, 0.12)'>
                <Typography fontWeight={700} color='#1b1b1b' fontSize='1.2rem'>{item.name}</Typography>
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
                {item.products.map((item) => (
                  <Grid key={item.id} xs={6} sm={4} md={3} lg={2}>
                    <ItemSection item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))
        }

        <Box mt={5} height={50} />
      </Container>
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
