import { Flex } from 'antd'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import thanksBackgroundImage from 'src/assets/images/ThanksBackground.png'
import goldenBridgeImage from 'src/assets/images/GoldenBridge.png'

import * as S from './styled'

function Quote() {
  const { t } = useTranslation()

  return (
    <S.ThanksWrapper $background={thanksBackgroundImage}>
      <Container>
        <Flex align="center" justify="center" vertical>
          <T.Title level={1} color="primary">
            {t('thanks.title')}
          </T.Title>
          <S.ThanksContent>
            <T.Text color="primary" weight="bold" size="lg" align="justify">
              {t('thanks.content')}
            </T.Text>
          </S.ThanksContent>
        </Flex>
      </Container>
      <S.ThanksSticker src={goldenBridgeImage} />
    </S.ThanksWrapper>
  )
}

export default Quote
