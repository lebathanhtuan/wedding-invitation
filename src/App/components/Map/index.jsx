import { Map as PigeonMap, Marker } from 'pigeon-maps'

import { RESTAURANT_COORDINATES } from 'src/constants/wedding'

import restaurantLocationImage from 'src/assets/images/RestaurantLocation.png'
import * as S from './styled'

function Map() {
  return (
    <S.MapWrapper>
      <PigeonMap
        height={340}
        defaultCenter={[RESTAURANT_COORDINATES.lat, RESTAURANT_COORDINATES.lng]}
        defaultZoom={16}
        minZoom={15}
        maxZoom={18}
      >
        <Marker width={50} anchor={[RESTAURANT_COORDINATES.lat, RESTAURANT_COORDINATES.lng]}>
          <S.MapLocation src={restaurantLocationImage} alt="" />
        </Marker>
      </PigeonMap>
    </S.MapWrapper>
  )
}

export default Map
