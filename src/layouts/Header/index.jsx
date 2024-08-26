import { useMemo, useState } from 'react'
import { Button, Select, Drawer, Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import { MenuOutlined } from '@ant-design/icons'

import T from 'src/components/Typography'
import { MENU_ITEMS } from 'src/constants/layout'

import primarySaveTheDateImage from 'src/assets/images/PrimarySaveTheDate.png'
import logoImage from 'src/assets/images/Logo.png'

import * as S from './styled'

function Header() {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const { t, i18n } = useTranslation()

  const handleClickMenuItem = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const targetElement = document.querySelector(target)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value)
    localStorage.setItem('lang', value)
  }

  const renderMenuItems = useMemo(() => {
    return MENU_ITEMS.map((item, index) => (
      <S.MenuItem key={index} href={item.href} onClick={handleClickMenuItem}>
        {t(item.label)}
      </S.MenuItem>
    ))
  }, [t])

  const renderSidebarItems = useMemo(() => {
    return MENU_ITEMS.map((item, index) => (
      <S.SidebarItem
        key={index}
        href={item.href}
        onClick={(e) => {
          handleClickMenuItem(e)
          setIsShowSidebar(false)
        }}
      >
        {t(item.label)}
      </S.SidebarItem>
    ))
  }, [t])

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderMenuIcon>
          <Button type="text" size="large" icon={<MenuOutlined />} onClick={() => setIsShowSidebar(true)} />
        </S.HeaderMenuIcon>
        <S.HeaderLogo>
          <img src={logoImage} alt="Logo" />
        </S.HeaderLogo>
        <S.HeaderMenu>{renderMenuItems}</S.HeaderMenu>
        {i18n.language === 'vi' ? (
          <Select
            key="viSelect"
            variant="borderless"
            value={i18n.language}
            onChange={(value) => handleChangeLanguage(value)}
          >
            <Select.Option value="vi">
              🇻🇳 <span>Tiếng</span> {t('header.translate.vi')}
            </Select.Option>
            <Select.Option value="en">
              🇬🇧 <span>Tiếng</span> {t('header.translate.en')}
            </Select.Option>
          </Select>
        ) : (
          <Select
            key="enSelect"
            variant="borderless"
            value={i18n.language}
            onChange={(value) => handleChangeLanguage(value)}
          >
            <Select.Option value="vi">🇻🇳 {t('header.translate.vi')}</Select.Option>
            <Select.Option value="en">🇬🇧 {t('header.translate.en')}</Select.Option>
          </Select>
        )}
      </S.HeaderContainer>
      <Drawer
        placement="left"
        open={isShowSidebar}
        closable={false}
        width={220}
        onClose={() => setIsShowSidebar(false)}
      >
        <S.SidebarLogo>
          <img src={logoImage} alt="Logo" />
        </S.SidebarLogo>
        <Flex vertical style={{ flex: 1 }}>
          {renderSidebarItems}
        </Flex>
        <img src={primarySaveTheDateImage} alt="" />
        <T.Text size="sm" align="center" font="shantellSans" style={{ marginTop: 16 }}>
          {t('header.sidebar.designBy')}
        </T.Text>
      </Drawer>
    </S.HeaderWrapper>
  )
}

export default Header
