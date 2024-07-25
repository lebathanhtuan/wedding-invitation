import { useMemo } from 'react'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

import T from 'src/components/Typography'
import { MENU_ITEMS } from 'src/constants/layout'

import * as S from './styled'

function Header() {
  const { t, i18n } = useTranslation()

  const renderMenuItems = useMemo(() => {
    return MENU_ITEMS.map((item, index) => <S.MenuItem key={index}>{t(item.label)}</S.MenuItem>)
  }, [t])

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <T.Title level={3}>T ❤️ N</T.Title>
        </S.HeaderLogo>
        <S.HeaderMenu>{renderMenuItems}</S.HeaderMenu>
        <Select
          variant="borderless"
          defaultValue="vi"
          onChange={(value) => i18n.changeLanguage(value)}
          style={{ width: 140 }}
        >
          <Select.Option value="vi">🇻🇳 Tiếng Việt</Select.Option>
          <Select.Option value="en">🇬🇧 Tiếng Anh</Select.Option>
          <Select.Option value="ja">🇯🇵 Tiếng Nhật</Select.Option>
        </Select>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
