import Container from 'src/components/Container'
import * as S from './styled'

import T from 'src/components/Typography'

function LoveStory() {
  return (
    <S.LoveStoryWrapper>
      <Container>
        <T.Text>LOVE STORY</T.Text>
        <S.LoveStoryInner>
          <S.LoveStoryRow>
            <S.LoveStoryCol>
              <T.Title level={5}>07-2020</T.Title>
              <T.Title level={3}>Lần đầu gặp gỡ</T.Title>
              <T.Text>Chúng mình quen nhau tại một trung tâm dạy học tại ĐN. Lúc đó chú rể là giảng viên, còn cô dâu là học viên.</T.Text>
            </S.LoveStoryCol>
            <S.LoveStoryCol>
              <S.LoveStoryImg src="https://placehold.co/1200x1500" alt=""/>
            </S.LoveStoryCol>
          </S.LoveStoryRow>
          <S.LoveStoryRow>
            <S.LoveStoryCol>
              <S.LoveStoryImg src="https://placehold.co/1200x1500" alt=""/>
            </S.LoveStoryCol>
            <S.LoveStoryCol>
              <T.Title level={5}>10-2020</T.Title>
              <T.Title level={3}>Hẹn hò</T.Title>
              <T.Text>Sau thời gian tìm hiểu thì chúng mình chính thức yêu nhau vào ngày 14/10/2020 và trải qua rất nhiều kỉ niệm cùng nhau</T.Text>
            </S.LoveStoryCol>
          </S.LoveStoryRow>
          <S.LoveStoryRow>
            <S.LoveStoryCol>
              <T.Title level={5}>06-2024</T.Title>
              <T.Title level={3}>Ngày Đính Hôn</T.Title>
              <T.Text>Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới.</T.Text>
            </S.LoveStoryCol>
            <S.LoveStoryCol>
              <S.LoveStoryImg src="https://placehold.co/1200x1500" alt=""/>
            </S.LoveStoryCol>
          </S.LoveStoryRow>
          <S.LoveStoryRow>
            <S.LoveStoryCol>
              <S.LoveStoryImg src="https://placehold.co/1200x1500" alt=""/>
            </S.LoveStoryCol>
            <S.LoveStoryCol>
              <T.Title level={5}>09-2024</T.Title>
              <T.Title level={3}>Thành Hôn</T.Title>
              <T.Text>Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh</T.Text>
            </S.LoveStoryCol>
          </S.LoveStoryRow>
        </S.LoveStoryInner>
      </Container>

    </S.LoveStoryWrapper>
  )
}

export default LoveStory
