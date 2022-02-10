import { useState, FC, useEffect } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { reqAddVideos, updateVideo } from '@/services/ant-design-pro/api';
import { Upload, message } from 'antd';
import moment from 'moment';

interface Iprops {
  closeModal: () => void;
  clickItem: API.ImgItem | undefined | null;
}

const Index: FC<Iprops> = ({ closeModal, clickItem = null }) => {
  const [form] = Form.useForm();
  const [videoUrl, setvideoUrl] = useState<string>();
  const props = {
    name: 'special_effects',
    action: 'http://dev-chapters-back.stardustgod.com/api/common/uploadSpecialEffects',
    headers: {
      Authorization:
        'Bearer eyJpdiI6IlRFTjZTK0Y3VnFsNFZZS2dOZ0FQMGc9PSIsInZhbHVlIjoibG44NDVIMUJtODdBeGR2ajl5ekU2SnZobDZtNXgyN2I1QnNwOGFnRUNtbjZ6allnWmJ4VFwvWm1MTFpXdTk4blpjcWRBOGlSNkNLMWtnTkZ3eXFYSXVHelprZjJpZml5WjNXdVBGZnRIK3hhYmZZZHJsQlc5WGN5eXVvUUFOQytZaGkzMkY0aTNkOE9XY3VOdzJwVXBlYTRPenlBTDhxcFkrbDRydXdsZDNrZ09iY3ljQzZSM0hHdEVNOFNPZXlBRU5PVXNSRDBKS2FyaWpmc1pDTStKa0s5V2pDSjMzQmlPSmZFNTlXTE5LcFE1TUM1ZDVZS1lKMlFrcnlPY1B0bWRhM0I2dVwvWU9MSmR6NzdMcDJBcFFnaU5RcWhFcUdEVW9TaExCNys2QUo5UXp0dndGTCszakdtUlpxZEtOUEx4NDc5emJnWDJjbFdzVERFN09PWnB4OHZCU3BYVU1xQlI3MnhjaE80MklKdWxTZTNWeCs1YnhHTlU5SEhxV2hDbHN3K2F1MUR2cFU5Qk1cL2hTd0NtTklKUGgzMlRyQncyVWtcL21zcUxmS1dhcXFJZmN3UGlrNXB5UHNONlA1UmE1VzFUZEpyc2YrMzR2a3pMUWplZENsbnhTUmdHSG50eEZlZ3JObzlGelJWdXdXOW9WZmQ1OWVjSk03NDZ4TDJaMDBqOVlHOW5VQjVkUHVmT292ajZxdjZXdz09IiwibWFjIjoiNmZmM2IxYWJmNDk4NWM5ZWY5ODE2ZjZhZGViMjZjM2Q1NDk4ZDEzOGExYWFjZDlmZTI1ZjcxNTE0NDg0NzFiZCJ9',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
      }
      if (info.file.status === 'done') {
        const mp4data = info.file.response.data;
        setvideoUrl(mp4data.url);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const onFinish = async (values: any) => {
    delete values.avatar;
    delete values.image;
    delete values.key;
    // videoUrl
    const myparam = { ...values, VideoUrl: videoUrl };
    myparam.ShowTime = values.ShowTime.format('YYYY-MM-DD HH:mm:ss');
    if (!clickItem) {
      console.log(myparam);
      const data = await reqAddVideos(myparam);
      if (data.code === 200) {
        closeModal();
        message.success('创建成功');
      }
    } else {
      myparam.id = clickItem.id;
      const data = await updateVideo(myparam);
      if (data.code === 200) {
        closeModal();
        message.success('创建成功');
      }
    }
  };

  useEffect(() => {
    if (clickItem) {
      console.log('clickItem: ', clickItem);
      const initData = {
        Title: clickItem.title,
        Content: clickItem.content,
        CategoryId: clickItem.category_id,
        ShowTime: moment(clickItem.show_time, 'YYYY-MM-DD HH:mm:ss'),
      };
      form.setFieldsValue(initData);
    }
  }, []);

  return (
    <div>
      <Form
        form={form}
        initialValues={{ CategoryId: 6 }}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
      >
        <Form.Item name="Title" label="标题" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="Content" label="内容" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="CategoryId" label="分类" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="ShowTime" label="展示时间" rules={[{ required: true }]}>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="image" label="视频" rules={[{ required: false }]}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Index;
