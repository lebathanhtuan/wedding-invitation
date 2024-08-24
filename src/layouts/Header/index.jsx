import { useMemo, useRef, useState } from 'react'
import { Button, Select, Drawer } from 'antd'
import { useTranslation } from 'react-i18next'
import { MenuOutlined } from '@ant-design/icons'

import { MENU_ITEMS } from 'src/constants/layout'

import logoImage from 'src/assets/images/Logo.png'

import * as S from './styled'

function Header() {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const headerRef = useRef(null)
  const { t, i18n } = useTranslation()

  const renderMenuItems = useMemo(() => {
    return MENU_ITEMS.map((item, index) => <S.MenuItem key={index}>{t(item.label)}</S.MenuItem>)
  }, [t])

  return (
    <S.HeaderWrapper ref={headerRef}>
      <S.HeaderContainer>
        <S.HeaderMenuIcon>
          <Button type="text" size="large" icon={<MenuOutlined />} onClick={() => setIsShowSidebar(true)} />
        </S.HeaderMenuIcon>
        <S.HeaderLogo>
          <img src={logoImage} alt="Logo" />
        </S.HeaderLogo>
        <S.HeaderMenu>{renderMenuItems}</S.HeaderMenu>
        <Select variant="borderless" defaultValue="vi" onChange={(value) => i18n.changeLanguage(value)}>
          <Select.Option value="vi">
            🇻🇳 <span>Tiếng</span> Việt
          </Select.Option>
          <Select.Option value="en">
            🇬🇧 <span>Tiếng</span> Anh
          </Select.Option>
          <Select.Option value="ja">
            🇯🇵 <span>Tiếng</span> Nhật
          </Select.Option>
        </Select>
      </S.HeaderContainer>
      <Drawer placement="left" open={isShowSidebar} closable={false} onClose={() => setIsShowSidebar(false)}>
        Đây là menu
      </Drawer>
    </S.HeaderWrapper>
  )
}

export default Header
