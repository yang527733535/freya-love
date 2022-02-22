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
        'Bearer eyJpdiI6ImdkY1JkUHJOWnZGYVF5MkFxMWtpUEE9PSIsInZhbHVlIjoieDJ3SDJYNGphbEljQUxjd1ZHY1RtQ2gzWWRLWTYrbXhnUEdtOEJzK2RcL3M1T25NMWtNMG9vWEc3YzFHTytUeFByXC9aXC9LcjRCOXhTd08yVGFIUkNNbjBzR1Y2Y2pBZ0xqRSt6TVZlVXpMWEN6OTR3OUFzZnFpVjZuM1pNT20rbmJWZVVYYkxQU0VUOXhwbzBNWU5la21zd3RYSHVUa0E2NTdZc0FJelJFMkdnK2trNE8wdWJaSEZncFhId1ZQMnk3dzNrd29VY2V3TlpHZXhuSEVaNU1TSFhXVUJ4dzN6bGs0YUlOMlNRRFpFa2Fyeld2NDBXZWxsM2oyWmpzeDhyY0toWEVQYkVRNFVieGxvMG1COUNwaUhMdnZnXC9uQ1wvUzFjV3ByRElPRFR0QXpyNGpmQzFEUnVLek51VElQRk5XSTF2ZnQ3TXhkY3hmaXAwV053aUFvQ3pEWVhqVmphbEhjSkdkRUE0eHpTVFJqUHIyQVVkbEdPaFhsZzRFS09HbEhGMjN2Ym5ZOWpIWnlEdlB1U0ZpbFp2NElrSG5KTmlHKzU5ZklXMXF3bDRuNkQrRklTRjQxVENUclFOamJNaXVmUXZMTVo5Vkx4VjlaSU9LSE5Wckc4TFUyaXJVM1MreWJGRTlnNUE0NVVCb1duZUxzaHRJR1RZNVB2OWNqZTNtSENjV2h6WWNkUXZIa1huT1lqVkhlSmc9PSIsIm1hYyI6ImJiNWZjYTdlOWI2YWIxZTY0MDJiYjEyYTRhYzY5NGFlYjRhNDJlYWRmNmYxOTIwOTJkNjFiMWIwZmRmZTM4NjUifQ',
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
