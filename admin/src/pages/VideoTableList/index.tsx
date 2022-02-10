import { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { Videorule } from '@/services/ant-design-pro/api';
import ImgForm from './Form/index';

export default function ImgTable() {
  const actionRef = useRef<ActionType>();
  const [showForm, setshowForm] = useState<boolean>();
  const [clickItem, setclickItem] = useState<API.ImgItem>();
  const columns = [
    {
      dataIndex: 'id',
      title: 'ID',
      copyable: true,
      ellipsis: true,
    },
    {
      title: '标题',
      dataIndex: 'title',
      ellipsis: true,
    },
    {
      title: '内容',
      dataIndex: 'content',
      ellipsis: true,
    },
    {
      title: '展示时间',
      dataIndex: 'show_time',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      key: 'created_at',
      dataIndex: 'created_at',
      sorter: true,
      hideInSearch: true,
    },

    {
      title: '操作',
      valueType: 'option',
      render: (_: any, record: any) => {
        return (
          <a
            onClick={() => {
              setclickItem(record);
              setshowForm(true);
            }}
          >
            修改
          </a>
        );
      },
    },
  ];
  return (
    <div>
      <Modal
        onCancel={() => {
          setshowForm(false);
        }}
        footer={null}
        visible={showForm}
        destroyOnClose
        afterClose={() => {
          setclickItem(undefined);
        }}
      >
        <ImgForm
          clickItem={clickItem}
          closeModal={() => {
            setshowForm(false);
            actionRef.current!.reload();
          }}
        ></ImgForm>
      </Modal>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          let myparam = {
            pageNum: params.current,
            pageSize: params.pageSize,
          };
          const data = await Videorule(myparam);
          let list = data.data!.data;
          console.log('list: ', list);
          // const data =
          return Promise.resolve({
            data: list,
            success: true,
            total: data.data.total,
          });
        }}
        rowKey="id"
        search={false}
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
        headerTitle="视频列表"
        toolBarRender={() => [
          <Button
            onClick={() => {
              setshowForm(true);
            }}
            key="button"
            icon={<PlusOutlined />}
            type="primary"
          >
            新建
          </Button>,
        ]}
      />
    </div>
  );
}
