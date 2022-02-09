(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [855],
  {
    19855: function (Ze, Fe, g) {
      'use strict';
      g.d(Fe, {
        ZP: function () {
          return qr;
        },
      });
      var H = g(85403),
        A = g(11127),
        B = g(22076),
        G = g(70486),
        ee = g.n(G),
        Ee = g(66940),
        xe = g(20557),
        Rt = g(99793),
        Ve = g(20658),
        le = g(28211),
        b = g(36531),
        oe = g(10322),
        O = g(79258),
        a = g(59301),
        D = g(92691),
        j = g.n(D),
        re = g(85239),
        X = g.n(re),
        ye = g(29015),
        ne = g(37131),
        S = g(81631),
        $ = g(44204);
      function fe(m, e) {
        var u = typeof m.pageName == 'string' ? m.title : e;
        (0, a.useEffect)(
          function () {
            (0, $.Z)() && u && (document.title = u);
          },
          [m.title, u],
        );
      }
      var ce = fe,
        J = g(52535),
        he = g(38299),
        Oe = g(52372),
        Xe = g(3359),
        Qe = g(29860),
        K = g(54855),
        Y = g(71512),
        Q = g(54938),
        Zt = g(2080),
        ft = g(48513),
        be = g(74318),
        Ne = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z',
                },
              },
            ],
          },
          name: 'menu-unfold',
          theme: 'outlined',
        },
        Je = Ne,
        St = g(23986),
        Bt = function (e, u) {
          return a.createElement(St.Z, (0, b.Z)((0, b.Z)({}, e), {}, { ref: u, icon: Je }));
        };
      Bt.displayName = 'MenuUnfoldOutlined';
      var Kt = a.forwardRef(Bt),
        $t = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z',
                },
              },
            ],
          },
          name: 'menu-fold',
          theme: 'outlined',
        },
        jt = $t,
        He = function (e, u) {
          return a.createElement(St.Z, (0, b.Z)((0, b.Z)({}, e), {}, { ref: u, icon: jt }));
        };
      He.displayName = 'MenuFoldOutlined';
      var Wt = a.forwardRef(He),
        xr = g(87614),
        br = g(43710),
        zt = g(77145),
        Ye = g(37793),
        Ut = g(24877),
        _e = g(84893),
        Ot = [
          'className',
          'component',
          'viewBox',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'children',
        ],
        Nt = a.forwardRef(function (m, e) {
          var u = m.className,
            i = m.component,
            v = m.viewBox,
            d = m.spin,
            s = m.rotate,
            p = m.tabIndex,
            h = m.onClick,
            C = m.children,
            E = (0, xe.Z)(m, Ot);
          (0, _e.Kp)(Boolean(i || C), 'Should have `component` prop or `children`.'), (0, _e.C3)();
          var P = a.useContext(Ut.Z),
            Z = P.prefixCls,
            T = Z === void 0 ? 'anticon' : Z,
            I = j()(T, u),
            U = j()((0, B.Z)({}, ''.concat(T, '-spin'), !!d)),
            z = s
              ? { msTransform: 'rotate('.concat(s, 'deg)'), transform: 'rotate('.concat(s, 'deg)') }
              : void 0,
            q = (0, b.Z)((0, b.Z)({}, _e.vD), {}, { className: U, style: z, viewBox: v });
          v || delete q.viewBox;
          var F = function () {
              return i
                ? a.createElement(i, (0, b.Z)({}, q), C)
                : C
                ? ((0, _e.Kp)(
                    Boolean(v) ||
                      (a.Children.count(C) === 1 &&
                        a.isValidElement(C) &&
                        a.Children.only(C).type === 'use'),
                    'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                  ),
                  a.createElement('svg', (0, b.Z)((0, b.Z)({}, q), {}, { viewBox: v }), C))
                : null;
            },
            ue = p;
          return (
            ue === void 0 && h && (ue = -1),
            a.createElement(
              'span',
              (0, b.Z)(
                (0, b.Z)({ role: 'img' }, E),
                {},
                { ref: e, tabIndex: ue, onClick: h, className: I },
              ),
              F(),
            )
          );
        });
      Nt.displayName = 'AntdIcon';
      var Pt = Nt,
        Gt = ['type', 'children'],
        wt = new Set();
      function Vt(m) {
        return Boolean(typeof m == 'string' && m.length && !wt.has(m));
      }
      function Pe(m) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
          u = m[e];
        if (Vt(u)) {
          var i = document.createElement('script');
          i.setAttribute('src', u),
            i.setAttribute('data-namespace', u),
            m.length > e + 1 &&
              ((i.onload = function () {
                Pe(m, e + 1);
              }),
              (i.onerror = function () {
                Pe(m, e + 1);
              })),
            wt.add(u),
            document.body.appendChild(i);
        }
      }
      function Be() {
        var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          e = m.scriptUrl,
          u = m.extraCommonProps,
          i = u === void 0 ? {} : u;
        e &&
          typeof document != 'undefined' &&
          typeof window != 'undefined' &&
          typeof document.createElement == 'function' &&
          (Array.isArray(e) ? Pe(e.reverse()) : Pe([e]));
        var v = a.forwardRef(function (d, s) {
          var p = d.type,
            h = d.children,
            C = (0, xe.Z)(d, Gt),
            E = null;
          return (
            d.type && (E = a.createElement('use', { xlinkHref: '#'.concat(p) })),
            h && (E = h),
            a.createElement(Pt, (0, b.Z)((0, b.Z)((0, b.Z)({}, i), C), {}, { ref: s }), E)
          );
        });
        return (v.displayName = 'Iconfont'), v;
      }
      var Tt = function (e) {
          if (!e.startsWith('http')) return !1;
          try {
            var u = new URL(e);
            return !!u;
          } catch (i) {
            return !1;
          }
        },
        At = Tt;
      function Ke(m) {
        return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(m);
      }
      var $e = Ke,
        ct = g(20355),
        je = g(97988),
        st = g(935);
      function Xt() {
        var m = (0, a.useState)([]),
          e = (0, le.Z)(m, 2),
          u = e[0],
          i = e[1];
        return { flatMenuKeys: u, setFlatMenuKeys: i };
      }
      var Qt = (0, st.f)(Xt),
        we = Qt,
        Jt = be.Z.SubMenu,
        Yt = be.Z.ItemGroup,
        dt = Be({ scriptUrl: ct.Z.iconfontUrl }),
        k = function (e) {
          var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'icon-';
          if (typeof e == 'string' && e !== '') {
            if (At(e) || $e(e))
              return a.createElement(Pt, {
                component: function () {
                  return a.createElement('img', {
                    src: e,
                    alt: 'icon',
                    className: 'ant-pro-sider-menu-icon',
                  });
                },
              });
            if (e.startsWith(u)) return a.createElement(dt, { type: e });
          }
          return e;
        },
        _t = (0, Qe.Z)(function m(e) {
          var u = this;
          (0, Xe.Z)(this, m),
            (this.props = void 0),
            (this.getNavMenuItems = function () {
              var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                v = arguments.length > 1 ? arguments[1] : void 0;
              return i
                .map(function (d) {
                  return u.getSubMenuOrItem(d, v);
                })
                .filter(function (d) {
                  return d;
                });
            }),
            (this.getSubMenuOrItem = function (i, v) {
              if (Array.isArray(i.routes) && i && i.routes.length > 0) {
                var d = u.getIntlName(i),
                  s = u.props,
                  p = s.subMenuItemRender,
                  h = s.prefixCls,
                  C = s.menu,
                  E = s.iconPrefixes,
                  P = i.icon
                    ? a.createElement(
                        'span',
                        { className: ''.concat(h, '-menu-item'), title: d },
                        !v && k(i.icon, E),
                        a.createElement('span', { className: ''.concat(h, '-menu-item-title') }, d),
                      )
                    : a.createElement(
                        'span',
                        { className: ''.concat(h, '-menu-item'), title: d },
                        d,
                      ),
                  Z = p ? p((0, b.Z)((0, b.Z)({}, i), {}, { isUrl: !1 }), P) : P,
                  T = (C == null ? void 0 : C.type) === 'group' ? Yt : Jt;
                return a.createElement(
                  T,
                  { title: Z, key: i.key || i.path, onTitleClick: i.onTitleClick },
                  u.getNavMenuItems(i.routes, !0),
                );
              }
              return a.createElement(
                be.Z.Item,
                { disabled: i.disabled, key: i.key || i.path, onClick: i.onTitleClick },
                u.getMenuItemPath(i, v),
              );
            }),
            (this.getIntlName = function (i) {
              var v = i.name,
                d = i.locale,
                s = u.props,
                p = s.menu,
                h = s.formatMessage;
              return d && (p == null ? void 0 : p.locale) !== !1
                ? h == null
                  ? void 0
                  : h({ id: d, defaultMessage: v })
                : v;
            }),
            (this.getMenuItemPath = function (i, v) {
              var d = u.conversionPath(i.path || '/'),
                s = u.props,
                p = s.location,
                h = p === void 0 ? { pathname: '/' } : p,
                C = s.isMobile,
                E = s.onCollapse,
                P = s.menuItemRender,
                Z = s.iconPrefixes,
                T = u.getIntlName(i),
                I = u.props.prefixCls,
                U = v ? null : k(i.icon, Z),
                z = a.createElement(
                  'span',
                  { className: ''.concat(I, '-menu-item') },
                  U,
                  a.createElement('span', { className: ''.concat(I, '-menu-item-title') }, T),
                ),
                q = At(d);
              if (
                (q &&
                  (z = a.createElement(
                    'span',
                    {
                      title: T,
                      onClick: function () {
                        var _, me;
                        (_ = window) === null ||
                          _ === void 0 ||
                          (me = _.open) === null ||
                          me === void 0 ||
                          me.call(_, d);
                      },
                      className: ''.concat(I, '-menu-item ').concat(I, '-menu-item-link'),
                    },
                    U,
                    a.createElement('span', { className: ''.concat(I, '-menu-item-title') }, T),
                  )),
                P)
              ) {
                var F = (0, b.Z)(
                  (0, b.Z)({}, i),
                  {},
                  {
                    isUrl: q,
                    itemPath: d,
                    isMobile: C,
                    replace: d === h.pathname,
                    onClick: function () {
                      return E && E(!0);
                    },
                    children: void 0,
                  },
                );
                return P(F, z, u.props);
              }
              return z;
            }),
            (this.conversionPath = function (i) {
              return i && i.indexOf('http') === 0 ? i : '/'.concat(i || '').replace(/\/+/g, '/');
            }),
            (this.props = e);
        }),
        We = function (e, u) {
          var i = u.layout,
            v = u.collapsed,
            d = {};
          return e && !v && ['side', 'mix'].includes(i || 'mix') && (d = { openKeys: e }), d;
        },
        ke = function (e) {
          var u = e.theme,
            i = e.mode,
            v = e.className,
            d = e.handleOpenChange,
            s = e.style,
            p = e.menuData,
            h = e.menu,
            C = e.matchMenuKeys,
            E = e.iconfontUrl,
            P = e.collapsed,
            Z = e.selectedKeys,
            T = e.onSelect,
            I = e.openKeys,
            U = (0, a.useRef)([]),
            z = we.useContainer(),
            q = z.flatMenuKeys,
            F = (0, S.Z)(h == null ? void 0 : h.defaultOpenAll),
            ue = (0, le.Z)(F, 2),
            _ = ue[0],
            me = ue[1],
            Me = (0, S.Z)(
              function () {
                return (h == null ? void 0 : h.defaultOpenAll)
                  ? (0, je.O7)(p) || []
                  : I === !1
                  ? !1
                  : [];
              },
              { value: I === !1 ? void 0 : I, onChange: d },
            ),
            Ae = (0, le.Z)(Me, 2),
            pe = Ae[0],
            V = Ae[1],
            pt = (0, S.Z)([], {
              value: Z,
              onChange: T
                ? function (Ge) {
                    T && Ge && T(Ge);
                  }
                : void 0,
            }),
            Ue = (0, le.Z)(pt, 2),
            tt = Ue[0],
            Se = Ue[1];
          (0, a.useEffect)(
            function () {
              (h == null ? void 0 : h.defaultOpenAll) ||
                I === !1 ||
                q.length ||
                (C && (V(C), Se(C)));
            },
            [C.join('-')],
          ),
            (0, a.useEffect)(
              function () {
                E && (dt = Be({ scriptUrl: E }));
              },
              [E],
            ),
            (0, a.useEffect)(
              function () {
                if (
                  (C.join('-') !== (tt || []).join('-') && Se(C),
                  !_ && I !== !1 && C.join('-') !== (pe || []).join('-'))
                ) {
                  var Ge = C;
                  (h == null ? void 0 : h.autoClose) === !1 &&
                    (Ge = Array.from(new Set([].concat((0, Ye.Z)(C), (0, Ye.Z)(pe || []))))),
                    V(Ge);
                } else
                  (h == null ? void 0 : h.ignoreFlatMenu) && _
                    ? V((0, je.O7)(p))
                    : q.length > 0 && me(!1);
              },
              [C.join('-'), P],
            );
          var rt = (0, a.useMemo)(
              function () {
                return We(pe, e);
              },
              [pe && pe.join(','), e.layout, e.collapsed],
            ),
            nt = (0, a.useState)(function () {
              return new _t(e);
            }),
            at = (0, le.Z)(nt, 1),
            Re = at[0];
          if (h == null ? void 0 : h.loading)
            return a.createElement(
              'div',
              {
                style: (i == null ? void 0 : i.includes('inline'))
                  ? { padding: 24 }
                  : { marginTop: 16 },
              },
              a.createElement(zt.Z, {
                active: !0,
                title: !1,
                paragraph: { rows: (i == null ? void 0 : i.includes('inline')) ? 6 : 1 },
              }),
            );
          var De = j()(v, { 'top-nav-menu': i === 'horizontal' });
          (Re.props = e), e.openKeys === !1 && !e.handleOpenChange && (U.current = C);
          var Ie = e.postMenuData ? e.postMenuData(p) : p;
          return Ie && (Ie == null ? void 0 : Ie.length) < 1
            ? null
            : a.createElement(
                be.Z,
                (0, oe.Z)(
                  {},
                  rt,
                  {
                    key: 'Menu',
                    mode: i,
                    inlineIndent: 16,
                    defaultOpenKeys: U.current,
                    theme: u,
                    selectedKeys: tt,
                    style: s,
                    className: De,
                    onOpenChange: V,
                  },
                  e.menuProps,
                ),
                Re.getNavMenuItems(Ie, !1),
              );
        };
      ke.defaultProps = {
        postMenuData: function (e) {
          return e || [];
        },
      };
      var Dt = ke,
        kt = A.Z.Sider,
        vt = function (e) {
          return typeof e == 'string'
            ? a.createElement('img', { src: e, alt: 'logo' })
            : typeof e == 'function'
            ? e()
            : e;
        },
        mt = function (e) {
          var u =
              arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'menuHeaderRender',
            i = e.logo,
            v = e.title,
            d = e.layout,
            s = e[u || ''];
          if (s === !1) return null;
          var p = vt(i),
            h = a.createElement('h1', null, v != null ? v : 'Ant Design Pro');
          return s
            ? s(p, e.collapsed ? null : h, e)
            : d === 'mix' && u === 'menuHeaderRender'
            ? null
            : a.createElement('a', null, p, e.collapsed ? null : h);
        },
        qe = function (e) {
          return e ? a.createElement(Kt, null) : a.createElement(Wt, null);
        },
        qt = function (e) {
          var u,
            i = e.collapsed,
            v = e.fixSiderbar,
            d = e.menuFooterRender,
            s = e.onCollapse,
            p = e.theme,
            h = e.siderWidth,
            C = e.isMobile,
            E = e.onMenuHeaderClick,
            P = e.breakpoint,
            Z = P === void 0 ? 'lg' : P,
            T = e.style,
            I = e.layout,
            U = e.menuExtraRender,
            z = U === void 0 ? !1 : U,
            q = e.collapsedButtonRender,
            F = q === void 0 ? qe : q,
            ue = e.links,
            _ = e.menuContentRender,
            me = e.prefixCls,
            Me = e.onOpenChange,
            Ae = e.headerHeight,
            pe = e.logoStyle,
            V = ''.concat(me, '-sider'),
            pt = we.useContainer(),
            Ue = pt.flatMenuKeys,
            tt = j()(
              ''.concat(V),
              ((u = {}),
              (0, B.Z)(u, ''.concat(V, '-fixed'), v),
              (0, B.Z)(u, ''.concat(V, '-layout-').concat(I), I && !C),
              (0, B.Z)(u, ''.concat(V, '-light'), p !== 'dark'),
              u),
            ),
            Se = mt(e),
            rt = z && z(e),
            nt =
              _ !== !1 &&
              Ue &&
              a.createElement(
                Dt,
                (0, oe.Z)({}, e, {
                  key: 'base-menu',
                  mode: 'inline',
                  handleOpenChange: Me,
                  style: { width: '100%' },
                  className: ''.concat(V, '-menu'),
                }),
              ),
            at = _ ? _(e, nt) : nt;
          return a.createElement(
            a.Fragment,
            null,
            v &&
              a.createElement('div', {
                style: (0, b.Z)(
                  {
                    width: i ? 48 : h,
                    overflow: 'hidden',
                    flex: '0 0 '.concat(i ? 48 : h, 'px'),
                    maxWidth: i ? 48 : h,
                    minWidth: i ? 48 : h,
                    transition:
                      'background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  },
                  T,
                ),
              }),
            a.createElement(
              kt,
              {
                collapsible: !0,
                trigger: null,
                collapsed: i,
                breakpoint: Z === !1 ? void 0 : Z,
                onCollapse: function (De) {
                  C || s == null || s(De);
                },
                collapsedWidth: 48,
                style: (0, b.Z)(
                  { overflow: 'hidden', paddingTop: I === 'mix' && !C ? Ae : void 0 },
                  T,
                ),
                width: h,
                theme: p,
                className: tt,
              },
              Se &&
                a.createElement(
                  'div',
                  {
                    className: j()(
                      ''.concat(V, '-logo'),
                      (0, B.Z)({}, ''.concat(V, '-collapsed'), i),
                    ),
                    onClick: I !== 'mix' ? E : void 0,
                    id: 'logo',
                    style: pe,
                  },
                  Se,
                ),
              rt &&
                a.createElement(
                  'div',
                  {
                    className: ''
                      .concat(V, '-extra ')
                      .concat(!Se && ''.concat(V, '-extra-no-logo')),
                  },
                  rt,
                ),
              a.createElement(
                'div',
                { style: { flex: 1, overflowY: 'auto', overflowX: 'hidden' } },
                at,
              ),
              a.createElement(
                'div',
                { className: ''.concat(V, '-links') },
                a.createElement(
                  be.Z,
                  {
                    theme: p,
                    inlineIndent: 16,
                    className: ''.concat(V, '-link-menu'),
                    selectedKeys: [],
                    openKeys: [],
                    mode: 'inline',
                  },
                  (ue || []).map(function (Re, De) {
                    return a.createElement(
                      be.Z.Item,
                      { className: ''.concat(V, '-link'), key: De },
                      Re,
                    );
                  }),
                  F &&
                    !C &&
                    a.createElement(
                      be.Z.Item,
                      {
                        className: ''.concat(V, '-collapsed-button'),
                        title: !1,
                        key: 'collapsed',
                        onClick: function () {
                          s && s(!i);
                        },
                      },
                      F(i),
                    ),
                ),
              ),
              d &&
                a.createElement(
                  'div',
                  {
                    className: j()(
                      ''.concat(V, '-footer'),
                      (0, B.Z)({}, ''.concat(V, '-footer-collapsed'), !i),
                    ),
                  },
                  d(e),
                ),
            ),
          );
        },
        It = qt,
        er = g(88857),
        Cr = g(35341),
        tr = g(13788),
        rr = ['rightContentRender', 'prefixCls'],
        nr = function (e) {
          var u = e.rightContentRender,
            i = e.prefixCls,
            v = (0, xe.Z)(e, rr),
            d = (0, a.useState)('auto'),
            s = (0, le.Z)(d, 2),
            p = s[0],
            h = s[1],
            C = (0, tr.Z)(
              (function () {
                var E = (0, Ee.Z)(
                  ee().mark(function P(Z) {
                    return ee().wrap(function (I) {
                      for (;;)
                        switch ((I.prev = I.next)) {
                          case 0:
                            h(Z);
                          case 1:
                          case 'end':
                            return I.stop();
                        }
                    }, P);
                  }),
                );
                return function (P) {
                  return E.apply(this, arguments);
                };
              })(),
              [],
              160,
            );
          return a.createElement(
            'div',
            { className: ''.concat(i, '-right-content'), style: { minWidth: p } },
            a.createElement(
              'div',
              { style: { paddingRight: 8 } },
              a.createElement(
                er.Z,
                {
                  onResize: function (P) {
                    var Z = P.width;
                    C.run(Z);
                  },
                },
                u &&
                  a.createElement(
                    'div',
                    { className: ''.concat(i, '-right-content-resize') },
                    u((0, b.Z)((0, b.Z)({}, v), {}, { rightContentSize: p })),
                  ),
              ),
            ),
          );
        },
        ar = function (e) {
          var u = (0, a.useRef)(null),
            i = e.theme,
            v = e.onMenuHeaderClick,
            d = e.contentWidth,
            s = e.rightContentRender,
            p = e.className,
            h = e.style,
            C = e.layout,
            E = ''.concat(e.prefixCls || 'ant-pro', '-top-nav-header'),
            P = mt(
              (0, b.Z)((0, b.Z)({}, e), {}, { collapsed: !1 }),
              C === 'mix' ? 'headerTitleRender' : void 0,
            ),
            Z = j()(E, p, { light: i === 'light' });
          return a.createElement(
            'div',
            { className: Z, style: h },
            a.createElement(
              'div',
              { ref: u, className: ''.concat(E, '-main ').concat(d === 'Fixed' ? 'wide' : '') },
              P &&
                a.createElement(
                  'div',
                  { className: ''.concat(E, '-main-left'), onClick: v },
                  a.createElement(
                    'div',
                    { className: ''.concat(E, '-logo'), key: 'logo', id: 'logo' },
                    P,
                  ),
                ),
              a.createElement(
                'div',
                { style: { flex: 1 }, className: ''.concat(E, '-menu') },
                a.createElement(Dt, (0, oe.Z)({}, e, e.menuProps)),
              ),
              s && a.createElement(nr, (0, oe.Z)({ rightContentRender: s, prefixCls: E }, e)),
            ),
          );
        },
        ht = ar,
        et = function (e, u) {
          return e === !1 ? null : e ? e(u, null) : u;
        },
        or = function (e) {
          var u = e.isMobile,
            i = e.logo,
            v = e.collapsed,
            d = e.onCollapse,
            s = e.collapsedButtonRender,
            p = s === void 0 ? qe : s,
            h = e.rightContentRender,
            C = e.menuHeaderRender,
            E = e.onMenuHeaderClick,
            P = e.className,
            Z = e.style,
            T = e.layout,
            I = e.children,
            U = e.headerTheme,
            z = U === void 0 ? 'dark' : U,
            q = e.splitMenus,
            F = e.menuData,
            ue = e.prefixCls,
            _ = ''.concat(ue, '-global-header'),
            me = j()(P, _, (0, B.Z)({}, ''.concat(_, '-layout-').concat(T), T && z === 'dark'));
          if (T === 'mix' && !u && q) {
            var Me = (F || []).map(function (V) {
                return (0, b.Z)((0, b.Z)({}, V), {}, { children: void 0, routes: void 0 });
              }),
              Ae = (0, je.QX)(Me);
            return a.createElement(
              ht,
              (0, oe.Z)({ mode: 'horizontal' }, e, { splitMenus: !1, menuData: Ae, theme: z }),
            );
          }
          var pe = a.createElement(
            'span',
            { className: ''.concat(_, '-logo'), key: 'logo' },
            a.createElement('a', null, vt(i)),
          );
          return a.createElement(
            'div',
            { className: me, style: (0, b.Z)({}, Z) },
            u && et(C, pe),
            u &&
              p &&
              a.createElement(
                'span',
                {
                  className: ''.concat(_, '-collapsed-button'),
                  onClick: function () {
                    d && d(!v);
                  },
                },
                p(v),
              ),
            T === 'mix' &&
              !u &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  'div',
                  { className: ''.concat(_, '-logo'), onClick: E },
                  mt((0, b.Z)((0, b.Z)({}, e), {}, { collapsed: !1 }), 'headerTitleRender'),
                ),
              ),
            a.createElement('div', { style: { flex: 1 } }, I),
            h && h(e),
          );
        },
        ir = or,
        gt = A.Z.Header,
        ur = (function (m) {
          (0, K.Z)(u, m);
          var e = (0, Y.Z)(u);
          function u() {
            var i;
            (0, Xe.Z)(this, u);
            for (var v = arguments.length, d = new Array(v), s = 0; s < v; s++) d[s] = arguments[s];
            return (
              (i = e.call.apply(e, [this].concat(d))),
              (i.renderContent = function () {
                var p = i.props,
                  h = p.isMobile,
                  C = p.onCollapse,
                  E = p.navTheme,
                  P = p.layout,
                  Z = p.headerRender,
                  T = p.headerContentRender,
                  I = P === 'top',
                  U = (0, je.QX)(i.props.menuData || []),
                  z = a.createElement(
                    ir,
                    (0, oe.Z)({ onCollapse: C }, i.props, { menuData: U }),
                    T && T(i.props),
                  );
                return (
                  I &&
                    !h &&
                    (z = a.createElement(
                      ht,
                      (0, oe.Z)({ theme: E, mode: 'horizontal', onCollapse: C }, i.props, {
                        menuData: U,
                      }),
                    )),
                  Z && typeof Z == 'function' ? Z(i.props, z) : z
                );
              }),
              i
            );
          }
          return (
            (0, Qe.Z)(u, [
              {
                key: 'render',
                value: function () {
                  var v,
                    d = this.props,
                    s = d.fixedHeader,
                    p = d.layout,
                    h = d.className,
                    C = d.style,
                    E = d.navTheme,
                    P = d.collapsed,
                    Z = d.siderWidth,
                    T = d.hasSiderMenu,
                    I = d.isMobile,
                    U = d.prefixCls,
                    z = d.headerHeight,
                    q = s || p === 'mix',
                    F = p === 'top',
                    ue = q && T && !F && !I,
                    _ = j()(
                      h,
                      ((v = {}),
                      (0, B.Z)(v, ''.concat(U, '-fixed-header'), q),
                      (0, B.Z)(v, ''.concat(U, '-fixed-header-action'), !P),
                      (0, B.Z)(v, ''.concat(U, '-top-menu'), F),
                      (0, B.Z)(v, ''.concat(U, '-header-').concat(E), E && p !== 'mix'),
                      v),
                    ),
                    me = p !== 'mix' && ue ? 'calc(100% - '.concat(P ? 48 : Z, 'px)') : '100%',
                    Me = q ? 0 : void 0;
                  return a.createElement(
                    a.Fragment,
                    null,
                    q &&
                      a.createElement(gt, {
                        style: {
                          height: z,
                          lineHeight: ''.concat(z, 'px'),
                          background: 'transparent',
                        },
                      }),
                    a.createElement(
                      gt,
                      {
                        style: (0, b.Z)(
                          {
                            padding: 0,
                            height: z,
                            lineHeight: ''.concat(z, 'px'),
                            width: me,
                            zIndex: p === 'mix' ? 100 : 19,
                            right: Me,
                          },
                          C,
                        ),
                        className: _,
                      },
                      this.renderContent(),
                    ),
                  );
                },
              },
            ]),
            u
          );
        })(a.Component),
        lr = ur,
        fr = g(69121),
        t = g.n(fr),
        n = function (e, u, i) {
          if (i) {
            var v = (0, Ye.Z)(i.keys()).find(function (s) {
              return t()(s).test(e);
            });
            if (v) return i.get(v);
          }
          if (u) {
            var d = Object.keys(u).find(function (s) {
              return t()(s).test(e);
            });
            if (d) return u[d];
          }
          return { path: '' };
        },
        r = function (e, u) {
          var i = e.pathname,
            v = i === void 0 ? '/' : i,
            d = e.breadcrumb,
            s = e.breadcrumbMap,
            p = e.formatMessage,
            h = e.title,
            C = e.menu,
            E = C === void 0 ? { locale: !1 } : C,
            P = u ? '' : h || '',
            Z = n(v, d, s);
          if (!Z) return { title: P, id: '', pageName: P };
          var T = Z.name;
          return (
            E.locale !== !1 &&
              Z.locale &&
              p &&
              (T = p({ id: Z.locale || '', defaultMessage: Z.name })),
            T
              ? u || !h
                ? { title: T, id: Z.locale || '', pageName: T }
                : { title: ''.concat(T, ' - ').concat(h), id: Z.locale || '', pageName: T }
              : { title: P, id: Z.locale || '', pageName: P }
          );
        },
        o = function (e, u) {
          return r(e, u).title;
        },
        f = null,
        c = g(30325),
        l = g(52789),
        y = g(33119),
        x = g(53053),
        R = g(79198),
        w = function (e) {
          var u = e.isMobile,
            i = e.menuData,
            v = e.siderWidth,
            d = e.collapsed,
            s = e.onCollapse,
            p = e.style,
            h = e.className,
            C = e.hide,
            E = e.getContainer,
            P = e.prefixCls,
            Z = e.matchMenuKeys,
            T = we.useContainer(),
            I = T.setFlatMenuKeys;
          (0, a.useEffect)(
            function () {
              if (!(!i || i.length < 1)) {
                var z = (0, Oe.kv)(i);
                I(Object.keys(z));
              }
            },
            [Z.join('-')],
          ),
            (0, a.useEffect)(
              function () {
                u === !0 && (s == null || s(!0));
              },
              [u],
            );
          var U = (0, J.Z)(e, ['className', 'style']);
          return C
            ? null
            : u
            ? a.createElement(
                R.Z,
                {
                  visible: !d,
                  placement: 'left',
                  className: j()(''.concat(P, '-drawer-sider'), h),
                  onClose: function () {
                    return s == null ? void 0 : s(!0);
                  },
                  style: (0, b.Z)({ padding: 0, height: '100vh' }, p),
                  getContainer: E,
                  width: v,
                  bodyStyle: { height: '100vh', padding: 0, display: 'flex', flexDirection: 'row' },
                },
                a.createElement(
                  It,
                  (0, oe.Z)({}, U, {
                    className: j()(''.concat(P, '-sider'), h),
                    collapsed: u ? !1 : d,
                    splitMenus: !1,
                  }),
                ),
              )
            : a.createElement(
                It,
                (0, oe.Z)({ className: j()(''.concat(P, '-sider'), h) }, U, { style: p }),
              );
        },
        M = w;
      function N(m) {
        if (!m || m === '/') return ['/'];
        var e = m.split('/').filter(function (u) {
          return u;
        });
        return e.map(function (u, i) {
          return '/'.concat(e.slice(0, i + 1).join('/'));
        });
      }
      var W = function (e) {
          var u = e.breadcrumbName,
            i = e.path;
          return a.createElement('a', { href: i }, u);
        },
        se = function (e, u) {
          var i = u.formatMessage,
            v = u.menu;
          return e.locale && i && (v == null ? void 0 : v.locale) !== !1
            ? i({ id: e.locale, defaultMessage: e.name })
            : e.name;
        },
        de = function (e, u) {
          var i = e.get(u);
          if (!i) {
            var v = Array.from(e.keys()) || [],
              d = v.find(function (s) {
                return t()(s.replace('?', '')).test(u);
              });
            d && (i = e.get(d));
          }
          return i || { path: '' };
        },
        L = function (e) {
          var u = e.location,
            i = e.breadcrumbMap;
          return { location: u, breadcrumbMap: i };
        },
        ie = function (e, u, i) {
          var v = N(e == null ? void 0 : e.pathname),
            d = v
              .map(function (s) {
                var p = de(u, s),
                  h = se(p, i),
                  C = p.hideInBreadcrumb;
                return h && !C
                  ? { path: s, breadcrumbName: h, component: p.component }
                  : { path: '', breadcrumbName: '' };
              })
              .filter(function (s) {
                return s && s.path;
              });
          return d;
        },
        ae = function (e) {
          var u = L(e),
            i = u.location,
            v = u.breadcrumbMap;
          return i && i.pathname && v ? ie(i, v, e) : [];
        },
        te = function (e, u) {
          var i = e.breadcrumbRender,
            v = e.itemRender,
            d = u.breadcrumbProps || {},
            s = d.minLength,
            p = s === void 0 ? 2 : s,
            h = ae(e),
            C = v || W,
            E = h;
          return (
            i && (E = i(E) || []),
            ((E && E.length < p) || i === !1) && (E = void 0),
            { routes: E, itemRender: C }
          );
        };
      function ve(m) {
        return (0, Ye.Z)(m).reduce(function (e, u) {
          var i = (0, le.Z)(u, 2),
            v = i[0],
            d = i[1];
          return (e[v] = d), e;
        }, {});
      }
      var Te = function m(e, u, i, v) {
          var d = (0, Oe.Un)(e, (u == null ? void 0 : u.locale) || !1, i, !0),
            s = d.menuData,
            p = d.breadcrumb;
          return v ? m(v(s), u, i, void 0) : { breadcrumb: ve(p), breadcrumbMap: p, menuData: s };
        },
        Ce = Te,
        ze = g(66278),
        yt = g(95443),
        cr = g(15489),
        sr = function (e) {
          var u = e.style,
            i = e.className,
            v = e.children,
            d = e.ErrorBoundary || cr.Z;
          return a.createElement(
            yt.oK,
            { autoClearCache: !0 },
            e.ErrorBoundary === !1
              ? a.createElement(A.Z.Content, { className: i, style: u }, v)
              : a.createElement(
                  d,
                  null,
                  a.createElement(A.Z.Content, { className: i, style: u }, v),
                ),
          );
        },
        Fr = sr,
        Hr = function (e) {
          var u = ['sidemenu', 'topmenu'];
          return u.includes(e) ? (e == null ? void 0 : e.replace('menu', '')) : e;
        },
        Br = Hr,
        Kr = g(12346),
        $r = g(42731),
        jr = function (e) {
          var u = (0, a.useState)({}),
            i = (0, le.Z)(u, 2),
            v = i[0],
            d = i[1];
          return (
            (0, a.useEffect)(
              function () {
                d(
                  (0, $r.Z)({
                    layout: (0, Kr.Z)(e.layout) !== 'object' ? e.layout : void 0,
                    navTheme: e.navTheme,
                    menuRender: e.menuRender,
                    footerRender: e.footerRender,
                    menuHeaderRender: e.menuHeaderRender,
                    headerRender: e.headerRender,
                    fixSiderbar: e.fixSiderbar,
                    headerTheme: e.headerTheme,
                  }),
                );
              },
              [
                e.layout,
                e.navTheme,
                e.menuRender,
                e.footerRender,
                e.menuHeaderRender,
                e.headerRender,
                e.fixSiderbar,
                e.headerTheme,
              ],
            ),
            v
          );
        },
        Wr = jr,
        zr = ['id', 'defaultMessage'],
        Ur = ['fixSiderbar', 'navTheme', 'layout'],
        Mr = 0,
        Gr = function (e, u) {
          return e.headerRender === !1 || e.pure
            ? null
            : a.createElement(lr, (0, oe.Z)({ matchMenuKeys: u }, e));
        },
        Vr = function (e) {
          return e.footerRender === !1 || e.pure
            ? null
            : e.footerRender
            ? e.footerRender((0, b.Z)({}, e), a.createElement(l.Z, null))
            : null;
        },
        Xr = function (e, u) {
          var i = e.layout,
            v = e.navTheme,
            d = e.isMobile,
            s = e.openKeys,
            p = e.splitMenus,
            h = e.menuRender;
          if (e.menuRender === !1 || e.pure) return null;
          var C = e.menuData;
          if (p && (s !== !1 || i === 'mix') && !d) {
            var E = (0, le.Z)(u, 1),
              P = E[0];
            if (P) {
              var Z, T;
              C =
                ((Z = e.menuData) === null ||
                Z === void 0 ||
                (T = Z.find(function (z) {
                  return z.key === P;
                })) === null ||
                T === void 0
                  ? void 0
                  : T.routes) || [];
            } else C = [];
          }
          var I = (0, je.QX)(C || []);
          if (I && (I == null ? void 0 : I.length) < 1 && p) return null;
          if (i === 'top' && !d)
            return a.createElement(M, (0, oe.Z)({ matchMenuKeys: u }, e, { hide: !0 }));
          var U = a.createElement(
            M,
            (0, oe.Z)({ matchMenuKeys: u }, e, {
              style: v === 'realDark' ? { boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)' } : {},
              menuData: I,
            }),
          );
          return h ? h(e, U) : U;
        },
        Qr = function (e, u) {
          var i = u.pageTitleRender,
            v = r(e);
          if (i === !1) return { title: u.title || '', id: '', pageName: '' };
          if (i) {
            var d = i(e, v.title, v);
            if (typeof d == 'string') return (0, b.Z)((0, b.Z)({}, v), {}, { title: d });
            X()(
              typeof d == 'string',
              'pro-layout: renderPageTitle return value should be a string',
            );
          }
          return v;
        },
        Jr = function (e, u, i) {
          return e ? (u ? 48 : i) : 0;
        },
        Er = function (e) {
          var u,
            i,
            v,
            d,
            s = e || {},
            p = s.children,
            h = s.onCollapse,
            C = s.location,
            E = C === void 0 ? { pathname: '/' } : C,
            P = s.contentStyle,
            Z = s.route,
            T = s.defaultCollapsed,
            I = s.style,
            U = s.disableContentMargin,
            z = s.siderWidth,
            q = z === void 0 ? 208 : z,
            F = s.menu,
            ue = s.isChildrenLayout,
            _ = s.menuDataRender,
            me = s.actionRef,
            Me = s.formatMessage,
            Ae = s.loading,
            pe = (0, a.useContext)(Ve.ZP.ConfigContext),
            V = (u = e.prefixCls) !== null && u !== void 0 ? u : pe.getPrefixCls('pro'),
            pt = (0, S.Z)(!1, {
              value: F == null ? void 0 : F.loading,
              onChange: F == null ? void 0 : F.onLoadingChange,
            }),
            Ue = (0, le.Z)(pt, 2),
            tt = Ue[0],
            Se = Ue[1],
            rt = (0, a.useState)(function () {
              return (Mr += 1), 'pro-layout-'.concat(Mr);
            }),
            nt = (0, le.Z)(rt, 1),
            at = nt[0],
            Re = (0, a.useCallback)(
              function (ge) {
                var it = ge.id,
                  Ht = ge.defaultMessage,
                  pr = (0, xe.Z)(ge, zr);
                if (Me) return Me((0, b.Z)({ id: it, defaultMessage: Ht }, pr));
                var ut = (0, c.e)();
                return ut[it] ? ut[it] : Ht;
              },
              [Me],
            ),
            De = (0, he.ZP)(
              function () {
                return (F == null ? void 0 : F.params)
                  ? [at, F == null ? void 0 : F.params]
                  : [at, {}];
              },
              (function () {
                var ge = (0, Ee.Z)(
                  ee().mark(function it(Ht, pr) {
                    var ut, Lr;
                    return ee().wrap(function (lt) {
                      for (;;)
                        switch ((lt.prev = lt.next)) {
                          case 0:
                            return (
                              Se(!0),
                              (lt.next = 3),
                              F == null || (ut = F.request) === null || ut === void 0
                                ? void 0
                                : ut.call(F, pr, (Z == null ? void 0 : Z.routes) || [])
                            );
                          case 3:
                            return (Lr = lt.sent), Se(!1), lt.abrupt('return', Lr);
                          case 6:
                          case 'end':
                            return lt.stop();
                        }
                    }, it);
                  }),
                );
                return function (it, Ht) {
                  return ge.apply(this, arguments);
                };
              })(),
              { revalidateOnFocus: !1, shouldRetryOnError: !1, revalidateOnReconnect: !1 },
            ),
            Ie = De.data,
            Ge = De.mutate,
            en = (0, a.useMemo)(
              function () {
                return Ce(Ie || (Z == null ? void 0 : Z.routes) || [], F, Re, _);
              },
              [Re, F, _, Ie, Z == null ? void 0 : Z.routes],
            ),
            dr = en || {},
            Rr = dr.breadcrumb,
            tn = Rr === void 0 ? {} : Rr,
            Zr = dr.breadcrumbMap,
            Sr = dr.menuData,
            xt = Sr === void 0 ? [] : Sr;
          me &&
            (F == null ? void 0 : F.request) &&
            (me.current = {
              reload: function () {
                Ge();
              },
            });
          var bt = (0, a.useMemo)(
              function () {
                return (0, Oe.nG)(E.pathname || '/', xt || [], !0);
              },
              [E.pathname, xt],
            ),
            vr = (0, a.useMemo)(
              function () {
                return Array.from(
                  new Set(
                    bt.map(function (ge) {
                      return ge.key || ge.path || '';
                    }),
                  ),
                );
              },
              [bt],
            ),
            Or = bt[bt.length - 1] || {},
            Nr = Wr(Or),
            Lt = (0, b.Z)((0, b.Z)({}, e), Nr),
            rn = Lt.fixSiderbar,
            Pr = Lt.navTheme,
            nn = Lt.layout,
            an = (0, xe.Z)(Lt, Ur),
            Ct = Br(nn),
            Ft = (0, ne.ZP)(),
            Mt = (Ft === 'sm' || Ft === 'xs') && !e.disableMobile,
            on = Ct !== 'top' && !Mt,
            un = (0, ye.Z)(
              function () {
                return T || !1;
              },
              { value: e.collapsed, onChange: h },
            ),
            wr = (0, le.Z)(un, 2),
            Et = wr[0],
            Tr = wr[1],
            ot = (0, J.Z)(
              (0, b.Z)(
                (0, b.Z)((0, b.Z)({ prefixCls: V }, e), {}, { siderWidth: q }, Nr),
                {},
                {
                  formatMessage: Re,
                  breadcrumb: tn,
                  menu: (0, b.Z)((0, b.Z)({}, F), {}, { loading: tt }),
                  layout: Ct,
                },
              ),
              ['className', 'style', 'breadcrumbRender'],
            ),
            mr = Qr((0, b.Z)((0, b.Z)({ pathname: E.pathname }, ot), {}, { breadcrumbMap: Zr }), e),
            ln = te(
              (0, b.Z)(
                (0, b.Z)({}, ot),
                {},
                { breadcrumbRender: e.breadcrumbRender, breadcrumbMap: Zr },
              ),
              e,
            ),
            hr = Xr(
              (0, b.Z)(
                (0, b.Z)({}, ot),
                {},
                {
                  menuData: xt,
                  onCollapse: Tr,
                  isMobile: Mt,
                  theme: Pr === 'dark' ? 'dark' : 'light',
                  collapsed: Et,
                },
              ),
              vr,
            ),
            gr = Gr(
              (0, b.Z)(
                (0, b.Z)({}, ot),
                {},
                {
                  hasSiderMenu: !!hr,
                  menuData: xt,
                  isMobile: Mt,
                  collapsed: Et,
                  onCollapse: Tr,
                  theme: Pr === 'dark' ? 'dark' : 'light',
                },
              ),
              vr,
            ),
            Ar = Vr((0, b.Z)({ isMobile: Mt, collapsed: Et }, ot)),
            fn = (0, a.useContext)(y.Z),
            cn = fn.isChildrenLayout,
            yr = ue !== void 0 ? ue : cn,
            Le = ''.concat(V, '-basicLayout'),
            sn = j()(
              e.className,
              'ant-design-pro',
              Le,
              ((i = {}),
              (0, B.Z)(i, 'screen-'.concat(Ft), Ft),
              (0, B.Z)(i, ''.concat(Le, '-top-menu'), Ct === 'top'),
              (0, B.Z)(i, ''.concat(Le, '-is-children'), yr),
              (0, B.Z)(i, ''.concat(Le, '-fix-siderbar'), rn),
              (0, B.Z)(i, ''.concat(Le, '-').concat(Ct), Ct),
              i),
            ),
            dn = Jr(!!on, Et, q),
            Dr = { position: 'relative' };
          (yr || (P && P.minHeight)) && (Dr.minHeight = 0);
          var vn = j()(
            ''.concat(Le, '-content'),
            ((v = {}),
            (0, B.Z)(v, ''.concat(Le, '-has-header'), gr),
            (0, B.Z)(v, ''.concat(Le, '-content-disable-margin'), U),
            v),
          );
          (0, a.useEffect)(
            function () {
              var ge;
              (ge = e.onPageChange) === null || ge === void 0 || ge.call(e, e.location);
            },
            [E.pathname, (d = E.pathname) === null || d === void 0 ? void 0 : d.search],
          );
          var mn = (0, a.useState)(!1),
            Ir = (0, le.Z)(mn, 2),
            hn = Ir[0],
            gn = Ir[1];
          return (
            ce(mr, e.title || !1),
            a.createElement(
              we.Provider,
              null,
              a.createElement(
                y.Z.Provider,
                {
                  value: (0, b.Z)(
                    (0, b.Z)({}, ot),
                    {},
                    {
                      breadcrumb: ln,
                      menuData: xt,
                      isMobile: Mt,
                      collapsed: Et,
                      isChildrenLayout: !0,
                      title: mr.pageName,
                      hasSiderMenu: !!hr,
                      hasHeader: !!gr,
                      siderWidth: dn,
                      hasFooter: !!Ar,
                      hasFooterToolbar: hn,
                      setHasFooterToolbar: gn,
                      pageTitleInfo: mr,
                      matchMenus: bt,
                      matchMenuKeys: vr,
                      currentMenu: Or,
                    },
                  ),
                },
                e.pure
                  ? a.createElement(yt.oK, { autoClearCache: !0 }, p)
                  : a.createElement(
                      'div',
                      { className: sn },
                      a.createElement(
                        A.Z,
                        { style: (0, b.Z)({ minHeight: '100%' }, I) },
                        hr,
                        a.createElement(
                          'div',
                          { style: Dr, className: pe.getPrefixCls('layout') },
                          gr,
                          a.createElement(
                            Fr,
                            (0, oe.Z)({ isChildrenLayout: yr }, an, { className: vn, style: P }),
                            Ae ? a.createElement(ze.Z, null) : p,
                          ),
                          Ar,
                        ),
                      ),
                    ),
              ),
            )
          );
        },
        Yr = function () {
          return a.createElement(
            'svg',
            { width: '32px', height: '32px', viewBox: '0 0 200 200' },
            a.createElement(
              'defs',
              null,
              a.createElement(
                'linearGradient',
                {
                  x1: '62.1023273%',
                  y1: '0%',
                  x2: '108.19718%',
                  y2: '37.8635764%',
                  id: 'linearGradient-1',
                },
                a.createElement('stop', { stopColor: '#4285EB', offset: '0%' }),
                a.createElement('stop', { stopColor: '#2EC7FF', offset: '100%' }),
              ),
              a.createElement(
                'linearGradient',
                {
                  x1: '69.644116%',
                  y1: '0%',
                  x2: '54.0428975%',
                  y2: '108.456714%',
                  id: 'linearGradient-2',
                },
                a.createElement('stop', { stopColor: '#29CDFF', offset: '0%' }),
                a.createElement('stop', { stopColor: '#148EFF', offset: '37.8600687%' }),
                a.createElement('stop', { stopColor: '#0A60FF', offset: '100%' }),
              ),
              a.createElement(
                'linearGradient',
                {
                  x1: '69.6908165%',
                  y1: '-12.9743587%',
                  x2: '16.7228981%',
                  y2: '117.391248%',
                  id: 'linearGradient-3',
                },
                a.createElement('stop', { stopColor: '#FA816E', offset: '0%' }),
                a.createElement('stop', { stopColor: '#F74A5C', offset: '41.472606%' }),
                a.createElement('stop', { stopColor: '#F51D2C', offset: '100%' }),
              ),
              a.createElement(
                'linearGradient',
                {
                  x1: '68.1279872%',
                  y1: '-35.6905737%',
                  x2: '30.4400914%',
                  y2: '114.942679%',
                  id: 'linearGradient-4',
                },
                a.createElement('stop', { stopColor: '#FA8E7D', offset: '0%' }),
                a.createElement('stop', { stopColor: '#F74A5C', offset: '51.2635191%' }),
                a.createElement('stop', { stopColor: '#F51D2C', offset: '100%' }),
              ),
            ),
            a.createElement(
              'g',
              { stroke: 'none', strokeWidth: 1, fill: 'none', fillRule: 'evenodd' },
              a.createElement(
                'g',
                { transform: 'translate(-20.000000, -20.000000)' },
                a.createElement(
                  'g',
                  { transform: 'translate(20.000000, 20.000000)' },
                  a.createElement(
                    'g',
                    null,
                    a.createElement(
                      'g',
                      { fillRule: 'nonzero' },
                      a.createElement(
                        'g',
                        null,
                        a.createElement('path', {
                          d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                          fill: 'url(#linearGradient-1)',
                        }),
                        a.createElement('path', {
                          d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                          fill: 'url(#linearGradient-2)',
                        }),
                      ),
                      a.createElement('path', {
                        d: 'M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z',
                        fill: 'url(#linearGradient-3)',
                      }),
                    ),
                    a.createElement('ellipse', {
                      fill: 'url(#linearGradient-4)',
                      cx: '100.519339',
                      cy: '100.436681',
                      rx: '23.6001926',
                      ry: '23.580786',
                    }),
                  ),
                ),
              ),
            ),
          );
        };
      Er.defaultProps = (0, b.Z)(
        (0, b.Z)({ logo: a.createElement(Yr, null) }, ct.Z),
        {},
        { location: (0, $.Z)() ? window.location : void 0 },
      );
      var _r = Er,
        kr = g(88430),
        yn = kr.ZP,
        qr = _r;
    },
    79258: function () {},
    54938: function () {},
    2080: function () {},
    87614: function () {},
    35341: function () {},
    52372: function (Ze, Fe, g) {
      'use strict';
      g.d(Fe, {
        kv: function () {
          return gt;
        },
        nG: function () {
          return fr;
        },
        Un: function () {
          return ar;
        },
      });
      var H = g(93925),
        A = g.n(H),
        B =
          Number.isNaN ||
          function (n) {
            return typeof n == 'number' && n !== n;
          };
      function G(t, n) {
        return !!(t === n || (B(t) && B(n)));
      }
      function ee(t, n) {
        if (t.length !== n.length) return !1;
        for (var r = 0; r < t.length; r++) if (!G(t[r], n[r])) return !1;
        return !0;
      }
      function Ee(t, n) {
        n === void 0 && (n = ee);
        var r,
          o = [],
          f,
          c = !1;
        function l() {
          for (var y = [], x = 0; x < arguments.length; x++) y[x] = arguments[x];
          return (
            (c && r === this && n(y, o)) || ((f = t.apply(this, y)), (c = !0), (r = this), (o = y)),
            f
          );
        }
        return l;
      }
      var xe = Ee;
      function Rt(t) {
        for (var n = [], r = 0; r < t.length; ) {
          var o = t[r];
          if (o === '*' || o === '+' || o === '?') {
            n.push({ type: 'MODIFIER', index: r, value: t[r++] });
            continue;
          }
          if (o === '\\') {
            n.push({ type: 'ESCAPED_CHAR', index: r++, value: t[r++] });
            continue;
          }
          if (o === '{') {
            n.push({ type: 'OPEN', index: r, value: t[r++] });
            continue;
          }
          if (o === '}') {
            n.push({ type: 'CLOSE', index: r, value: t[r++] });
            continue;
          }
          if (o === ':') {
            for (var f = '', c = r + 1; c < t.length; ) {
              var l = t.charCodeAt(c);
              if (
                (l >= 48 && l <= 57) ||
                (l >= 65 && l <= 90) ||
                (l >= 97 && l <= 122) ||
                l === 95
              ) {
                f += t[c++];
                continue;
              }
              break;
            }
            if (!f) throw new TypeError('Missing parameter name at ' + r);
            n.push({ type: 'NAME', index: r, value: f }), (r = c);
            continue;
          }
          if (o === '(') {
            var y = 1,
              x = '',
              c = r + 1;
            if (t[c] === '?') throw new TypeError('Pattern cannot start with "?" at ' + c);
            for (; c < t.length; ) {
              if (t[c] === '\\') {
                x += t[c++] + t[c++];
                continue;
              }
              if (t[c] === ')') {
                if ((y--, y === 0)) {
                  c++;
                  break;
                }
              } else if (t[c] === '(' && (y++, t[c + 1] !== '?'))
                throw new TypeError('Capturing groups are not allowed at ' + c);
              x += t[c++];
            }
            if (y) throw new TypeError('Unbalanced pattern at ' + r);
            if (!x) throw new TypeError('Missing pattern at ' + r);
            n.push({ type: 'PATTERN', index: r, value: x }), (r = c);
            continue;
          }
          n.push({ type: 'CHAR', index: r, value: t[r++] });
        }
        return n.push({ type: 'END', index: r, value: '' }), n;
      }
      function Ve(t, n) {
        n === void 0 && (n = {});
        for (
          var r = Rt(t),
            o = n.prefixes,
            f = o === void 0 ? './' : o,
            c = '[^' + a(n.delimiter || '/#?') + ']+?',
            l = [],
            y = 0,
            x = 0,
            R = '',
            w = function (Ce) {
              if (x < r.length && r[x].type === Ce) return r[x++].value;
            },
            M = function (Ce) {
              var ze = w(Ce);
              if (ze !== void 0) return ze;
              var yt = r[x],
                cr = yt.type,
                sr = yt.index;
              throw new TypeError('Unexpected ' + cr + ' at ' + sr + ', expected ' + Ce);
            },
            N = function () {
              for (var Ce = '', ze; (ze = w('CHAR') || w('ESCAPED_CHAR')); ) Ce += ze;
              return Ce;
            };
          x < r.length;

        ) {
          var W = w('CHAR'),
            se = w('NAME'),
            de = w('PATTERN');
          if (se || de) {
            var L = W || '';
            f.indexOf(L) === -1 && ((R += L), (L = '')),
              R && (l.push(R), (R = '')),
              l.push({
                name: se || y++,
                prefix: L,
                suffix: '',
                pattern: de || c,
                modifier: w('MODIFIER') || '',
              });
            continue;
          }
          var ie = W || w('ESCAPED_CHAR');
          if (ie) {
            R += ie;
            continue;
          }
          R && (l.push(R), (R = ''));
          var ae = w('OPEN');
          if (ae) {
            var L = N(),
              te = w('NAME') || '',
              ve = w('PATTERN') || '',
              Te = N();
            M('CLOSE'),
              l.push({
                name: te || (ve ? y++ : ''),
                pattern: te && !ve ? c : ve,
                prefix: L,
                suffix: Te,
                modifier: w('MODIFIER') || '',
              });
            continue;
          }
          M('END');
        }
        return l;
      }
      function le(t, n) {
        return b(Ve(t, n), n);
      }
      function b(t, n) {
        n === void 0 && (n = {});
        var r = D(n),
          o = n.encode,
          f =
            o === void 0
              ? function (x) {
                  return x;
                }
              : o,
          c = n.validate,
          l = c === void 0 ? !0 : c,
          y = t.map(function (x) {
            if (typeof x == 'object') return new RegExp('^(?:' + x.pattern + ')$', r);
          });
        return function (x) {
          for (var R = '', w = 0; w < t.length; w++) {
            var M = t[w];
            if (typeof M == 'string') {
              R += M;
              continue;
            }
            var N = x ? x[M.name] : void 0,
              W = M.modifier === '?' || M.modifier === '*',
              se = M.modifier === '*' || M.modifier === '+';
            if (Array.isArray(N)) {
              if (!se)
                throw new TypeError('Expected "' + M.name + '" to not repeat, but got an array');
              if (N.length === 0) {
                if (W) continue;
                throw new TypeError('Expected "' + M.name + '" to not be empty');
              }
              for (var de = 0; de < N.length; de++) {
                var L = f(N[de], M);
                if (l && !y[w].test(L))
                  throw new TypeError(
                    'Expected all "' +
                      M.name +
                      '" to match "' +
                      M.pattern +
                      '", but got "' +
                      L +
                      '"',
                  );
                R += M.prefix + L + M.suffix;
              }
              continue;
            }
            if (typeof N == 'string' || typeof N == 'number') {
              var L = f(String(N), M);
              if (l && !y[w].test(L))
                throw new TypeError(
                  'Expected "' + M.name + '" to match "' + M.pattern + '", but got "' + L + '"',
                );
              R += M.prefix + L + M.suffix;
              continue;
            }
            if (!W) {
              var ie = se ? 'an array' : 'a string';
              throw new TypeError('Expected "' + M.name + '" to be ' + ie);
            }
          }
          return R;
        };
      }
      function oe(t, n) {
        var r = [],
          o = ne(t, r, n);
        return O(o, r, n);
      }
      function O(t, n, r) {
        r === void 0 && (r = {});
        var o = r.decode,
          f =
            o === void 0
              ? function (c) {
                  return c;
                }
              : o;
        return function (c) {
          var l = t.exec(c);
          if (!l) return !1;
          for (
            var y = l[0],
              x = l.index,
              R = Object.create(null),
              w = function (N) {
                if (l[N] === void 0) return 'continue';
                var W = n[N - 1];
                W.modifier === '*' || W.modifier === '+'
                  ? (R[W.name] = l[N].split(W.prefix + W.suffix).map(function (se) {
                      return f(se, W);
                    }))
                  : (R[W.name] = f(l[N], W));
              },
              M = 1;
            M < l.length;
            M++
          )
            w(M);
          return { path: y, index: x, params: R };
        };
      }
      function a(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function D(t) {
        return t && t.sensitive ? '' : 'i';
      }
      function j(t, n) {
        if (!n) return t;
        var r = t.source.match(/\((?!\?)/g);
        if (r)
          for (var o = 0; o < r.length; o++)
            n.push({ name: o, prefix: '', suffix: '', modifier: '', pattern: '' });
        return t;
      }
      function re(t, n, r) {
        var o = t.map(function (f) {
          return ne(f, n, r).source;
        });
        return new RegExp('(?:' + o.join('|') + ')', D(r));
      }
      function X(t, n, r) {
        return ye(Ve(t, r), n, r);
      }
      function ye(t, n, r) {
        r === void 0 && (r = {});
        for (
          var o = r.strict,
            f = o === void 0 ? !1 : o,
            c = r.start,
            l = c === void 0 ? !0 : c,
            y = r.end,
            x = y === void 0 ? !0 : y,
            R = r.encode,
            w =
              R === void 0
                ? function (Ce) {
                    return Ce;
                  }
                : R,
            M = '[' + a(r.endsWith || '') + ']|$',
            N = '[' + a(r.delimiter || '/#?') + ']',
            W = l ? '^' : '',
            se = 0,
            de = t;
          se < de.length;
          se++
        ) {
          var L = de[se];
          if (typeof L == 'string') W += a(w(L));
          else {
            var ie = a(w(L.prefix)),
              ae = a(w(L.suffix));
            if (L.pattern)
              if ((n && n.push(L), ie || ae))
                if (L.modifier === '+' || L.modifier === '*') {
                  var te = L.modifier === '*' ? '?' : '';
                  W +=
                    '(?:' +
                    ie +
                    '((?:' +
                    L.pattern +
                    ')(?:' +
                    ae +
                    ie +
                    '(?:' +
                    L.pattern +
                    '))*)' +
                    ae +
                    ')' +
                    te;
                } else W += '(?:' + ie + '(' + L.pattern + ')' + ae + ')' + L.modifier;
              else W += '(' + L.pattern + ')' + L.modifier;
            else W += '(?:' + ie + ae + ')' + L.modifier;
          }
        }
        if (x) f || (W += N + '?'), (W += r.endsWith ? '(?=' + M + ')' : '$');
        else {
          var ve = t[t.length - 1],
            Te = typeof ve == 'string' ? N.indexOf(ve[ve.length - 1]) > -1 : ve === void 0;
          f || (W += '(?:' + N + '(?=' + M + '))?'), Te || (W += '(?=' + N + '|' + M + ')');
        }
        return new RegExp(W, D(r));
      }
      function ne(t, n, r) {
        return t instanceof RegExp ? j(t, n) : Array.isArray(t) ? re(t, n, r) : X(t, n, r);
      }
      function S(t, n) {
        return (n >>> t) | (n << (32 - t));
      }
      function $(t, n, r) {
        return (t & n) ^ (~t & r);
      }
      function fe(t, n, r) {
        return (t & n) ^ (t & r) ^ (n & r);
      }
      function ce(t) {
        return S(2, t) ^ S(13, t) ^ S(22, t);
      }
      function J(t) {
        return S(6, t) ^ S(11, t) ^ S(25, t);
      }
      function he(t) {
        return S(7, t) ^ S(18, t) ^ (t >>> 3);
      }
      function Oe(t) {
        return S(17, t) ^ S(19, t) ^ (t >>> 10);
      }
      function Xe(t, n) {
        return (t[n & 15] += Oe(t[(n + 14) & 15]) + t[(n + 9) & 15] + he(t[(n + 1) & 15]));
      }
      var Qe = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
          2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
          2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
          1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372,
          1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
          3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734,
          506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ],
        K,
        Y,
        Q,
        Zt = '0123456789abcdef';
      function ft(t, n) {
        var r = (t & 65535) + (n & 65535),
          o = (t >> 16) + (n >> 16) + (r >> 16);
        return (o << 16) | (r & 65535);
      }
      function be() {
        (K = new Array(8)),
          (Y = new Array(2)),
          (Q = new Array(64)),
          (Y[0] = Y[1] = 0),
          (K[0] = 1779033703),
          (K[1] = 3144134277),
          (K[2] = 1013904242),
          (K[3] = 2773480762),
          (K[4] = 1359893119),
          (K[5] = 2600822924),
          (K[6] = 528734635),
          (K[7] = 1541459225);
      }
      function Ne() {
        var t,
          n,
          r,
          o,
          f,
          c,
          l,
          y,
          x,
          R,
          w = new Array(16);
        (t = K[0]),
          (n = K[1]),
          (r = K[2]),
          (o = K[3]),
          (f = K[4]),
          (c = K[5]),
          (l = K[6]),
          (y = K[7]);
        for (var M = 0; M < 16; M++)
          w[M] =
            Q[(M << 2) + 3] | (Q[(M << 2) + 2] << 8) | (Q[(M << 2) + 1] << 16) | (Q[M << 2] << 24);
        for (var N = 0; N < 64; N++)
          (x = y + J(f) + $(f, c, l) + Qe[N]),
            N < 16 ? (x += w[N]) : (x += Xe(w, N)),
            (R = ce(t) + fe(t, n, r)),
            (y = l),
            (l = c),
            (c = f),
            (f = ft(o, x)),
            (o = r),
            (r = n),
            (n = t),
            (t = ft(x, R));
        (K[0] += t),
          (K[1] += n),
          (K[2] += r),
          (K[3] += o),
          (K[4] += f),
          (K[5] += c),
          (K[6] += l),
          (K[7] += y);
      }
      function Je(t, n) {
        var r,
          o,
          f = 0;
        o = (Y[0] >> 3) & 63;
        var c = n & 63;
        for ((Y[0] += n << 3) < n << 3 && Y[1]++, Y[1] += n >> 29, r = 0; r + 63 < n; r += 64) {
          for (var l = o; l < 64; l++) Q[l] = t.charCodeAt(f++);
          Ne(), (o = 0);
        }
        for (var y = 0; y < c; y++) Q[y] = t.charCodeAt(f++);
      }
      function St() {
        var t = (Y[0] >> 3) & 63;
        if (((Q[t++] = 128), t <= 56)) for (var n = t; n < 56; n++) Q[n] = 0;
        else {
          for (var r = t; r < 64; r++) Q[r] = 0;
          Ne();
          for (var o = 0; o < 56; o++) Q[o] = 0;
        }
        (Q[56] = (Y[1] >>> 24) & 255),
          (Q[57] = (Y[1] >>> 16) & 255),
          (Q[58] = (Y[1] >>> 8) & 255),
          (Q[59] = Y[1] & 255),
          (Q[60] = (Y[0] >>> 24) & 255),
          (Q[61] = (Y[0] >>> 16) & 255),
          (Q[62] = (Y[0] >>> 8) & 255),
          (Q[63] = Y[0] & 255),
          Ne();
      }
      function Bt() {
        for (var t = 0, n = new Array(32), r = 0; r < 8; r++)
          (n[t++] = (K[r] >>> 24) & 255),
            (n[t++] = (K[r] >>> 16) & 255),
            (n[t++] = (K[r] >>> 8) & 255),
            (n[t++] = K[r] & 255);
        return n;
      }
      function Kt() {
        for (var t = new String(), n = 0; n < 8; n++)
          for (var r = 28; r >= 0; r -= 4) t += Zt.charAt((K[n] >>> r) & 15);
        return t;
      }
      function $t(t) {
        return be(), Je(t, t.length), St(), Kt();
      }
      var jt = $t;
      function He(t) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (He = function (r) {
                return typeof r;
              })
            : (He = function (r) {
                return r &&
                  typeof Symbol == 'function' &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? 'symbol'
                  : typeof r;
              }),
          He(t)
        );
      }
      var Wt = ['pro_layout_parentKeys', 'routes', 'children', 'icon', 'flatMenu', 'indexRoute'];
      function xr(t, n) {
        return Ye(t) || zt(t, n) || st(t, n) || br();
      }
      function br() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function zt(t, n) {
        var r =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (r != null) {
          var o = [],
            f = !0,
            c = !1,
            l,
            y;
          try {
            for (
              r = r.call(t);
              !(f = (l = r.next()).done) && (o.push(l.value), !(n && o.length === n));
              f = !0
            );
          } catch (x) {
            (c = !0), (y = x);
          } finally {
            try {
              !f && r.return != null && r.return();
            } finally {
              if (c) throw y;
            }
          }
          return o;
        }
      }
      function Ye(t) {
        if (Array.isArray(t)) return t;
      }
      function Ut(t, n) {
        var r = (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (!r) {
          if (Array.isArray(t) || (r = st(t)) || (n && t && typeof t.length == 'number')) {
            r && (t = r);
            var o = 0,
              f = function () {};
            return {
              s: f,
              n: function () {
                return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
              },
              e: function (R) {
                throw R;
              },
              f,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var c = !0,
          l = !1,
          y;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var R = r.next();
            return (c = R.done), R;
          },
          e: function (R) {
            (l = !0), (y = R);
          },
          f: function () {
            try {
              !c && r.return != null && r.return();
            } finally {
              if (l) throw y;
            }
          },
        };
      }
      function _e(t, n) {
        if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
      }
      function Ot(t, n) {
        for (var r = 0; r < n.length; r++) {
          var o = n[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Nt(t, n, r) {
        return n && Ot(t.prototype, n), r && Ot(t, r), t;
      }
      function Pt(t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && Ke(t, n);
      }
      function Gt(t) {
        var n = Tt();
        return function () {
          var o = $e(t),
            f;
          if (n) {
            var c = $e(this).constructor;
            f = Reflect.construct(o, arguments, c);
          } else f = o.apply(this, arguments);
          return wt(this, f);
        };
      }
      function wt(t, n) {
        if (n && (He(n) === 'object' || typeof n == 'function')) return n;
        if (n !== void 0)
          throw new TypeError('Derived constructors may only return object or undefined');
        return Vt(t);
      }
      function Vt(t) {
        if (t === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function Pe(t) {
        var n = typeof Map == 'function' ? new Map() : void 0;
        return (
          (Pe = function (o) {
            if (o === null || !At(o)) return o;
            if (typeof o != 'function')
              throw new TypeError('Super expression must either be null or a function');
            if (typeof n != 'undefined') {
              if (n.has(o)) return n.get(o);
              n.set(o, f);
            }
            function f() {
              return Be(o, arguments, $e(this).constructor);
            }
            return (
              (f.prototype = Object.create(o.prototype, {
                constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
              })),
              Ke(f, o)
            );
          }),
          Pe(t)
        );
      }
      function Be(t, n, r) {
        return (
          Tt()
            ? (Be = Reflect.construct)
            : (Be = function (f, c, l) {
                var y = [null];
                y.push.apply(y, c);
                var x = Function.bind.apply(f, y),
                  R = new x();
                return l && Ke(R, l.prototype), R;
              }),
          Be.apply(null, arguments)
        );
      }
      function Tt() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function At(t) {
        return Function.toString.call(t).indexOf('[native code]') !== -1;
      }
      function Ke(t, n) {
        return (
          (Ke =
            Object.setPrototypeOf ||
            function (o, f) {
              return (o.__proto__ = f), o;
            }),
          Ke(t, n)
        );
      }
      function $e(t) {
        return (
          ($e = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                return r.__proto__ || Object.getPrototypeOf(r);
              }),
          $e(t)
        );
      }
      function ct(t) {
        return Qt(t) || Xt(t) || st(t) || je();
      }
      function je() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function st(t, n) {
        if (!!t) {
          if (typeof t == 'string') return we(t, n);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (r === 'Object' && t.constructor && (r = t.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(t);
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return we(t, n);
        }
      }
      function Xt(t) {
        if ((typeof Symbol != 'undefined' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
          return Array.from(t);
      }
      function Qt(t) {
        if (Array.isArray(t)) return we(t);
      }
      function we(t, n) {
        (n == null || n > t.length) && (n = t.length);
        for (var r = 0, o = new Array(n); r < n; r++) o[r] = t[r];
        return o;
      }
      function Jt(t, n) {
        if (t == null) return {};
        var r = Yt(t, n),
          o,
          f;
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          for (f = 0; f < c.length; f++)
            (o = c[f]),
              !(n.indexOf(o) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(t, o) || (r[o] = t[o]));
        }
        return r;
      }
      function Yt(t, n) {
        if (t == null) return {};
        var r = {},
          o = Object.keys(t),
          f,
          c;
        for (c = 0; c < o.length; c++) (f = o[c]), !(n.indexOf(f) >= 0) && (r[f] = t[f]);
        return r;
      }
      function dt(t, n) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          n &&
            (o = o.filter(function (f) {
              return Object.getOwnPropertyDescriptor(t, f).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function k(t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? dt(Object(r), !0).forEach(function (o) {
                _t(t, o, r[o]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : dt(Object(r)).forEach(function (o) {
                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
              });
        }
        return t;
      }
      function _t(t, n, r) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = r),
          t
        );
      }
      function We(t) {
        return t.split('?')[0].split('#')[0];
      }
      var ke = function (n) {
          if (!n.startsWith('http')) return !1;
          try {
            var r = new URL(n);
            return !!r;
          } catch (o) {
            return !1;
          }
        },
        Dt = function (n) {
          var r = n.path;
          if (!r || r === '/')
            try {
              return '/'.concat(jt(JSON.stringify(n)));
            } catch (o) {}
          return r && We(r);
        },
        kt = function (n, r) {
          var o = n.name,
            f = n.locale;
          return ('locale' in n && f === !1) || !o ? !1 : n.locale || ''.concat(r, '.').concat(o);
        },
        vt = function () {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '/';
          return (n || r).startsWith('/') || ke(n)
            ? n
            : '/'.concat(r, '/').concat(n).replace(/\/\//g, '/').replace(/\/\//g, '/');
        },
        mt = function (n, r) {
          var o = n.menu,
            f = o === void 0 ? {} : o,
            c = n.indexRoute,
            l = n.path,
            y = l === void 0 ? '' : l,
            x = n.routes,
            R = f.name,
            w = R === void 0 ? n.name : R,
            M = f.icon,
            N = M === void 0 ? n.icon : M,
            W = f.hideChildren,
            se = W === void 0 ? n.hideChildren : W,
            de = f.flatMenu,
            L = de === void 0 ? n.flatMenu : de,
            ie =
              c && Object.keys(c).join(',') !== 'redirect'
                ? [k({ path: y, menu: f }, c)].concat(x || [])
                : x,
            ae = k({}, n);
          if ((w && (ae.name = w), N && (ae.icon = N), ie && ie.length)) {
            if (se) return delete ae.routes, ae;
            var te = qe(k(k({}, r), {}, { data: ie }), n);
            if (L) return te;
            ae.routes = te;
          }
          return ae;
        };
      function qe(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { path: '/' },
          r = t.data,
          o = t.formatMessage,
          f = t.parentName,
          c = t.locale;
        return !r || !Array.isArray(r)
          ? []
          : r
              .filter(function (l) {
                return l
                  ? l.routes || l.children || l.path || l.layout
                    ? !0
                    : (l.redirect || l.unaccessible, !1)
                  : !1;
              })
              .filter(function (l) {
                var y, x;
                return (
                  l.unaccessible && delete l.name,
                  (l == null || (y = l.menu) === null || y === void 0 ? void 0 : y.name) ||
                  (l == null ? void 0 : l.flatMenu) ||
                  (l == null || (x = l.menu) === null || x === void 0 ? void 0 : x.flatMenu)
                    ? !0
                    : l.menu !== !1
                );
              })
              .map(function () {
                var l =
                  arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { path: '/' };
                l.children && !l.routes && ((l.routes = l.children), delete l.children);
                var y = vt(l.path, n ? n.path : '/'),
                  x = l.name,
                  R = kt(l, f || 'menu'),
                  w = R !== !1 && c !== !1 && o && R ? o({ id: R, defaultMessage: x }) : x,
                  M = n.pro_layout_parentKeys,
                  N = M === void 0 ? [] : M,
                  W = n.routes,
                  se = n.children,
                  de = n.icon,
                  L = n.flatMenu,
                  ie = n.indexRoute,
                  ae = Jt(n, Wt),
                  te = k(
                    k(k({}, ae), {}, { menu: void 0 }, l),
                    {},
                    {
                      path: y,
                      locale: R,
                      key: l.key || Dt(k(k({}, l), {}, { path: y })),
                      pro_layout_parentKeys: Array.from(
                        new Set(
                          [].concat(ct(l.parentKeys || []), ct(N), [
                            '/'
                              .concat(n.key || '')
                              .replace(/\/\//g, '/')
                              .replace(/\/\//g, '/'),
                          ]),
                        ),
                      ).filter(function (Te) {
                        return Te && Te !== '/';
                      }),
                    },
                  );
                if (
                  (w ? (te.name = w) : delete te.name,
                  te.menu === void 0 && delete te.menu,
                  l.routes)
                ) {
                  var ve = qe(k(k({}, t), {}, { data: l.routes, parentName: R || '' }), te);
                  (te.routes = ve && ve.length > 0 ? ve : void 0), te.routes || delete te.routes;
                }
                return mt(te, t);
              })
              .flat(1);
      }
      var qt = xe(qe, A()),
        It = function t() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return n
            .filter(function (r) {
              return r && (r.name || r.routes) && !r.hideInMenu && !r.redirect;
            })
            .map(function (r) {
              var o = k({}, r);
              if (
                (o.children && !o.routes && (o.routes = r.children),
                o.routes &&
                  Array.isArray(o.routes) &&
                  !o.hideChildrenInMenu &&
                  o.routes.some(function (c) {
                    return c && !!c.name;
                  }))
              ) {
                var f = t(o.routes);
                if (f.length) return k(k({}, o), {}, { routes: f });
              }
              return k(k({}, r), {}, { routes: void 0 });
            })
            .filter(function (r) {
              return r;
            });
        },
        er = (function (t) {
          Pt(r, t);
          var n = Gt(r);
          function r() {
            return _e(this, r), n.apply(this, arguments);
          }
          return (
            Nt(r, [
              {
                key: 'get',
                value: function (f) {
                  var c;
                  try {
                    var l = Ut(this.entries()),
                      y;
                    try {
                      for (l.s(); !(y = l.n()).done; ) {
                        var x = xr(y.value, 2),
                          R = x[0],
                          w = x[1],
                          M = We(R);
                        if (!ke(R) && ne(M, []).test(f)) {
                          c = w;
                          break;
                        }
                      }
                    } catch (N) {
                      l.e(N);
                    } finally {
                      l.f();
                    }
                  } catch (N) {
                    c = void 0;
                  }
                  return c;
                },
              },
            ]),
            r
          );
        })(Pe(Map)),
        Cr = function (n) {
          var r = new er(),
            o = function f(c, l) {
              c.forEach(function (y) {
                y && y.routes && f(y.routes, y);
                var x = vt(y.path, l ? l.path : '/');
                r.set(We(x), y);
              });
            };
          return o(n), r;
        },
        tr = xe(Cr, A()),
        rr = function t() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return n
            .map(function (r) {
              if (r.routes && Array.isArray(r.routes) && r.routes.length > 0) {
                var o = t(r.routes);
                if (o.length) return k(k({}, r), {}, { routes: o });
              }
              var f = k({}, r);
              return delete f.routes, f;
            })
            .filter(function (r) {
              return r;
            });
        },
        nr = function (n, r, o, f) {
          var c = qt({ data: n, formatMessage: o, locale: r }),
            l = f ? rr(c) : It(c),
            y = tr(c);
          return { breadcrumb: y, menuData: l };
        },
        ar = nr;
      function ht(t, n) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          n &&
            (o = o.filter(function (f) {
              return Object.getOwnPropertyDescriptor(t, f).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function et(t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? ht(Object(r), !0).forEach(function (o) {
                or(t, o, r[o]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ht(Object(r)).forEach(function (o) {
                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
              });
        }
        return t;
      }
      function or(t, n, r) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = r),
          t
        );
      }
      var ir = function t() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            r = {};
          return (
            n.forEach(function (o) {
              !o ||
                !o.key ||
                ((r[We(o.path || o.key || '/')] = et({}, o)),
                (r[o.key || o.path || '/'] = et({}, o)),
                o.routes && (r = et(et({}, r), t(o.routes))));
            }),
            r
          );
        },
        gt = ir,
        ur = function () {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            r = arguments.length > 1 ? arguments[1] : void 0,
            o = arguments.length > 2 ? arguments[2] : void 0;
          return n
            .filter(function (f) {
              if (f === '/' && r === '/') return !0;
              if (f !== '/' && f !== '/*' && f && !ke(f)) {
                var c = We(f);
                try {
                  if (
                    (o && ne(''.concat(c)).test(r)) ||
                    ne(''.concat(c), []).test(r) ||
                    ne(''.concat(c, '/(.*)')).test(r)
                  )
                    return !0;
                } catch (l) {}
              }
              return !1;
            })
            .sort(function (f, c) {
              return f === r
                ? 10
                : c === r
                ? -10
                : f.substr(1).split('/').length - c.substr(1).split('/').length;
            });
        },
        lr = function (n, r, o, f) {
          var c = gt(r),
            l = Object.keys(c),
            y = ur(l, n || '/', f);
          return !y || y.length < 1
            ? []
            : (o || (y = [y[y.length - 1]]),
              y
                .map(function (x) {
                  var R = c[x] || { pro_layout_parentKeys: '', key: '' },
                    w = new Map(),
                    M = (R.pro_layout_parentKeys || [])
                      .map(function (N) {
                        return w.has(N) ? null : (w.set(N, !0), c[N]);
                      })
                      .filter(function (N) {
                        return N;
                      });
                  return R.key && M.push(R), M;
                })
                .flat(1));
        },
        fr = lr;
    },
    93925: function (Ze) {
      'use strict';
      var Fe = typeof BigInt64Array != 'undefined';
      Ze.exports = function g(H, A) {
        if (H === A) return !0;
        if (H && A && typeof H == 'object' && typeof A == 'object') {
          if (H.constructor !== A.constructor) return !1;
          var B, G, ee;
          if (Array.isArray(H)) {
            if (((B = H.length), B != A.length)) return !1;
            for (G = B; G-- != 0; ) if (!g(H[G], A[G])) return !1;
            return !0;
          }
          if (H instanceof Map && A instanceof Map) {
            if (H.size !== A.size) return !1;
            for (G of H.entries()) if (!A.has(G[0])) return !1;
            for (G of H.entries()) if (!g(G[1], A.get(G[0]))) return !1;
            return !0;
          }
          if (H instanceof Set && A instanceof Set) {
            if (H.size !== A.size) return !1;
            for (G of H.entries()) if (!A.has(G[0])) return !1;
            return !0;
          }
          if (ArrayBuffer.isView(H) && ArrayBuffer.isView(A)) {
            if (((B = H.length), B != A.length)) return !1;
            for (G = B; G-- != 0; ) if (H[G] !== A[G]) return !1;
            return !0;
          }
          if (H.constructor === RegExp) return H.source === A.source && H.flags === A.flags;
          if (H.valueOf !== Object.prototype.valueOf) return H.valueOf() === A.valueOf();
          if (H.toString !== Object.prototype.toString) return H.toString() === A.toString();
          if (((ee = Object.keys(H)), (B = ee.length), B !== Object.keys(A).length)) return !1;
          for (G = B; G-- != 0; ) if (!Object.prototype.hasOwnProperty.call(A, ee[G])) return !1;
          for (G = B; G-- != 0; ) {
            var Ee = ee[G];
            if (!(Ee === '_owner' && H.$$typeof) && !g(H[Ee], A[Ee])) return !1;
          }
          return !0;
        }
        return H !== H && A !== A;
      };
    },
    69121: function (Ze) {
      (Ze.exports = oe),
        (Ze.exports.parse = A),
        (Ze.exports.compile = B),
        (Ze.exports.tokensToFunction = G),
        (Ze.exports.tokensToRegExp = b);
      var Fe = '/',
        g = './',
        H = new RegExp(
          [
            '(\\\\.)',
            '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
          ].join('|'),
          'g',
        );
      function A(O, a) {
        for (
          var D = [],
            j = 0,
            re = 0,
            X = '',
            ye = (a && a.delimiter) || Fe,
            ne = (a && a.delimiters) || g,
            S = !1,
            $;
          ($ = H.exec(O)) !== null;

        ) {
          var fe = $[0],
            ce = $[1],
            J = $.index;
          if (((X += O.slice(re, J)), (re = J + fe.length), ce)) {
            (X += ce[1]), (S = !0);
            continue;
          }
          var he = '',
            Oe = O[re],
            Xe = $[2],
            Qe = $[3],
            K = $[4],
            Y = $[5];
          if (!S && X.length) {
            var Q = X.length - 1;
            ne.indexOf(X[Q]) > -1 && ((he = X[Q]), (X = X.slice(0, Q)));
          }
          X && (D.push(X), (X = ''), (S = !1));
          var Zt = he !== '' && Oe !== void 0 && Oe !== he,
            ft = Y === '+' || Y === '*',
            be = Y === '?' || Y === '*',
            Ne = he || ye,
            Je = Qe || K;
          D.push({
            name: Xe || j++,
            prefix: he,
            delimiter: Ne,
            optional: be,
            repeat: ft,
            partial: Zt,
            pattern: Je ? Ee(Je) : '[^' + ee(Ne) + ']+?',
          });
        }
        return (X || re < O.length) && D.push(X + O.substr(re)), D;
      }
      function B(O, a) {
        return G(A(O, a));
      }
      function G(O) {
        for (var a = new Array(O.length), D = 0; D < O.length; D++)
          typeof O[D] == 'object' && (a[D] = new RegExp('^(?:' + O[D].pattern + ')$'));
        return function (j, re) {
          for (
            var X = '', ye = (re && re.encode) || encodeURIComponent, ne = 0;
            ne < O.length;
            ne++
          ) {
            var S = O[ne];
            if (typeof S == 'string') {
              X += S;
              continue;
            }
            var $ = j ? j[S.name] : void 0,
              fe;
            if (Array.isArray($)) {
              if (!S.repeat)
                throw new TypeError('Expected "' + S.name + '" to not repeat, but got array');
              if ($.length === 0) {
                if (S.optional) continue;
                throw new TypeError('Expected "' + S.name + '" to not be empty');
              }
              for (var ce = 0; ce < $.length; ce++) {
                if (((fe = ye($[ce], S)), !a[ne].test(fe)))
                  throw new TypeError('Expected all "' + S.name + '" to match "' + S.pattern + '"');
                X += (ce === 0 ? S.prefix : S.delimiter) + fe;
              }
              continue;
            }
            if (typeof $ == 'string' || typeof $ == 'number' || typeof $ == 'boolean') {
              if (((fe = ye(String($), S)), !a[ne].test(fe)))
                throw new TypeError(
                  'Expected "' + S.name + '" to match "' + S.pattern + '", but got "' + fe + '"',
                );
              X += S.prefix + fe;
              continue;
            }
            if (S.optional) {
              S.partial && (X += S.prefix);
              continue;
            }
            throw new TypeError(
              'Expected "' + S.name + '" to be ' + (S.repeat ? 'an array' : 'a string'),
            );
          }
          return X;
        };
      }
      function ee(O) {
        return O.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function Ee(O) {
        return O.replace(/([=!:$/()])/g, '\\$1');
      }
      function xe(O) {
        return O && O.sensitive ? '' : 'i';
      }
      function Rt(O, a) {
        if (!a) return O;
        var D = O.source.match(/\((?!\?)/g);
        if (D)
          for (var j = 0; j < D.length; j++)
            a.push({
              name: j,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              pattern: null,
            });
        return O;
      }
      function Ve(O, a, D) {
        for (var j = [], re = 0; re < O.length; re++) j.push(oe(O[re], a, D).source);
        return new RegExp('(?:' + j.join('|') + ')', xe(D));
      }
      function le(O, a, D) {
        return b(A(O, D), a, D);
      }
      function b(O, a, D) {
        D = D || {};
        for (
          var j = D.strict,
            re = D.start !== !1,
            X = D.end !== !1,
            ye = ee(D.delimiter || Fe),
            ne = D.delimiters || g,
            S = []
              .concat(D.endsWith || [])
              .map(ee)
              .concat('$')
              .join('|'),
            $ = re ? '^' : '',
            fe = O.length === 0,
            ce = 0;
          ce < O.length;
          ce++
        ) {
          var J = O[ce];
          if (typeof J == 'string')
            ($ += ee(J)), (fe = ce === O.length - 1 && ne.indexOf(J[J.length - 1]) > -1);
          else {
            var he = J.repeat
              ? '(?:' + J.pattern + ')(?:' + ee(J.delimiter) + '(?:' + J.pattern + '))*'
              : J.pattern;
            a && a.push(J),
              J.optional
                ? J.partial
                  ? ($ += ee(J.prefix) + '(' + he + ')?')
                  : ($ += '(?:' + ee(J.prefix) + '(' + he + '))?')
                : ($ += ee(J.prefix) + '(' + he + ')');
          }
        }
        return (
          X
            ? (j || ($ += '(?:' + ye + ')?'), ($ += S === '$' ? '$' : '(?=' + S + ')'))
            : (j || ($ += '(?:' + ye + '(?=' + S + '))?'), fe || ($ += '(?=' + ye + '|' + S + ')')),
          new RegExp($, xe(D))
        );
      }
      function oe(O, a, D) {
        return O instanceof RegExp ? Rt(O, a) : Array.isArray(O) ? Ve(O, a, D) : le(O, a, D);
      }
    },
  },
]);
