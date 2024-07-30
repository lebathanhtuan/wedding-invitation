import Container from 'src/components/Container'

import * as S from './styled'

function Couple() {
  return (
  <S.CoupleWrapper>
    <Container>
      <S.CoupleInner>
        <S.CoupleCol>
          <S.CoupleImgWrapper>
            <S.CoupleImg src="https://placehold.co/1200x1500" alt=""/>
          </S.CoupleImgWrapper>
          <S.CoupleName>Thanh Tuấn</S.CoupleName>
          <S.CoupleDes>Đối với chúng mình hôn nhân không phải là đích đến cuối của tình yêu mà là khởi đầu của hạnh phúc. </S.CoupleDes>
        </S.CoupleCol>
        <S.FamilyCol>
          <S.FamilyTtl>NHÀ TRAI</S.FamilyTtl>
          <S.FamilyName>
            <em>
              <strong>Ông: Lê Bá Thanh</strong><br/>
              <strong>Bà: Châu Thị Xuân</strong><br/>
            </em>
          </S.FamilyName>
          <S.CoupleDraw>
            image
          </S.CoupleDraw>
          <S.FamilyTtl>NHÀ GÁI</S.FamilyTtl>
          <S.FamilyName>
            <em>
              <strong>Ông: Nguyễn Văn Hiệu</strong><br/>
              <strong>Bà: Phan Thị Bích Vân</strong><br/>
            </em>
          </S.FamilyName>
        </S.FamilyCol>
        <S.CoupleCol>
          <S.CoupleImgWrapper>
              <S.CoupleImg src="https://placehold.co/1200x1500" alt=""/>
          </S.CoupleImgWrapper>
          <S.CoupleName>Bích Ni</S.CoupleName>
          <S.CoupleDes>Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất, gả cho người đáng tin cậy nhất, là anh.</S.CoupleDes>
        </S.CoupleCol>
      </S.CoupleInner>
    </Container>
  </S.CoupleWrapper>
)
}

export default Couple
