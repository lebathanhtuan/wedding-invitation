import { useState } from 'react'
import { Row, Col, Flex, Form, Button, Input, Segmented, notification } from 'antd'
import { CheckOutlined, CloseOutlined, QuestionOutlined } from '@ant-design/icons'
import { Map as PigeonMap, Marker } from 'pigeon-maps'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import T from 'src/components/Typography'
import { RESTAURANT_COORDINATES } from 'src/constants/wedding'
import { END_POINT } from 'src/constants/api'

import restaurantLocationImage from 'src/assets/images/RestaurantLocation.png'
import confirmBackgroundImage from 'src/assets/images/ConfirmBackground.jpg'
import saveTheDateImage from 'src/assets/images/SaveTheDate.png'

import * as S from './styled'

function Confirm() {
  const [loading, setLoading] = useState(false)
  const [confirmForm] = Form.useForm()

  const { t } = useTranslation()

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      await axios.post(END_POINT, {
        name: values.name,
        personFriend: values.guestOf,
        isAttendees: values.isAttend,
        weddingWish: values.wish,
        attendeesNumber: 1,
      })
      setLoading(false)
      confirmForm.setFieldsValue({
        name: '',
        isAttend: 'yes',
        guestOf: 'bride',
        wish: '',
      })
      notification.success({
        message: t('message.successTitle'),
        description: t('message.successDescription'),
      })
    } catch (error) {
      setLoading(false)
      notification.error({
        message: t('message.errorTitle'),
        description: t('message.errorDescription'),
      })
      console.error(error)
    }
  }

  return (
    <S.ConfirmWrapper>
      <S.ConfirmContainer>
        <Row>
          <Col xl={7} md={10} xs={24}>
            <S.ConfirmLeft>
              <S.LeftWrapper $background={confirmBackgroundImage}>
                <S.LeftContainer>
                  <img src={saveTheDateImage} alt="Save the date" />
                  <S.FormLine />
                  <T.Text color="white" weight="light" size="xxl" font="cormorant">
                    08/09/2024
                  </T.Text>
                </S.LeftContainer>
              </S.LeftWrapper>
            </S.ConfirmLeft>
          </Col>
          <Col xl={10} md={14} xs={24}>
            <S.ConfirmRight>
              <Flex align="center" justify="center" vertical style={{ marginBottom: 16 }}>
                <T.Title level={2} color="primary">
                  {t('confirm.title')}
                </T.Title>
                <T.Text align="center">{t('confirm.subTitle')}</T.Text>
              </Flex>
              <S.ConfirmForm>
                <Form
                  form={confirmForm}
                  name="confirmForm"
                  layout="vertical"
                  initialValues={{
                    isAttend: 'yes',
                    guestOf: 'bride',
                  }}
                  onFinish={handleSubmit}
                >
                  <Form.Item
                    label={t('confirm.name')}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: t('message.required.name'),
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={t('confirm.isAttend')}
                    name="isAttend"
                    rules={[
                      {
                        required: true,
                        message: t('message.required.isAttend'),
                      },
                    ]}
                  >
                    <Segmented
                      options={[
                        {
                          label: t('confirm.yes'),
                          value: 'yes',
                          icon: <CheckOutlined />,
                        },
                        {
                          label: t('confirm.no'),
                          value: 'no',
                          icon: <CloseOutlined />,
                        },
                        {
                          label: t('confirm.maybe'),
                          value: 'maybe',
                          icon: <QuestionOutlined />,
                        },
                      ]}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    label={t('confirm.guestOf')}
                    name="guestOf"
                    rules={[
                      {
                        required: true,
                        message: t('message.required.guestOf'),
                      },
                    ]}
                  >
                    <Segmented
                      options={[
                        {
                          label: t('confirm.bride'),
                          value: 'bride',
                        },
                        {
                          label: t('confirm.groom'),
                          value: 'groom',
                        },
                      ]}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item label={t('confirm.wish')} name="wish">
                    <Input.TextArea autoSize={{ minRows: 2, maxRows: 2 }} />
                  </Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    {t('confirm.submit')}
                  </Button>
                </Form>
              </S.ConfirmForm>
              <Flex align="center" justify="center" vertical style={{ marginTop: 16 }}>
                <T.Text align="center">{t('confirm.description')}</T.Text>
              </Flex>
            </S.ConfirmRight>
          </Col>
          <Col xl={7} md={24} xs={24}>
            <S.MapWrapper>
              <PigeonMap
                defaultCenter={[RESTAURANT_COORDINATES.lat, RESTAURANT_COORDINATES.lng]}
                defaultZoom={15}
                minZoom={14}
                maxZoom={18}
              >
                <Marker width={50} anchor={[RESTAURANT_COORDINATES.lat, RESTAURANT_COORDINATES.lng]}>
                  <S.MapLocation src={restaurantLocationImage} alt="" />
                </Marker>
              </PigeonMap>
            </S.MapWrapper>
          </Col>
        </Row>
      </S.ConfirmContainer>
    </S.ConfirmWrapper>
  )
}

export default Confirm
