/** @format */

import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual'
import CropIcon from '@mui/icons-material/Crop'
import HomeIcon from '@mui/icons-material/Home'

import ImageSearchIcon from '@mui/icons-material/ImageSearch'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export const introData = [
  {
    id: 1,
    picto: <PhotoSizeSelectActualIcon />,
    quantity: 92,
    category: 'Hectares'
  },
  {
    id: 2,
    picto: <CropIcon />,
    quantity: 1071,
    category: 'Lots'
  },
  {
    id: 3,
    picto: <HomeIcon />,
    quantity: '500m2',
    category: 'Superficie'
  }
]

export const serviceData = [
  {
    id: 1,
    picto: <CalendarMonthIcon />,
    title: 'Prenez un rdv avec un de nos agents',
    description:
      'Un de nos agents vous accompagne pour répondre à toutes vos questions par téléphone, whatsapp ou email'
  },
  {
    id: 2,
    picto: <ImageSearchIcon />,
    title: 'Visitez sur place nos 100 lots disponibles',
    description:
      'Une première phase de commercialisation avec 100 lots disponibles sur le site de 69 hectares '
  },
  {
    id: 3,
    picto: <HomeIcon />,
    title: 'Réservez votre maison de rêve',
    description:
      'Pour les 100 lots, un prix exceptionnel de 3000 € avec une réservation à seulement 1000 €'
  }
]
