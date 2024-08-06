import { MasonryPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/styles.css'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import photos from './photos'
import * as S from './styled'

function Gallery() {
  return (
    <S.GalleryWrapper>
      <Container>
        <S.TabWrapper>
          <T.Title>Photo Album</T.Title>
        </S.TabWrapper>
        <MasonryPhotoAlbum photos={photos} />
      </Container>
    </S.GalleryWrapper>
  )
}

export default Gallery
