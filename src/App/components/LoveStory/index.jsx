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
        <Row gutter={[32, 24]}>
          <S.LoveStoryCol md={{ span: 11, order: 1 }} xs={{ span: 24, order: 1 }} $right>
            Ảnh
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 2, order: 2 }} xs={{ span: 24, order: 2 }} $line>
            <S.LoveStoryLine>|</S.LoveStoryLine>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 3 }} xs={{ span: 24, order: 3 }}>
            <T.Text size="md">07-2020</T.Text>
            <T.Title>Lần đầu gặp gỡ</T.Title>
            <T.Text>
              Chúng mình quen nhau tại một trung tâm dạy học tại Đà Nẵng. Lúc đó chú rể là giảng viên, còn cô dâu là học
              viên.
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 4 }} xs={{ span: 24, order: 6 }} $right>
            <T.Text size="md">10-2020</T.Text>
            <T.Title>Nhận lời yêu nhau</T.Title>
            <T.Text>
              Sau thời gian tìm hiểu thì chúng mình chính thức yêu nhau vào ngày 14/10/2020 và trải qua rất nhiều kỉ
              niệm cùng nhau
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 2, order: 5 }} xs={{ span: 24, order: 5 }} $line>
            <S.LoveStoryLine>|</S.LoveStoryLine>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 6 }} xs={{ span: 24, order: 4 }}>
            Ảnh
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 7 }} xs={{ span: 24, order: 7 }} $right>
            Ảnh
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 2, order: 8 }} xs={{ span: 24, order: 8 }} $line>
            <S.LoveStoryLine>|</S.LoveStoryLine>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 9 }} xs={{ span: 24, order: 9 }}>
            <T.Text size="md">10-2020</T.Text>
            <T.Title>Hành trình yêu nhau</T.Title>
            <T.Text>AAA</T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 10 }} xs={{ span: 24, order: 12 }} $right>
            <T.Text size="md">04-2024</T.Text>
            <T.Title>Phút giây cầu hôn</T.Title>
            <T.Text>
              Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang
              mới.
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 2, order: 11 }} xs={{ span: 24, order: 11 }} $line>
            <S.LoveStoryLine>|</S.LoveStoryLine>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 12 }} xs={{ span: 24, order: 10 }}>
            Ảnh
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 13 }} xs={{ span: 24, order: 13 }} $right>
            Ảnh
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 2, order: 14 }} xs={{ span: 24, order: 14 }} $line>
            <S.LoveStoryLine>|</S.LoveStoryLine>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 15 }} xs={{ span: 24, order: 15 }}>
            <T.Text size="md">06-2024</T.Text>
            <T.Title>Ngày Lễ Đính Hôn</T.Title>
            <T.Text>
              Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang
              mới.
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 16 }} xs={{ span: 24, order: 18 }} $right>
            <T.Text size="md">09-2024</T.Text>
            <T.Title>Mơ một hạnh phúc</T.Title>
            <T.Text>
              Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 2, order: 17 }} xs={{ span: 24, order: 17 }} $line>
            <S.LoveStoryLine>|</S.LoveStoryLine>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 11, order: 18 }} xs={{ span: 24, order: 16 }}>
            Ảnh
          </S.LoveStoryCol>
        </Row>
      </Container>
    </S.LoveStoryWrapper>
  )
}

export default LoveStory
