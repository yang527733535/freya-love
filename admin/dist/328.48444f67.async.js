(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [328],
  {
    33119: function (De, ne, o) {
      'use strict';
      var T = o(59301),
        O = (0, T.createContext)({});
      ne.Z = O;
    },
    98589: function (De, ne, o) {
      'use strict';
      var T = o(10322),
        O = o(36531),
        F = o(99793),
        m = o(20658),
        Ne = o(20557),
        Z = o(59301),
        Ze = o(92691),
        Re = o.n(Ze),
        ue = o(52535),
        n = o(91070),
        Ie = o.n(n),
        H = o(33119),
        Be = ['children', 'className', 'extra', 'style', 'renderContent'],
        Q = function (U) {
          var fe = U.children,
            ve = U.className,
            me = U.extra,
            he = U.style,
            ee = U.renderContent,
            ge = (0, Ne.Z)(U, Be),
            Ce = (0, Z.useContext)(m.ZP.ConfigContext),
            xe = Ce.getPrefixCls,
            G = U.prefixCls || xe('pro'),
            Pe = ''.concat(G, '-footer-bar'),
            b = (0, Z.useContext)(H.Z),
            ie = (0, Z.useMemo)(
              function () {
                var te = b.hasSiderMenu,
                  q = b.isMobile,
                  y = b.siderWidth;
                if (!!te) return y ? (q ? '100%' : 'calc(100% - '.concat(y, 'px)')) : '100%';
              },
              [b.collapsed, b.hasSiderMenu, b.isMobile, b.siderWidth],
            ),
            X = Z.createElement(
              Z.Fragment,
              null,
              Z.createElement('div', { className: ''.concat(Pe, '-left') }, me),
              Z.createElement('div', { className: ''.concat(Pe, '-right') }, fe),
            );
          return (
            (0, Z.useEffect)(function () {
              return !b || !(b == null ? void 0 : b.setHasFooterToolbar)
                ? function () {}
                : (b == null || b.setHasFooterToolbar(!0),
                  function () {
                    var te;
                    b == null ||
                      (te = b.setHasFooterToolbar) === null ||
                      te === void 0 ||
                      te.call(b, !1);
                  });
            }, []),
            Z.createElement(
              'div',
              (0, T.Z)(
                { className: Re()(ve, ''.concat(Pe)), style: (0, O.Z)({ width: ie }, he) },
                (0, ue.Z)(ge, ['prefixCls']),
              ),
              ee ? ee((0, O.Z)((0, O.Z)((0, O.Z)({}, U), b), {}, { leftWidth: ie }), X) : X,
            )
          );
        };
      ne.Z = Q;
    },
    88430: function (De, ne, o) {
      'use strict';
      o.d(ne, {
        ZP: function () {
          return wt;
        },
      });
      var T = o(9233),
        O = o(34897),
        F = o(10322),
        m = o(22076),
        Ne = o(3359),
        Z = o(29860),
        Ze = o(54855),
        Re = o(71512),
        ue = o(12346),
        n = o(59301),
        Ie = o(92691),
        H = o.n(Ie),
        Be = o(87511),
        Q = o(88857),
        _ = o(83334),
        U = o(37793),
        fe = o(11897);
      function ve(i) {
        var e,
          r = function (l) {
            return function () {
              (e = null), i.apply(void 0, (0, U.Z)(l));
            };
          },
          t = function () {
            if (e == null) {
              for (var l = arguments.length, d = new Array(l), c = 0; c < l; c++)
                d[c] = arguments[c];
              e = (0, fe.Z)(r(d));
            }
          };
        return (
          (t.cancel = function () {
            return fe.Z.cancel(e);
          }),
          t
        );
      }
      function me() {
        return function (e, r, t) {
          var a = t.value,
            l = !1;
          return {
            configurable: !0,
            get: function () {
              if (l || this === e.prototype || this.hasOwnProperty(r)) return a;
              var c = ve(a.bind(this));
              return (
                (l = !0),
                Object.defineProperty(this, r, { value: c, configurable: !0, writable: !0 }),
                (l = !1),
                c
              );
            },
          };
        };
      }
      var he = o(53147);
      function ee(i) {
        return i !== window ? i.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
      }
      function ge(i, e, r) {
        if (r !== void 0 && e.top > i.top - r) return r + e.top;
      }
      function Ce(i, e, r) {
        if (r !== void 0 && e.bottom < i.bottom + r) {
          var t = window.innerHeight - e.bottom;
          return r + t;
        }
      }
      var xe = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'],
        G = [];
      function Pe() {
        return G;
      }
      function b(i, e) {
        if (!!i) {
          var r = G.find(function (t) {
            return t.target === i;
          });
          r
            ? r.affixList.push(e)
            : ((r = { target: i, affixList: [e], eventHandlers: {} }),
              G.push(r),
              xe.forEach(function (t) {
                r.eventHandlers[t] = (0, he.Z)(i, t, function () {
                  r.affixList.forEach(function (a) {
                    a.lazyUpdatePosition();
                  });
                });
              }));
        }
      }
      function ie(i) {
        var e = G.find(function (r) {
          var t = r.affixList.some(function (a) {
            return a === i;
          });
          return (
            t &&
              (r.affixList = r.affixList.filter(function (a) {
                return a !== i;
              })),
            t
          );
        });
        e &&
          e.affixList.length === 0 &&
          ((G = G.filter(function (r) {
            return r !== e;
          })),
          xe.forEach(function (r) {
            var t = e.eventHandlers[r];
            t && t.remove && t.remove();
          }));
      }
      var X = function (i, e, r, t) {
        var a = arguments.length,
          l = a < 3 ? e : t === null ? (t = Object.getOwnPropertyDescriptor(e, r)) : t,
          d;
        if (
          (typeof Reflect == 'undefined' ? 'undefined' : (0, ue.Z)(Reflect)) === 'object' &&
          typeof Reflect.decorate == 'function'
        )
          l = Reflect.decorate(i, e, r, t);
        else
          for (var c = i.length - 1; c >= 0; c--)
            (d = i[c]) && (l = (a < 3 ? d(l) : a > 3 ? d(e, r, l) : d(e, r)) || l);
        return a > 3 && l && Object.defineProperty(e, r, l), l;
      };
      function te() {
        return typeof window != 'undefined' ? window : null;
      }
      var q;
      (function (i) {
        (i[(i.None = 0)] = 'None'), (i[(i.Prepare = 1)] = 'Prepare');
      })(q || (q = {}));
      var y = (function (i) {
        (0, Ze.Z)(r, i);
        var e = (0, Re.Z)(r);
        function r() {
          var t;
          return (
            (0, Ne.Z)(this, r),
            (t = e.apply(this, arguments)),
            (t.state = { status: q.None, lastAffix: !1, prevTarget: null }),
            (t.getOffsetTop = function () {
              var a = t.props,
                l = a.offsetBottom,
                d = a.offsetTop;
              return l === void 0 && d === void 0 ? 0 : d;
            }),
            (t.getOffsetBottom = function () {
              return t.props.offsetBottom;
            }),
            (t.savePlaceholderNode = function (a) {
              t.placeholderNode = a;
            }),
            (t.saveFixedNode = function (a) {
              t.fixedNode = a;
            }),
            (t.measure = function () {
              var a = t.state,
                l = a.status,
                d = a.lastAffix,
                c = t.props.onChange,
                v = t.getTargetFunc();
              if (!(l !== q.Prepare || !t.fixedNode || !t.placeholderNode || !v)) {
                var u = t.getOffsetTop(),
                  C = t.getOffsetBottom(),
                  x = v();
                if (!!x) {
                  var f = { status: q.None },
                    E = ee(x),
                    h = ee(t.placeholderNode),
                    N = ge(h, E, u),
                    I = Ce(h, E, C);
                  N !== void 0
                    ? ((f.affixStyle = {
                        position: 'fixed',
                        top: N,
                        width: h.width,
                        height: h.height,
                      }),
                      (f.placeholderStyle = { width: h.width, height: h.height }))
                    : I !== void 0 &&
                      ((f.affixStyle = {
                        position: 'fixed',
                        bottom: I,
                        width: h.width,
                        height: h.height,
                      }),
                      (f.placeholderStyle = { width: h.width, height: h.height })),
                    (f.lastAffix = !!f.affixStyle),
                    c && d !== f.lastAffix && c(f.lastAffix),
                    t.setState(f);
                }
              }
            }),
            (t.prepareMeasure = function () {
              if (
                (t.setState({ status: q.Prepare, affixStyle: void 0, placeholderStyle: void 0 }),
                !1)
              )
                var a;
            }),
            t
          );
        }
        return (
          (0, Z.Z)(r, [
            {
              key: 'getTargetFunc',
              value: function () {
                var a = this.context.getTargetContainer,
                  l = this.props.target;
                return l !== void 0 ? l : a || te;
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var a = this,
                  l = this.getTargetFunc();
                l &&
                  (this.timeout = setTimeout(function () {
                    b(l(), a), a.updatePosition();
                  }));
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (a) {
                var l = this.state.prevTarget,
                  d = this.getTargetFunc(),
                  c = (d == null ? void 0 : d()) || null;
                l !== c &&
                  (ie(this),
                  c && (b(c, this), this.updatePosition()),
                  this.setState({ prevTarget: c })),
                  (a.offsetTop !== this.props.offsetTop ||
                    a.offsetBottom !== this.props.offsetBottom) &&
                    this.updatePosition(),
                  this.measure();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                clearTimeout(this.timeout),
                  ie(this),
                  this.updatePosition.cancel(),
                  this.lazyUpdatePosition.cancel();
              },
            },
            {
              key: 'updatePosition',
              value: function () {
                this.prepareMeasure();
              },
            },
            {
              key: 'lazyUpdatePosition',
              value: function () {
                var a = this.getTargetFunc(),
                  l = this.state.affixStyle;
                if (a && l) {
                  var d = this.getOffsetTop(),
                    c = this.getOffsetBottom(),
                    v = a();
                  if (v && this.placeholderNode) {
                    var u = ee(v),
                      C = ee(this.placeholderNode),
                      x = ge(C, u, d),
                      f = Ce(C, u, c);
                    if ((x !== void 0 && l.top === x) || (f !== void 0 && l.bottom === f)) return;
                  }
                }
                this.prepareMeasure();
              },
            },
            {
              key: 'render',
              value: function () {
                var a = this,
                  l = this.context.getPrefixCls,
                  d = this.state,
                  c = d.affixStyle,
                  v = d.placeholderStyle,
                  u = this.props,
                  C = u.prefixCls,
                  x = u.children,
                  f = H()((0, m.Z)({}, l('affix', C), !!c)),
                  E = (0, Be.Z)(this.props, [
                    'prefixCls',
                    'offsetTop',
                    'offsetBottom',
                    'target',
                    'onChange',
                  ]);
                return n.createElement(
                  Q.Z,
                  {
                    onResize: function () {
                      a.updatePosition();
                    },
                  },
                  n.createElement(
                    'div',
                    (0, F.Z)({}, E, { ref: this.savePlaceholderNode }),
                    c && n.createElement('div', { style: v, 'aria-hidden': 'true' }),
                    n.createElement(
                      'div',
                      { className: f, ref: this.saveFixedNode, style: c },
                      n.createElement(
                        Q.Z,
                        {
                          onResize: function () {
                            a.updatePosition();
                          },
                        },
                        x,
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          r
        );
      })(n.Component);
      (y.contextType = _.E_),
        X([me()], y.prototype, 'updatePosition', null),
        X([me()], y.prototype, 'lazyUpdatePosition', null);
      var s = y,
        p = o(99793),
        D = o(20658),
        B = o(67227),
        M = o(2829),
        $ = o(48513),
        S = o(18024),
        W = o(95015),
        P = o(28211),
        g = o(36531),
        k = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'arrow-left',
          theme: 'outlined',
        },
        Y = k,
        le = o(23986),
        se = function (e, r) {
          return n.createElement(le.Z, (0, g.Z)((0, g.Z)({}, e), {}, { ref: r, icon: Y }));
        };
      se.displayName = 'ArrowLeftOutlined';
      var He = n.forwardRef(se),
        Ue = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z',
                },
              },
            ],
          },
          name: 'arrow-right',
          theme: 'outlined',
        },
        V = Ue,
        re = function (e, r) {
          return n.createElement(le.Z, (0, g.Z)((0, g.Z)({}, e), {}, { ref: r, icon: V }));
        };
      re.displayName = 'ArrowRightOutlined';
      var Ee = n.forwardRef(re),
        ye = o(45811),
        be = o(49685),
        we = o(91612),
        $e = function (i, e) {
          var r = {};
          for (var t in i)
            Object.prototype.hasOwnProperty.call(i, t) && e.indexOf(t) < 0 && (r[t] = i[t]);
          if (i != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, t = Object.getOwnPropertySymbols(i); a < t.length; a++)
              e.indexOf(t[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, t[a]) &&
                (r[t[a]] = i[t[a]]);
          return r;
        },
        Oe = function (e) {
          var r = e.prefixCls,
            t = e.separator,
            a = t === void 0 ? '/' : t,
            l = e.children,
            d = e.overlay,
            c = e.dropdownProps,
            v = $e(e, ['prefixCls', 'separator', 'children', 'overlay', 'dropdownProps']),
            u = n.useContext(_.E_),
            C = u.getPrefixCls,
            x = C('breadcrumb', r),
            f = function (N) {
              return d
                ? n.createElement(
                    we.Z,
                    (0, F.Z)({ overlay: d, placement: 'bottomCenter' }, c),
                    n.createElement(
                      'span',
                      { className: ''.concat(x, '-overlay-link') },
                      N,
                      n.createElement(be.Z, null),
                    ),
                  )
                : N;
            },
            E;
          return (
            'href' in v
              ? (E = n.createElement('a', (0, F.Z)({ className: ''.concat(x, '-link') }, v), l))
              : (E = n.createElement('span', (0, F.Z)({ className: ''.concat(x, '-link') }, v), l)),
            (E = f(E)),
            l
              ? n.createElement(
                  'span',
                  null,
                  E,
                  a && n.createElement('span', { className: ''.concat(x, '-separator') }, a),
                )
              : null
          );
        };
      Oe.__ANT_BREADCRUMB_ITEM = !0;
      var Te = Oe,
        Le = function (e) {
          var r = e.children,
            t = n.useContext(_.E_),
            a = t.getPrefixCls,
            l = a('breadcrumb');
          return n.createElement('span', { className: ''.concat(l, '-separator') }, r || '/');
        };
      Le.__ANT_BREADCRUMB_SEPARATOR = !0;
      var ze = Le,
        We = o(74318),
        ke = o(3194),
        rt = o(88777),
        at = function (i, e) {
          var r = {};
          for (var t in i)
            Object.prototype.hasOwnProperty.call(i, t) && e.indexOf(t) < 0 && (r[t] = i[t]);
          if (i != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, t = Object.getOwnPropertySymbols(i); a < t.length; a++)
              e.indexOf(t[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, t[a]) &&
                (r[t[a]] = i[t[a]]);
          return r;
        };
      function nt(i, e) {
        if (!i.breadcrumbName) return null;
        var r = Object.keys(e).join('|'),
          t = i.breadcrumbName.replace(new RegExp(':('.concat(r, ')'), 'g'), function (a, l) {
            return e[l] || a;
          });
        return t;
      }
      function ot(i, e, r, t) {
        var a = r.indexOf(i) === r.length - 1,
          l = nt(i, e);
        return a
          ? n.createElement('span', null, l)
          : n.createElement('a', { href: '#/'.concat(t.join('/')) }, l);
      }
      var Xe = function (e, r) {
          return (
            (e = (e || '').replace(/^\//, '')),
            Object.keys(r).forEach(function (t) {
              e = e.replace(':'.concat(t), r[t]);
            }),
            e
          );
        },
        it = function (e, r, t) {
          var a = (0, U.Z)(e),
            l = Xe(r || '', t);
          return l && a.push(l), a;
        },
        je = function (e) {
          var r = e.prefixCls,
            t = e.separator,
            a = t === void 0 ? '/' : t,
            l = e.style,
            d = e.className,
            c = e.routes,
            v = e.children,
            u = e.itemRender,
            C = u === void 0 ? ot : u,
            x = e.params,
            f = x === void 0 ? {} : x,
            E = at(e, [
              'prefixCls',
              'separator',
              'style',
              'className',
              'routes',
              'children',
              'itemRender',
              'params',
            ]),
            h = n.useContext(_.E_),
            N = h.getPrefixCls,
            I = h.direction,
            A,
            w = N('breadcrumb', r);
          if (c && c.length > 0) {
            var L = [];
            A = c.map(function (R) {
              var z = Xe(R.path, f);
              z && L.push(z);
              var J;
              return (
                R.children &&
                  R.children.length &&
                  (J = n.createElement(
                    We.Z,
                    null,
                    R.children.map(function (j) {
                      return n.createElement(
                        We.Z.Item,
                        { key: j.path || j.breadcrumbName },
                        C(j, f, c, it(L, j.path, f)),
                      );
                    }),
                  )),
                n.createElement(
                  Te,
                  { overlay: J, separator: a, key: z || R.breadcrumbName },
                  C(R, f, c, L),
                )
              );
            });
          } else
            v &&
              (A = (0, ye.Z)(v).map(function (R, z) {
                return (
                  R &&
                  ((0, ke.Z)(
                    R.type &&
                      (R.type.__ANT_BREADCRUMB_ITEM === !0 ||
                        R.type.__ANT_BREADCRUMB_SEPARATOR === !0),
                    'Breadcrumb',
                    "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
                  ),
                  (0, rt.Tm)(R, { separator: a, key: z }))
                );
              }));
          var ae = H()(w, (0, m.Z)({}, ''.concat(w, '-rtl'), I === 'rtl'), d);
          return n.createElement('div', (0, F.Z)({ className: ae, style: l }, E), A);
        };
      (je.Item = Te), (je.Separator = ze);
      var lt = je,
        st = lt,
        ct = o(94680),
        dt = o(53814),
        ut = o(45605),
        ft = o(8162),
        vt = function (e, r, t) {
          return !r || !t
            ? null
            : n.createElement(ut.Z, { componentName: 'PageHeader' }, function (a) {
                var l = a.back;
                return n.createElement(
                  'div',
                  { className: ''.concat(e, '-back') },
                  n.createElement(
                    dt.Z,
                    {
                      onClick: function (c) {
                        t == null || t(c);
                      },
                      className: ''.concat(e, '-back-button'),
                      'aria-label': l,
                    },
                    r,
                  ),
                );
              });
        },
        mt = function (e) {
          return n.createElement(st, e);
        },
        ht = function (e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'ltr';
          return e.backIcon !== void 0
            ? e.backIcon
            : r === 'rtl'
            ? n.createElement(Ee, null)
            : n.createElement(He, null);
        },
        gt = function (e, r) {
          var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'ltr',
            a = r.title,
            l = r.avatar,
            d = r.subTitle,
            c = r.tags,
            v = r.extra,
            u = r.onBack,
            C = ''.concat(e, '-heading'),
            x = a || d || c || v;
          if (!x) return null;
          var f = ht(r, t),
            E = vt(e, f, u),
            h = E || l || x;
          return n.createElement(
            'div',
            { className: C },
            h &&
              n.createElement(
                'div',
                { className: ''.concat(C, '-left') },
                E,
                l && n.createElement(ct.C, l),
                a &&
                  n.createElement(
                    'span',
                    { className: ''.concat(C, '-title'), title: typeof a == 'string' ? a : void 0 },
                    a,
                  ),
                d &&
                  n.createElement(
                    'span',
                    {
                      className: ''.concat(C, '-sub-title'),
                      title: typeof d == 'string' ? d : void 0,
                    },
                    d,
                  ),
                c && n.createElement('span', { className: ''.concat(C, '-tags') }, c),
              ),
            v && n.createElement('span', { className: ''.concat(C, '-extra') }, v),
          );
        },
        Ct = function (e, r) {
          return r ? n.createElement('div', { className: ''.concat(e, '-footer') }, r) : null;
        },
        xt = function (e, r) {
          return n.createElement('div', { className: ''.concat(e, '-content') }, r);
        },
        Pt = function (e) {
          var r = n.useState(!1),
            t = (0, P.Z)(r, 2),
            a = t[0],
            l = t[1],
            d = (0, ft.Z)(),
            c = function (u) {
              var C = u.width;
              d() || l(C < 768);
            };
          return n.createElement(_.C, null, function (v) {
            var u,
              C = v.getPrefixCls,
              x = v.pageHeader,
              f = v.direction,
              E,
              h = e.prefixCls,
              N = e.style,
              I = e.footer,
              A = e.children,
              w = e.breadcrumb,
              L = e.breadcrumbRender,
              ae = e.className,
              R = !0;
            'ghost' in e ? (R = e.ghost) : x && 'ghost' in x && (R = x.ghost);
            var z = C('page-header', h),
              J = function () {
                var pe;
                return ((pe = w) === null || pe === void 0 ? void 0 : pe.routes) ? mt(w) : null;
              },
              j = J(),
              ce = w && 'props' in w,
              K = (E = L == null ? void 0 : L(e, j)) !== null && E !== void 0 ? E : j,
              Se = ce ? w : K,
              Fe = H()(
                z,
                ae,
                ((u = { 'has-breadcrumb': !!Se, 'has-footer': !!I }),
                (0, m.Z)(u, ''.concat(z, '-ghost'), R),
                (0, m.Z)(u, ''.concat(z, '-rtl'), f === 'rtl'),
                (0, m.Z)(u, ''.concat(z, '-compact'), a),
                u),
              );
            return n.createElement(
              Q.Z,
              { onResize: c },
              n.createElement(
                'div',
                { className: Fe, style: N },
                Se,
                gt(z, e, f),
                A && xt(z, A),
                Ct(z, I),
              ),
            );
          });
        },
        Et = Pt,
        Ye = o(20557),
        Vt = o(28579),
        Ve = o(11871),
        Ke = o(33119),
        Jt = o(46976),
        yt = function (e) {
          var r = (0, n.useContext)(Ke.Z),
            t = e.children,
            a = e.contentWidth,
            l = e.className,
            d = e.style,
            c = (0, n.useContext)(D.ZP.ConfigContext),
            v = c.getPrefixCls,
            u = e.prefixCls || v('pro'),
            C = a || r.contentWidth,
            x = ''.concat(u, '-grid-content');
          return n.createElement(
            'div',
            { className: H()(x, l, { wide: C === 'Fixed' }), style: d },
            n.createElement('div', { className: ''.concat(u, '-grid-content-children') }, t),
          );
        },
        bt = yt,
        pt = o(98589),
        Qt = o(75442),
        Nt = o(66278),
        Zt = function (e) {
          if (!e) return 1;
          var r =
            e.backingStorePixelRatio ||
            e.webkitBackingStorePixelRatio ||
            e.mozBackingStorePixelRatio ||
            e.msBackingStorePixelRatio ||
            e.oBackingStorePixelRatio ||
            e.backingStorePixelRatio ||
            1;
          return (window.devicePixelRatio || 1) / r;
        },
        Rt = function (e) {
          var r = e.children,
            t = e.style,
            a = e.className,
            l = e.markStyle,
            d = e.markClassName,
            c = e.zIndex,
            v = c === void 0 ? 9 : c,
            u = e.gapX,
            C = u === void 0 ? 212 : u,
            x = e.gapY,
            f = x === void 0 ? 222 : x,
            E = e.width,
            h = E === void 0 ? 120 : E,
            N = e.height,
            I = N === void 0 ? 64 : N,
            A = e.rotate,
            w = A === void 0 ? -22 : A,
            L = e.image,
            ae = e.content,
            R = e.offsetLeft,
            z = e.offsetTop,
            J = e.fontStyle,
            j = J === void 0 ? 'normal' : J,
            ce = e.fontWeight,
            K = ce === void 0 ? 'normal' : ce,
            Se = e.fontColor,
            Fe = Se === void 0 ? 'rgba(0,0,0,.15)' : Se,
            Ge = e.fontSize,
            pe = Ge === void 0 ? 16 : Ge,
            Je = e.fontFamily,
            Qe = Je === void 0 ? 'sans-serif' : Je,
            Lt = e.prefixCls,
            zt = (0, n.useContext)(D.ZP.ConfigContext),
            Wt = zt.getPrefixCls,
            _e = Wt('pro-layout-watermark', Lt),
            Ft = H()(''.concat(_e, '-wrapper'), a),
            Ht = H()(_e, d),
            Ut = (0, n.useState)(''),
            qe = (0, P.Z)(Ut, 2),
            $t = qe[0],
            et = qe[1];
          return (
            (0, n.useEffect)(
              function () {
                var Me = document.createElement('canvas'),
                  oe = Me.getContext('2d'),
                  de = Zt(oe),
                  kt = ''.concat((C + h) * de, 'px'),
                  jt = ''.concat((f + I) * de, 'px'),
                  Kt = R || C / 2,
                  Gt = z || f / 2;
                if ((Me.setAttribute('width', kt), Me.setAttribute('height', jt), oe)) {
                  oe.translate(Kt * de, Gt * de), oe.rotate((Math.PI / 180) * Number(w));
                  var Xt = h * de,
                    tt = I * de;
                  if (L) {
                    var Ae = new Image();
                    (Ae.crossOrigin = 'anonymous'),
                      (Ae.referrerPolicy = 'no-referrer'),
                      (Ae.src = L),
                      (Ae.onload = function () {
                        oe.drawImage(Ae, 0, 0, Xt, tt), et(Me.toDataURL());
                      });
                  } else if (ae) {
                    var Yt = Number(pe) * de;
                    (oe.font = ''
                      .concat(j, ' normal ')
                      .concat(K, ' ')
                      .concat(Yt, 'px/')
                      .concat(tt, 'px ')
                      .concat(Qe)),
                      (oe.fillStyle = Fe),
                      oe.fillText(ae, 0, 0),
                      et(Me.toDataURL());
                  }
                } else console.error('\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas');
              },
              [C, f, R, z, w, j, K, h, I, Qe, Fe, L, ae, pe],
            ),
            n.createElement(
              'div',
              { style: (0, g.Z)({ position: 'relative' }, t), className: Ft },
              r,
              n.createElement('div', {
                className: Ht,
                style: (0, g.Z)(
                  {
                    zIndex: v,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: ''.concat(C + h, 'px'),
                    pointerEvents: 'none',
                    backgroundRepeat: 'repeat',
                    backgroundImage: "url('".concat($t, "')"),
                  },
                  l,
                ),
              }),
            )
          );
        },
        Bt = Rt,
        Ot = [
          'title',
          'content',
          'pageHeaderRender',
          'header',
          'prefixedClassName',
          'extraContent',
          'style',
          'prefixCls',
          'breadcrumbRender',
        ],
        Tt = [
          'children',
          'loading',
          'className',
          'style',
          'footer',
          'affixProps',
          'ghost',
          'fixedHeader',
          'breadcrumbRender',
        ];
      function St(i) {
        return (0, ue.Z)(i) === 'object' ? i : { spinning: i };
      }
      var Mt = function (e) {
          var r = e.tabList,
            t = e.tabActiveKey,
            a = e.onTabChange,
            l = e.tabBarExtraContent,
            d = e.tabProps,
            c = e.prefixedClassName;
          return Array.isArray(r) || l
            ? n.createElement(
                Ve.Z,
                (0, F.Z)(
                  {
                    className: ''.concat(c, '-tabs'),
                    activeKey: t,
                    onChange: function (u) {
                      a && a(u);
                    },
                    tabBarExtraContent: l,
                  },
                  d,
                ),
                r == null
                  ? void 0
                  : r.map(function (v, u) {
                      return n.createElement(
                        Ve.Z.TabPane,
                        (0, F.Z)({}, v, { tab: v.tab, key: v.key || u }),
                      );
                    }),
              )
            : null;
        },
        At = function (e, r, t) {
          return !e && !r
            ? null
            : n.createElement(
                'div',
                { className: ''.concat(t, '-detail') },
                n.createElement(
                  'div',
                  { className: ''.concat(t, '-main') },
                  n.createElement(
                    'div',
                    { className: ''.concat(t, '-row') },
                    e && n.createElement('div', { className: ''.concat(t, '-content') }, e),
                    r && n.createElement('div', { className: ''.concat(t, '-extraContent') }, r),
                  ),
                ),
              );
        },
        _t = function (e) {
          var r = useContext(RouteContext);
          return React.createElement(
            'div',
            { style: { height: '100%', display: 'flex', alignItems: 'center' } },
            React.createElement(
              _Breadcrumb,
              _extends(
                {},
                r == null ? void 0 : r.breadcrumb,
                r == null ? void 0 : r.breadcrumbProps,
                e,
              ),
            ),
          );
        },
        Dt = function (e) {
          var r,
            t = (0, n.useContext)(Ke.Z),
            a = e.title,
            l = e.content,
            d = e.pageHeaderRender,
            c = e.header,
            v = e.prefixedClassName,
            u = e.extraContent,
            C = e.style,
            x = e.prefixCls,
            f = e.breadcrumbRender,
            E = (0, Ye.Z)(e, Ot),
            h = (0, n.useMemo)(
              function () {
                if (!!f) return f;
              },
              [f],
            );
          if (d === !1) return null;
          if (d) return n.createElement(n.Fragment, null, ' ', d((0, g.Z)((0, g.Z)({}, e), t)));
          var N = a;
          !a && a !== !1 && (N = t.title);
          var I = (0, g.Z)(
              (0, g.Z)((0, g.Z)({}, t), {}, { title: N }, E),
              {},
              {
                footer: Mt(
                  (0, g.Z)((0, g.Z)({}, E), {}, { breadcrumbRender: f, prefixedClassName: v }),
                ),
              },
              c,
            ),
            A = I.breadcrumb,
            w =
              (!A ||
                (!(A == null ? void 0 : A.itemRender) &&
                  !(A == null || (r = A.routes) === null || r === void 0 ? void 0 : r.length))) &&
              !f;
          return ['title', 'subTitle', 'extra', 'tags', 'footer', 'avatar', 'backIcon'].every(
            function (L) {
              return !I[L];
            },
          ) &&
            w &&
            !l &&
            !u
            ? null
            : n.createElement(
                'div',
                { className: ''.concat(v, '-warp') },
                n.createElement(
                  Et,
                  (0, F.Z)({}, I, {
                    breadcrumb:
                      f === !1 ? void 0 : (0, g.Z)((0, g.Z)({}, I.breadcrumb), t.breadcrumbProps),
                    breadcrumbRender: h,
                    prefixCls: x,
                  }),
                  (c == null ? void 0 : c.children) || At(l, u, v),
                ),
              );
        },
        It = function (e) {
          var r,
            t,
            a = e.children,
            l = e.loading,
            d = l === void 0 ? !1 : l,
            c = e.className,
            v = e.style,
            u = e.footer,
            C = e.affixProps,
            x = e.ghost,
            f = e.fixedHeader,
            E = e.breadcrumbRender,
            h = (0, Ye.Z)(e, Tt),
            N = (0, n.useContext)(Ke.Z),
            I = (0, n.useContext)(D.ZP.ConfigContext),
            A = I.getPrefixCls,
            w = e.prefixCls || A('pro'),
            L = ''.concat(w, '-page-container'),
            ae = H()(
              L,
              c,
              ((r = {}),
              (0, m.Z)(r, ''.concat(w, '-page-container-ghost'), x),
              (0, m.Z)(r, ''.concat(w, '-page-container-with-footer'), u),
              r),
            ),
            R = (0, n.useMemo)(
              function () {
                return a
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement('div', { className: ''.concat(L, '-children-content') }, a),
                      N.hasFooterToolbar &&
                        n.createElement('div', { style: { height: 48, marginTop: 24 } }),
                    )
                  : null;
              },
              [a, L, N.hasFooterToolbar],
            ),
            z = (0, n.useMemo)(
              function () {
                var K;
                return E == !1
                  ? !1
                  : E ||
                      (h == null || (K = h.header) === null || K === void 0
                        ? void 0
                        : K.breadcrumbRender);
              },
              [
                E,
                h == null || (t = h.header) === null || t === void 0 ? void 0 : t.breadcrumbRender,
              ],
            ),
            J = n.createElement(
              Dt,
              (0, F.Z)({}, h, {
                breadcrumbRender: z,
                ghost: x,
                prefixCls: void 0,
                prefixedClassName: L,
              }),
            ),
            j = (0, n.useMemo)(
              function () {
                if (n.isValidElement(d)) return d;
                if (typeof d == 'boolean' && !d) return null;
                var K = St(d);
                return n.createElement(Nt.Z, K);
              },
              [d],
            ),
            ce = (0, n.useMemo)(
              function () {
                var K = j || R;
                return e.waterMarkProps || N.waterMarkProps
                  ? n.createElement(Bt, e.waterMarkProps || N.waterMarkProps, K)
                  : K;
              },
              [e.waterMarkProps, N.waterMarkProps, j, R],
            );
          return n.createElement(
            'div',
            { style: v, className: ae },
            f && J
              ? n.createElement(
                  s,
                  (0, F.Z)({ offsetTop: N.hasHeader && N.fixedHeader ? N.headerHeight : 0 }, C),
                  J,
                )
              : J,
            ce && n.createElement(bt, null, ce),
            u && n.createElement(pt.Z, { prefixCls: w }, u),
          );
        },
        wt = It;
    },
    91070: function () {},
    46976: function () {},
    75442: function () {},
    34897: function () {},
    2829: function () {},
    67227: function () {},
    3953: function () {},
    77145: function (De, ne, o) {
      'use strict';
      o.d(ne, {
        Z: function () {
          return q;
        },
      });
      var T = o(22076),
        O = o(10322),
        F = o(12346),
        m = o(59301),
        Ne = o(92691),
        Z = o.n(Ne),
        Ze = function (s) {
          var p = s.prefixCls,
            D = s.className,
            B = s.width,
            M = s.style;
          return m.createElement('h3', { className: Z()(p, D), style: (0, O.Z)({ width: B }, M) });
        },
        Re = Ze,
        ue = o(37793),
        n = function (s) {
          var p = function (P) {
              var g = s.width,
                k = s.rows,
                Y = k === void 0 ? 2 : k;
              if (Array.isArray(g)) return g[P];
              if (Y - 1 === P) return g;
            },
            D = s.prefixCls,
            B = s.className,
            M = s.style,
            $ = s.rows,
            S = (0, ue.Z)(Array($)).map(function (W, P) {
              return m.createElement('li', { key: P, style: { width: p(P) } });
            });
          return m.createElement('ul', { className: Z()(D, B), style: M }, S);
        },
        Ie = n,
        H = o(83334),
        Be = function (s) {
          var p,
            D,
            B = s.prefixCls,
            M = s.className,
            $ = s.style,
            S = s.size,
            W = s.shape,
            P = Z()(
              ((p = {}),
              (0, T.Z)(p, ''.concat(B, '-lg'), S === 'large'),
              (0, T.Z)(p, ''.concat(B, '-sm'), S === 'small'),
              p),
            ),
            g = Z()(
              ((D = {}),
              (0, T.Z)(D, ''.concat(B, '-circle'), W === 'circle'),
              (0, T.Z)(D, ''.concat(B, '-square'), W === 'square'),
              (0, T.Z)(D, ''.concat(B, '-round'), W === 'round'),
              D),
            ),
            k = typeof S == 'number' ? { width: S, height: S, lineHeight: ''.concat(S, 'px') } : {};
          return m.createElement('span', {
            className: Z()(B, P, g, M),
            style: (0, O.Z)((0, O.Z)({}, k), $),
          });
        },
        Q = Be,
        _ = o(87511),
        U = function (s) {
          var p = function (B) {
            var M = B.getPrefixCls,
              $ = s.prefixCls,
              S = s.className,
              W = s.active,
              P = M('skeleton', $),
              g = (0, _.Z)(s, ['prefixCls', 'className']),
              k = Z()(P, ''.concat(P, '-element'), (0, T.Z)({}, ''.concat(P, '-active'), W), S);
            return m.createElement(
              'div',
              { className: k },
              m.createElement(Q, (0, O.Z)({ prefixCls: ''.concat(P, '-avatar') }, g)),
            );
          };
          return m.createElement(H.C, null, p);
        };
      U.defaultProps = { size: 'default', shape: 'circle' };
      var fe = U,
        ve = function (s) {
          var p = function (B) {
            var M,
              $ = B.getPrefixCls,
              S = s.prefixCls,
              W = s.className,
              P = s.active,
              g = s.block,
              k = g === void 0 ? !1 : g,
              Y = $('skeleton', S),
              le = (0, _.Z)(s, ['prefixCls']),
              se = Z()(
                Y,
                ''.concat(Y, '-element'),
                ((M = {}),
                (0, T.Z)(M, ''.concat(Y, '-active'), P),
                (0, T.Z)(M, ''.concat(Y, '-block'), k),
                M),
                W,
              );
            return m.createElement(
              'div',
              { className: se },
              m.createElement(Q, (0, O.Z)({ prefixCls: ''.concat(Y, '-button') }, le)),
            );
          };
          return m.createElement(H.C, null, p);
        };
      ve.defaultProps = { size: 'default' };
      var me = ve,
        he = function (s) {
          var p = function (B) {
            var M = B.getPrefixCls,
              $ = s.prefixCls,
              S = s.className,
              W = s.active,
              P = M('skeleton', $),
              g = (0, _.Z)(s, ['prefixCls']),
              k = Z()(P, ''.concat(P, '-element'), (0, T.Z)({}, ''.concat(P, '-active'), W), S);
            return m.createElement(
              'div',
              { className: k },
              m.createElement(Q, (0, O.Z)({ prefixCls: ''.concat(P, '-input') }, g)),
            );
          };
          return m.createElement(H.C, null, p);
        };
      he.defaultProps = { size: 'default' };
      var ee = he,
        ge =
          'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
        Ce = function (s) {
          var p = function (B) {
            var M = B.getPrefixCls,
              $ = s.prefixCls,
              S = s.className,
              W = s.style,
              P = M('skeleton', $),
              g = Z()(P, ''.concat(P, '-element'), S);
            return m.createElement(
              'div',
              { className: g },
              m.createElement(
                'div',
                { className: Z()(''.concat(P, '-image'), S), style: W },
                m.createElement(
                  'svg',
                  {
                    viewBox: '0 0 1098 1024',
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: ''.concat(P, '-image-svg'),
                  },
                  m.createElement('path', { d: ge, className: ''.concat(P, '-image-path') }),
                ),
              ),
            );
          };
          return m.createElement(H.C, null, p);
        },
        xe = Ce;
      function G(y) {
        return y && (0, F.Z)(y) === 'object' ? y : {};
      }
      function Pe(y, s) {
        return y && !s ? { size: 'large', shape: 'square' } : { size: 'large', shape: 'circle' };
      }
      function b(y, s) {
        return !y && s ? { width: '38%' } : y && s ? { width: '50%' } : {};
      }
      function ie(y, s) {
        var p = {};
        return (!y || !s) && (p.width = '61%'), !y && s ? (p.rows = 3) : (p.rows = 2), p;
      }
      var X = function (s) {
        var p = function (B) {
          var M = B.getPrefixCls,
            $ = B.direction,
            S = s.prefixCls,
            W = s.loading,
            P = s.className,
            g = s.style,
            k = s.children,
            Y = s.avatar,
            le = s.title,
            se = s.paragraph,
            He = s.active,
            Ue = s.round,
            V = M('skeleton', S);
          if (W || !('loading' in s)) {
            var re,
              Ee = !!Y,
              ye = !!le,
              be = !!se,
              we;
            if (Ee) {
              var $e = (0, O.Z)((0, O.Z)({ prefixCls: ''.concat(V, '-avatar') }, Pe(ye, be)), G(Y));
              we = m.createElement(
                'div',
                { className: ''.concat(V, '-header') },
                m.createElement(Q, $e),
              );
            }
            var Oe;
            if (ye || be) {
              var Te;
              if (ye) {
                var Le = (0, O.Z)(
                  (0, O.Z)({ prefixCls: ''.concat(V, '-title') }, b(Ee, be)),
                  G(le),
                );
                Te = m.createElement(Re, Le);
              }
              var ze;
              if (be) {
                var We = (0, O.Z)(
                  (0, O.Z)({ prefixCls: ''.concat(V, '-paragraph') }, ie(Ee, ye)),
                  G(se),
                );
                ze = m.createElement(Ie, We);
              }
              Oe = m.createElement('div', { className: ''.concat(V, '-content') }, Te, ze);
            }
            var ke = Z()(
              V,
              ((re = {}),
              (0, T.Z)(re, ''.concat(V, '-with-avatar'), Ee),
              (0, T.Z)(re, ''.concat(V, '-active'), He),
              (0, T.Z)(re, ''.concat(V, '-rtl'), $ === 'rtl'),
              (0, T.Z)(re, ''.concat(V, '-round'), Ue),
              re),
              P,
            );
            return m.createElement('div', { className: ke, style: g }, we, Oe);
          }
          return k;
        };
        return m.createElement(H.C, null, p);
      };
      (X.defaultProps = { avatar: !1, title: !0, paragraph: !0 }),
        (X.Button = me),
        (X.Avatar = fe),
        (X.Input = ee),
        (X.Image = xe);
      var te = X,
        q = te;
    },
    43710: function (De, ne, o) {
      'use strict';
      var T = o(9233),
        O = o.n(T),
        F = o(3953),
        m = o.n(F);
    },
  },
]);
