import { Row } from 'antd'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import loveStory1Image from 'src/assets/images/LoveStory1.png'
import loveStory2Image from 'src/assets/images/LoveStory2.png'
import loveStory3Image from 'src/assets/images/LoveStory3.png'
import loveStory4Image from 'src/assets/images/LoveStory4.png'
import loveStory5Image from 'src/assets/images/LoveStory5.png'
import loveStory6Image from 'src/assets/images/LoveStory6.png'

import * as S from './styled'

function LoveStory() {
  return (
    <S.LoveStoryWrapper>
      <Container>
        <S.LoveStoryTitle align="center" justify="center" vertical>
          <T.Text size="lg">Chúng mình</T.Text>
          <T.Title level={2} align="center" color="primary" style={{ lineHeight: 1 }}>
            Đã đến với nhau như thế nào?
          </T.Title>
        </S.LoveStoryTitle>
        <Row gutter={[32, -16]}>
          <S.LoveStoryCol md={{ span: 12, order: 1 }} xs={{ span: 24, order: 1 }} $right>
            <img src={loveStory1Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 2 }} xs={{ span: 24, order: 2 }}>
            <T.Title size="xxl" color="primary">
              Lần đầu gặp gỡ
            </T.Title>
            <T.Text font="cormorant">
              Chúng mình quen nhau tại một trung tâm dạy học tại Đà Nẵng. Lúc đó chú rể là giảng viên, còn cô dâu là học
              viên.
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 3 }} xs={{ span: 24, order: 4 }} $right>
            <T.Title size="xxl" color="primary">
              Nhận lời yêu nhau
            </T.Title>
            <T.Text font="cormorant">
              Sau thời gian tìm hiểu thì chúng mình chính thức yêu nhau vào ngày 14/10/2020 và trải qua rất nhiều kỉ
              niệm cùng nhau
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 4 }} xs={{ span: 24, order: 3 }}>
            <img src={loveStory2Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 5 }} xs={{ span: 24, order: 5 }} $right>
            <img src={loveStory3Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 6 }} xs={{ span: 24, order: 6 }}>
            <T.Title size="xxl" color="primary">
              Hành trình yêu nhau
            </T.Title>
            <T.Text font="cormorant">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ante feugiat elit blandit, vitae
              ultricies tortor accumsan.
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 7 }} xs={{ span: 24, order: 8 }} $right>
            <T.Title size="xxl" color="primary">
              Phút giây cầu hôn
            </T.Title>
            <T.Text font="cormorant">
              Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang
              mới.
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 8 }} xs={{ span: 24, order: 7 }}>
            <img src={loveStory4Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 9 }} xs={{ span: 24, order: 9 }} $right>
            <img src={loveStory5Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 10 }} xs={{ span: 24, order: 10 }}>
            <T.Title size="xxl" color="primary">
              Ngày Lễ Đính Hôn
            </T.Title>
            <T.Text font="cormorant">
              Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang
              mới.
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 11 }} xs={{ span: 24, order: 12 }} $right>
            <T.Title size="xxl" color="primary">
              Mơ một hạnh phúc
            </T.Title>
            <T.Text font="cormorant">
              Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 12 }} xs={{ span: 24, order: 11 }}>
            <img src={loveStory6Image} alt="" />
          </S.LoveStoryCol>
        </Row>
      </Container>
    </S.LoveStoryWrapper>
  )
}

export default LoveStory
