(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [947],
  {
    65628: function (xe, W, e) {
      'use strict';
      e.r(W),
        e.d(W, {
          default: function () {
            return de;
          },
        });
      var Ze = e(40279),
        A = e(88591),
        U = e(66940),
        je = e(64049),
        Y = e(43334),
        g = e(28211),
        b = e(70486),
        f = e.n(b),
        c = e(59301),
        k = e(60615),
        q = e(50553),
        _ = e(1047),
        K = e(45103),
        ee = e(37793),
        Se = e(81130),
        te = e(59840),
        Ce = e(41505),
        o = e(79538),
        Ie = e(58408),
        C = e(36838),
        Fe = e(71838),
        ae = e(99128),
        i = e(36531),
        re = e(7217),
        O = e.n(re),
        ne = e(21895),
        se = e.n(ne),
        t = e(37712),
        le = function (p) {
          return Number(Math.random().toString().substr(3, p) + Date.now()).toString(36);
        },
        oe = function () {
          var p = (0, c.useState)(''),
            u = (0, g.Z)(p, 2),
            D = u[0],
            a = u[1],
            h = (0, c.useState)(''),
            r = (0, g.Z)(h, 2),
            P = r[0],
            F = r[1],
            T = (0, c.useState)(!1),
            y = (0, g.Z)(T, 2),
            B = y[0],
            d = y[1],
            X = (0, c.useState)(''),
            s = (0, g.Z)(X, 2),
            Te = s[0],
            Be = s[1],
            me = (0, c.useState)([]),
            H = (0, g.Z)(me, 2),
            z = H[0],
            ce = H[1],
            N = { labelCol: { span: 6 }, wrapperCol: { span: 16 } },
            he = (function () {
              var v = (0, U.Z)(
                f().mark(function l(n) {
                  var x, Z, j;
                  return f().wrap(function (m) {
                    for (;;)
                      switch ((m.prev = m.next)) {
                        case 0:
                          return (
                            delete n.avatar,
                            delete n.image,
                            delete n.key,
                            (x = z
                              .map(function (E) {
                                return E.imgurl;
                              })
                              .join(',')),
                            (Z = (0, i.Z)((0, i.Z)({}, n), {}, { ImgUrl: x })),
                            (m.next = 7),
                            (0, K.eC)(Z)
                          );
                        case 7:
                          (j = m.sent),
                            j.code === 200 && ae.default.success('\u521B\u5EFA\u6210\u529F');
                        case 9:
                        case 'end':
                          return m.stop();
                      }
                  }, l);
                }),
              );
              return function (n) {
                return v.apply(this, arguments);
              };
            })();
          function ve(v) {
            return $.apply(this, arguments);
          }
          function $() {
            return (
              ($ = (0, U.Z)(
                f().mark(function v(l) {
                  var n, x, Z, j, w, m, E;
                  return f().wrap(function (R) {
                    for (;;)
                      switch ((R.prev = R.next)) {
                        case 0:
                          return (
                            (n = l.file),
                            (x = l.headers),
                            (Z = l.onError),
                            (j = l.onProgress),
                            (w = l.onSuccess),
                            (m = l.withCredentials),
                            (E = { FileName: n.name }),
                            (R.next = 4),
                            O()({
                              method: 'post',
                              url: 'http://localhost:8081/api/upload',
                              data: se().stringify(E),
                            }).then(function (L) {
                              var J = L.data.data.put,
                                ge = L.data.data.get,
                                Q = L.data.data.key,
                                V = new FileReader();
                              V.readAsArrayBuffer(n);
                              var G = null;
                              V.onload = function (fe) {
                                (G = fe.target.result),
                                  console.log('fileData: ', G),
                                  console.log('123----imagetoken', J),
                                  O()
                                    .put(J, G, {
                                      withCredentials: m,
                                      headers: x,
                                      onUploadProgress: function (S) {
                                        var pe = S.total,
                                          ye = S.loaded;
                                        j({ percent: Math.round((ye / pe) * 100).toFixed(2) }, n);
                                      },
                                    })
                                    .then(function (M) {
                                      console.log(M), w(M, n), F(ge), a(Q);
                                      var S = { id: le(10), imgurl: Q };
                                      console.log(S), ce([].concat((0, ee.Z)(z), [S]));
                                    })
                                    .catch(Z);
                              };
                            })
                          );
                        case 4:
                        case 'end':
                          return R.stop();
                      }
                  }, v);
                }),
              )),
              $.apply(this, arguments)
            );
          }
          return (0, t.jsx)('div', {
            children: (0, t.jsxs)(
              o.Z,
              (0, i.Z)(
                (0, i.Z)({}, N),
                {},
                {
                  name: 'nest-messages',
                  onFinish: he,
                  children: [
                    (0, t.jsx)(o.Z.Item, {
                      name: 'Title',
                      label: '\u6807\u9898',
                      rules: [{ required: !0 }],
                      children: (0, t.jsx)(C.Z, {}),
                    }),
                    (0, t.jsx)(o.Z.Item, {
                      name: 'Content',
                      label: '\u5185\u5BB9',
                      rules: [{ required: !0 }],
                      children: (0, t.jsx)(C.Z.TextArea, {}),
                    }),
                    (0, t.jsx)(o.Z.Item, {
                      name: 'CategoryId',
                      label: '\u5206\u7C7B',
                      rules: [{ required: !0 }],
                      children: (0, t.jsx)(C.Z, {}),
                    }),
                    (0, t.jsx)(o.Z.Item, {
                      name: 'ShowTime',
                      label: '\u5C55\u793A\u65F6\u95F4',
                      rules: [{ required: !0 }],
                      children: (0, t.jsx)(C.Z, {}),
                    }),
                    (0, t.jsx)(o.Z.Item, {
                      name: 'image',
                      label: '\u56FE\u7247',
                      rules: [{ required: !1 }],
                      children: (0, t.jsx)(te.Z, {
                        headers: { 'Content-Type': 'image/png' },
                        name: 'avatar',
                        className: 'avatar-uploader',
                        showUploadList: !1,
                        customRequest: ve,
                        children: (0, t.jsx)(A.Z, { children: '\u4E0A\u4F20' }),
                      }),
                    }),
                    (0, t.jsx)(o.Z.Item, {
                      wrapperCol: (0, i.Z)((0, i.Z)({}, N.wrapperCol), {}, { offset: 8 }),
                    }),
                    (0, t.jsx)('div', {
                      style: { display: 'flex', flexWrap: 'wrap' },
                      children: z.map(function (v) {
                        return (0,
                        t.jsxs)('div', { style: { position: 'relative', width: 120, height: 120 }, children: [(0, t.jsx)('div', { style: { position: 'absolute', right: 20, top: -12, fontSize: 30, fontWeight: 700, color: 'red', cursor: 'pointer' }, children: 'X' }), (0, t.jsx)('img', { style: { width: 100, height: 100 }, src: 'http://myasd.oss-cn-beijing.aliyuncs.com/' + v.imgurl, alt: '' })] }, v.id);
                      }),
                    }),
                    (0, t.jsx)('img', { src: '', alt: '' }),
                    (0, t.jsx)(o.Z.Item, {
                      wrapperCol: (0, i.Z)((0, i.Z)({}, N.wrapperCol), {}, { offset: 8 }),
                      children: (0, t.jsx)(A.Z, {
                        type: 'primary',
                        htmlType: 'submit',
                        children: 'Submit',
                      }),
                    }),
                  ],
                },
              ),
            ),
          });
        },
        ie = oe,
        ue = [
          { dataIndex: 'id', title: 'ID', copyable: !0, ellipsis: !0 },
          { title: '\u6807\u9898', dataIndex: 'title', ellipsis: !0 },
          { title: '\u5185\u5BB9', dataIndex: 'content', ellipsis: !0 },
          {
            title: '\u5C55\u793A\u65F6\u95F4',
            dataIndex: 'show_time',
            sorter: !0,
            hideInSearch: !0,
          },
          {
            title: '\u521B\u5EFA\u65F6\u95F4',
            key: 'created_at',
            dataIndex: 'created_at',
            sorter: !0,
            hideInSearch: !0,
          },
          {
            title: '\u64CD\u4F5C',
            valueType: 'option',
            render: function (p, u, D, a) {
              return [
                (0, t.jsx)(
                  'a',
                  {
                    onClick: function () {
                      var r;
                      a == null ||
                        (r = a.startEditable) === null ||
                        r === void 0 ||
                        r.call(a, u.id);
                    },
                    children: '\u7F16\u8F91',
                  },
                  'editable',
                ),
                (0, t.jsx)(
                  'a',
                  {
                    href: u.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: '\u67E5\u770B',
                  },
                  'view',
                ),
                (0, t.jsx)(
                  _.Z,
                  {
                    onSelect: function () {
                      return a == null ? void 0 : a.reload();
                    },
                    menus: [
                      { key: 'copy', name: '\u590D\u5236' },
                      { key: 'delete', name: '\u5220\u9664' },
                    ],
                  },
                  'actionGroup',
                ),
              ];
            },
          },
        ];
      function de() {
        var I = (0, c.useRef)(),
          p = (0, c.useState)(),
          u = (0, g.Z)(p, 2),
          D = u[0],
          a = u[1];
        return (0, t.jsxs)('div', {
          children: [
            (0, t.jsx)(Y.Z, {
              onCancel: function () {
                a(!1);
              },
              footer: null,
              visible: D,
              children: (0, t.jsx)(ie, {}),
            }),
            (0, t.jsx)(q.ZP, {
              columns: ue,
              actionRef: I,
              request: (0, U.Z)(
                f().mark(function h() {
                  var r,
                    P,
                    F,
                    T,
                    y,
                    B,
                    d = arguments;
                  return f().wrap(function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (r = d.length > 0 && d[0] !== void 0 ? d[0] : {}),
                            (P = d.length > 1 ? d[1] : void 0),
                            (F = d.length > 2 ? d[2] : void 0),
                            console.log(P, F),
                            (T = { pageNum: r.current, pageSize: r.pageSize }),
                            (s.next = 7),
                            (0, K.TB)(T)
                          );
                        case 7:
                          return (
                            (y = s.sent),
                            (B = y.data.data),
                            console.log('list: ', B),
                            s.abrupt(
                              'return',
                              Promise.resolve({ data: B, success: !0, total: y.data.total }),
                            )
                          );
                        case 11:
                        case 'end':
                          return s.stop();
                      }
                  }, h);
                }),
              ),
              rowKey: 'id',
              search: !1,
              pagination: { pageSize: 10 },
              dateFormatter: 'string',
              headerTitle: '\u56FE\u7247\u5217\u8868',
              toolBarRender: function () {
                return [
                  (0, t.jsx)(
                    A.Z,
                    {
                      onClick: function () {
                        a(!0);
                      },
                      icon: (0, t.jsx)(k.Z, {}),
                      type: 'primary',
                      children: '\u65B0\u5EFA',
                    },
                    'button',
                  ),
                ];
              },
            }),
          ],
        });
      }
    },
  },
]);
