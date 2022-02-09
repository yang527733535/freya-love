import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Qs from 'qs';
import { reqAddImg } from '@/services/ant-design-pro/api';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const genID = (length: number) => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
};
type Myimg = {
  id: string;
  imgurl: string;
};
const Index = () => {
  const [key, setkey] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [imgList, setimgList] = useState<Myimg[]>([]);
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const onFinish = async (values: any) => {
    delete values.avatar;
    delete values.image;
    delete values.key;
    const ImgUrl = imgList
      .map((img) => {
        return img.imgurl;
      })
      .join(',');
    const myparam = { ...values, ImgUrl };
    const data = await reqAddImg(myparam);
    if (data.code === 200) {
      message.success('创建成功');
    }
  };

  async function mycustomRequest({
    file,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials,
  }) {
    //在这里暂停一秒
    const myfilename = {
      FileName: file.name,
    };
    await axios({
      method: 'post',
      url: 'http://117.50.173.128:8081/api/upload',
      data: Qs.stringify(myfilename),
    }).then((res) => {
      //在这里要把东西存起来
      const imagetoken = res.data.data.put;
      const imageUrl = res.data.data.get;
      const key = res.data.data.key;
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      let fileData = null;
      reader.onload = (e) => {
        // 在文件读取结束后执行的操作
        fileData = e.target.result;
        console.log('fileData: ', fileData);
        // 使用 axios 进行文件上传的请求
        console.log('123----imagetoken', imagetoken);
        axios
          .put(imagetoken, fileData, {
            withCredentials,
            headers,
            onUploadProgress: ({ total, loaded }) => {
              // 进行上传进度输出，更加直观
              onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
            },
          })
          .then((response) => {
            console.log(response);
            onSuccess(response, file);
            setimageUrl(imageUrl);
            setkey(key);
            let img = {
              id: genID(10),
              imgurl: key,
            };
            console.log(img);
            setimgList([...imgList, img]);
          })
          .catch(onError);
      };
    });
  }
  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
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
          <Input />
        </Form.Item>
        <Form.Item name="image" label="图片" rules={[{ required: false }]}>
          <Upload
            headers={{
              'Content-Type': 'image/png',
            }}
            name="avatar"
            // listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            customRequest={mycustomRequest}
          >
            {/* {uploadButton} */}
            <Button>上传</Button>
          </Upload>
        </Form.Item>
        {/* <Upload
            headers={{
              'Content-Type': 'video/mp4',
            }}
            action={imagetoken}
            name="avatar"
            className="avatar-uploader"
            showUploadList={false}
            customRequest={mycustomRequest}
          >
            uploadButton
          </Upload> */}

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {imgList.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  width: 120,
                  height: 120,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    right: 20,
                    top: -12,
                    fontSize: 30,
                    fontWeight: 700,
                    color: 'red',
                    cursor: 'pointer',
                  }}
                >
                  X
                </div>
                <img
                  style={{ width: 100, height: 100 }}
                  src={'http://myasd.oss-cn-beijing.aliyuncs.com/' + item.imgurl}
                  alt=""
                />
              </div>
            );
          })}
        </div>

        <img src="" alt="" />
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
