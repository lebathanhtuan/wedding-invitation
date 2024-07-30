import Container from 'src/components/Container'
import * as S from './styled'

import T from 'src/components/Typography'

function Engagement() {
  return (
    <S.EngagementWrapper>
      <Container>
        <S.EngagementInner>
          <T.Title level={2}>Xem video đính hôn của chúng mình nhé!!!</T.Title>
          <T.Text>
            Tình yêu không phải là những lời thề non hẹn biển<br/>
            chỉ đơn giản là cùng nhau bình yên qua ngày.,
          </T.Text>
          <a>Play</a>
        </S.EngagementInner>
      </Container>
    </S.EngagementWrapper>
  )
}

export default Engagement
