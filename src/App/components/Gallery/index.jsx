import { useMemo, useState, useEffect } from 'react'
import { Flex, Tabs } from 'antd'
import { MasonryPhotoAlbum } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import { WEDDING_PHOTOS, MEMORY_PHOTOS } from './photos'
import * as S from './styled'

function Gallery() {
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)
  const [tabActiveKey, setTabActiveKey] = useState('1')

  const renderWeddingPhotos = useMemo(() => {
    return (
      <>
        <Flex align="center" justify="center" style={{ marginBottom: 16 }}>
          <T.Text>Flex nhẹ những chiếc ảnh cưới của tụi mình nè</T.Text>
        </Flex>
        <MasonryPhotoAlbum photos={WEDDING_PHOTOS} onClick={({ index }) => setLightboxActiveIndex(index)} />
      </>
    )
  }, [])

  const renderMemoryPhotos = useMemo(() => {
    return (
      <>
        <Flex align="center" justify="center" style={{ marginBottom: 16 }}>
          <T.Text>Cùng nhau trải qua rất nhiều khoảnh khắc đẹp trong chặn đường</T.Text>
        </Flex>
        <MasonryPhotoAlbum photos={MEMORY_PHOTOS} onClick={({ index }) => setLightboxActiveIndex(index)} />
      </>
    )
  }, [])

  useEffect(() => {
    setLightboxActiveIndex(-1)
  }, [tabActiveKey])

  return (
    <S.GalleryWrapper>
      <Container>
        <Flex align="center" justify="center" vertical style={{ marginBottom: 24 }}>
          <T.Title level={2}>Khoảnh Khắc Ngọt Ngào</T.Title>
        </Flex>
        <Tabs
          activeKey={tabActiveKey}
          centered
          items={[
            {
              key: '1',
              label: 'Ảnh cưới',
              children: renderWeddingPhotos,
            },
            {
              key: '2',
              label: 'Kỷ niệm đáng nhớ',
              children: renderMemoryPhotos,
            },
          ]}
          onChange={(key) => setTabActiveKey(key)}
        />
      </Container>
      <Lightbox
        slides={tabActiveKey === '1' ? WEDDING_PHOTOS : MEMORY_PHOTOS}
        open={lightboxActiveIndex >= 0}
        index={lightboxActiveIndex}
        close={() => setLightboxActiveIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </S.GalleryWrapper>
  )
}

export default Gallery
