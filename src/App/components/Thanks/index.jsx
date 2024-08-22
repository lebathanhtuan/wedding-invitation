import { Flex } from 'antd'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import thanksBackgroundImage from 'src/assets/images/ThanksBackground.png'
import goldenBridgeImage from 'src/assets/images/GoldenBridge.png'

import * as S from './styled'

function Quote() {
  return (
    <S.ThanksWrapper $background={thanksBackgroundImage}>
      <Container>
        <Flex align="center" justify="center" vertical>
          <T.Title level={1} color="primary">
            Trân trọng
          </T.Title>
          <S.ThanksContent>
            <T.Text color="primary" weight="bold" size="lg" align="justify">
              Cảm ơn mọi người đã luôn đồng hành trong quá trình trưởng thành của Tuấn và Ni, cũng đã là những người
              chứng kiến và ủng hộ câu chuyện tình yêu của đôi bạn trẻ. Hôn lễ này sẽ chỉ trở nên trọn vẹn khi nhận được
              những lời chúc phúc và đặc biện là sự có mặt của mọi người trong ngày chung đôi của cô dâu và chú rể,
            </T.Text>
          </S.ThanksContent>
        </Flex>
      </Container>
      <S.ThanksSticker src={goldenBridgeImage} />
    </S.ThanksWrapper>
  )
}

export default Quote
