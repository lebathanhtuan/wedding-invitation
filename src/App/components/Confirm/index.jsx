import { Row, Col, Flex, Form, Button, Input, Segmented } from 'antd'

import T from 'src/components/Typography'

import confirmBackgroundImage from 'src/assets/images/ConfirmBackground.jpg'
import saveTheDateImage from 'src/assets/images/SaveTheDate.png'
import * as S from './styled'

function Confirm() {
  return (
    <S.ConfirmWrapper>
      <S.ConfirmContainer>
        <Row>
          <Col md={10} xs={24}>
            <S.ConfirmLeft $background={confirmBackgroundImage}>
              <S.LeftContainer>
                <img src={saveTheDateImage} alt="Save the date" />
                <S.FormLine />
                <T.Text color="white" weight="light" size="xxl" font="cormorant">
                  08/09/2024
                </T.Text>
              </S.LeftContainer>
            </S.ConfirmLeft>
          </Col>
          <Col md={14} xs={24}>
            <S.ConfirmRight>
              <Flex align="center" justify="center" vertical style={{ marginBottom: 16 }}>
                <T.Title level={2}>Xác nhận tham dự</T.Title>
                <T.Text align="center">
                  Đám cưới sẽ trọn vẹn và ý nghĩa hơn khi có sự hiện diện và chúc phúc của bạn. Hãy xác nhận sự có mặt
                  của mình để Tuấn & Ni chuẩn bị đón tiếp chu đáo nhất nha!
                </T.Text>
              </Flex>
              <S.ConfirmForm>
                <Form
                  name="confirmForm"
                  layout="vertical"
                  initialValues={{
                    isAttend: 'Có',
                    guestOf: 'Cô dâu',
                  }}
                >
                  <Form.Item
                    label="Tên của bạn"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Bạn chưa nhập tên!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Bạn sẽ tham dự chứ?"
                    name="isAttend"
                    rules={[
                      {
                        required: true,
                        message: 'Bạn chưa chọn trạng thái tham dự!',
                      },
                    ]}
                  >
                    <Segmented options={['Có', 'Không', 'Có thể']} size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Bạn là khách mời của ai?"
                    name="guestOf"
                    rules={[
                      {
                        required: true,
                        message: 'Bạn chưa chọn khách mời của cô dâu hay chú rể!',
                      },
                    ]}
                  >
                    <Segmented options={['Cô dâu', 'Chú rể']} size="large" />
                  </Form.Item>
                  <Form.Item label="Lời chúc của bạn" name="wish">
                    <Input.TextArea autoSize={{ minRows: 2, maxRows: 2 }} />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                    Xác nhận
                  </Button>
                </Form>
              </S.ConfirmForm>
              <Flex align="center" justify="center" vertical style={{ marginTop: 16 }}>
                <T.Text align="center">
                  Cảm ơn bạn vì đã trở thành một phần quan trọng trong ngày đặc biệt của tụi mình.
                </T.Text>
              </Flex>
            </S.ConfirmRight>
          </Col>
        </Row>
      </S.ConfirmContainer>
    </S.ConfirmWrapper>
  )
}

export default Confirm
