import { Statistic } from 'antd'
import moment from 'moment'

import T from 'src/components/Typography'
import { WEDDING_DAY } from 'src/constants/wedding'

import * as S from './styled'

function Overview() {
  return (
    <S.OverviewWrapper>
      <S.OverviewContainer>
        <S.CountdownContainer>
          <S.OverviewContent>
            <T.Title level={1} weight="regular">
              Save the Date
            </T.Title>
            <T.Title level={2} weight="regular">
              Thanh Tuấn & Bích Ni
            </T.Title>
            <T.Title level={3} weight="regular">
              <Statistic.Countdown value={moment(WEDDING_DAY).valueOf()} format="DD:HH:mm:ss" />
            </T.Title>
          </S.OverviewContent>
          <S.OverviewContent>
            <S.OverviewImage src="https://placehold.co/1200x1500" alt="" />
          </S.OverviewContent>
        </S.CountdownContainer>
      </S.OverviewContainer>
    </S.OverviewWrapper>
  )
}

export default Overview
