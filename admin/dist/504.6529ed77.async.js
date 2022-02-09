(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [504],
  {
    28891: function (le, Q, r) {
      'use strict';
      r.d(Q, {
        Z: function () {
          return Ct;
        },
      });
      var U = r(37793),
        w = r(70486),
        F = r.n(w),
        I = r(66940),
        X = r(99793),
        z = r(20658),
        H = r(9233),
        $ = r(21359),
        N = r(22076),
        A = r(28211),
        V = r(12346),
        e = r(59301),
        k = r(92691),
        B = r.n(k),
        m = r(45811),
        G = r(29526),
        J = r(3194),
        _ = r(83334),
        S = r(10322);
      function Y(n) {
        return n != null;
      }
      var re = function (t) {
          var a = t.itemPrefixCls,
            l = t.component,
            o = t.span,
            i = t.className,
            d = t.style,
            p = t.labelStyle,
            s = t.contentStyle,
            y = t.bordered,
            Z = t.label,
            x = t.content,
            D = t.colon,
            R = l;
          if (y) {
            var P;
            return e.createElement(
              R,
              {
                className: B()(
                  ((P = {}),
                  (0, N.Z)(P, ''.concat(a, '-item-label'), Y(Z)),
                  (0, N.Z)(P, ''.concat(a, '-item-content'), Y(x)),
                  P),
                  i,
                ),
                style: d,
                colSpan: o,
              },
              Y(Z) && e.createElement('span', { style: p }, Z),
              Y(x) && e.createElement('span', { style: s }, x),
            );
          }
          return e.createElement(
            R,
            { className: B()(''.concat(a, '-item'), i), style: d, colSpan: o },
            e.createElement(
              'div',
              { className: ''.concat(a, '-item-container') },
              Z &&
                e.createElement(
                  'span',
                  {
                    className: B()(
                      ''.concat(a, '-item-label'),
                      (0, N.Z)({}, ''.concat(a, '-item-no-colon'), !D),
                    ),
                    style: p,
                  },
                  Z,
                ),
              x &&
                e.createElement(
                  'span',
                  { className: B()(''.concat(a, '-item-content')), style: s },
                  x,
                ),
            ),
          );
        },
        q = re;
      function ee(n, t, a) {
        var l = t.colon,
          o = t.prefixCls,
          i = t.bordered,
          d = a.component,
          p = a.type,
          s = a.showLabel,
          y = a.showContent,
          Z = a.labelStyle,
          x = a.contentStyle;
        return n.map(function (D, R) {
          var P = D.props,
            T = P.label,
            W = P.children,
            f = P.prefixCls,
            E = f === void 0 ? o : f,
            b = P.className,
            u = P.style,
            v = P.labelStyle,
            M = P.contentStyle,
            L = P.span,
            K = L === void 0 ? 1 : L,
            j = D.key;
          return typeof d == 'string'
            ? e.createElement(q, {
                key: ''.concat(p, '-').concat(j || R),
                className: b,
                style: u,
                labelStyle: (0, S.Z)((0, S.Z)({}, Z), v),
                contentStyle: (0, S.Z)((0, S.Z)({}, x), M),
                span: K,
                colon: l,
                component: d,
                itemPrefixCls: E,
                bordered: i,
                label: s ? T : null,
                content: y ? W : null,
              })
            : [
                e.createElement(q, {
                  key: 'label-'.concat(j || R),
                  className: b,
                  style: (0, S.Z)((0, S.Z)((0, S.Z)({}, Z), u), v),
                  span: 1,
                  colon: l,
                  component: d[0],
                  itemPrefixCls: E,
                  bordered: i,
                  label: T,
                }),
                e.createElement(q, {
                  key: 'content-'.concat(j || R),
                  className: b,
                  style: (0, S.Z)((0, S.Z)((0, S.Z)({}, x), u), M),
                  span: K * 2 - 1,
                  component: d[1],
                  itemPrefixCls: E,
                  bordered: i,
                  content: W,
                }),
              ];
        });
      }
      var oe = function (t) {
          var a = e.useContext(Ze),
            l = t.prefixCls,
            o = t.vertical,
            i = t.row,
            d = t.index,
            p = t.bordered;
          return o
            ? e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  'tr',
                  { key: 'label-'.concat(d), className: ''.concat(l, '-row') },
                  ee(i, t, (0, S.Z)({ component: 'th', type: 'label', showLabel: !0 }, a)),
                ),
                e.createElement(
                  'tr',
                  { key: 'content-'.concat(d), className: ''.concat(l, '-row') },
                  ee(i, t, (0, S.Z)({ component: 'td', type: 'content', showContent: !0 }, a)),
                ),
              )
            : e.createElement(
                'tr',
                { key: d, className: ''.concat(l, '-row') },
                ee(
                  i,
                  t,
                  (0, S.Z)(
                    {
                      component: p ? ['th', 'td'] : 'td',
                      type: 'item',
                      showLabel: !0,
                      showContent: !0,
                    },
                    a,
                  ),
                ),
              );
        },
        ie = oe,
        se = function (t) {
          var a = t.children;
          return a;
        },
        de = se,
        Fe = r(88777),
        Ze = e.createContext({}),
        Ce = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function Ie(n, t) {
        if (typeof n == 'number') return n;
        if ((0, V.Z)(n) === 'object')
          for (var a = 0; a < G.c4.length; a++) {
            var l = G.c4[a];
            if (t[l] && n[l] !== void 0) return n[l] || Ce[l];
          }
        return 3;
      }
      function Se(n, t, a) {
        var l = n;
        return (
          (t === void 0 || t > a) &&
            ((l = (0, Fe.Tm)(n, { span: a })),
            (0, J.Z)(
              t === void 0,
              'Descriptions',
              'Sum of column `span` in a line not match `column` of Descriptions.',
            )),
          l
        );
      }
      function Le(n, t) {
        var a = (0, m.Z)(n).filter(function (d) {
            return d;
          }),
          l = [],
          o = [],
          i = t;
        return (
          a.forEach(function (d, p) {
            var s,
              y = (s = d.props) === null || s === void 0 ? void 0 : s.span,
              Z = y || 1;
            if (p === a.length - 1) {
              o.push(Se(d, y, i)), l.push(o);
              return;
            }
            Z < i ? ((i -= Z), o.push(d)) : (o.push(Se(d, Z, i)), l.push(o), (i = t), (o = []));
          }),
          l
        );
      }
      function be(n) {
        var t,
          a = n.prefixCls,
          l = n.title,
          o = n.extra,
          i = n.column,
          d = i === void 0 ? Ce : i,
          p = n.colon,
          s = p === void 0 ? !0 : p,
          y = n.bordered,
          Z = n.layout,
          x = n.children,
          D = n.className,
          R = n.style,
          P = n.size,
          T = n.labelStyle,
          W = n.contentStyle,
          f = e.useContext(_.E_),
          E = f.getPrefixCls,
          b = f.direction,
          u = E('descriptions', a),
          v = e.useState({}),
          M = (0, A.Z)(v, 2),
          L = M[0],
          K = M[1],
          j = Ie(d, L);
        e.useEffect(function () {
          var g = G.ZP.subscribe(function (C) {
            (0, V.Z)(d) === 'object' && K(C);
          });
          return function () {
            G.ZP.unsubscribe(g);
          };
        }, []);
        var c = Le(x, j),
          ae = e.useMemo(
            function () {
              return { labelStyle: T, contentStyle: W };
            },
            [T, W],
          );
        return e.createElement(
          Ze.Provider,
          { value: ae },
          e.createElement(
            'div',
            {
              className: B()(
                u,
                ((t = {}),
                (0, N.Z)(t, ''.concat(u, '-').concat(P), P && P !== 'default'),
                (0, N.Z)(t, ''.concat(u, '-bordered'), !!y),
                (0, N.Z)(t, ''.concat(u, '-rtl'), b === 'rtl'),
                t),
                D,
              ),
              style: R,
            },
            (l || o) &&
              e.createElement(
                'div',
                { className: ''.concat(u, '-header') },
                l && e.createElement('div', { className: ''.concat(u, '-title') }, l),
                o && e.createElement('div', { className: ''.concat(u, '-extra') }, o),
              ),
            e.createElement(
              'div',
              { className: ''.concat(u, '-view') },
              e.createElement(
                'table',
                null,
                e.createElement(
                  'tbody',
                  null,
                  c.map(function (g, C) {
                    return e.createElement(ie, {
                      key: C,
                      index: C,
                      colon: s,
                      prefixCls: u,
                      vertical: Z === 'vertical',
                      bordered: y,
                      row: g,
                    });
                  }),
                ),
              ),
            ),
          ),
        );
      }
      be.Item = de;
      var ve = be,
        me = r(20557),
        bt = r(41505),
        Be = r(79538),
        Dt = r(20481),
        ne = r(26815),
        O = r(36531),
        Oe = r(15711),
        Ae = r(56384),
        We = r(22913),
        Ke = r(14293),
        fe = r(72242),
        Tt = r(71838),
        Ne = r(99128),
        pe = r(29015),
        we = r(95443),
        ce = r(95473);
      function ze(n) {
        var t = n.data,
          a = n.row;
        return (0, O.Z)((0, O.Z)({}, t), a);
      }
      function Ue(n) {
        var t = n.type || 'single',
          a = (0, pe.Z)([], {
            value: n.editableKeys,
            onChange: n.onChange
              ? function (f) {
                  var E;
                  n == null ||
                    (E = n.onChange) === null ||
                    E === void 0 ||
                    E.call(n, f, n.dataSource);
                }
              : void 0,
          }),
          l = (0, A.Z)(a, 2),
          o = l[0],
          i = l[1],
          d = (0, e.useMemo)(
            function () {
              var f = t === 'single' ? (o == null ? void 0 : o.slice(0, 1)) : o;
              return new Set(f);
            },
            [(o || []).join(','), t],
          ),
          p = (0, e.useCallback)(
            function (f) {
              return !!(o == null ? void 0 : o.includes((0, ce.sN)(f)));
            },
            [(o || []).join(',')],
          ),
          s = function (E) {
            return d.size > 0 && t === 'single'
              ? (Ne.default.warn(
                  n.onlyOneLineEditorAlertMessage ||
                    '\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C',
                ),
                !1)
              : (d.add((0, ce.sN)(E)), i(Array.from(d)), !0);
          },
          y = function (E) {
            return d.delete((0, ce.sN)(E)), i(Array.from(d)), !0;
          },
          Z = (function () {
            var f = (0, I.Z)(
              F().mark(function E(b, u, v, M) {
                var L, K;
                return F().wrap(function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (c.next = 2),
                          n == null || (L = n.onCancel) === null || L === void 0
                            ? void 0
                            : L.call(n, b, u, v, M)
                        );
                      case 2:
                        if (((K = c.sent), K !== !1)) {
                          c.next = 5;
                          break;
                        }
                        return c.abrupt('return', !1);
                      case 5:
                        return c.abrupt('return', !0);
                      case 6:
                      case 'end':
                        return c.stop();
                    }
                }, E);
              }),
            );
            return function (b, u, v, M) {
              return f.apply(this, arguments);
            };
          })(),
          x = (function () {
            var f = (0, I.Z)(
              F().mark(function E(b, u, v) {
                var M, L, K;
                return F().wrap(function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (c.next = 2),
                          n == null || (M = n.onSave) === null || M === void 0
                            ? void 0
                            : M.call(n, b, u, v)
                        );
                      case 2:
                        if (((L = c.sent), L !== !1)) {
                          c.next = 5;
                          break;
                        }
                        return c.abrupt('return', !1);
                      case 5:
                        return (
                          y(b),
                          (K = {
                            data: n.dataSource,
                            row: u,
                            key: b,
                            childrenColumnName: n.childrenColumnName || 'children',
                          }),
                          n.setDataSource(ze(K)),
                          c.abrupt('return', !0)
                        );
                      case 9:
                      case 'end':
                        return c.stop();
                    }
                }, E);
              }),
            );
            return function (b, u, v) {
              return f.apply(this, arguments);
            };
          })(),
          D = (0, we.YB)(),
          R = D.getMessage('editableTable.action.save', '\u4FDD\u5B58'),
          P = D.getMessage('editableTable.action.delete', '\u5220\u9664'),
          T = D.getMessage('editableTable.action.cancel', '\u53D6\u6D88'),
          W = (0, e.useCallback)(
            function (f, E, b) {
              var u = (0, O.Z)(
                  {
                    recordKey: f,
                    cancelEditable: y,
                    onCancel: Z,
                    onSave: x,
                    editableKeys: o,
                    setEditableRowKeys: i,
                    form: E,
                    saveText: R,
                    cancelText: T,
                    deleteText: P,
                    deletePopconfirmMessage: '\u5220\u9664\u6B64\u884C\uFF1F',
                    editorType: 'Map',
                  },
                  b,
                ),
                v = (0, ce.aX)(n.dataSource, u);
              return n.actionRender
                ? n.actionRender(n.dataSource, u, { save: v[0], delete: v[1], cancel: v[2] })
                : v;
            },
            [o && o.join(','), n.dataSource],
          );
        return {
          editableKeys: o,
          setEditableRowKeys: i,
          isEditable: p,
          actionRender: W,
          startEditable: s,
          cancelEditable: y,
        };
      }
      var $e = Ue,
        Ee = r(10976),
        je = r(69859),
        He = r(79823),
        De = r(87801),
        Ve = r(15489),
        Ge = r(21961),
        Qe = r(96565),
        xt = r(69805),
        te = r(79944),
        Rt = r(43710),
        h = r(77145),
        Mt = r(35475),
        Xe = r(81328),
        ye = r(37131),
        ge = function (t) {
          var a = t.padding;
          return e.createElement(
            'div',
            { style: { padding: a || '0 24px' } },
            e.createElement(Xe.Z, { style: { margin: 0 } }),
          );
        },
        ke = { xs: 2, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 },
        Ye = function (t) {
          var a = t.size,
            l = t.active,
            o = (0, ye.ZP)(),
            i = a === void 0 ? ke[o] || 6 : a,
            d = function (s) {
              return s === 0 ? 0 : i > 2 ? 42 : 16;
            };
          return e.createElement(
            te.Z,
            { bordered: !1, style: { marginBottom: 16 } },
            e.createElement(
              'div',
              { style: { width: '100%', justifyContent: 'space-between', display: 'flex' } },
              new Array(i).fill(null).map(function (p, s) {
                return e.createElement(
                  'div',
                  {
                    key: s,
                    style: {
                      borderLeft: i > 2 && s === 1 ? '1px solid rgba(0,0,0,0.06)' : void 0,
                      paddingLeft: d(s),
                      flex: 1,
                      marginRight: s === 0 ? 16 : 0,
                    },
                  },
                  e.createElement(h.Z, {
                    active: l,
                    paragraph: !1,
                    title: { width: 100, style: { marginTop: 0 } },
                  }),
                  e.createElement(h.Z.Button, { active: l, style: { height: 48 } }),
                );
              }),
            ),
          );
        },
        Je = function (t) {
          var a = t.active;
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              te.Z,
              { bordered: !1, style: { borderRadius: 0 }, bodyStyle: { padding: 24 } },
              e.createElement(
                'div',
                {
                  style: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                },
                e.createElement(
                  'div',
                  { style: { maxWidth: '100%', flex: 1 } },
                  e.createElement(h.Z, {
                    active: a,
                    title: { width: 100, style: { marginTop: 0 } },
                    paragraph: { rows: 1, style: { margin: 0 } },
                  }),
                ),
                e.createElement(h.Z.Button, {
                  active: a,
                  size: 'small',
                  style: { width: 165, marginTop: 12 },
                }),
              ),
            ),
            e.createElement(ge, null),
          );
        },
        _e = function (t) {
          var a = t.size,
            l = t.active,
            o = l === void 0 ? !0 : l,
            i = t.actionButton;
          return e.createElement(
            te.Z,
            { bordered: !1, bodyStyle: { padding: 0 } },
            new Array(a).fill(null).map(function (d, p) {
              return e.createElement(Je, { key: p, active: !!o });
            }),
            i !== !1 &&
              e.createElement(
                te.Z,
                {
                  bordered: !1,
                  style: { borderTopRightRadius: 0, borderTopLeftRadius: 0 },
                  bodyStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                },
                e.createElement(h.Z.Button, { style: { width: 102 }, active: o, size: 'small' }),
              ),
          );
        },
        Pe = function (t) {
          var a = t.active;
          return e.createElement(
            'div',
            { style: { marginBottom: 16 } },
            e.createElement(h.Z, { paragraph: !1, title: { width: 185 } }),
            e.createElement(h.Z.Button, { active: a, size: 'small' }),
          );
        },
        qe = function (t) {
          var a = t.active;
          return e.createElement(
            te.Z,
            {
              bordered: !1,
              style: { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
              bodyStyle: { paddingBottom: 8 },
            },
            e.createElement(
              ne.Z,
              { style: { width: '100%', justifyContent: 'space-between' } },
              e.createElement(h.Z.Button, { active: a, style: { width: 200 }, size: 'small' }),
              e.createElement(
                ne.Z,
                null,
                e.createElement(h.Z.Button, { active: a, size: 'small', style: { width: 120 } }),
                e.createElement(h.Z.Button, { active: a, size: 'small', style: { width: 80 } }),
              ),
            ),
          );
        },
        et = function (t) {
          var a = t.active,
            l = a === void 0 ? !0 : a,
            o = t.statistic,
            i = t.actionButton,
            d = t.toolbar,
            p = t.pageHeader,
            s = t.list,
            y = s === void 0 ? 5 : s;
          return e.createElement(
            'div',
            { style: { width: '100%' } },
            p !== !1 && e.createElement(Pe, { active: l }),
            o !== !1 && e.createElement(Ye, { size: o, active: l }),
            (d !== !1 || y !== !1) &&
              e.createElement(
                te.Z,
                { bordered: !1, bodyStyle: { padding: 0 } },
                d !== !1 && e.createElement(qe, { active: l }),
                y !== !1 && e.createElement(_e, { size: y, active: l, actionButton: i }),
              ),
          );
        },
        tt = et,
        at = function (t) {
          var a = t.active,
            l = a === void 0 ? !0 : a,
            o = t.pageHeader;
          return e.createElement(
            'div',
            { style: { width: '100%' } },
            o !== !1 && e.createElement(Pe, { active: l }),
            e.createElement(
              te.Z,
              null,
              e.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 128,
                  },
                },
                e.createElement(h.Z.Avatar, { size: 64, style: { marginBottom: 32 } }),
                e.createElement(h.Z.Button, { active: l, style: { width: 214, marginBottom: 8 } }),
                e.createElement(h.Z.Button, { active: l, style: { width: 328 }, size: 'small' }),
                e.createElement(
                  ne.Z,
                  { style: { marginTop: 24 } },
                  e.createElement(h.Z.Button, { active: l, style: { width: 116 } }),
                  e.createElement(h.Z.Button, { active: l, style: { width: 116 } }),
                ),
              ),
            ),
          );
        },
        rt = at,
        Te = { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 },
        nt = function (t) {
          var a = t.active;
          return e.createElement(
            'div',
            { style: { marginTop: 32 } },
            e.createElement(h.Z.Button, {
              active: a,
              size: 'small',
              style: { width: 100, marginBottom: 16 },
            }),
            e.createElement(
              'div',
              { style: { width: '100%', justifyContent: 'space-between', display: 'flex' } },
              e.createElement(
                'div',
                { style: { flex: 1, marginRight: 24, maxWidth: 300 } },
                e.createElement(h.Z, {
                  active: a,
                  paragraph: !1,
                  title: { style: { marginTop: 0 } },
                }),
                e.createElement(h.Z, {
                  active: a,
                  paragraph: !1,
                  title: { style: { marginTop: 8 } },
                }),
                e.createElement(h.Z, {
                  active: a,
                  paragraph: !1,
                  title: { style: { marginTop: 8 } },
                }),
              ),
              e.createElement(
                'div',
                { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
                e.createElement(
                  'div',
                  { style: { maxWidth: 300, margin: 'auto' } },
                  e.createElement(h.Z, {
                    active: a,
                    paragraph: !1,
                    title: { style: { marginTop: 0 } },
                  }),
                  e.createElement(h.Z, {
                    active: a,
                    paragraph: !1,
                    title: { style: { marginTop: 8 } },
                  }),
                ),
              ),
            ),
          );
        },
        lt = function (t) {
          var a = t.size,
            l = t.active,
            o = (0, ye.ZP)(),
            i = a === void 0 ? Te[o] || 3 : a;
          return e.createElement(
            'div',
            { style: { width: '100%', justifyContent: 'space-between', display: 'flex' } },
            new Array(i).fill(null).map(function (d, p) {
              return e.createElement(
                'div',
                {
                  key: p,
                  style: {
                    flex: 1,
                    paddingLeft: p === 0 ? 0 : 24,
                    paddingRight: p === i - 1 ? 0 : 24,
                  },
                },
                e.createElement(h.Z, {
                  active: l,
                  paragraph: !1,
                  title: { style: { marginTop: 0 } },
                }),
                e.createElement(h.Z, {
                  active: l,
                  paragraph: !1,
                  title: { style: { marginTop: 8 } },
                }),
                e.createElement(h.Z, {
                  active: l,
                  paragraph: !1,
                  title: { style: { marginTop: 8 } },
                }),
              );
            }),
          );
        },
        xe = function (t) {
          var a = t.active,
            l = t.header,
            o = l === void 0 ? !1 : l,
            i = (0, ye.ZP)(),
            d = Te[i] || 3;
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  background: o ? 'rgba(0,0,0,0.02)' : 'none',
                  padding: '24px 8px',
                },
              },
              new Array(d).fill(null).map(function (p, s) {
                return e.createElement(
                  'div',
                  {
                    key: s,
                    style: { flex: 1, paddingLeft: o && s === 0 ? 0 : 20, paddingRight: 32 },
                  },
                  e.createElement(h.Z, {
                    active: a,
                    paragraph: !1,
                    title: { style: { margin: 0, height: 24, width: o ? '75px' : '100%' } },
                  }),
                );
              }),
              e.createElement(
                'div',
                { style: { flex: 3, paddingLeft: 32 } },
                e.createElement(h.Z, {
                  active: a,
                  paragraph: !1,
                  title: { style: { margin: 0, height: 24, width: o ? '75px' : '100%' } },
                }),
              ),
            ),
            e.createElement(ge, { padding: '0px 0px' }),
          );
        },
        ot = function (t) {
          var a = t.active,
            l = t.size,
            o = l === void 0 ? 4 : l;
          return e.createElement(
            te.Z,
            { bordered: !1 },
            e.createElement(h.Z.Button, {
              active: a,
              size: 'small',
              style: { width: 100, marginBottom: 16 },
            }),
            e.createElement(xe, { header: !0, active: a }),
            new Array(o).fill(null).map(function (i, d) {
              return e.createElement(xe, { key: d, active: a });
            }),
            e.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'flex-end', paddingTop: 16 } },
              e.createElement(h.Z, {
                active: a,
                paragraph: !1,
                title: { style: { margin: 0, height: 32, float: 'right', maxWidth: '630px' } },
              }),
            ),
          );
        },
        it = function (t) {
          var a = t.active;
          return e.createElement(
            te.Z,
            { bordered: !1, style: { borderTopRightRadius: 0, borderTopLeftRadius: 0 } },
            e.createElement(h.Z.Button, {
              active: a,
              size: 'small',
              style: { width: 100, marginBottom: 16 },
            }),
            e.createElement(lt, { active: a }),
            e.createElement(nt, { active: a }),
          );
        },
        st = function (t) {
          var a = t.active,
            l = a === void 0 ? !0 : a,
            o = t.pageHeader,
            i = t.list;
          return e.createElement(
            'div',
            { style: { width: '100%' } },
            o !== !1 && e.createElement(Pe, { active: l }),
            e.createElement(it, { active: l }),
            i !== !1 && e.createElement(ge, null),
            i !== !1 && e.createElement(ot, { active: l, size: i }),
          );
        },
        dt = st,
        ct = ['type'],
        ut = function (t) {
          var a = t.type,
            l = a === void 0 ? 'list' : a,
            o = (0, me.Z)(t, ct);
          return l === 'result'
            ? e.createElement(rt, o)
            : l === 'descriptions'
            ? e.createElement(dt, o)
            : e.createElement(tt, o);
        },
        vt = ut,
        mt = function (t, a) {
          var l = a || {},
            o = l.onRequestError,
            i = l.effects,
            d = l.manual,
            p = l.dataSource,
            s = l.defaultDataSource,
            y = l.onDataSourceChange,
            Z = (0, pe.Z)(s, { value: p, onChange: y }),
            x = (0, A.Z)(Z, 2),
            D = x[0],
            R = x[1],
            P = (0, pe.Z)(a == null ? void 0 : a.loading, {
              value: a == null ? void 0 : a.loading,
              onChange: a == null ? void 0 : a.onLoadingChange,
            }),
            T = (0, A.Z)(P, 2),
            W = T[0],
            f = T[1],
            E = function (v) {
              R(v), f(!1);
            },
            b = (function () {
              var u = (0, I.Z)(
                F().mark(function v() {
                  var M, L, K;
                  return F().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (!W) {
                              c.next = 2;
                              break;
                            }
                            return c.abrupt('return');
                          case 2:
                            return f(!0), (c.prev = 3), (c.next = 6), t();
                          case 6:
                            if (((c.t0 = c.sent), c.t0)) {
                              c.next = 9;
                              break;
                            }
                            c.t0 = {};
                          case 9:
                            (M = c.t0),
                              (L = M.data),
                              (K = M.success),
                              K !== !1 && E(L),
                              (c.next = 23);
                            break;
                          case 15:
                            if (((c.prev = 15), (c.t1 = c.catch(3)), o !== void 0)) {
                              c.next = 21;
                              break;
                            }
                            throw new Error(c.t1);
                          case 21:
                            o(c.t1);
                          case 22:
                            f(!1);
                          case 23:
                          case 'end':
                            return c.stop();
                        }
                    },
                    v,
                    null,
                    [[3, 15]],
                  );
                }),
              );
              return function () {
                return u.apply(this, arguments);
              };
            })();
          return (
            (0, e.useEffect)(function () {
              d || b();
            }, [].concat((0, U.Z)(i || []), [d])),
            {
              dataSource: D,
              setDataSource: R,
              loading: W,
              reload: function () {
                return b();
              },
            }
          );
        },
        ft = mt,
        Ft = r(13207),
        pt = [
          'valueEnum',
          'render',
          'renderText',
          'mode',
          'plain',
          'dataIndex',
          'request',
          'params',
          'editable',
        ],
        Et = [
          'request',
          'columns',
          'params',
          'dataSource',
          'onDataSourceChange',
          'formProps',
          'editable',
          'loading',
          'onLoadingChange',
          'actionRef',
          'onRequestError',
        ],
        yt = function (t, a) {
          var l = t.dataIndex;
          if (l) {
            var o = Array.isArray(l) ? (0, Ge.Z)(a, l) : a[l];
            if (o !== void 0 || o !== null) return o;
          }
          return t.children;
        },
        gt = function (t) {
          var a = t.valueEnum,
            l = t.action,
            o = t.index,
            i = t.text,
            d = t.entity,
            p = t.mode,
            s = t.render,
            y = t.editableUtils,
            Z = t.valueType,
            x = t.plain,
            D = t.dataIndex,
            R = t.request,
            P = t.renderFormItem,
            T = t.params,
            W = {
              text: i,
              valueEnum: a,
              mode: p || 'read',
              proFieldProps: {
                render: s
                  ? function () {
                      return s == null
                        ? void 0
                        : s(i, d, o, l, (0, O.Z)((0, O.Z)({}, t), {}, { type: 'descriptions' }));
                    }
                  : void 0,
              },
              ignoreFormItem: !0,
              valueType: Z,
              request: R,
              params: T,
              plain: x,
            };
          if (p === 'read' || !p || Z === 'option') {
            var f = (0, Ee.Z)(
              t.fieldProps,
              void 0,
              (0, O.Z)((0, O.Z)({}, t), {}, { rowKey: D, isEditable: !1 }),
            );
            return e.createElement(fe.Z, (0, S.Z)({ name: D }, W, { fieldProps: f }));
          }
          return e.createElement(
            'div',
            { style: { marginTop: -5, marginBottom: -5, marginLeft: 0, marginRight: 0 } },
            e.createElement(
              Be.Z.Item,
              {
                noStyle: !0,
                shouldUpdate: function (b, u) {
                  return b !== u;
                },
              },
              function (E) {
                var b,
                  u = (0, Ee.Z)(
                    t.formItemProps,
                    E,
                    (0, O.Z)((0, O.Z)({}, t), {}, { rowKey: D, isEditable: !0 }),
                  ),
                  v = (0, Ee.Z)(
                    t.fieldProps,
                    E,
                    (0, O.Z)((0, O.Z)({}, t), {}, { rowKey: D, isEditable: !0 }),
                  ),
                  M = P
                    ? P == null
                      ? void 0
                      : P(
                          (0, O.Z)((0, O.Z)({}, t), {}, { type: 'descriptions' }),
                          {
                            isEditable: !0,
                            recordKey: D,
                            record: E.getFieldValue([D].flat(1)),
                            defaultRender: function () {
                              return e.createElement(fe.Z, (0, S.Z)({}, W, { fieldProps: v }));
                            },
                            type: 'descriptions',
                          },
                          E,
                        )
                    : void 0;
                return e.createElement(
                  ne.Z,
                  null,
                  e.createElement(
                    je.Z,
                    (0, S.Z)({ name: D }, u, {
                      style: (0, O.Z)({ margin: 0 }, (u == null ? void 0 : u.style) || {}),
                      initialValue: i || (u == null ? void 0 : u.initialValue),
                    }),
                    M ||
                      e.createElement(
                        fe.Z,
                        (0, S.Z)({}, W, {
                          proFieldProps: (0, O.Z)({}, W.proFieldProps),
                          fieldProps: v,
                        }),
                      ),
                  ),
                  y == null || (b = y.actionRender) === null || b === void 0
                    ? void 0
                    : b.call(y, D || o, E, {
                        cancelText: e.createElement(Oe.Z, null),
                        saveText: e.createElement(Ae.Z, null),
                        deleteText: !1,
                      }),
                );
              },
            ),
          );
        },
        Pt = function (t, a, l, o) {
          var i,
            d = [],
            p =
              t == null || (i = t.map) === null || i === void 0
                ? void 0
                : i
                    .call(t, function (s, y) {
                      var Z, x;
                      if (e.isValidElement(s)) return s;
                      var D = s.valueEnum,
                        R = s.render,
                        P = s.renderText,
                        T = s.mode,
                        W = s.plain,
                        f = s.dataIndex,
                        E = s.request,
                        b = s.params,
                        u = s.editable,
                        v = (0, me.Z)(s, pt),
                        M = (Z = yt(s, a)) !== null && Z !== void 0 ? Z : v.children,
                        L = P ? P(M, a, y, l) : M,
                        K =
                          typeof v.title == 'function'
                            ? v.title(s, 'descriptions', v.title)
                            : v.title,
                        j = (0, He.X)(K, s, L),
                        c =
                          typeof v.valueType == 'function'
                            ? v.valueType(a || {}, 'descriptions')
                            : v.valueType,
                        ae = o == null ? void 0 : o.isEditable(f || y),
                        g = T || ae ? 'edit' : 'read',
                        C =
                          o && g === 'read' && u !== !1 && (u == null ? void 0 : u(L, a, y)) !== !1,
                        he = C ? ne.Z : e.Fragment,
                        ue = e.createElement(
                          ve.Item,
                          (0, S.Z)({}, v, {
                            key:
                              ((x = v.label) === null || x === void 0 ? void 0 : x.toString()) || y,
                            label:
                              (j || v.label || v.tooltip || v.tip) &&
                              e.createElement(De.Z, {
                                label: j || v.label,
                                tooltip: v.tooltip || v.tip,
                                ellipsis: s.ellipsis,
                              }),
                          }),
                          e.createElement(
                            he,
                            null,
                            e.createElement(
                              gt,
                              (0, S.Z)({}, s, {
                                dataIndex: s.dataIndex || y,
                                mode: g,
                                text: L,
                                valueType: c,
                                entity: a,
                                index: y,
                                action: l,
                                editableUtils: o,
                              }),
                            ),
                            C &&
                              c !== 'option' &&
                              e.createElement(We.Z, {
                                onClick: function () {
                                  o == null || o.startEditable(f || y);
                                },
                              }),
                          ),
                        );
                      return c === 'option' ? (d.push(ue), null) : ue;
                    })
                    .filter(function (s) {
                      return s;
                    });
          return { options: (d == null ? void 0 : d.length) ? d : null, children: p };
        },
        ht = function (t) {
          return e.createElement(ve.Item, t, t.children);
        },
        Zt = function (t) {
          return t.children;
        },
        Re = function (t) {
          var a,
            l = t.request,
            o = t.columns,
            i = t.params,
            d = i === void 0 ? {} : i,
            p = t.dataSource,
            s = t.onDataSourceChange,
            y = t.formProps,
            Z = t.editable,
            x = t.loading,
            D = t.onLoadingChange,
            R = t.actionRef,
            P = t.onRequestError,
            T = (0, me.Z)(t, Et),
            W = (0, e.useContext)(z.ZP.ConfigContext),
            f = ft(
              (0, I.Z)(
                F().mark(function c() {
                  var ae;
                  return F().wrap(function (C) {
                    for (;;)
                      switch ((C.prev = C.next)) {
                        case 0:
                          if (!l) {
                            C.next = 6;
                            break;
                          }
                          return (C.next = 3), l(d);
                        case 3:
                          (C.t0 = C.sent), (C.next = 7);
                          break;
                        case 6:
                          C.t0 = { data: {} };
                        case 7:
                          return (ae = C.t0), C.abrupt('return', ae);
                        case 9:
                        case 'end':
                          return C.stop();
                      }
                  }, c);
                }),
              ),
              {
                onRequestError: P,
                effects: [(0, Qe.P)(d)],
                manual: !l,
                dataSource: p,
                loading: x,
                onLoadingChange: D,
                onDataSourceChange: s,
              },
            ),
            E = $e(
              (0, O.Z)(
                (0, O.Z)({}, t.editable),
                {},
                {
                  childrenColumnName: void 0,
                  dataSource: f.dataSource,
                  setDataSource: f.setDataSource,
                },
              ),
            );
          if (
            ((0, e.useEffect)(
              function () {
                R && (R.current = (0, O.Z)({ reload: f.reload }, E));
              },
              [f, R, E],
            ),
            f.loading || (f.loading === void 0 && l))
          )
            return e.createElement(vt, { type: 'descriptions', list: !1, pageHeader: !1 });
          var b = function () {
              var ae = (0, m.Z)(t.children)
                .filter(Boolean)
                .map(function (g) {
                  if (!e.isValidElement(g)) return g;
                  var C = g == null ? void 0 : g.props,
                    he = C.valueEnum,
                    ue = C.valueType,
                    Me = C.dataIndex,
                    St = C.request;
                  return !ue && !he && !Me && !St
                    ? g
                    : (0, O.Z)((0, O.Z)({}, g == null ? void 0 : g.props), {}, { entity: p });
                });
              return []
                .concat((0, U.Z)(o || []), (0, U.Z)(ae))
                .filter(function (g) {
                  return !g ||
                    ((g == null ? void 0 : g.valueType) &&
                      ['index', 'indexBorder'].includes(g == null ? void 0 : g.valueType))
                    ? !1
                    : !(g == null ? void 0 : g.hideInDescriptions);
                })
                .sort(function (g, C) {
                  return C.order || g.order
                    ? (C.order || 0) - (g.order || 0)
                    : (C.index || 0) - (g.index || 0);
                });
            },
            u = Pt(b(), f.dataSource || {}, (R == null ? void 0 : R.current) || f, Z ? E : void 0),
            v = u.options,
            M = u.children,
            L = Z ? Ke.ZP : Zt,
            K = null;
          (T.title || T.tooltip || T.tip) &&
            (K = e.createElement(De.Z, { label: T.title, tooltip: T.tooltip || T.tip }));
          var j = W.getPrefixCls('pro-descriptions');
          return e.createElement(
            Ve.Z,
            null,
            e.createElement(
              L,
              (0, S.Z)(
                {
                  key: 'form',
                  form: (a = t.editable) === null || a === void 0 ? void 0 : a.form,
                  component: !1,
                  submitter: !1,
                },
                y,
                { onFinish: void 0 },
              ),
              e.createElement(
                ve,
                (0, S.Z)({ className: j }, T, {
                  extra: T.extra ? e.createElement(ne.Z, null, v, T.extra) : v,
                  title: K,
                }),
                M,
              ),
            ),
          );
        };
      Re.Item = ht;
      var Ct = Re;
    },
    67838: function (le, Q, r) {
      'use strict';
      var U = r(10322),
        w = r(36531),
        F = r(20557),
        I = r(59301),
        X = r(72242),
        z = r(13801),
        H = ['fieldProps', 'proFieldProps'],
        $ = 'dateTime',
        N = I.forwardRef(function (A, V) {
          var e = A.fieldProps,
            k = A.proFieldProps,
            B = (0, F.Z)(A, H),
            m = (0, I.useContext)(z.Z);
          return I.createElement(
            X.Z,
            (0, U.Z)(
              {
                ref: V,
                mode: 'edit',
                fieldProps: (0, w.Z)({ getPopupContainer: m.getPopupContainer }, e),
                valueType: $,
                proFieldProps: k,
                filedConfig: { valueType: $, customLightMode: !0 },
              },
              B,
            ),
          );
        });
      Q.Z = N;
    },
    9230: function (le, Q, r) {
      'use strict';
      var U = r(27167),
        w = r(21063),
        F = r(10322),
        I = r(36531),
        X = r(20557),
        z = r(59301),
        H = r(72242),
        $ = r(74045),
        N = r(11557),
        A = ['fieldProps', 'options', 'radioType', 'layout', 'proFieldProps', 'valueEnum'],
        V = z.forwardRef(function (m, G) {
          var J = m.fieldProps,
            _ = m.options,
            S = m.radioType,
            Y = m.layout,
            re = m.proFieldProps,
            q = m.valueEnum,
            ee = (0, X.Z)(m, A);
          return z.createElement(
            H.Z,
            (0, F.Z)(
              {
                mode: 'edit',
                valueType: S === 'button' ? 'radioButton' : 'radio',
                ref: G,
                valueEnum: (0, $.h)(q, void 0),
              },
              ee,
              {
                fieldProps: (0, I.Z)({ options: _, layout: Y }, J),
                proFieldProps: re,
                filedConfig: { customLightMode: !0 },
              },
            ),
          );
        }),
        e = z.forwardRef(function (m, G) {
          var J = m.fieldProps,
            _ = m.children;
          return z.createElement(w.ZP, (0, F.Z)({}, J, { ref: G }), _);
        }),
        k = (0, N.Z)(e, { valuePropName: 'checked', ignoreWidth: !0 }),
        B = k;
      (B.Group = V), (B.Button = w.ZP.Button), (B.displayName = 'ProFormComponent'), (Q.Z = B);
    },
    80732: function (le, Q, r) {
      'use strict';
      var U = r(10322),
        w = r(36531),
        F = r(20557),
        I = r(59301),
        X = r(72242),
        z = r(74045),
        H = r(13801),
        $ = [
          'fieldProps',
          'children',
          'params',
          'proFieldProps',
          'mode',
          'valueEnum',
          'request',
          'showSearch',
          'options',
        ],
        N = [
          'fieldProps',
          'children',
          'params',
          'proFieldProps',
          'mode',
          'valueEnum',
          'request',
          'options',
        ],
        A = I.forwardRef(function (m, G) {
          var J = m.fieldProps,
            _ = m.children,
            S = m.params,
            Y = m.proFieldProps,
            re = m.mode,
            q = m.valueEnum,
            ee = m.request,
            oe = m.showSearch,
            ie = m.options,
            se = (0, F.Z)(m, $),
            de = (0, I.useContext)(H.Z);
          return I.createElement(
            X.Z,
            (0, U.Z)(
              {
                mode: 'edit',
                valueEnum: (0, z.h)(q),
                request: ee,
                params: S,
                valueType: 'select',
                filedConfig: { customLightMode: !0 },
                fieldProps: (0, w.Z)(
                  {
                    options: ie,
                    mode: re,
                    showSearch: oe,
                    getPopupContainer: de.getPopupContainer,
                  },
                  J,
                ),
                ref: G,
                proFieldProps: Y,
              },
              se,
            ),
            _,
          );
        }),
        V = I.forwardRef(function (m, G) {
          var J = m.fieldProps,
            _ = m.children,
            S = m.params,
            Y = m.proFieldProps,
            re = m.mode,
            q = m.valueEnum,
            ee = m.request,
            oe = m.options,
            ie = (0, F.Z)(m, N),
            se = (0, w.Z)(
              {
                options: oe,
                mode: re || 'multiple',
                labelInValue: !0,
                showSearch: !0,
                showArrow: !1,
                autoClearSearchValue: !0,
                optionLabelProp: 'label',
              },
              J,
            ),
            de = (0, I.useContext)(H.Z);
          return I.createElement(
            X.Z,
            (0, U.Z)(
              {
                mode: 'edit',
                valueEnum: (0, z.h)(q),
                request: ee,
                params: S,
                valueType: 'select',
                filedConfig: { customLightMode: !0 },
                fieldProps: (0, w.Z)({ getPopupContainer: de.getPopupContainer }, se),
                ref: G,
                proFieldProps: Y,
              },
              ie,
            ),
            _,
          );
        }),
        e = A,
        k = V,
        B = e;
      (B.SearchSelect = k), (B.displayName = 'ProFormComponent'), (Q.Z = B);
    },
    4288: function (le, Q, r) {
      'use strict';
      var U = r(10322),
        w = r(20557),
        F = r(59301),
        I = r(72242),
        X = ['fieldProps', 'proFieldProps'],
        z = ['fieldProps', 'proFieldProps'],
        H = 'text',
        $ = function (e) {
          var k = e.fieldProps,
            B = e.proFieldProps,
            m = (0, w.Z)(e, X);
          return F.createElement(
            I.Z,
            (0, U.Z)(
              {
                mode: 'edit',
                valueType: H,
                fieldProps: k,
                filedConfig: { valueType: H },
                proFieldProps: B,
              },
              m,
            ),
          );
        },
        N = function (e) {
          var k = e.fieldProps,
            B = e.proFieldProps,
            m = (0, w.Z)(e, z);
          return F.createElement(
            I.Z,
            (0, U.Z)(
              {
                mode: 'edit',
                valueType: 'password',
                fieldProps: k,
                proFieldProps: B,
                filedConfig: { valueType: H },
              },
              m,
            ),
          );
        },
        A = $;
      (A.Password = N), (A.displayName = 'ProFormComponent'), (Q.Z = A);
    },
    30791: function (le, Q, r) {
      'use strict';
      var U = r(10322),
        w = r(20557),
        F = r(59301),
        I = r(72242),
        X = ['fieldProps', 'proFieldProps'],
        z = function ($, N) {
          var A = $.fieldProps,
            V = $.proFieldProps,
            e = (0, w.Z)($, X);
          return F.createElement(
            I.Z,
            (0, U.Z)(
              { ref: N, mode: 'edit', valueType: 'textarea', fieldProps: A, proFieldProps: V },
              e,
            ),
          );
        };
      Q.Z = F.forwardRef(z);
    },
    13207: function () {},
    21359: function () {},
  },
]);
