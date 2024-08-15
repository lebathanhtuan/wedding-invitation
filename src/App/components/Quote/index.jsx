import * as S from './styled'
import Container from 'src/components/Container'

import T from 'src/components/Typography'

function Quote() {
  return (
    <S.QuoteWrapper>
      <Container>
        <S.QuoteRow>
          <S.QuoteColLft>
            <S.QuoteImg src="https://placehold.co/1200x1500" alt="" />
          </S.QuoteColLft>
          <S.QuoteRgt>
            <S.QuoteInner>
              <T.Title level={3}>Love Quote</T.Title>
              <T.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique elit vitae sem volutpat,
                at ullamcorper magna condimentum. Mauris tincidunt facilisis sem ut rutrum. Cras suscipit cursus
                ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </T.Text>
            </S.QuoteInner>
          </S.QuoteRgt>
        </S.QuoteRow>
      </Container>
    </S.QuoteWrapper>
  )
}

export default Quote
