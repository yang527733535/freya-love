(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [947],
  {
    5979: function () {},
    97080: function (L, p, e) {
      'use strict';
      e.r(p),
        e.d(p, {
          default: function () {
            return W;
          },
        });
      var M = e(40279),
        x = e(88591),
        P = e(66940),
        j = e(70486),
        C = e.n(j),
        a = e(59301),
        N = e(60615),
        B = e(10322),
        D = e(20557),
        Q = e(18024),
        Z = e(44898),
        U = e(48513),
        y = e(74318),
        V = e(99793),
        E = e(20658),
        T = e(92691),
        I = e.n(T),
        F = e(49685),
        R = e(91442),
        X = e(5979),
        z = ['key', 'name'],
        O = function (n) {
          var o = n.children,
            d = n.menus,
            t = n.onSelect,
            u = n.className,
            l = n.style,
            c = (0, a.useContext)(E.ZP.ConfigContext),
            r = c.getPrefixCls,
            g = r('pro-table-dropdown'),
            s = a.createElement(
              y.Z,
              {
                onClick: function (m) {
                  return t && t(m.key);
                },
              },
              d == null
                ? void 0
                : d.map(function (v) {
                    return a.createElement(y.Z.Item, { key: v.key }, v.name);
                  }),
            );
          return a.createElement(
            Z.Z,
            { overlay: s, className: I()(g, u) },
            a.createElement(x.Z, { style: l }, o, ' ', a.createElement(F.Z, null)),
          );
        },
        S = function (n) {
          var o = n.className,
            d = n.style,
            t = n.onSelect,
            u = n.menus,
            l = u === void 0 ? [] : u,
            c = n.children,
            r = (0, a.useContext)(E.ZP.ConfigContext),
            g = r.getPrefixCls,
            s = g('pro-table-dropdown'),
            v = a.createElement(
              y.Z,
              {
                onClick: function (h) {
                  return t && t(h.key);
                },
              },
              l.map(function (m) {
                var h = m.key,
                  H = m.name,
                  J = (0, D.Z)(m, z);
                return a.createElement(y.Z.Item, (0, B.Z)({ key: h }, J), H);
              }),
            );
          return a.createElement(
            Z.Z,
            { overlay: v, className: I()(s, o) },
            a.createElement('a', { style: d }, c || a.createElement(R.Z, null)),
          );
        };
      S.Button = O;
      var $ = S,
        G = e(50553),
        A = e(45103),
        i = e(37712),
        K = [
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
            render: function (n, o, d, t) {
              return [
                (0, i.jsx)(
                  'a',
                  {
                    onClick: function () {
                      var l;
                      t == null ||
                        (l = t.startEditable) === null ||
                        l === void 0 ||
                        l.call(t, o.id);
                    },
                    children: '\u7F16\u8F91',
                  },
                  'editable',
                ),
                (0, i.jsx)(
                  'a',
                  {
                    href: o.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: '\u67E5\u770B',
                  },
                  'view',
                ),
                (0, i.jsx)(
                  $,
                  {
                    onSelect: function () {
                      return t == null ? void 0 : t.reload();
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
      function W() {
        var f = (0, a.useRef)();
        return (0, i.jsx)('div', {
          children: (0, i.jsx)(G.ZP, {
            columns: K,
            actionRef: f,
            request: (0, P.Z)(
              C().mark(function n() {
                var o,
                  d,
                  t,
                  u,
                  l,
                  c,
                  r = arguments;
                return C().wrap(function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (o = r.length > 0 && r[0] !== void 0 ? r[0] : {}),
                          (d = r.length > 1 ? r[1] : void 0),
                          (t = r.length > 2 ? r[2] : void 0),
                          console.log(d, t),
                          (u = { pageNum: o.current, pageSize: o.pageSize }),
                          (s.next = 7),
                          (0, A.TB)(u)
                        );
                      case 7:
                        return (
                          (l = s.sent),
                          (c = l.data.data),
                          console.log('list: ', c),
                          s.abrupt(
                            'return',
                            Promise.resolve({ data: c, success: !0, total: l.data.total }),
                          )
                        );
                      case 11:
                      case 'end':
                        return s.stop();
                    }
                }, n);
              }),
            ),
            rowKey: 'id',
            search: !1,
            pagination: { pageSize: 10 },
            dateFormatter: 'string',
            headerTitle: '\u56FE\u7247\u5217\u8868',
            toolBarRender: function () {
              return [
                (0, i.jsx)(
                  x.Z,
                  { icon: (0, i.jsx)(N.Z, {}), type: 'primary', children: '\u65B0\u5EFA' },
                  'button',
                ),
              ];
            },
          }),
        });
      }
    },
  },
]);
