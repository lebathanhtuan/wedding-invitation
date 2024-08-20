import { useMemo, useRef, useEffect, useState } from 'react'
import { Button, Select, Drawer } from 'antd'
import { useTranslation } from 'react-i18next'
import { MenuOutlined } from '@ant-design/icons'

import T from 'src/components/Typography'
import { MENU_ITEMS } from 'src/constants/layout'

import * as S from './styled'

function Header() {
  const [isFixed, setIsFixed] = useState(true)
  const [isShowSidebar, setIsShowSidebar] = useState(true)
  const headerRef = useRef(null)
  const { t, i18n } = useTranslation()

  const renderMenuItems = useMemo(() => {
    return MENU_ITEMS.map((item, index) => <S.MenuItem key={index}>{t(item.label)}</S.MenuItem>)
  }, [t])

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > headerRef.current.offsetHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.HeaderWrapper ref={headerRef} $isFixed={isFixed}>
      <S.HeaderContainer>
        <S.HeaderMenuIcon>
          <Button type="text" size="large" icon={<MenuOutlined />} onClick={() => setIsShowSidebar(true)} />
        </S.HeaderMenuIcon>
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
      <Drawer placement="left" open={isShowSidebar} closable={false} onClose={() => setIsShowSidebar(false)}>
        Đây là menu
      </Drawer>
    </S.HeaderWrapper>
  )
}

export default Header
