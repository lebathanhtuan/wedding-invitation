import { Row, Col } from 'antd'
import moment from 'moment'

import Container from 'src/components/Container'
import T from 'src/components/Typography'
import { WEDDING_DAY } from 'src/constants/wedding'

import leftImage from 'src/assets/images/InvitationLeft.jpg'
import middleImage from 'src/assets/images/InvitationMiddle.jpg'
import rightImage from 'src/assets/images/InvitationRight.jpg'

import * as S from './styled'

function Invitation() {
  return (
    <S.InvitationWrapper>
      <Container>
        <Row gutter={[4, 4]}>
          <Col span={8}>
            <S.ImageWrapper>
              <S.ImageContent src={leftImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('DD')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper>
              <S.ImageContent src={middleImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('MM')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper>
              <S.ImageContent src={rightImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('YY')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
        </Row>
        <S.InvitationContainer>
          <T.Text size="xxl">WELCOME TO OUR WEDDING</T.Text>
          <T.Text weight="light" style={{ fontSize: 46 }}>
            Minh Toàn Galaxy
          </T.Text>
          <T.Text>Tầng 3 sảnh Eros, 306 Đ. 2 Tháng 9, Hải Châu, Đà Nẵng</T.Text>
        </S.InvitationContainer>
      </Container>
    </S.InvitationWrapper>
  )
}

export default Invitation
