import { Row, Col, Flex } from 'antd'
import Container from 'src/components/Container'
import * as S from './styled'

import T from 'src/components/Typography'

function LoveStory() {
  return (
    <S.LoveStoryWrapper>
      <Container>
        <Flex align="center" justify="center" vertical style={{ marginBottom: 24 }}>
          <T.Title level={2}>Chuyện Chúng Mình</T.Title>
          <T.Text>Chúng mình đã có khoảng thời gian bên nhau khá dài, lắng nghe câu chuyện của chúng mình nhé!</T.Text>
        </Flex>
        <Row gutter={[100, 24]}>
          <Col span={10} style={{ textAlign: 'right' }}>
            Ảnh
          </Col>
          <Col span={2}>|</Col>
          <Col span={10}>
            <T.Text size="md">07-2020</T.Text>
            <T.Title>Lần đầu gặp gỡ</T.Title>
            <T.Text>
              Chúng mình quen nhau tại một trung tâm dạy học tại Đà Nẵng. Lúc đó chú rể là giảng viên, còn cô dâu là học
              viên.
            </T.Text>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            <T.Text size="md">10-2020</T.Text>
            <T.Title>Nhận lời yêu nhau</T.Title>
            <T.Text>
              Sau thời gian tìm hiểu thì chúng mình chính thức yêu nhau vào ngày 14/10/2020 và trải qua rất nhiều kỉ
              niệm cùng nhau
            </T.Text>
          </Col>
          <Col span={2}>|</Col>
          <Col span={10}>Ảnh</Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            Ảnh
          </Col>
          <Col span={2}>|</Col>
          <Col span={10}>
            <T.Text size="md">10-2020</T.Text>
            <T.Title>Hành trình yêu nhau</T.Title>
            <T.Text>AAA</T.Text>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            <T.Text size="md">04-2024</T.Text>
            <T.Title>Phút giây cầu hôn</T.Title>
            <T.Text>
              Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang
              mới.
            </T.Text>
          </Col>
          <Col span={2}>|</Col>
          <Col span={10}>Ảnh</Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            Ảnh
          </Col>
          <Col span={2}>|</Col>
          <Col span={10}>
            <T.Text size="md">06-2024</T.Text>
            <T.Title>Ngày Lễ Đính Hôn</T.Title>
            <T.Text>
              Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang
              mới.
            </T.Text>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            <T.Text size="md">09-2024</T.Text>
            <T.Title>Mơ một hạnh phúc</T.Title>
            <T.Text>
              Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh
            </T.Text>
          </Col>
          <Col span={2}>|</Col>
          <Col span={10}>Ảnh</Col>
        </Row>
      </Container>
    </S.LoveStoryWrapper>
  )
}

export default LoveStory
