(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [362],
  {
    19855: function (Ce, he, c) {
      'use strict';
      c.d(he, {
        ZP: function () {
          return qr;
        },
      });
      var w = c(85403),
        D = c(11127),
        I = c(22076),
        K = c(70486),
        Y = c.n(K),
        de = c(66940),
        V = c(20557),
        ae = c(99793),
        ve = c(20658),
        z = c(28211),
        g = c(36531),
        q = c(10322),
        Z = c(79258),
        a = c(59301),
        R = c(92691),
        U = c.n(R),
        ne = c(85239),
        X = c.n(ne),
        x = c(29015),
        S = c(37131),
        v = c(81631),
        O = c(44204);
      function Q(y, e) {
        var u = typeof y.pageName == 'string' ? y.title : e;
        (0, a.useEffect)(
          function () {
            (0, O.Z)() && u && (document.title = u);
          },
          [y.title, u],
        );
      }
      var te = Q,
        $ = c(52535),
        ie = c(38299),
        pe = c(52372),
        Te = c(3359),
        Ee = c(29860),
        G = c(54855),
        ue = c(71512),
        oe = c(54938),
        St = c(2080),
        ct = c(48513),
        Oe = c(74318),
        De = {
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
        Je = De,
        Zt = c(23986),
        Bt = function (e, u) {
          return a.createElement(Zt.Z, (0, g.Z)((0, g.Z)({}, e), {}, { ref: u, icon: Je }));
        };
      Bt.displayName = 'MenuUnfoldOutlined';
      var Kt = a.forwardRef(Bt),
        Ht = {
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
        Wt = Ht,
        We = function (e, u) {
          return a.createElement(Zt.Z, (0, g.Z)((0, g.Z)({}, e), {}, { ref: u, icon: Wt }));
        };
      We.displayName = 'MenuFoldOutlined';
      var jt = a.forwardRef(We),
        xr = c(87614),
        br = c(43710),
        Ut = c(77145),
        Ye = c(37793),
        $t = c(24877),
        ke = c(84893),
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
        Pt = a.forwardRef(function (y, e) {
          var u = y.className,
            o = y.component,
            h = y.viewBox,
            m = y.spin,
            d = y.rotate,
            C = y.tabIndex,
            p = y.onClick,
            M = y.children,
            T = (0, V.Z)(y, Ot);
          (0, ke.Kp)(Boolean(o || M), 'Should have `component` prop or `children`.'), (0, ke.C3)();
          var _ = a.useContext($t.Z),
            A = _.prefixCls,
            B = A === void 0 ? 'anticon' : A,
            H = U()(B, u),
            ee = U()((0, I.Z)({}, ''.concat(B, '-spin'), !!m)),
            k = d
              ? { msTransform: 'rotate('.concat(d, 'deg)'), transform: 'rotate('.concat(d, 'deg)') }
              : void 0,
            ce = (0, g.Z)((0, g.Z)({}, ke.vD), {}, { className: ee, style: k, viewBox: h });
          h || delete ce.viewBox;
          var j = function () {
              return o
                ? a.createElement(o, (0, g.Z)({}, ce), M)
                : M
                ? ((0, ke.Kp)(
                    Boolean(h) ||
                      (a.Children.count(M) === 1 &&
                        a.isValidElement(M) &&
                        a.Children.only(M).type === 'use'),
                    'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                  ),
                  a.createElement('svg', (0, g.Z)((0, g.Z)({}, ce), {}, { viewBox: h }), M))
                : null;
            },
            ye = C;
          return (
            ye === void 0 && p && (ye = -1),
            a.createElement(
              'span',
              (0, g.Z)(
                (0, g.Z)({ role: 'img' }, T),
                {},
                { ref: e, tabIndex: ye, onClick: p, className: H },
              ),
              j(),
            )
          );
        });
      Pt.displayName = 'AntdIcon';
      var wt = Pt,
        zt = ['type', 'children'],
        Tt = new Set();
      function Gt(y) {
        return Boolean(typeof y == 'string' && y.length && !Tt.has(y));
      }
      function Ie(y) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
          u = y[e];
        if (Gt(u)) {
          var o = document.createElement('script');
          o.setAttribute('src', u),
            o.setAttribute('data-namespace', u),
            y.length > e + 1 &&
              ((o.onload = function () {
                Ie(y, e + 1);
              }),
              (o.onerror = function () {
                Ie(y, e + 1);
              })),
            Tt.add(u),
            document.body.appendChild(o);
        }
      }
      function je() {
        var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          e = y.scriptUrl,
          u = y.extraCommonProps,
          o = u === void 0 ? {} : u;
        e &&
          typeof document != 'undefined' &&
          typeof window != 'undefined' &&
          typeof document.createElement == 'function' &&
          (Array.isArray(e) ? Ie(e.reverse()) : Ie([e]));
        var h = a.forwardRef(function (m, d) {
          var C = m.type,
            p = m.children,
            M = (0, V.Z)(m, zt),
            T = null;
          return (
            m.type && (T = a.createElement('use', { xlinkHref: '#'.concat(C) })),
            p && (T = p),
            a.createElement(wt, (0, g.Z)((0, g.Z)((0, g.Z)({}, o), M), {}, { ref: d }), T)
          );
        });
        return (h.displayName = 'Iconfont'), h;
      }
      var Nt = function (e) {
          if (!e.startsWith('http')) return !1;
          try {
            var u = new URL(e);
            return !!u;
          } catch (o) {
            return !1;
          }
        },
        At = Nt;
      function Ue(y) {
        return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(y);
      }
      var $e = Ue,
        st = c(20355),
        ze = c(97988),
        dt = c(935);
      function Vt() {
        var y = (0, a.useState)([]),
          e = (0, z.Z)(y, 2),
          u = e[0],
          o = e[1];
        return { flatMenuKeys: u, setFlatMenuKeys: o };
      }
      var Xt = (0, dt.f)(Vt),
        Le = Xt,
        Qt = Oe.Z.SubMenu,
        Jt = Oe.Z.ItemGroup,
        vt = je({ scriptUrl: st.Z.iconfontUrl }),
        fe = function (e) {
          var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'icon-';
          if (typeof e == 'string' && e !== '') {
            if (At(e) || $e(e))
              return a.createElement(wt, {
                component: function () {
                  return a.createElement('img', {
                    src: e,
                    alt: 'icon',
                    className: 'ant-pro-sider-menu-icon',
                  });
                },
              });
            if (e.startsWith(u)) return a.createElement(vt, { type: e });
          }
          return e;
        },
        Yt = (0, Ee.Z)(function y(e) {
          var u = this;
          (0, Te.Z)(this, y),
            (this.props = void 0),
            (this.getNavMenuItems = function () {
              var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                h = arguments.length > 1 ? arguments[1] : void 0;
              return o
                .map(function (m) {
                  return u.getSubMenuOrItem(m, h);
                })
                .filter(function (m) {
                  return m;
                });
            }),
            (this.getSubMenuOrItem = function (o, h) {
              if (Array.isArray(o.routes) && o && o.routes.length > 0) {
                var m = u.getIntlName(o),
                  d = u.props,
                  C = d.subMenuItemRender,
                  p = d.prefixCls,
                  M = d.menu,
                  T = d.iconPrefixes,
                  _ = o.icon
                    ? a.createElement(
                        'span',
                        { className: ''.concat(p, '-menu-item'), title: m },
                        !h && fe(o.icon, T),
                        a.createElement('span', { className: ''.concat(p, '-menu-item-title') }, m),
                      )
                    : a.createElement(
                        'span',
                        { className: ''.concat(p, '-menu-item'), title: m },
                        m,
                      ),
                  A = C ? C((0, g.Z)((0, g.Z)({}, o), {}, { isUrl: !1 }), _) : _,
                  B = (M == null ? void 0 : M.type) === 'group' ? Jt : Qt;
                return a.createElement(
                  B,
                  { title: A, key: o.key || o.path, onTitleClick: o.onTitleClick },
                  u.getNavMenuItems(o.routes, !0),
                );
              }
              return a.createElement(
                Oe.Z.Item,
                { disabled: o.disabled, key: o.key || o.path, onClick: o.onTitleClick },
                u.getMenuItemPath(o, h),
              );
            }),
            (this.getIntlName = function (o) {
              var h = o.name,
                m = o.locale,
                d = u.props,
                C = d.menu,
                p = d.formatMessage;
              return m && (C == null ? void 0 : C.locale) !== !1
                ? p == null
                  ? void 0
                  : p({ id: m, defaultMessage: h })
                : h;
            }),
            (this.getMenuItemPath = function (o, h) {
              var m = u.conversionPath(o.path || '/'),
                d = u.props,
                C = d.location,
                p = C === void 0 ? { pathname: '/' } : C,
                M = d.isMobile,
                T = d.onCollapse,
                _ = d.menuItemRender,
                A = d.iconPrefixes,
                B = u.getIntlName(o),
                H = u.props.prefixCls,
                ee = h ? null : fe(o.icon, A),
                k = a.createElement(
                  'span',
                  { className: ''.concat(H, '-menu-item') },
                  ee,
                  a.createElement('span', { className: ''.concat(H, '-menu-item-title') }, B),
                ),
                ce = At(m);
              if (
                (ce &&
                  (k = a.createElement(
                    'span',
                    {
                      title: B,
                      onClick: function () {
                        var le, Re;
                        (le = window) === null ||
                          le === void 0 ||
                          (Re = le.open) === null ||
                          Re === void 0 ||
                          Re.call(le, m);
                      },
                      className: ''.concat(H, '-menu-item ').concat(H, '-menu-item-link'),
                    },
                    ee,
                    a.createElement('span', { className: ''.concat(H, '-menu-item-title') }, B),
                  )),
                _)
              ) {
                var j = (0, g.Z)(
                  (0, g.Z)({}, o),
                  {},
                  {
                    isUrl: ce,
                    itemPath: m,
                    isMobile: M,
                    replace: m === p.pathname,
                    onClick: function () {
                      return T && T(!0);
                    },
                    children: void 0,
                  },
                );
                return _(j, k, u.props);
              }
              return k;
            }),
            (this.conversionPath = function (o) {
              return o && o.indexOf('http') === 0 ? o : '/'.concat(o || '').replace(/\/+/g, '/');
            }),
            (this.props = e);
        }),
        Ge = function (e, u) {
          var o = u.layout,
            h = u.collapsed,
            m = {};
          return e && !h && ['side', 'mix'].includes(o || 'mix') && (m = { openKeys: e }), m;
        },
        qe = function (e) {
          var u = e.theme,
            o = e.mode,
            h = e.className,
            m = e.handleOpenChange,
            d = e.style,
            C = e.menuData,
            p = e.menu,
            M = e.matchMenuKeys,
            T = e.iconfontUrl,
            _ = e.collapsed,
            A = e.selectedKeys,
            B = e.onSelect,
            H = e.openKeys,
            ee = (0, a.useRef)([]),
            k = Le.useContainer(),
            ce = k.flatMenuKeys,
            j = (0, v.Z)(p == null ? void 0 : p.defaultOpenAll),
            ye = (0, z.Z)(j, 2),
            le = ye[0],
            Re = ye[1],
            we = (0, v.Z)(
              function () {
                return (p == null ? void 0 : p.defaultOpenAll)
                  ? (0, ze.O7)(C) || []
                  : H === !1
                  ? !1
                  : [];
              },
              { value: H === !1 ? void 0 : H, onChange: m },
            ),
            Fe = (0, z.Z)(we, 2),
            Ze = Fe[0],
            re = Fe[1],
            xt = (0, v.Z)([], {
              value: A,
              onChange: B
                ? function (Qe) {
                    B && Qe && B(Qe);
                  }
                : void 0,
            }),
            Xe = (0, z.Z)(xt, 2),
            rt = Xe[0],
            Ae = Xe[1];
          (0, a.useEffect)(
            function () {
              (p == null ? void 0 : p.defaultOpenAll) ||
                H === !1 ||
                ce.length ||
                (M && (re(M), Ae(M)));
            },
            [M.join('-')],
          ),
            (0, a.useEffect)(
              function () {
                T && (vt = je({ scriptUrl: T }));
              },
              [T],
            ),
            (0, a.useEffect)(
              function () {
                if (
                  (M.join('-') !== (rt || []).join('-') && Ae(M),
                  !le && H !== !1 && M.join('-') !== (Ze || []).join('-'))
                ) {
                  var Qe = M;
                  (p == null ? void 0 : p.autoClose) === !1 &&
                    (Qe = Array.from(new Set([].concat((0, Ye.Z)(M), (0, Ye.Z)(Ze || []))))),
                    re(Qe);
                } else
                  (p == null ? void 0 : p.ignoreFlatMenu) && le
                    ? re((0, ze.O7)(C))
                    : ce.length > 0 && Re(!1);
              },
              [M.join('-'), _],
            );
          var nt = (0, a.useMemo)(
              function () {
                return Ge(Ze, e);
              },
              [Ze && Ze.join(','), e.layout, e.collapsed],
            ),
            at = (0, a.useState)(function () {
              return new Yt(e);
            }),
            it = (0, z.Z)(at, 1),
            Ne = it[0];
          if (p == null ? void 0 : p.loading)
            return a.createElement(
              'div',
              {
                style: (o == null ? void 0 : o.includes('inline'))
                  ? { padding: 24 }
                  : { marginTop: 16 },
              },
              a.createElement(Ut.Z, {
                active: !0,
                title: !1,
                paragraph: { rows: (o == null ? void 0 : o.includes('inline')) ? 6 : 1 },
              }),
            );
          var Be = U()(h, { 'top-nav-menu': o === 'horizontal' });
          (Ne.props = e), e.openKeys === !1 && !e.handleOpenChange && (ee.current = M);
          var Ke = e.postMenuData ? e.postMenuData(C) : C;
          return Ke && (Ke == null ? void 0 : Ke.length) < 1
            ? null
            : a.createElement(
                Oe.Z,
                (0, q.Z)(
                  {},
                  nt,
                  {
                    key: 'Menu',
                    mode: o,
                    inlineIndent: 16,
                    defaultOpenKeys: ee.current,
                    theme: u,
                    selectedKeys: rt,
                    style: d,
                    className: Be,
                    onOpenChange: re,
                  },
                  e.menuProps,
                ),
                Ne.getNavMenuItems(Ke, !1),
              );
        };
      qe.defaultProps = {
        postMenuData: function (e) {
          return e || [];
        },
      };
      var Dt = qe,
        kt = D.Z.Sider,
        mt = function (e) {
          return typeof e == 'string'
            ? a.createElement('img', { src: e, alt: 'logo' })
            : typeof e == 'function'
            ? e()
            : e;
        },
        ht = function (e) {
          var u =
              arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'menuHeaderRender',
            o = e.logo,
            h = e.title,
            m = e.layout,
            d = e[u || ''];
          if (d === !1) return null;
          var C = mt(o),
            p = a.createElement('h1', null, h != null ? h : 'Ant Design Pro');
          return d
            ? d(C, e.collapsed ? null : p, e)
            : m === 'mix' && u === 'menuHeaderRender'
            ? null
            : a.createElement('a', null, C, e.collapsed ? null : p);
        },
        et = function (e) {
          return e ? a.createElement(Kt, null) : a.createElement(jt, null);
        },
        qt = function (e) {
          var u,
            o = e.collapsed,
            h = e.fixSiderbar,
            m = e.menuFooterRender,
            d = e.onCollapse,
            C = e.theme,
            p = e.siderWidth,
            M = e.isMobile,
            T = e.onMenuHeaderClick,
            _ = e.breakpoint,
            A = _ === void 0 ? 'lg' : _,
            B = e.style,
            H = e.layout,
            ee = e.menuExtraRender,
            k = ee === void 0 ? !1 : ee,
            ce = e.collapsedButtonRender,
            j = ce === void 0 ? et : ce,
            ye = e.links,
            le = e.menuContentRender,
            Re = e.prefixCls,
            we = e.onOpenChange,
            Fe = e.headerHeight,
            Ze = e.logoStyle,
            re = ''.concat(Re, '-sider'),
            xt = Le.useContainer(),
            Xe = xt.flatMenuKeys,
            rt = U()(
              ''.concat(re),
              ((u = {}),
              (0, I.Z)(u, ''.concat(re, '-fixed'), h),
              (0, I.Z)(u, ''.concat(re, '-layout-').concat(H), H && !M),
              (0, I.Z)(u, ''.concat(re, '-light'), C !== 'dark'),
              u),
            ),
            Ae = ht(e),
            nt = k && k(e),
            at =
              le !== !1 &&
              Xe &&
              a.createElement(
                Dt,
                (0, q.Z)({}, e, {
                  key: 'base-menu',
                  mode: 'inline',
                  handleOpenChange: we,
                  style: { width: '100%' },
                  className: ''.concat(re, '-menu'),
                }),
              ),
            it = le ? le(e, at) : at;
          return a.createElement(
            a.Fragment,
            null,
            h &&
              a.createElement('div', {
                style: (0, g.Z)(
                  {
                    width: o ? 48 : p,
                    overflow: 'hidden',
                    flex: '0 0 '.concat(o ? 48 : p, 'px'),
                    maxWidth: o ? 48 : p,
                    minWidth: o ? 48 : p,
                    transition:
                      'background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  },
                  B,
                ),
              }),
            a.createElement(
              kt,
              {
                collapsible: !0,
                trigger: null,
                collapsed: o,
                breakpoint: A === !1 ? void 0 : A,
                onCollapse: function (Be) {
                  M || d == null || d(Be);
                },
                collapsedWidth: 48,
                style: (0, g.Z)(
                  { overflow: 'hidden', paddingTop: H === 'mix' && !M ? Fe : void 0 },
                  B,
                ),
                width: p,
                theme: C,
                className: rt,
              },
              Ae &&
                a.createElement(
                  'div',
                  {
                    className: U()(
                      ''.concat(re, '-logo'),
                      (0, I.Z)({}, ''.concat(re, '-collapsed'), o),
                    ),
                    onClick: H !== 'mix' ? T : void 0,
                    id: 'logo',
                    style: Ze,
                  },
                  Ae,
                ),
              nt &&
                a.createElement(
                  'div',
                  {
                    className: ''
                      .concat(re, '-extra ')
                      .concat(!Ae && ''.concat(re, '-extra-no-logo')),
                  },
                  nt,
                ),
              a.createElement(
                'div',
                { style: { flex: 1, overflowY: 'auto', overflowX: 'hidden' } },
                it,
              ),
              a.createElement(
                'div',
                { className: ''.concat(re, '-links') },
                a.createElement(
                  Oe.Z,
                  {
                    theme: C,
                    inlineIndent: 16,
                    className: ''.concat(re, '-link-menu'),
                    selectedKeys: [],
                    openKeys: [],
                    mode: 'inline',
                  },
                  (ye || []).map(function (Ne, Be) {
                    return a.createElement(
                      Oe.Z.Item,
                      { className: ''.concat(re, '-link'), key: Be },
                      Ne,
                    );
                  }),
                  j &&
                    !M &&
                    a.createElement(
                      Oe.Z.Item,
                      {
                        className: ''.concat(re, '-collapsed-button'),
                        title: !1,
                        key: 'collapsed',
                        onClick: function () {
                          d && d(!o);
                        },
                      },
                      j(o),
                    ),
                ),
              ),
              m &&
                a.createElement(
                  'div',
                  {
                    className: U()(
                      ''.concat(re, '-footer'),
                      (0, I.Z)({}, ''.concat(re, '-footer-collapsed'), !o),
                    ),
                  },
                  m(e),
                ),
            ),
          );
        },
        It = qt,
        er = c(88857),
        Cr = c(35341),
        tr = c(13788),
        rr = ['rightContentRender', 'prefixCls'],
        nr = function (e) {
          var u = e.rightContentRender,
            o = e.prefixCls,
            h = (0, V.Z)(e, rr),
            m = (0, a.useState)('auto'),
            d = (0, z.Z)(m, 2),
            C = d[0],
            p = d[1],
            M = (0, tr.Z)(
              (function () {
                var T = (0, de.Z)(
                  Y().mark(function _(A) {
                    return Y().wrap(function (H) {
                      for (;;)
                        switch ((H.prev = H.next)) {
                          case 0:
                            p(A);
                          case 1:
                          case 'end':
                            return H.stop();
                        }
                    }, _);
                  }),
                );
                return function (_) {
                  return T.apply(this, arguments);
                };
              })(),
              [],
              160,
            );
          return a.createElement(
            'div',
            { className: ''.concat(o, '-right-content'), style: { minWidth: C } },
            a.createElement(
              'div',
              { style: { paddingRight: 8 } },
              a.createElement(
                er.Z,
                {
                  onResize: function (_) {
                    var A = _.width;
                    M.run(A);
                  },
                },
                u &&
                  a.createElement(
                    'div',
                    { className: ''.concat(o, '-right-content-resize') },
                    u((0, g.Z)((0, g.Z)({}, h), {}, { rightContentSize: C })),
                  ),
              ),
            ),
          );
        },
        ar = function (e) {
          var u = (0, a.useRef)(null),
            o = e.theme,
            h = e.onMenuHeaderClick,
            m = e.contentWidth,
            d = e.rightContentRender,
            C = e.className,
            p = e.style,
            M = e.layout,
            T = ''.concat(e.prefixCls || 'ant-pro', '-top-nav-header'),
            _ = ht(
              (0, g.Z)((0, g.Z)({}, e), {}, { collapsed: !1 }),
              M === 'mix' ? 'headerTitleRender' : void 0,
            ),
            A = U()(T, C, { light: o === 'light' });
          return a.createElement(
            'div',
            { className: A, style: p },
            a.createElement(
              'div',
              { ref: u, className: ''.concat(T, '-main ').concat(m === 'Fixed' ? 'wide' : '') },
              _ &&
                a.createElement(
                  'div',
                  { className: ''.concat(T, '-main-left'), onClick: h },
                  a.createElement(
                    'div',
                    { className: ''.concat(T, '-logo'), key: 'logo', id: 'logo' },
                    _,
                  ),
                ),
              a.createElement(
                'div',
                { style: { flex: 1 }, className: ''.concat(T, '-menu') },
                a.createElement(Dt, (0, q.Z)({}, e, e.menuProps)),
              ),
              d && a.createElement(nr, (0, q.Z)({ rightContentRender: d, prefixCls: T }, e)),
            ),
          );
        },
        gt = ar,
        tt = function (e, u) {
          return e === !1 ? null : e ? e(u, null) : u;
        },
        ir = function (e) {
          var u = e.isMobile,
            o = e.logo,
            h = e.collapsed,
            m = e.onCollapse,
            d = e.collapsedButtonRender,
            C = d === void 0 ? et : d,
            p = e.rightContentRender,
            M = e.menuHeaderRender,
            T = e.onMenuHeaderClick,
            _ = e.className,
            A = e.style,
            B = e.layout,
            H = e.children,
            ee = e.headerTheme,
            k = ee === void 0 ? 'dark' : ee,
            ce = e.splitMenus,
            j = e.menuData,
            ye = e.prefixCls,
            le = ''.concat(ye, '-global-header'),
            Re = U()(_, le, (0, I.Z)({}, ''.concat(le, '-layout-').concat(B), B && k === 'dark'));
          if (B === 'mix' && !u && ce) {
            var we = (j || []).map(function (re) {
                return (0, g.Z)((0, g.Z)({}, re), {}, { children: void 0, routes: void 0 });
              }),
              Fe = (0, ze.QX)(we);
            return a.createElement(
              gt,
              (0, q.Z)({ mode: 'horizontal' }, e, { splitMenus: !1, menuData: Fe, theme: k }),
            );
          }
          var Ze = a.createElement(
            'span',
            { className: ''.concat(le, '-logo'), key: 'logo' },
            a.createElement('a', null, mt(o)),
          );
          return a.createElement(
            'div',
            { className: Re, style: (0, g.Z)({}, A) },
            u && tt(M, Ze),
            u &&
              C &&
              a.createElement(
                'span',
                {
                  className: ''.concat(le, '-collapsed-button'),
                  onClick: function () {
                    m && m(!h);
                  },
                },
                C(h),
              ),
            B === 'mix' &&
              !u &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  'div',
                  { className: ''.concat(le, '-logo'), onClick: T },
                  ht((0, g.Z)((0, g.Z)({}, e), {}, { collapsed: !1 }), 'headerTitleRender'),
                ),
              ),
            a.createElement('div', { style: { flex: 1 } }, H),
            p && p(e),
          );
        },
        or = ir,
        yt = D.Z.Header,
        ur = (function (y) {
          (0, G.Z)(u, y);
          var e = (0, ue.Z)(u);
          function u() {
            var o;
            (0, Te.Z)(this, u);
            for (var h = arguments.length, m = new Array(h), d = 0; d < h; d++) m[d] = arguments[d];
            return (
              (o = e.call.apply(e, [this].concat(m))),
              (o.renderContent = function () {
                var C = o.props,
                  p = C.isMobile,
                  M = C.onCollapse,
                  T = C.navTheme,
                  _ = C.layout,
                  A = C.headerRender,
                  B = C.headerContentRender,
                  H = _ === 'top',
                  ee = (0, ze.QX)(o.props.menuData || []),
                  k = a.createElement(
                    or,
                    (0, q.Z)({ onCollapse: M }, o.props, { menuData: ee }),
                    B && B(o.props),
                  );
                return (
                  H &&
                    !p &&
                    (k = a.createElement(
                      gt,
                      (0, q.Z)({ theme: T, mode: 'horizontal', onCollapse: M }, o.props, {
                        menuData: ee,
                      }),
                    )),
                  A && typeof A == 'function' ? A(o.props, k) : k
                );
              }),
              o
            );
          }
          return (
            (0, Ee.Z)(u, [
              {
                key: 'render',
                value: function () {
                  var h,
                    m = this.props,
                    d = m.fixedHeader,
                    C = m.layout,
                    p = m.className,
                    M = m.style,
                    T = m.navTheme,
                    _ = m.collapsed,
                    A = m.siderWidth,
                    B = m.hasSiderMenu,
                    H = m.isMobile,
                    ee = m.prefixCls,
                    k = m.headerHeight,
                    ce = d || C === 'mix',
                    j = C === 'top',
                    ye = ce && B && !j && !H,
                    le = U()(
                      p,
                      ((h = {}),
                      (0, I.Z)(h, ''.concat(ee, '-fixed-header'), ce),
                      (0, I.Z)(h, ''.concat(ee, '-fixed-header-action'), !_),
                      (0, I.Z)(h, ''.concat(ee, '-top-menu'), j),
                      (0, I.Z)(h, ''.concat(ee, '-header-').concat(T), T && C !== 'mix'),
                      h),
                    ),
                    Re = C !== 'mix' && ye ? 'calc(100% - '.concat(_ ? 48 : A, 'px)') : '100%',
                    we = ce ? 0 : void 0;
                  return a.createElement(
                    a.Fragment,
                    null,
                    ce &&
                      a.createElement(yt, {
                        style: {
                          height: k,
                          lineHeight: ''.concat(k, 'px'),
                          background: 'transparent',
                        },
                      }),
                    a.createElement(
                      yt,
                      {
                        style: (0, g.Z)(
                          {
                            padding: 0,
                            height: k,
                            lineHeight: ''.concat(k, 'px'),
                            width: Re,
                            zIndex: C === 'mix' ? 100 : 19,
                            right: we,
                          },
                          M,
                        ),
                        className: le,
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
        fr = c(69121),
        t = c.n(fr),
        n = function (e, u, o) {
          if (o) {
            var h = (0, Ye.Z)(o.keys()).find(function (d) {
              return t()(d).test(e);
            });
            if (h) return o.get(h);
          }
          if (u) {
            var m = Object.keys(u).find(function (d) {
              return t()(d).test(e);
            });
            if (m) return u[m];
          }
          return { path: '' };
        },
        r = function (e, u) {
          var o = e.pathname,
            h = o === void 0 ? '/' : o,
            m = e.breadcrumb,
            d = e.breadcrumbMap,
            C = e.formatMessage,
            p = e.title,
            M = e.menu,
            T = M === void 0 ? { locale: !1 } : M,
            _ = u ? '' : p || '',
            A = n(h, m, d);
          if (!A) return { title: _, id: '', pageName: _ };
          var B = A.name;
          return (
            T.locale !== !1 &&
              A.locale &&
              C &&
              (B = C({ id: A.locale || '', defaultMessage: A.name })),
            B
              ? u || !p
                ? { title: B, id: A.locale || '', pageName: B }
                : { title: ''.concat(B, ' - ').concat(p), id: A.locale || '', pageName: B }
              : { title: _, id: A.locale || '', pageName: _ }
          );
        },
        i = function (e, u) {
          return r(e, u).title;
        },
        f = null,
        s = c(30325),
        l = c(52789),
        b = c(33119),
        E = c(53053),
        N = c(79198),
        F = function (e) {
          var u = e.isMobile,
            o = e.menuData,
            h = e.siderWidth,
            m = e.collapsed,
            d = e.onCollapse,
            C = e.style,
            p = e.className,
            M = e.hide,
            T = e.getContainer,
            _ = e.prefixCls,
            A = e.matchMenuKeys,
            B = Le.useContainer(),
            H = B.setFlatMenuKeys;
          (0, a.useEffect)(
            function () {
              if (!(!o || o.length < 1)) {
                var k = (0, pe.kv)(o);
                H(Object.keys(k));
              }
            },
            [A.join('-')],
          ),
            (0, a.useEffect)(
              function () {
                u === !0 && (d == null || d(!0));
              },
              [u],
            );
          var ee = (0, $.Z)(e, ['className', 'style']);
          return M
            ? null
            : u
            ? a.createElement(
                N.Z,
                {
                  visible: !m,
                  placement: 'left',
                  className: U()(''.concat(_, '-drawer-sider'), p),
                  onClose: function () {
                    return d == null ? void 0 : d(!0);
                  },
                  style: (0, g.Z)({ padding: 0, height: '100vh' }, C),
                  getContainer: T,
                  width: h,
                  bodyStyle: { height: '100vh', padding: 0, display: 'flex', flexDirection: 'row' },
                },
                a.createElement(
                  It,
                  (0, q.Z)({}, ee, {
                    className: U()(''.concat(_, '-sider'), p),
                    collapsed: u ? !1 : m,
                    splitMenus: !1,
                  }),
                ),
              )
            : a.createElement(
                It,
                (0, q.Z)({ className: U()(''.concat(_, '-sider'), p) }, ee, { style: C }),
              );
        },
        P = F;
      function L(y) {
        if (!y || y === '/') return ['/'];
        var e = y.split('/').filter(function (u) {
          return u;
        });
        return e.map(function (u, o) {
          return '/'.concat(e.slice(0, o + 1).join('/'));
        });
      }
      var J = function (e) {
          var u = e.breadcrumbName,
            o = e.path;
          return a.createElement('a', { href: o }, u);
        },
        xe = function (e, u) {
          var o = u.formatMessage,
            h = u.menu;
          return e.locale && o && (h == null ? void 0 : h.locale) !== !1
            ? o({ id: e.locale, defaultMessage: e.name })
            : e.name;
        },
        be = function (e, u) {
          var o = e.get(u);
          if (!o) {
            var h = Array.from(e.keys()) || [],
              m = h.find(function (d) {
                return t()(d.replace('?', '')).test(u);
              });
            m && (o = e.get(m));
          }
          return o || { path: '' };
        },
        W = function (e) {
          var u = e.location,
            o = e.breadcrumbMap;
          return { location: u, breadcrumbMap: o };
        },
        ge = function (e, u, o) {
          var h = L(e == null ? void 0 : e.pathname),
            m = h
              .map(function (d) {
                var C = be(u, d),
                  p = xe(C, o),
                  M = C.hideInBreadcrumb;
                return p && !M
                  ? { path: d, breadcrumbName: p, component: C.component }
                  : { path: '', breadcrumbName: '' };
              })
              .filter(function (d) {
                return d && d.path;
              });
          return m;
        },
        me = function (e) {
          var u = W(e),
            o = u.location,
            h = u.breadcrumbMap;
          return o && o.pathname && h ? ge(o, h, e) : [];
        },
        se = function (e, u) {
          var o = e.breadcrumbRender,
            h = e.itemRender,
            m = u.breadcrumbProps || {},
            d = m.minLength,
            C = d === void 0 ? 2 : d,
            p = me(e),
            M = h || J,
            T = p;
          return (
            o && (T = o(T) || []),
            ((T && T.length < C) || o === !1) && (T = void 0),
            { routes: T, itemRender: M }
          );
        };
      function Me(y) {
        return (0, Ye.Z)(y).reduce(function (e, u) {
          var o = (0, z.Z)(u, 2),
            h = o[0],
            m = o[1];
          return (e[h] = m), e;
        }, {});
      }
      var _e = function y(e, u, o, h) {
          var m = (0, pe.Un)(e, (u == null ? void 0 : u.locale) || !1, o, !0),
            d = m.menuData,
            C = m.breadcrumb;
          return h ? y(h(d), u, o, void 0) : { breadcrumb: Me(C), breadcrumbMap: C, menuData: d };
        },
        Pe = _e,
        Ve = c(66278),
        pt = c(95443),
        cr = c(15489),
        sr = function (e) {
          var u = e.style,
            o = e.className,
            h = e.children,
            m = e.ErrorBoundary || cr.Z;
          return a.createElement(
            pt.oK,
            { autoClearCache: !0 },
            e.ErrorBoundary === !1
              ? a.createElement(D.Z.Content, { className: o, style: u }, h)
              : a.createElement(
                  m,
                  null,
                  a.createElement(D.Z.Content, { className: o, style: u }, h),
                ),
          );
        },
        _r = sr,
        Fr = function (e) {
          var u = ['sidemenu', 'topmenu'];
          return u.includes(e) ? (e == null ? void 0 : e.replace('menu', '')) : e;
        },
        Br = Fr,
        Kr = c(12346),
        Hr = c(42731),
        Wr = function (e) {
          var u = (0, a.useState)({}),
            o = (0, z.Z)(u, 2),
            h = o[0],
            m = o[1];
          return (
            (0, a.useEffect)(
              function () {
                m(
                  (0, Hr.Z)({
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
            h
          );
        },
        jr = Wr,
        Ur = ['id', 'defaultMessage'],
        $r = ['fixSiderbar', 'navTheme', 'layout'],
        Er = 0,
        zr = function (e, u) {
          return e.headerRender === !1 || e.pure
            ? null
            : a.createElement(lr, (0, q.Z)({ matchMenuKeys: u }, e));
        },
        Gr = function (e) {
          return e.footerRender === !1 || e.pure
            ? null
            : e.footerRender
            ? e.footerRender((0, g.Z)({}, e), a.createElement(l.Z, null))
            : null;
        },
        Vr = function (e, u) {
          var o = e.layout,
            h = e.navTheme,
            m = e.isMobile,
            d = e.openKeys,
            C = e.splitMenus,
            p = e.menuRender;
          if (e.menuRender === !1 || e.pure) return null;
          var M = e.menuData;
          if (C && (d !== !1 || o === 'mix') && !m) {
            var T = (0, z.Z)(u, 1),
              _ = T[0];
            if (_) {
              var A, B;
              M =
                ((A = e.menuData) === null ||
                A === void 0 ||
                (B = A.find(function (k) {
                  return k.key === _;
                })) === null ||
                B === void 0
                  ? void 0
                  : B.routes) || [];
            } else M = [];
          }
          var H = (0, ze.QX)(M || []);
          if (H && (H == null ? void 0 : H.length) < 1 && C) return null;
          if (o === 'top' && !m)
            return a.createElement(P, (0, q.Z)({ matchMenuKeys: u }, e, { hide: !0 }));
          var ee = a.createElement(
            P,
            (0, q.Z)({ matchMenuKeys: u }, e, {
              style: h === 'realDark' ? { boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)' } : {},
              menuData: H,
            }),
          );
          return p ? p(e, ee) : ee;
        },
        Xr = function (e, u) {
          var o = u.pageTitleRender,
            h = r(e);
          if (o === !1) return { title: u.title || '', id: '', pageName: '' };
          if (o) {
            var m = o(e, h.title, h);
            if (typeof m == 'string') return (0, g.Z)((0, g.Z)({}, h), {}, { title: m });
            X()(
              typeof m == 'string',
              'pro-layout: renderPageTitle return value should be a string',
            );
          }
          return h;
        },
        Qr = function (e, u, o) {
          return e ? (u ? 48 : o) : 0;
        },
        Mr = function (e) {
          var u,
            o,
            h,
            m,
            d = e || {},
            C = d.children,
            p = d.onCollapse,
            M = d.location,
            T = M === void 0 ? { pathname: '/' } : M,
            _ = d.contentStyle,
            A = d.route,
            B = d.defaultCollapsed,
            H = d.style,
            ee = d.disableContentMargin,
            k = d.siderWidth,
            ce = k === void 0 ? 208 : k,
            j = d.menu,
            ye = d.isChildrenLayout,
            le = d.menuDataRender,
            Re = d.actionRef,
            we = d.formatMessage,
            Fe = d.loading,
            Ze = (0, a.useContext)(ve.ZP.ConfigContext),
            re = (u = e.prefixCls) !== null && u !== void 0 ? u : Ze.getPrefixCls('pro'),
            xt = (0, v.Z)(!1, {
              value: j == null ? void 0 : j.loading,
              onChange: j == null ? void 0 : j.onLoadingChange,
            }),
            Xe = (0, z.Z)(xt, 2),
            rt = Xe[0],
            Ae = Xe[1],
            nt = (0, a.useState)(function () {
              return (Er += 1), 'pro-layout-'.concat(Er);
            }),
            at = (0, z.Z)(nt, 1),
            it = at[0],
            Ne = (0, a.useCallback)(
              function (Se) {
                var ut = Se.id,
                  Ft = Se.defaultMessage,
                  pr = (0, V.Z)(Se, Ur);
                if (we) return we((0, g.Z)({ id: ut, defaultMessage: Ft }, pr));
                var lt = (0, s.e)();
                return lt[ut] ? lt[ut] : Ft;
              },
              [we],
            ),
            Be = (0, ie.ZP)(
              function () {
                return (j == null ? void 0 : j.params)
                  ? [it, j == null ? void 0 : j.params]
                  : [it, {}];
              },
              (function () {
                var Se = (0, de.Z)(
                  Y().mark(function ut(Ft, pr) {
                    var lt, Lr;
                    return Y().wrap(function (ft) {
                      for (;;)
                        switch ((ft.prev = ft.next)) {
                          case 0:
                            return (
                              Ae(!0),
                              (ft.next = 3),
                              j == null || (lt = j.request) === null || lt === void 0
                                ? void 0
                                : lt.call(j, pr, (A == null ? void 0 : A.routes) || [])
                            );
                          case 3:
                            return (Lr = ft.sent), Ae(!1), ft.abrupt('return', Lr);
                          case 6:
                          case 'end':
                            return ft.stop();
                        }
                    }, ut);
                  }),
                );
                return function (ut, Ft) {
                  return Se.apply(this, arguments);
                };
              })(),
              { revalidateOnFocus: !1, shouldRetryOnError: !1, revalidateOnReconnect: !1 },
            ),
            Ke = Be.data,
            Qe = Be.mutate,
            en = (0, a.useMemo)(
              function () {
                return Pe(Ke || (A == null ? void 0 : A.routes) || [], j, Ne, le);
              },
              [Ne, j, le, Ke, A == null ? void 0 : A.routes],
            ),
            dr = en || {},
            Rr = dr.breadcrumb,
            tn = Rr === void 0 ? {} : Rr,
            Sr = dr.breadcrumbMap,
            Zr = dr.menuData,
            bt = Zr === void 0 ? [] : Zr;
          Re &&
            (j == null ? void 0 : j.request) &&
            (Re.current = {
              reload: function () {
                Qe();
              },
            });
          var Ct = (0, a.useMemo)(
              function () {
                return (0, pe.nG)(T.pathname || '/', bt || [], !0);
              },
              [T.pathname, bt],
            ),
            vr = (0, a.useMemo)(
              function () {
                return Array.from(
                  new Set(
                    Ct.map(function (Se) {
                      return Se.key || Se.path || '';
                    }),
                  ),
                );
              },
              [Ct],
            ),
            Or = Ct[Ct.length - 1] || {},
            Pr = jr(Or),
            Lt = (0, g.Z)((0, g.Z)({}, e), Pr),
            rn = Lt.fixSiderbar,
            wr = Lt.navTheme,
            nn = Lt.layout,
            an = (0, V.Z)(Lt, $r),
            Et = Br(nn),
            _t = (0, S.ZP)(),
            Mt = (_t === 'sm' || _t === 'xs') && !e.disableMobile,
            on = Et !== 'top' && !Mt,
            un = (0, x.Z)(
              function () {
                return B || !1;
              },
              { value: e.collapsed, onChange: p },
            ),
            Tr = (0, z.Z)(un, 2),
            Rt = Tr[0],
            Nr = Tr[1],
            ot = (0, $.Z)(
              (0, g.Z)(
                (0, g.Z)((0, g.Z)({ prefixCls: re }, e), {}, { siderWidth: ce }, Pr),
                {},
                {
                  formatMessage: Ne,
                  breadcrumb: tn,
                  menu: (0, g.Z)((0, g.Z)({}, j), {}, { loading: rt }),
                  layout: Et,
                },
              ),
              ['className', 'style', 'breadcrumbRender'],
            ),
            mr = Xr((0, g.Z)((0, g.Z)({ pathname: T.pathname }, ot), {}, { breadcrumbMap: Sr }), e),
            ln = se(
              (0, g.Z)(
                (0, g.Z)({}, ot),
                {},
                { breadcrumbRender: e.breadcrumbRender, breadcrumbMap: Sr },
              ),
              e,
            ),
            hr = Vr(
              (0, g.Z)(
                (0, g.Z)({}, ot),
                {},
                {
                  menuData: bt,
                  onCollapse: Nr,
                  isMobile: Mt,
                  theme: wr === 'dark' ? 'dark' : 'light',
                  collapsed: Rt,
                },
              ),
              vr,
            ),
            gr = zr(
              (0, g.Z)(
                (0, g.Z)({}, ot),
                {},
                {
                  hasSiderMenu: !!hr,
                  menuData: bt,
                  isMobile: Mt,
                  collapsed: Rt,
                  onCollapse: Nr,
                  theme: wr === 'dark' ? 'dark' : 'light',
                },
              ),
              vr,
            ),
            Ar = Gr((0, g.Z)({ isMobile: Mt, collapsed: Rt }, ot)),
            fn = (0, a.useContext)(b.Z),
            cn = fn.isChildrenLayout,
            yr = ye !== void 0 ? ye : cn,
            He = ''.concat(re, '-basicLayout'),
            sn = U()(
              e.className,
              'ant-design-pro',
              He,
              ((o = {}),
              (0, I.Z)(o, 'screen-'.concat(_t), _t),
              (0, I.Z)(o, ''.concat(He, '-top-menu'), Et === 'top'),
              (0, I.Z)(o, ''.concat(He, '-is-children'), yr),
              (0, I.Z)(o, ''.concat(He, '-fix-siderbar'), rn),
              (0, I.Z)(o, ''.concat(He, '-').concat(Et), Et),
              o),
            ),
            dn = Qr(!!on, Rt, ce),
            Dr = { position: 'relative' };
          (yr || (_ && _.minHeight)) && (Dr.minHeight = 0);
          var vn = U()(
            ''.concat(He, '-content'),
            ((h = {}),
            (0, I.Z)(h, ''.concat(He, '-has-header'), gr),
            (0, I.Z)(h, ''.concat(He, '-content-disable-margin'), ee),
            h),
          );
          (0, a.useEffect)(
            function () {
              var Se;
              (Se = e.onPageChange) === null || Se === void 0 || Se.call(e, e.location);
            },
            [T.pathname, (m = T.pathname) === null || m === void 0 ? void 0 : m.search],
          );
          var mn = (0, a.useState)(!1),
            Ir = (0, z.Z)(mn, 2),
            hn = Ir[0],
            gn = Ir[1];
          return (
            te(mr, e.title || !1),
            a.createElement(
              Le.Provider,
              null,
              a.createElement(
                b.Z.Provider,
                {
                  value: (0, g.Z)(
                    (0, g.Z)({}, ot),
                    {},
                    {
                      breadcrumb: ln,
                      menuData: bt,
                      isMobile: Mt,
                      collapsed: Rt,
                      isChildrenLayout: !0,
                      title: mr.pageName,
                      hasSiderMenu: !!hr,
                      hasHeader: !!gr,
                      siderWidth: dn,
                      hasFooter: !!Ar,
                      hasFooterToolbar: hn,
                      setHasFooterToolbar: gn,
                      pageTitleInfo: mr,
                      matchMenus: Ct,
                      matchMenuKeys: vr,
                      currentMenu: Or,
                    },
                  ),
                },
                e.pure
                  ? a.createElement(pt.oK, { autoClearCache: !0 }, C)
                  : a.createElement(
                      'div',
                      { className: sn },
                      a.createElement(
                        D.Z,
                        { style: (0, g.Z)({ minHeight: '100%' }, H) },
                        hr,
                        a.createElement(
                          'div',
                          { style: Dr, className: Ze.getPrefixCls('layout') },
                          gr,
                          a.createElement(
                            _r,
                            (0, q.Z)({ isChildrenLayout: yr }, an, { className: vn, style: _ }),
                            Fe ? a.createElement(Ve.Z, null) : C,
                          ),
                          Ar,
                        ),
                      ),
                    ),
              ),
            )
          );
        },
        Jr = function () {
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
      Mr.defaultProps = (0, g.Z)(
        (0, g.Z)({ logo: a.createElement(Jr, null) }, st.Z),
        {},
        { location: (0, O.Z)() ? window.location : void 0 },
      );
      var Yr = Mr,
        kr = c(88430),
        yn = kr.ZP,
        qr = Yr;
    },
    15489: function (Ce, he, c) {
      'use strict';
      var w = c(90998),
        D = c(4846),
        I = c(3359),
        K = c(29860),
        Y = c(54855),
        de = c(71512),
        V = c(59301),
        ae = (function (ve) {
          (0, Y.Z)(g, ve);
          var z = (0, de.Z)(g);
          function g() {
            var q;
            (0, I.Z)(this, g);
            for (var Z = arguments.length, a = new Array(Z), R = 0; R < Z; R++) a[R] = arguments[R];
            return (
              (q = z.call.apply(z, [this].concat(a))),
              (q.state = { hasError: !1, errorInfo: '' }),
              q
            );
          }
          return (
            (0, K.Z)(
              g,
              [
                {
                  key: 'componentDidCatch',
                  value: function (Z, a) {
                    console.log(Z, a);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.state.hasError
                      ? V.createElement(D.ZP, {
                          status: 'error',
                          title: 'Something went wrong.',
                          extra: this.state.errorInfo,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (Z) {
                    return { hasError: !0, errorInfo: Z.message };
                  },
                },
              ],
            ),
            g
          );
        })(V.Component);
      he.Z = ae;
    },
    79258: function () {},
    54938: function () {},
    2080: function () {},
    87614: function () {},
    35341: function () {},
    52372: function (Ce, he, c) {
      'use strict';
      c.d(he, {
        kv: function () {
          return yt;
        },
        nG: function () {
          return fr;
        },
        Un: function () {
          return ar;
        },
      });
      var w = c(93925),
        D = c.n(w),
        I =
          Number.isNaN ||
          function (n) {
            return typeof n == 'number' && n !== n;
          };
      function K(t, n) {
        return !!(t === n || (I(t) && I(n)));
      }
      function Y(t, n) {
        if (t.length !== n.length) return !1;
        for (var r = 0; r < t.length; r++) if (!K(t[r], n[r])) return !1;
        return !0;
      }
      function de(t, n) {
        n === void 0 && (n = Y);
        var r,
          i = [],
          f,
          s = !1;
        function l() {
          for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
          return (
            (s && r === this && n(b, i)) || ((f = t.apply(this, b)), (s = !0), (r = this), (i = b)),
            f
          );
        }
        return l;
      }
      var V = de;
      function ae(t) {
        for (var n = [], r = 0; r < t.length; ) {
          var i = t[r];
          if (i === '*' || i === '+' || i === '?') {
            n.push({ type: 'MODIFIER', index: r, value: t[r++] });
            continue;
          }
          if (i === '\\') {
            n.push({ type: 'ESCAPED_CHAR', index: r++, value: t[r++] });
            continue;
          }
          if (i === '{') {
            n.push({ type: 'OPEN', index: r, value: t[r++] });
            continue;
          }
          if (i === '}') {
            n.push({ type: 'CLOSE', index: r, value: t[r++] });
            continue;
          }
          if (i === ':') {
            for (var f = '', s = r + 1; s < t.length; ) {
              var l = t.charCodeAt(s);
              if (
                (l >= 48 && l <= 57) ||
                (l >= 65 && l <= 90) ||
                (l >= 97 && l <= 122) ||
                l === 95
              ) {
                f += t[s++];
                continue;
              }
              break;
            }
            if (!f) throw new TypeError('Missing parameter name at ' + r);
            n.push({ type: 'NAME', index: r, value: f }), (r = s);
            continue;
          }
          if (i === '(') {
            var b = 1,
              E = '',
              s = r + 1;
            if (t[s] === '?') throw new TypeError('Pattern cannot start with "?" at ' + s);
            for (; s < t.length; ) {
              if (t[s] === '\\') {
                E += t[s++] + t[s++];
                continue;
              }
              if (t[s] === ')') {
                if ((b--, b === 0)) {
                  s++;
                  break;
                }
              } else if (t[s] === '(' && (b++, t[s + 1] !== '?'))
                throw new TypeError('Capturing groups are not allowed at ' + s);
              E += t[s++];
            }
            if (b) throw new TypeError('Unbalanced pattern at ' + r);
            if (!E) throw new TypeError('Missing pattern at ' + r);
            n.push({ type: 'PATTERN', index: r, value: E }), (r = s);
            continue;
          }
          n.push({ type: 'CHAR', index: r, value: t[r++] });
        }
        return n.push({ type: 'END', index: r, value: '' }), n;
      }
      function ve(t, n) {
        n === void 0 && (n = {});
        for (
          var r = ae(t),
            i = n.prefixes,
            f = i === void 0 ? './' : i,
            s = '[^' + a(n.delimiter || '/#?') + ']+?',
            l = [],
            b = 0,
            E = 0,
            N = '',
            F = function (Pe) {
              if (E < r.length && r[E].type === Pe) return r[E++].value;
            },
            P = function (Pe) {
              var Ve = F(Pe);
              if (Ve !== void 0) return Ve;
              var pt = r[E],
                cr = pt.type,
                sr = pt.index;
              throw new TypeError('Unexpected ' + cr + ' at ' + sr + ', expected ' + Pe);
            },
            L = function () {
              for (var Pe = '', Ve; (Ve = F('CHAR') || F('ESCAPED_CHAR')); ) Pe += Ve;
              return Pe;
            };
          E < r.length;

        ) {
          var J = F('CHAR'),
            xe = F('NAME'),
            be = F('PATTERN');
          if (xe || be) {
            var W = J || '';
            f.indexOf(W) === -1 && ((N += W), (W = '')),
              N && (l.push(N), (N = '')),
              l.push({
                name: xe || b++,
                prefix: W,
                suffix: '',
                pattern: be || s,
                modifier: F('MODIFIER') || '',
              });
            continue;
          }
          var ge = J || F('ESCAPED_CHAR');
          if (ge) {
            N += ge;
            continue;
          }
          N && (l.push(N), (N = ''));
          var me = F('OPEN');
          if (me) {
            var W = L(),
              se = F('NAME') || '',
              Me = F('PATTERN') || '',
              _e = L();
            P('CLOSE'),
              l.push({
                name: se || (Me ? b++ : ''),
                pattern: se && !Me ? s : Me,
                prefix: W,
                suffix: _e,
                modifier: F('MODIFIER') || '',
              });
            continue;
          }
          P('END');
        }
        return l;
      }
      function z(t, n) {
        return g(ve(t, n), n);
      }
      function g(t, n) {
        n === void 0 && (n = {});
        var r = R(n),
          i = n.encode,
          f =
            i === void 0
              ? function (E) {
                  return E;
                }
              : i,
          s = n.validate,
          l = s === void 0 ? !0 : s,
          b = t.map(function (E) {
            if (typeof E == 'object') return new RegExp('^(?:' + E.pattern + ')$', r);
          });
        return function (E) {
          for (var N = '', F = 0; F < t.length; F++) {
            var P = t[F];
            if (typeof P == 'string') {
              N += P;
              continue;
            }
            var L = E ? E[P.name] : void 0,
              J = P.modifier === '?' || P.modifier === '*',
              xe = P.modifier === '*' || P.modifier === '+';
            if (Array.isArray(L)) {
              if (!xe)
                throw new TypeError('Expected "' + P.name + '" to not repeat, but got an array');
              if (L.length === 0) {
                if (J) continue;
                throw new TypeError('Expected "' + P.name + '" to not be empty');
              }
              for (var be = 0; be < L.length; be++) {
                var W = f(L[be], P);
                if (l && !b[F].test(W))
                  throw new TypeError(
                    'Expected all "' +
                      P.name +
                      '" to match "' +
                      P.pattern +
                      '", but got "' +
                      W +
                      '"',
                  );
                N += P.prefix + W + P.suffix;
              }
              continue;
            }
            if (typeof L == 'string' || typeof L == 'number') {
              var W = f(String(L), P);
              if (l && !b[F].test(W))
                throw new TypeError(
                  'Expected "' + P.name + '" to match "' + P.pattern + '", but got "' + W + '"',
                );
              N += P.prefix + W + P.suffix;
              continue;
            }
            if (!J) {
              var ge = xe ? 'an array' : 'a string';
              throw new TypeError('Expected "' + P.name + '" to be ' + ge);
            }
          }
          return N;
        };
      }
      function q(t, n) {
        var r = [],
          i = S(t, r, n);
        return Z(i, r, n);
      }
      function Z(t, n, r) {
        r === void 0 && (r = {});
        var i = r.decode,
          f =
            i === void 0
              ? function (s) {
                  return s;
                }
              : i;
        return function (s) {
          var l = t.exec(s);
          if (!l) return !1;
          for (
            var b = l[0],
              E = l.index,
              N = Object.create(null),
              F = function (L) {
                if (l[L] === void 0) return 'continue';
                var J = n[L - 1];
                J.modifier === '*' || J.modifier === '+'
                  ? (N[J.name] = l[L].split(J.prefix + J.suffix).map(function (xe) {
                      return f(xe, J);
                    }))
                  : (N[J.name] = f(l[L], J));
              },
              P = 1;
            P < l.length;
            P++
          )
            F(P);
          return { path: b, index: E, params: N };
        };
      }
      function a(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function R(t) {
        return t && t.sensitive ? '' : 'i';
      }
      function U(t, n) {
        if (!n) return t;
        var r = t.source.match(/\((?!\?)/g);
        if (r)
          for (var i = 0; i < r.length; i++)
            n.push({ name: i, prefix: '', suffix: '', modifier: '', pattern: '' });
        return t;
      }
      function ne(t, n, r) {
        var i = t.map(function (f) {
          return S(f, n, r).source;
        });
        return new RegExp('(?:' + i.join('|') + ')', R(r));
      }
      function X(t, n, r) {
        return x(ve(t, r), n, r);
      }
      function x(t, n, r) {
        r === void 0 && (r = {});
        for (
          var i = r.strict,
            f = i === void 0 ? !1 : i,
            s = r.start,
            l = s === void 0 ? !0 : s,
            b = r.end,
            E = b === void 0 ? !0 : b,
            N = r.encode,
            F =
              N === void 0
                ? function (Pe) {
                    return Pe;
                  }
                : N,
            P = '[' + a(r.endsWith || '') + ']|$',
            L = '[' + a(r.delimiter || '/#?') + ']',
            J = l ? '^' : '',
            xe = 0,
            be = t;
          xe < be.length;
          xe++
        ) {
          var W = be[xe];
          if (typeof W == 'string') J += a(F(W));
          else {
            var ge = a(F(W.prefix)),
              me = a(F(W.suffix));
            if (W.pattern)
              if ((n && n.push(W), ge || me))
                if (W.modifier === '+' || W.modifier === '*') {
                  var se = W.modifier === '*' ? '?' : '';
                  J +=
                    '(?:' +
                    ge +
                    '((?:' +
                    W.pattern +
                    ')(?:' +
                    me +
                    ge +
                    '(?:' +
                    W.pattern +
                    '))*)' +
                    me +
                    ')' +
                    se;
                } else J += '(?:' + ge + '(' + W.pattern + ')' + me + ')' + W.modifier;
              else J += '(' + W.pattern + ')' + W.modifier;
            else J += '(?:' + ge + me + ')' + W.modifier;
          }
        }
        if (E) f || (J += L + '?'), (J += r.endsWith ? '(?=' + P + ')' : '$');
        else {
          var Me = t[t.length - 1],
            _e = typeof Me == 'string' ? L.indexOf(Me[Me.length - 1]) > -1 : Me === void 0;
          f || (J += '(?:' + L + '(?=' + P + '))?'), _e || (J += '(?=' + L + '|' + P + ')');
        }
        return new RegExp(J, R(r));
      }
      function S(t, n, r) {
        return t instanceof RegExp ? U(t, n) : Array.isArray(t) ? ne(t, n, r) : X(t, n, r);
      }
      function v(t, n) {
        return (n >>> t) | (n << (32 - t));
      }
      function O(t, n, r) {
        return (t & n) ^ (~t & r);
      }
      function Q(t, n, r) {
        return (t & n) ^ (t & r) ^ (n & r);
      }
      function te(t) {
        return v(2, t) ^ v(13, t) ^ v(22, t);
      }
      function $(t) {
        return v(6, t) ^ v(11, t) ^ v(25, t);
      }
      function ie(t) {
        return v(7, t) ^ v(18, t) ^ (t >>> 3);
      }
      function pe(t) {
        return v(17, t) ^ v(19, t) ^ (t >>> 10);
      }
      function Te(t, n) {
        return (t[n & 15] += pe(t[(n + 14) & 15]) + t[(n + 9) & 15] + ie(t[(n + 1) & 15]));
      }
      var Ee = [
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
        G,
        ue,
        oe,
        St = '0123456789abcdef';
      function ct(t, n) {
        var r = (t & 65535) + (n & 65535),
          i = (t >> 16) + (n >> 16) + (r >> 16);
        return (i << 16) | (r & 65535);
      }
      function Oe() {
        (G = new Array(8)),
          (ue = new Array(2)),
          (oe = new Array(64)),
          (ue[0] = ue[1] = 0),
          (G[0] = 1779033703),
          (G[1] = 3144134277),
          (G[2] = 1013904242),
          (G[3] = 2773480762),
          (G[4] = 1359893119),
          (G[5] = 2600822924),
          (G[6] = 528734635),
          (G[7] = 1541459225);
      }
      function De() {
        var t,
          n,
          r,
          i,
          f,
          s,
          l,
          b,
          E,
          N,
          F = new Array(16);
        (t = G[0]),
          (n = G[1]),
          (r = G[2]),
          (i = G[3]),
          (f = G[4]),
          (s = G[5]),
          (l = G[6]),
          (b = G[7]);
        for (var P = 0; P < 16; P++)
          F[P] =
            oe[(P << 2) + 3] |
            (oe[(P << 2) + 2] << 8) |
            (oe[(P << 2) + 1] << 16) |
            (oe[P << 2] << 24);
        for (var L = 0; L < 64; L++)
          (E = b + $(f) + O(f, s, l) + Ee[L]),
            L < 16 ? (E += F[L]) : (E += Te(F, L)),
            (N = te(t) + Q(t, n, r)),
            (b = l),
            (l = s),
            (s = f),
            (f = ct(i, E)),
            (i = r),
            (r = n),
            (n = t),
            (t = ct(E, N));
        (G[0] += t),
          (G[1] += n),
          (G[2] += r),
          (G[3] += i),
          (G[4] += f),
          (G[5] += s),
          (G[6] += l),
          (G[7] += b);
      }
      function Je(t, n) {
        var r,
          i,
          f = 0;
        i = (ue[0] >> 3) & 63;
        var s = n & 63;
        for ((ue[0] += n << 3) < n << 3 && ue[1]++, ue[1] += n >> 29, r = 0; r + 63 < n; r += 64) {
          for (var l = i; l < 64; l++) oe[l] = t.charCodeAt(f++);
          De(), (i = 0);
        }
        for (var b = 0; b < s; b++) oe[b] = t.charCodeAt(f++);
      }
      function Zt() {
        var t = (ue[0] >> 3) & 63;
        if (((oe[t++] = 128), t <= 56)) for (var n = t; n < 56; n++) oe[n] = 0;
        else {
          for (var r = t; r < 64; r++) oe[r] = 0;
          De();
          for (var i = 0; i < 56; i++) oe[i] = 0;
        }
        (oe[56] = (ue[1] >>> 24) & 255),
          (oe[57] = (ue[1] >>> 16) & 255),
          (oe[58] = (ue[1] >>> 8) & 255),
          (oe[59] = ue[1] & 255),
          (oe[60] = (ue[0] >>> 24) & 255),
          (oe[61] = (ue[0] >>> 16) & 255),
          (oe[62] = (ue[0] >>> 8) & 255),
          (oe[63] = ue[0] & 255),
          De();
      }
      function Bt() {
        for (var t = 0, n = new Array(32), r = 0; r < 8; r++)
          (n[t++] = (G[r] >>> 24) & 255),
            (n[t++] = (G[r] >>> 16) & 255),
            (n[t++] = (G[r] >>> 8) & 255),
            (n[t++] = G[r] & 255);
        return n;
      }
      function Kt() {
        for (var t = new String(), n = 0; n < 8; n++)
          for (var r = 28; r >= 0; r -= 4) t += St.charAt((G[n] >>> r) & 15);
        return t;
      }
      function Ht(t) {
        return Oe(), Je(t, t.length), Zt(), Kt();
      }
      var Wt = Ht;
      function We(t) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (We = function (r) {
                return typeof r;
              })
            : (We = function (r) {
                return r &&
                  typeof Symbol == 'function' &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? 'symbol'
                  : typeof r;
              }),
          We(t)
        );
      }
      var jt = ['pro_layout_parentKeys', 'routes', 'children', 'icon', 'flatMenu', 'indexRoute'];
      function xr(t, n) {
        return Ye(t) || Ut(t, n) || dt(t, n) || br();
      }
      function br() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ut(t, n) {
        var r =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (r != null) {
          var i = [],
            f = !0,
            s = !1,
            l,
            b;
          try {
            for (
              r = r.call(t);
              !(f = (l = r.next()).done) && (i.push(l.value), !(n && i.length === n));
              f = !0
            );
          } catch (E) {
            (s = !0), (b = E);
          } finally {
            try {
              !f && r.return != null && r.return();
            } finally {
              if (s) throw b;
            }
          }
          return i;
        }
      }
      function Ye(t) {
        if (Array.isArray(t)) return t;
      }
      function $t(t, n) {
        var r = (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (!r) {
          if (Array.isArray(t) || (r = dt(t)) || (n && t && typeof t.length == 'number')) {
            r && (t = r);
            var i = 0,
              f = function () {};
            return {
              s: f,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (N) {
                throw N;
              },
              f,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var s = !0,
          l = !1,
          b;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var N = r.next();
            return (s = N.done), N;
          },
          e: function (N) {
            (l = !0), (b = N);
          },
          f: function () {
            try {
              !s && r.return != null && r.return();
            } finally {
              if (l) throw b;
            }
          },
        };
      }
      function ke(t, n) {
        if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
      }
      function Ot(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function Pt(t, n, r) {
        return n && Ot(t.prototype, n), r && Ot(t, r), t;
      }
      function wt(t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && Ue(t, n);
      }
      function zt(t) {
        var n = Nt();
        return function () {
          var i = $e(t),
            f;
          if (n) {
            var s = $e(this).constructor;
            f = Reflect.construct(i, arguments, s);
          } else f = i.apply(this, arguments);
          return Tt(this, f);
        };
      }
      function Tt(t, n) {
        if (n && (We(n) === 'object' || typeof n == 'function')) return n;
        if (n !== void 0)
          throw new TypeError('Derived constructors may only return object or undefined');
        return Gt(t);
      }
      function Gt(t) {
        if (t === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function Ie(t) {
        var n = typeof Map == 'function' ? new Map() : void 0;
        return (
          (Ie = function (i) {
            if (i === null || !At(i)) return i;
            if (typeof i != 'function')
              throw new TypeError('Super expression must either be null or a function');
            if (typeof n != 'undefined') {
              if (n.has(i)) return n.get(i);
              n.set(i, f);
            }
            function f() {
              return je(i, arguments, $e(this).constructor);
            }
            return (
              (f.prototype = Object.create(i.prototype, {
                constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
              })),
              Ue(f, i)
            );
          }),
          Ie(t)
        );
      }
      function je(t, n, r) {
        return (
          Nt()
            ? (je = Reflect.construct)
            : (je = function (f, s, l) {
                var b = [null];
                b.push.apply(b, s);
                var E = Function.bind.apply(f, b),
                  N = new E();
                return l && Ue(N, l.prototype), N;
              }),
          je.apply(null, arguments)
        );
      }
      function Nt() {
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
      function Ue(t, n) {
        return (
          (Ue =
            Object.setPrototypeOf ||
            function (i, f) {
              return (i.__proto__ = f), i;
            }),
          Ue(t, n)
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
      function st(t) {
        return Xt(t) || Vt(t) || dt(t) || ze();
      }
      function ze() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function dt(t, n) {
        if (!!t) {
          if (typeof t == 'string') return Le(t, n);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (r === 'Object' && t.constructor && (r = t.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(t);
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Le(t, n);
        }
      }
      function Vt(t) {
        if ((typeof Symbol != 'undefined' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
          return Array.from(t);
      }
      function Xt(t) {
        if (Array.isArray(t)) return Le(t);
      }
      function Le(t, n) {
        (n == null || n > t.length) && (n = t.length);
        for (var r = 0, i = new Array(n); r < n; r++) i[r] = t[r];
        return i;
      }
      function Qt(t, n) {
        if (t == null) return {};
        var r = Jt(t, n),
          i,
          f;
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          for (f = 0; f < s.length; f++)
            (i = s[f]),
              !(n.indexOf(i) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(t, i) || (r[i] = t[i]));
        }
        return r;
      }
      function Jt(t, n) {
        if (t == null) return {};
        var r = {},
          i = Object.keys(t),
          f,
          s;
        for (s = 0; s < i.length; s++) (f = i[s]), !(n.indexOf(f) >= 0) && (r[f] = t[f]);
        return r;
      }
      function vt(t, n) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (f) {
              return Object.getOwnPropertyDescriptor(t, f).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function fe(t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? vt(Object(r), !0).forEach(function (i) {
                Yt(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : vt(Object(r)).forEach(function (i) {
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
              });
        }
        return t;
      }
      function Yt(t, n, r) {
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
      function Ge(t) {
        return t.split('?')[0].split('#')[0];
      }
      var qe = function (n) {
          if (!n.startsWith('http')) return !1;
          try {
            var r = new URL(n);
            return !!r;
          } catch (i) {
            return !1;
          }
        },
        Dt = function (n) {
          var r = n.path;
          if (!r || r === '/')
            try {
              return '/'.concat(Wt(JSON.stringify(n)));
            } catch (i) {}
          return r && Ge(r);
        },
        kt = function (n, r) {
          var i = n.name,
            f = n.locale;
          return ('locale' in n && f === !1) || !i ? !1 : n.locale || ''.concat(r, '.').concat(i);
        },
        mt = function () {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '/';
          return (n || r).startsWith('/') || qe(n)
            ? n
            : '/'.concat(r, '/').concat(n).replace(/\/\//g, '/').replace(/\/\//g, '/');
        },
        ht = function (n, r) {
          var i = n.menu,
            f = i === void 0 ? {} : i,
            s = n.indexRoute,
            l = n.path,
            b = l === void 0 ? '' : l,
            E = n.routes,
            N = f.name,
            F = N === void 0 ? n.name : N,
            P = f.icon,
            L = P === void 0 ? n.icon : P,
            J = f.hideChildren,
            xe = J === void 0 ? n.hideChildren : J,
            be = f.flatMenu,
            W = be === void 0 ? n.flatMenu : be,
            ge =
              s && Object.keys(s).join(',') !== 'redirect'
                ? [fe({ path: b, menu: f }, s)].concat(E || [])
                : E,
            me = fe({}, n);
          if ((F && (me.name = F), L && (me.icon = L), ge && ge.length)) {
            if (xe) return delete me.routes, me;
            var se = et(fe(fe({}, r), {}, { data: ge }), n);
            if (W) return se;
            me.routes = se;
          }
          return me;
        };
      function et(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { path: '/' },
          r = t.data,
          i = t.formatMessage,
          f = t.parentName,
          s = t.locale;
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
                var b, E;
                return (
                  l.unaccessible && delete l.name,
                  (l == null || (b = l.menu) === null || b === void 0 ? void 0 : b.name) ||
                  (l == null ? void 0 : l.flatMenu) ||
                  (l == null || (E = l.menu) === null || E === void 0 ? void 0 : E.flatMenu)
                    ? !0
                    : l.menu !== !1
                );
              })
              .map(function () {
                var l =
                  arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { path: '/' };
                l.children && !l.routes && ((l.routes = l.children), delete l.children);
                var b = mt(l.path, n ? n.path : '/'),
                  E = l.name,
                  N = kt(l, f || 'menu'),
                  F = N !== !1 && s !== !1 && i && N ? i({ id: N, defaultMessage: E }) : E,
                  P = n.pro_layout_parentKeys,
                  L = P === void 0 ? [] : P,
                  J = n.routes,
                  xe = n.children,
                  be = n.icon,
                  W = n.flatMenu,
                  ge = n.indexRoute,
                  me = Qt(n, jt),
                  se = fe(
                    fe(fe({}, me), {}, { menu: void 0 }, l),
                    {},
                    {
                      path: b,
                      locale: N,
                      key: l.key || Dt(fe(fe({}, l), {}, { path: b })),
                      pro_layout_parentKeys: Array.from(
                        new Set(
                          [].concat(st(l.parentKeys || []), st(L), [
                            '/'
                              .concat(n.key || '')
                              .replace(/\/\//g, '/')
                              .replace(/\/\//g, '/'),
                          ]),
                        ),
                      ).filter(function (_e) {
                        return _e && _e !== '/';
                      }),
                    },
                  );
                if (
                  (F ? (se.name = F) : delete se.name,
                  se.menu === void 0 && delete se.menu,
                  l.routes)
                ) {
                  var Me = et(fe(fe({}, t), {}, { data: l.routes, parentName: N || '' }), se);
                  (se.routes = Me && Me.length > 0 ? Me : void 0), se.routes || delete se.routes;
                }
                return ht(se, t);
              })
              .flat(1);
      }
      var qt = V(et, D()),
        It = function t() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return n
            .filter(function (r) {
              return r && (r.name || r.routes) && !r.hideInMenu && !r.redirect;
            })
            .map(function (r) {
              var i = fe({}, r);
              if (
                (i.children && !i.routes && (i.routes = r.children),
                i.routes &&
                  Array.isArray(i.routes) &&
                  !i.hideChildrenInMenu &&
                  i.routes.some(function (s) {
                    return s && !!s.name;
                  }))
              ) {
                var f = t(i.routes);
                if (f.length) return fe(fe({}, i), {}, { routes: f });
              }
              return fe(fe({}, r), {}, { routes: void 0 });
            })
            .filter(function (r) {
              return r;
            });
        },
        er = (function (t) {
          wt(r, t);
          var n = zt(r);
          function r() {
            return ke(this, r), n.apply(this, arguments);
          }
          return (
            Pt(r, [
              {
                key: 'get',
                value: function (f) {
                  var s;
                  try {
                    var l = $t(this.entries()),
                      b;
                    try {
                      for (l.s(); !(b = l.n()).done; ) {
                        var E = xr(b.value, 2),
                          N = E[0],
                          F = E[1],
                          P = Ge(N);
                        if (!qe(N) && S(P, []).test(f)) {
                          s = F;
                          break;
                        }
                      }
                    } catch (L) {
                      l.e(L);
                    } finally {
                      l.f();
                    }
                  } catch (L) {
                    s = void 0;
                  }
                  return s;
                },
              },
            ]),
            r
          );
        })(Ie(Map)),
        Cr = function (n) {
          var r = new er(),
            i = function f(s, l) {
              s.forEach(function (b) {
                b && b.routes && f(b.routes, b);
                var E = mt(b.path, l ? l.path : '/');
                r.set(Ge(E), b);
              });
            };
          return i(n), r;
        },
        tr = V(Cr, D()),
        rr = function t() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return n
            .map(function (r) {
              if (r.routes && Array.isArray(r.routes) && r.routes.length > 0) {
                var i = t(r.routes);
                if (i.length) return fe(fe({}, r), {}, { routes: i });
              }
              var f = fe({}, r);
              return delete f.routes, f;
            })
            .filter(function (r) {
              return r;
            });
        },
        nr = function (n, r, i, f) {
          var s = qt({ data: n, formatMessage: i, locale: r }),
            l = f ? rr(s) : It(s),
            b = tr(s);
          return { breadcrumb: b, menuData: l };
        },
        ar = nr;
      function gt(t, n) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (f) {
              return Object.getOwnPropertyDescriptor(t, f).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function tt(t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? gt(Object(r), !0).forEach(function (i) {
                ir(t, i, r[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : gt(Object(r)).forEach(function (i) {
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
              });
        }
        return t;
      }
      function ir(t, n, r) {
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
      var or = function t() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            r = {};
          return (
            n.forEach(function (i) {
              !i ||
                !i.key ||
                ((r[Ge(i.path || i.key || '/')] = tt({}, i)),
                (r[i.key || i.path || '/'] = tt({}, i)),
                i.routes && (r = tt(tt({}, r), t(i.routes))));
            }),
            r
          );
        },
        yt = or,
        ur = function () {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            r = arguments.length > 1 ? arguments[1] : void 0,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return n
            .filter(function (f) {
              if (f === '/' && r === '/') return !0;
              if (f !== '/' && f !== '/*' && f && !qe(f)) {
                var s = Ge(f);
                try {
                  if (
                    (i && S(''.concat(s)).test(r)) ||
                    S(''.concat(s), []).test(r) ||
                    S(''.concat(s, '/(.*)')).test(r)
                  )
                    return !0;
                } catch (l) {}
              }
              return !1;
            })
            .sort(function (f, s) {
              return f === r
                ? 10
                : s === r
                ? -10
                : f.substr(1).split('/').length - s.substr(1).split('/').length;
            });
        },
        lr = function (n, r, i, f) {
          var s = yt(r),
            l = Object.keys(s),
            b = ur(l, n || '/', f);
          return !b || b.length < 1
            ? []
            : (i || (b = [b[b.length - 1]]),
              b
                .map(function (E) {
                  var N = s[E] || { pro_layout_parentKeys: '', key: '' },
                    F = new Map(),
                    P = (N.pro_layout_parentKeys || [])
                      .map(function (L) {
                        return F.has(L) ? null : (F.set(L, !0), s[L]);
                      })
                      .filter(function (L) {
                        return L;
                      });
                  return N.key && P.push(N), P;
                })
                .flat(1));
        },
        fr = lr;
    },
    8162: function (Ce, he, c) {
      'use strict';
      c.d(he, {
        Z: function () {
          return D;
        },
      });
      var w = c(59301);
      function D() {
        var I = w.useRef(!0);
        return (
          w.useEffect(function () {
            return function () {
              I.current = !1;
            };
          }, []),
          function () {
            return !I.current;
          }
        );
      }
    },
    53814: function (Ce, he, c) {
      'use strict';
      var w = c(10322),
        D = c(59301),
        I = c(22282),
        K = function (V, ae) {
          var ve = {};
          for (var z in V)
            Object.prototype.hasOwnProperty.call(V, z) && ae.indexOf(z) < 0 && (ve[z] = V[z]);
          if (V != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var g = 0, z = Object.getOwnPropertySymbols(V); g < z.length; g++)
              ae.indexOf(z[g]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(V, z[g]) &&
                (ve[z[g]] = V[z[g]]);
          return ve;
        },
        Y = {
          border: 0,
          background: 'transparent',
          padding: 0,
          lineHeight: 'inherit',
          display: 'inline-block',
        },
        de = D.forwardRef(function (V, ae) {
          var ve = function (ne) {
              var X = ne.keyCode;
              X === I.Z.ENTER && ne.preventDefault();
            },
            z = function (ne) {
              var X = ne.keyCode,
                x = V.onClick;
              X === I.Z.ENTER && x && x();
            },
            g = V.style,
            q = V.noStyle,
            Z = V.disabled,
            a = K(V, ['style', 'noStyle', 'disabled']),
            R = {};
          return (
            q || (R = (0, w.Z)({}, Y)),
            Z && (R.pointerEvents = 'none'),
            (R = (0, w.Z)((0, w.Z)({}, R), g)),
            D.createElement(
              'div',
              (0, w.Z)({ role: 'button', tabIndex: 0, ref: ae }, a, {
                onKeyDown: ve,
                onKeyUp: z,
                style: R,
              }),
            )
          );
        });
      he.Z = de;
    },
    93925: function (Ce) {
      'use strict';
      var he = typeof BigInt64Array != 'undefined';
      Ce.exports = function c(w, D) {
        if (w === D) return !0;
        if (w && D && typeof w == 'object' && typeof D == 'object') {
          if (w.constructor !== D.constructor) return !1;
          var I, K, Y;
          if (Array.isArray(w)) {
            if (((I = w.length), I != D.length)) return !1;
            for (K = I; K-- != 0; ) if (!c(w[K], D[K])) return !1;
            return !0;
          }
          if (w instanceof Map && D instanceof Map) {
            if (w.size !== D.size) return !1;
            for (K of w.entries()) if (!D.has(K[0])) return !1;
            for (K of w.entries()) if (!c(K[1], D.get(K[0]))) return !1;
            return !0;
          }
          if (w instanceof Set && D instanceof Set) {
            if (w.size !== D.size) return !1;
            for (K of w.entries()) if (!D.has(K[0])) return !1;
            return !0;
          }
          if (ArrayBuffer.isView(w) && ArrayBuffer.isView(D)) {
            if (((I = w.length), I != D.length)) return !1;
            for (K = I; K-- != 0; ) if (w[K] !== D[K]) return !1;
            return !0;
          }
          if (w.constructor === RegExp) return w.source === D.source && w.flags === D.flags;
          if (w.valueOf !== Object.prototype.valueOf) return w.valueOf() === D.valueOf();
          if (w.toString !== Object.prototype.toString) return w.toString() === D.toString();
          if (((Y = Object.keys(w)), (I = Y.length), I !== Object.keys(D).length)) return !1;
          for (K = I; K-- != 0; ) if (!Object.prototype.hasOwnProperty.call(D, Y[K])) return !1;
          for (K = I; K-- != 0; ) {
            var de = Y[K];
            if (!(de === '_owner' && w.$$typeof) && !c(w[de], D[de])) return !1;
          }
          return !0;
        }
        return w !== w && D !== D;
      };
    },
    69121: function (Ce) {
      (Ce.exports = q),
        (Ce.exports.parse = D),
        (Ce.exports.compile = I),
        (Ce.exports.tokensToFunction = K),
        (Ce.exports.tokensToRegExp = g);
      var he = '/',
        c = './',
        w = new RegExp(
          [
            '(\\\\.)',
            '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
          ].join('|'),
          'g',
        );
      function D(Z, a) {
        for (
          var R = [],
            U = 0,
            ne = 0,
            X = '',
            x = (a && a.delimiter) || he,
            S = (a && a.delimiters) || c,
            v = !1,
            O;
          (O = w.exec(Z)) !== null;

        ) {
          var Q = O[0],
            te = O[1],
            $ = O.index;
          if (((X += Z.slice(ne, $)), (ne = $ + Q.length), te)) {
            (X += te[1]), (v = !0);
            continue;
          }
          var ie = '',
            pe = Z[ne],
            Te = O[2],
            Ee = O[3],
            G = O[4],
            ue = O[5];
          if (!v && X.length) {
            var oe = X.length - 1;
            S.indexOf(X[oe]) > -1 && ((ie = X[oe]), (X = X.slice(0, oe)));
          }
          X && (R.push(X), (X = ''), (v = !1));
          var St = ie !== '' && pe !== void 0 && pe !== ie,
            ct = ue === '+' || ue === '*',
            Oe = ue === '?' || ue === '*',
            De = ie || x,
            Je = Ee || G;
          R.push({
            name: Te || U++,
            prefix: ie,
            delimiter: De,
            optional: Oe,
            repeat: ct,
            partial: St,
            pattern: Je ? de(Je) : '[^' + Y(De) + ']+?',
          });
        }
        return (X || ne < Z.length) && R.push(X + Z.substr(ne)), R;
      }
      function I(Z, a) {
        return K(D(Z, a));
      }
      function K(Z) {
        for (var a = new Array(Z.length), R = 0; R < Z.length; R++)
          typeof Z[R] == 'object' && (a[R] = new RegExp('^(?:' + Z[R].pattern + ')$'));
        return function (U, ne) {
          for (var X = '', x = (ne && ne.encode) || encodeURIComponent, S = 0; S < Z.length; S++) {
            var v = Z[S];
            if (typeof v == 'string') {
              X += v;
              continue;
            }
            var O = U ? U[v.name] : void 0,
              Q;
            if (Array.isArray(O)) {
              if (!v.repeat)
                throw new TypeError('Expected "' + v.name + '" to not repeat, but got array');
              if (O.length === 0) {
                if (v.optional) continue;
                throw new TypeError('Expected "' + v.name + '" to not be empty');
              }
              for (var te = 0; te < O.length; te++) {
                if (((Q = x(O[te], v)), !a[S].test(Q)))
                  throw new TypeError('Expected all "' + v.name + '" to match "' + v.pattern + '"');
                X += (te === 0 ? v.prefix : v.delimiter) + Q;
              }
              continue;
            }
            if (typeof O == 'string' || typeof O == 'number' || typeof O == 'boolean') {
              if (((Q = x(String(O), v)), !a[S].test(Q)))
                throw new TypeError(
                  'Expected "' + v.name + '" to match "' + v.pattern + '", but got "' + Q + '"',
                );
              X += v.prefix + Q;
              continue;
            }
            if (v.optional) {
              v.partial && (X += v.prefix);
              continue;
            }
            throw new TypeError(
              'Expected "' + v.name + '" to be ' + (v.repeat ? 'an array' : 'a string'),
            );
          }
          return X;
        };
      }
      function Y(Z) {
        return Z.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function de(Z) {
        return Z.replace(/([=!:$/()])/g, '\\$1');
      }
      function V(Z) {
        return Z && Z.sensitive ? '' : 'i';
      }
      function ae(Z, a) {
        if (!a) return Z;
        var R = Z.source.match(/\((?!\?)/g);
        if (R)
          for (var U = 0; U < R.length; U++)
            a.push({
              name: U,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              pattern: null,
            });
        return Z;
      }
      function ve(Z, a, R) {
        for (var U = [], ne = 0; ne < Z.length; ne++) U.push(q(Z[ne], a, R).source);
        return new RegExp('(?:' + U.join('|') + ')', V(R));
      }
      function z(Z, a, R) {
        return g(D(Z, R), a, R);
      }
      function g(Z, a, R) {
        R = R || {};
        for (
          var U = R.strict,
            ne = R.start !== !1,
            X = R.end !== !1,
            x = Y(R.delimiter || he),
            S = R.delimiters || c,
            v = []
              .concat(R.endsWith || [])
              .map(Y)
              .concat('$')
              .join('|'),
            O = ne ? '^' : '',
            Q = Z.length === 0,
            te = 0;
          te < Z.length;
          te++
        ) {
          var $ = Z[te];
          if (typeof $ == 'string')
            (O += Y($)), (Q = te === Z.length - 1 && S.indexOf($[$.length - 1]) > -1);
          else {
            var ie = $.repeat
              ? '(?:' + $.pattern + ')(?:' + Y($.delimiter) + '(?:' + $.pattern + '))*'
              : $.pattern;
            a && a.push($),
              $.optional
                ? $.partial
                  ? (O += Y($.prefix) + '(' + ie + ')?')
                  : (O += '(?:' + Y($.prefix) + '(' + ie + '))?')
                : (O += Y($.prefix) + '(' + ie + ')');
          }
        }
        return (
          X
            ? (U || (O += '(?:' + x + ')?'), (O += v === '$' ? '$' : '(?=' + v + ')'))
            : (U || (O += '(?:' + x + '(?=' + v + '))?'), Q || (O += '(?=' + x + '|' + v + ')')),
          new RegExp(O, V(R))
        );
      }
      function q(Z, a, R) {
        return Z instanceof RegExp ? ae(Z, a) : Array.isArray(Z) ? ve(Z, a, R) : z(Z, a, R);
      }
    },
    935: function (Ce, he, c) {
      'use strict';
      c.d(he, {
        f: function () {
          return D;
        },
      });
      var w = c(59301);
      function D(K) {
        var Y = w.createContext(null);
        function de(ae) {
          var ve = K(ae.initialState);
          return w.createElement(Y.Provider, { value: ve }, ae.children);
        }
        function V() {
          var ae = w.useContext(Y);
          if (ae === null) throw new Error('Component must be wrapped with <Container.Provider>');
          return ae;
        }
        return { Provider: de, useContainer: V };
      }
      function I(K) {
        return K.useContainer();
      }
    },
    37131: function (Ce, he, c) {
      'use strict';
      c.d(he, {
        ZP: function () {
          return X;
        },
      });
      var w = c(59301);
      function D(x, S) {
        return V(x) || de(x, S) || K(x, S) || I();
      }
      function I() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function K(x, S) {
        if (!!x) {
          if (typeof x == 'string') return Y(x, S);
          var v = Object.prototype.toString.call(x).slice(8, -1);
          if (
            (v === 'Object' && x.constructor && (v = x.constructor.name),
            v === 'Map' || v === 'Set')
          )
            return Array.from(x);
          if (v === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))
            return Y(x, S);
        }
      }
      function Y(x, S) {
        (S == null || S > x.length) && (S = x.length);
        for (var v = 0, O = new Array(S); v < S; v++) O[v] = x[v];
        return O;
      }
      function de(x, S) {
        var v = x && ((typeof Symbol != 'undefined' && x[Symbol.iterator]) || x['@@iterator']);
        if (v != null) {
          var O = [],
            Q = !0,
            te = !1,
            $,
            ie;
          try {
            for (
              v = v.call(x);
              !(Q = ($ = v.next()).done) && (O.push($.value), !(S && O.length === S));
              Q = !0
            );
          } catch (pe) {
            (te = !0), (ie = pe);
          } finally {
            try {
              !Q && v.return != null && v.return();
            } finally {
              if (te) throw ie;
            }
          }
          return O;
        }
      }
      function V(x) {
        if (Array.isArray(x)) return x;
      }
      function ae(x) {
        var S = typeof window == 'undefined',
          v = (0, w.useState)(function () {
            return S ? !1 : window.matchMedia(x).matches;
          }),
          O = D(v, 2),
          Q = O[0],
          te = O[1];
        return (
          (0, w.useLayoutEffect)(
            function () {
              if (!S) {
                var $ = window.matchMedia(x),
                  ie = function (Te) {
                    return te(Te.matches);
                  };
                return (
                  $.addListener(ie),
                  function () {
                    return $.removeListener(ie);
                  }
                );
              }
            },
            [x],
          ),
          Q
        );
      }
      function ve(x, S) {
        return a(x) || Z(x, S) || g(x, S) || z();
      }
      function z() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function g(x, S) {
        if (!!x) {
          if (typeof x == 'string') return q(x, S);
          var v = Object.prototype.toString.call(x).slice(8, -1);
          if (
            (v === 'Object' && x.constructor && (v = x.constructor.name),
            v === 'Map' || v === 'Set')
          )
            return Array.from(x);
          if (v === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))
            return q(x, S);
        }
      }
      function q(x, S) {
        (S == null || S > x.length) && (S = x.length);
        for (var v = 0, O = new Array(S); v < S; v++) O[v] = x[v];
        return O;
      }
      function Z(x, S) {
        var v = x && ((typeof Symbol != 'undefined' && x[Symbol.iterator]) || x['@@iterator']);
        if (v != null) {
          var O = [],
            Q = !0,
            te = !1,
            $,
            ie;
          try {
            for (
              v = v.call(x);
              !(Q = ($ = v.next()).done) && (O.push($.value), !(S && O.length === S));
              Q = !0
            );
          } catch (pe) {
            (te = !0), (ie = pe);
          } finally {
            try {
              !Q && v.return != null && v.return();
            } finally {
              if (te) throw ie;
            }
          }
          return O;
        }
      }
      function a(x) {
        if (Array.isArray(x)) return x;
      }
      var R = {
          xs: { maxWidth: 575, matchMedia: '(max-width: 575px)' },
          sm: {
            minWidth: 576,
            maxWidth: 767,
            matchMedia: '(min-width: 576px) and (max-width: 767px)',
          },
          md: {
            minWidth: 768,
            maxWidth: 991,
            matchMedia: '(min-width: 768px) and (max-width: 991px)',
          },
          lg: {
            minWidth: 992,
            maxWidth: 1199,
            matchMedia: '(min-width: 992px) and (max-width: 1199px)',
          },
          xl: {
            minWidth: 1200,
            maxWidth: 1599,
            matchMedia: '(min-width: 1200px) and (max-width: 1599px)',
          },
          xxl: { minWidth: 1600, matchMedia: '(min-width: 1600px)' },
        },
        U = function () {
          var S = 'md';
          if (typeof window == 'undefined') return S;
          var v = Object.keys(R).find(function (O) {
            var Q = R[O].matchMedia;
            return !!window.matchMedia(Q).matches;
          });
          return (S = v), S;
        },
        ne = function () {
          var S = ae(R.md.matchMedia),
            v = ae(R.lg.matchMedia),
            O = ae(R.xxl.matchMedia),
            Q = ae(R.xl.matchMedia),
            te = ae(R.sm.matchMedia),
            $ = ae(R.xs.matchMedia),
            ie = (0, w.useState)(U()),
            pe = ve(ie, 2),
            Te = pe[0],
            Ee = pe[1];
          return (
            (0, w.useEffect)(
              function () {
                if (O) {
                  Ee('xxl');
                  return;
                }
                if (Q) {
                  Ee('xl');
                  return;
                }
                if (v) {
                  Ee('lg');
                  return;
                }
                if (S) {
                  Ee('md');
                  return;
                }
                if (te) {
                  Ee('sm');
                  return;
                }
                if ($) {
                  Ee('xs');
                  return;
                }
                Ee('md');
              },
              [S, v, O, Q, te, $],
            ),
            Te
          );
        },
        X = ne;
    },
  },
]);
