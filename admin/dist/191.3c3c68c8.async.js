(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [191],
  {
    33119: function (Ce, G, n) {
      'use strict';
      var C = n(59301),
        E = (0, C.createContext)({});
      G.Z = E;
    },
    98589: function (Ce, G, n) {
      'use strict';
      var C = n(10322),
        E = n(36531),
        A = n(99793),
        v = n(20658),
        ie = n(20557),
        O = n(59301),
        D = n(92691),
        _ = n.n(D),
        X = n(52535),
        a = n(91070),
        z = n.n(a),
        T = n(33119),
        ae = ['children', 'className', 'extra', 'style', 'renderContent'],
        k = function (Y) {
          var se = Y.children,
            de = Y.className,
            s = Y.extra,
            m = Y.style,
            d = Y.renderContent,
            S = (0, ie.Z)(Y, ae),
            K = (0, O.useContext)(v.ZP.ConfigContext),
            te = K.getPrefixCls,
            w = Y.prefixCls || te('pro'),
            re = ''.concat(w, '-footer-bar'),
            P = (0, O.useContext)(T.Z),
            me = (0, O.useMemo)(
              function () {
                var xe = P.hasSiderMenu,
                  ge = P.isMobile,
                  B = P.siderWidth;
                if (!!xe) return B ? (ge ? '100%' : 'calc(100% - '.concat(B, 'px)')) : '100%';
              },
              [P.collapsed, P.hasSiderMenu, P.isMobile, P.siderWidth],
            ),
            F = O.createElement(
              O.Fragment,
              null,
              O.createElement('div', { className: ''.concat(re, '-left') }, s),
              O.createElement('div', { className: ''.concat(re, '-right') }, se),
            );
          return (
            (0, O.useEffect)(function () {
              return !P || !(P == null ? void 0 : P.setHasFooterToolbar)
                ? function () {}
                : (P == null || P.setHasFooterToolbar(!0),
                  function () {
                    var xe;
                    P == null ||
                      (xe = P.setHasFooterToolbar) === null ||
                      xe === void 0 ||
                      xe.call(P, !1);
                  });
            }, []),
            O.createElement(
              'div',
              (0, C.Z)(
                { className: _()(de, ''.concat(re)), style: (0, E.Z)({ width: me }, m) },
                (0, X.Z)(S, ['prefixCls']),
              ),
              d ? d((0, E.Z)((0, E.Z)((0, E.Z)({}, Y), P), {}, { leftWidth: me }), F) : F,
            )
          );
        };
      G.Z = k;
    },
    88430: function (Ce, G, n) {
      'use strict';
      n.d(G, {
        ZP: function () {
          return wt;
        },
      });
      var C = n(9233),
        E = n(34897),
        A = n(10322),
        v = n(22076),
        ie = n(3359),
        O = n(29860),
        D = n(54855),
        _ = n(71512),
        X = n(12346),
        a = n(59301),
        z = n(92691),
        T = n.n(z),
        ae = n(87511),
        k = n(88857),
        N = n(83334),
        Y = n(37793),
        se = n(11897);
      function de(o) {
        var e,
          r = function (l) {
            return function () {
              (e = null), o.apply(void 0, (0, Y.Z)(l));
            };
          },
          t = function () {
            if (e == null) {
              for (var l = arguments.length, f = new Array(l), u = 0; u < l; u++)
                f[u] = arguments[u];
              e = (0, se.Z)(r(f));
            }
          };
        return (
          (t.cancel = function () {
            return se.Z.cancel(e);
          }),
          t
        );
      }
      function s() {
        return function (e, r, t) {
          var i = t.value,
            l = !1;
          return {
            configurable: !0,
            get: function () {
              if (l || this === e.prototype || this.hasOwnProperty(r)) return i;
              var u = de(i.bind(this));
              return (
                (l = !0),
                Object.defineProperty(this, r, { value: u, configurable: !0, writable: !0 }),
                (l = !1),
                u
              );
            },
          };
        };
      }
      var m = n(53147);
      function d(o) {
        return o !== window ? o.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
      }
      function S(o, e, r) {
        if (r !== void 0 && e.top > o.top - r) return r + e.top;
      }
      function K(o, e, r) {
        if (r !== void 0 && e.bottom < o.bottom + r) {
          var t = window.innerHeight - e.bottom;
          return r + t;
        }
      }
      var te = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'],
        w = [];
      function re() {
        return w;
      }
      function P(o, e) {
        if (!!o) {
          var r = w.find(function (t) {
            return t.target === o;
          });
          r
            ? r.affixList.push(e)
            : ((r = { target: o, affixList: [e], eventHandlers: {} }),
              w.push(r),
              te.forEach(function (t) {
                r.eventHandlers[t] = (0, m.Z)(o, t, function () {
                  r.affixList.forEach(function (i) {
                    i.lazyUpdatePosition();
                  });
                });
              }));
        }
      }
      function me(o) {
        var e = w.find(function (r) {
          var t = r.affixList.some(function (i) {
            return i === o;
          });
          return (
            t &&
              (r.affixList = r.affixList.filter(function (i) {
                return i !== o;
              })),
            t
          );
        });
        e &&
          e.affixList.length === 0 &&
          ((w = w.filter(function (r) {
            return r !== e;
          })),
          te.forEach(function (r) {
            var t = e.eventHandlers[r];
            t && t.remove && t.remove();
          }));
      }
      var F = function (o, e, r, t) {
        var i = arguments.length,
          l = i < 3 ? e : t === null ? (t = Object.getOwnPropertyDescriptor(e, r)) : t,
          f;
        if (
          (typeof Reflect == 'undefined' ? 'undefined' : (0, X.Z)(Reflect)) === 'object' &&
          typeof Reflect.decorate == 'function'
        )
          l = Reflect.decorate(o, e, r, t);
        else
          for (var u = o.length - 1; u >= 0; u--)
            (f = o[u]) && (l = (i < 3 ? f(l) : i > 3 ? f(e, r, l) : f(e, r)) || l);
        return i > 3 && l && Object.defineProperty(e, r, l), l;
      };
      function xe() {
        return typeof window != 'undefined' ? window : null;
      }
      var ge;
      (function (o) {
        (o[(o.None = 0)] = 'None'), (o[(o.Prepare = 1)] = 'Prepare');
      })(ge || (ge = {}));
      var B = (function (o) {
        (0, D.Z)(r, o);
        var e = (0, _.Z)(r);
        function r() {
          var t;
          return (
            (0, ie.Z)(this, r),
            (t = e.apply(this, arguments)),
            (t.state = { status: ge.None, lastAffix: !1, prevTarget: null }),
            (t.getOffsetTop = function () {
              var i = t.props,
                l = i.offsetBottom,
                f = i.offsetTop;
              return l === void 0 && f === void 0 ? 0 : f;
            }),
            (t.getOffsetBottom = function () {
              return t.props.offsetBottom;
            }),
            (t.savePlaceholderNode = function (i) {
              t.placeholderNode = i;
            }),
            (t.saveFixedNode = function (i) {
              t.fixedNode = i;
            }),
            (t.measure = function () {
              var i = t.state,
                l = i.status,
                f = i.lastAffix,
                u = t.props.onChange,
                x = t.getTargetFunc();
              if (!(l !== ge.Prepare || !t.fixedNode || !t.placeholderNode || !x)) {
                var h = t.getOffsetTop(),
                  p = t.getOffsetBottom(),
                  Z = x();
                if (!!Z) {
                  var g = { status: ge.None },
                    R = d(Z),
                    y = d(t.placeholderNode),
                    L = S(y, R, h),
                    V = K(y, R, p);
                  L !== void 0
                    ? ((g.affixStyle = {
                        position: 'fixed',
                        top: L,
                        width: y.width,
                        height: y.height,
                      }),
                      (g.placeholderStyle = { width: y.width, height: y.height }))
                    : V !== void 0 &&
                      ((g.affixStyle = {
                        position: 'fixed',
                        bottom: V,
                        width: y.width,
                        height: y.height,
                      }),
                      (g.placeholderStyle = { width: y.width, height: y.height })),
                    (g.lastAffix = !!g.affixStyle),
                    u && f !== g.lastAffix && u(g.lastAffix),
                    t.setState(g);
                }
              }
            }),
            (t.prepareMeasure = function () {
              if (
                (t.setState({ status: ge.Prepare, affixStyle: void 0, placeholderStyle: void 0 }),
                !1)
              )
                var i;
            }),
            t
          );
        }
        return (
          (0, O.Z)(r, [
            {
              key: 'getTargetFunc',
              value: function () {
                var i = this.context.getTargetContainer,
                  l = this.props.target;
                return l !== void 0 ? l : i || xe;
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var i = this,
                  l = this.getTargetFunc();
                l &&
                  (this.timeout = setTimeout(function () {
                    P(l(), i), i.updatePosition();
                  }));
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (i) {
                var l = this.state.prevTarget,
                  f = this.getTargetFunc(),
                  u = (f == null ? void 0 : f()) || null;
                l !== u &&
                  (me(this),
                  u && (P(u, this), this.updatePosition()),
                  this.setState({ prevTarget: u })),
                  (i.offsetTop !== this.props.offsetTop ||
                    i.offsetBottom !== this.props.offsetBottom) &&
                    this.updatePosition(),
                  this.measure();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                clearTimeout(this.timeout),
                  me(this),
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
                var i = this.getTargetFunc(),
                  l = this.state.affixStyle;
                if (i && l) {
                  var f = this.getOffsetTop(),
                    u = this.getOffsetBottom(),
                    x = i();
                  if (x && this.placeholderNode) {
                    var h = d(x),
                      p = d(this.placeholderNode),
                      Z = S(p, h, f),
                      g = K(p, h, u);
                    if ((Z !== void 0 && l.top === Z) || (g !== void 0 && l.bottom === g)) return;
                  }
                }
                this.prepareMeasure();
              },
            },
            {
              key: 'render',
              value: function () {
                var i = this,
                  l = this.context.getPrefixCls,
                  f = this.state,
                  u = f.affixStyle,
                  x = f.placeholderStyle,
                  h = this.props,
                  p = h.prefixCls,
                  Z = h.children,
                  g = T()((0, v.Z)({}, l('affix', p), !!u)),
                  R = (0, ae.Z)(this.props, [
                    'prefixCls',
                    'offsetTop',
                    'offsetBottom',
                    'target',
                    'onChange',
                  ]);
                return a.createElement(
                  k.Z,
                  {
                    onResize: function () {
                      i.updatePosition();
                    },
                  },
                  a.createElement(
                    'div',
                    (0, A.Z)({}, R, { ref: this.savePlaceholderNode }),
                    u && a.createElement('div', { style: x, 'aria-hidden': 'true' }),
                    a.createElement(
                      'div',
                      { className: g, ref: this.saveFixedNode, style: u },
                      a.createElement(
                        k.Z,
                        {
                          onResize: function () {
                            i.updatePosition();
                          },
                        },
                        Z,
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          r
        );
      })(a.Component);
      (B.contextType = N.E_),
        F([s()], B.prototype, 'updatePosition', null),
        F([s()], B.prototype, 'lazyUpdatePosition', null);
      var c = B,
        I = n(99793),
        Q = n(20658),
        U = n(67227),
        j = n(2829),
        oe = n(48513),
        H = n(18024),
        ne = n(95015),
        M = n(28211),
        b = n(36531),
        le = {
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
        fe = le,
        be = n(23986),
        pe = function (e, r) {
          return a.createElement(be.Z, (0, b.Z)((0, b.Z)({}, e), {}, { ref: r, icon: fe }));
        };
      pe.displayName = 'ArrowLeftOutlined';
      var ze = a.forwardRef(pe),
        Ke = {
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
        ve = Ke,
        ye = function (e, r) {
          return a.createElement(be.Z, (0, b.Z)((0, b.Z)({}, e), {}, { ref: r, icon: ve }));
        };
      ye.displayName = 'ArrowRightOutlined';
      var Ne = a.forwardRef(ye),
        Me = n(45811),
        Re = n(49685),
        we = n(91612),
        Fe = function (o, e) {
          var r = {};
          for (var t in o)
            Object.prototype.hasOwnProperty.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var i = 0, t = Object.getOwnPropertySymbols(o); i < t.length; i++)
              e.indexOf(t[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, t[i]) &&
                (r[t[i]] = o[t[i]]);
          return r;
        },
        Te = function (e) {
          var r = e.prefixCls,
            t = e.separator,
            i = t === void 0 ? '/' : t,
            l = e.children,
            f = e.overlay,
            u = e.dropdownProps,
            x = Fe(e, ['prefixCls', 'separator', 'children', 'overlay', 'dropdownProps']),
            h = a.useContext(N.E_),
            p = h.getPrefixCls,
            Z = p('breadcrumb', r),
            g = function (L) {
              return f
                ? a.createElement(
                    we.Z,
                    (0, A.Z)({ overlay: f, placement: 'bottomCenter' }, u),
                    a.createElement(
                      'span',
                      { className: ''.concat(Z, '-overlay-link') },
                      L,
                      a.createElement(Re.Z, null),
                    ),
                  )
                : L;
            },
            R;
          return (
            'href' in x
              ? (R = a.createElement('a', (0, A.Z)({ className: ''.concat(Z, '-link') }, x), l))
              : (R = a.createElement('span', (0, A.Z)({ className: ''.concat(Z, '-link') }, x), l)),
            (R = g(R)),
            l
              ? a.createElement(
                  'span',
                  null,
                  R,
                  i && a.createElement('span', { className: ''.concat(Z, '-separator') }, i),
                )
              : null
          );
        };
      Te.__ANT_BREADCRUMB_ITEM = !0;
      var Be = Te,
        Ie = function (e) {
          var r = e.children,
            t = a.useContext(N.E_),
            i = t.getPrefixCls,
            l = i('breadcrumb');
          return a.createElement('span', { className: ''.concat(l, '-separator') }, r || '/');
        };
      Ie.__ANT_BREADCRUMB_SEPARATOR = !0;
      var Le = Ie,
        We = n(74318),
        He = n(3194),
        rt = n(88777),
        at = function (o, e) {
          var r = {};
          for (var t in o)
            Object.prototype.hasOwnProperty.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var i = 0, t = Object.getOwnPropertySymbols(o); i < t.length; i++)
              e.indexOf(t[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, t[i]) &&
                (r[t[i]] = o[t[i]]);
          return r;
        };
      function nt(o, e) {
        if (!o.breadcrumbName) return null;
        var r = Object.keys(e).join('|'),
          t = o.breadcrumbName.replace(new RegExp(':('.concat(r, ')'), 'g'), function (i, l) {
            return e[l] || i;
          });
        return t;
      }
      function it(o, e, r, t) {
        var i = r.indexOf(o) === r.length - 1,
          l = nt(o, e);
        return i
          ? a.createElement('span', null, l)
          : a.createElement('a', { href: '#/'.concat(t.join('/')) }, l);
      }
      var Ge = function (e, r) {
          return (
            (e = (e || '').replace(/^\//, '')),
            Object.keys(r).forEach(function (t) {
              e = e.replace(':'.concat(t), r[t]);
            }),
            e
          );
        },
        ot = function (e, r, t) {
          var i = (0, Y.Z)(e),
            l = Ge(r || '', t);
          return l && i.push(l), i;
        },
        ke = function (e) {
          var r = e.prefixCls,
            t = e.separator,
            i = t === void 0 ? '/' : t,
            l = e.style,
            f = e.className,
            u = e.routes,
            x = e.children,
            h = e.itemRender,
            p = h === void 0 ? it : h,
            Z = e.params,
            g = Z === void 0 ? {} : Z,
            R = at(e, [
              'prefixCls',
              'separator',
              'style',
              'className',
              'routes',
              'children',
              'itemRender',
              'params',
            ]),
            y = a.useContext(N.E_),
            L = y.getPrefixCls,
            V = y.direction,
            $,
            J = L('breadcrumb', r);
          if (u && u.length > 0) {
            var q = [];
            $ = u.map(function (W) {
              var ee = Ge(W.path, g);
              ee && q.push(ee);
              var he;
              return (
                W.children &&
                  W.children.length &&
                  (he = a.createElement(
                    We.Z,
                    null,
                    W.children.map(function (ce) {
                      return a.createElement(
                        We.Z.Item,
                        { key: ce.path || ce.breadcrumbName },
                        p(ce, g, u, ot(q, ce.path, g)),
                      );
                    }),
                  )),
                a.createElement(
                  Be,
                  { overlay: he, separator: i, key: ee || W.breadcrumbName },
                  p(W, g, u, q),
                )
              );
            });
          } else
            x &&
              ($ = (0, Me.Z)(x).map(function (W, ee) {
                return (
                  W &&
                  ((0, He.Z)(
                    W.type &&
                      (W.type.__ANT_BREADCRUMB_ITEM === !0 ||
                        W.type.__ANT_BREADCRUMB_SEPARATOR === !0),
                    'Breadcrumb',
                    "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
                  ),
                  (0, rt.Tm)(W, { separator: i, key: ee }))
                );
              }));
          var Ee = T()(J, (0, v.Z)({}, ''.concat(J, '-rtl'), V === 'rtl'), f);
          return a.createElement('div', (0, A.Z)({ className: Ee, style: l }, R), $);
        };
      (ke.Item = Be), (ke.Separator = Le);
      var lt = ke,
        st = lt,
        ct = n(94680),
        ut = n(53814),
        dt = n(45605),
        ft = n(8162),
        vt = function (e, r, t) {
          return !r || !t
            ? null
            : a.createElement(dt.Z, { componentName: 'PageHeader' }, function (i) {
                var l = i.back;
                return a.createElement(
                  'div',
                  { className: ''.concat(e, '-back') },
                  a.createElement(
                    ut.Z,
                    {
                      onClick: function (u) {
                        t == null || t(u);
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
          return a.createElement(st, e);
        },
        ht = function (e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'ltr';
          return e.backIcon !== void 0
            ? e.backIcon
            : r === 'rtl'
            ? a.createElement(Ne, null)
            : a.createElement(ze, null);
        },
        gt = function (e, r) {
          var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'ltr',
            i = r.title,
            l = r.avatar,
            f = r.subTitle,
            u = r.tags,
            x = r.extra,
            h = r.onBack,
            p = ''.concat(e, '-heading'),
            Z = i || f || u || x;
          if (!Z) return null;
          var g = ht(r, t),
            R = vt(e, g, h),
            y = R || l || Z;
          return a.createElement(
            'div',
            { className: p },
            y &&
              a.createElement(
                'div',
                { className: ''.concat(p, '-left') },
                R,
                l && a.createElement(ct.C, l),
                i &&
                  a.createElement(
                    'span',
                    { className: ''.concat(p, '-title'), title: typeof i == 'string' ? i : void 0 },
                    i,
                  ),
                f &&
                  a.createElement(
                    'span',
                    {
                      className: ''.concat(p, '-sub-title'),
                      title: typeof f == 'string' ? f : void 0,
                    },
                    f,
                  ),
                u && a.createElement('span', { className: ''.concat(p, '-tags') }, u),
              ),
            x && a.createElement('span', { className: ''.concat(p, '-extra') }, x),
          );
        },
        Ct = function (e, r) {
          return r ? a.createElement('div', { className: ''.concat(e, '-footer') }, r) : null;
        },
        xt = function (e, r) {
          return a.createElement('div', { className: ''.concat(e, '-content') }, r);
        },
        yt = function (e) {
          var r = a.useState(!1),
            t = (0, M.Z)(r, 2),
            i = t[0],
            l = t[1],
            f = (0, ft.Z)(),
            u = function (h) {
              var p = h.width;
              f() || l(p < 768);
            };
          return a.createElement(N.C, null, function (x) {
            var h,
              p = x.getPrefixCls,
              Z = x.pageHeader,
              g = x.direction,
              R,
              y = e.prefixCls,
              L = e.style,
              V = e.footer,
              $ = e.children,
              J = e.breadcrumb,
              q = e.breadcrumbRender,
              Ee = e.className,
              W = !0;
            'ghost' in e ? (W = e.ghost) : Z && 'ghost' in Z && (W = Z.ghost);
            var ee = p('page-header', y),
              he = function () {
                var Se;
                return ((Se = J) === null || Se === void 0 ? void 0 : Se.routes) ? mt(J) : null;
              },
              ce = he(),
              Ze = J && 'props' in J,
              ue = (R = q == null ? void 0 : q(e, ce)) !== null && R !== void 0 ? R : ce,
              Ae = Ze ? J : ue,
              Ue = T()(
                ee,
                Ee,
                ((h = { 'has-breadcrumb': !!Ae, 'has-footer': !!V }),
                (0, v.Z)(h, ''.concat(ee, '-ghost'), W),
                (0, v.Z)(h, ''.concat(ee, '-rtl'), g === 'rtl'),
                (0, v.Z)(h, ''.concat(ee, '-compact'), i),
                h),
              );
            return a.createElement(
              k.Z,
              { onResize: u },
              a.createElement(
                'div',
                { className: Ue, style: L },
                Ae,
                gt(ee, e, g),
                $ && xt(ee, $),
                Ct(ee, V),
              ),
            );
          });
        },
        Et = yt,
        Xe = n(20557),
        Yt = n(28579),
        Ye = n(11871),
        je = n(33119),
        Qt = n(46976),
        Pt = function (e) {
          var r = (0, a.useContext)(je.Z),
            t = e.children,
            i = e.contentWidth,
            l = e.className,
            f = e.style,
            u = (0, a.useContext)(Q.ZP.ConfigContext),
            x = u.getPrefixCls,
            h = e.prefixCls || x('pro'),
            p = i || r.contentWidth,
            Z = ''.concat(h, '-grid-content');
          return a.createElement(
            'div',
            { className: T()(Z, l, { wide: p === 'Fixed' }), style: f },
            a.createElement('div', { className: ''.concat(h, '-grid-content-children') }, t),
          );
        },
        bt = Pt,
        pt = n(98589),
        Vt = n(75442),
        Zt = n(66278),
        Ot = function (e) {
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
        Nt = function (e) {
          var r = e.children,
            t = e.style,
            i = e.className,
            l = e.markStyle,
            f = e.markClassName,
            u = e.zIndex,
            x = u === void 0 ? 9 : u,
            h = e.gapX,
            p = h === void 0 ? 212 : h,
            Z = e.gapY,
            g = Z === void 0 ? 222 : Z,
            R = e.width,
            y = R === void 0 ? 120 : R,
            L = e.height,
            V = L === void 0 ? 64 : L,
            $ = e.rotate,
            J = $ === void 0 ? -22 : $,
            q = e.image,
            Ee = e.content,
            W = e.offsetLeft,
            ee = e.offsetTop,
            he = e.fontStyle,
            ce = he === void 0 ? 'normal' : he,
            Ze = e.fontWeight,
            ue = Ze === void 0 ? 'normal' : Ze,
            Ae = e.fontColor,
            Ue = Ae === void 0 ? 'rgba(0,0,0,.15)' : Ae,
            $e = e.fontSize,
            Se = $e === void 0 ? 16 : $e,
            Qe = e.fontFamily,
            Ve = Qe === void 0 ? 'sans-serif' : Qe,
            It = e.prefixCls,
            Lt = (0, a.useContext)(Q.ZP.ConfigContext),
            Wt = Lt.getPrefixCls,
            Je = Wt('pro-layout-watermark', It),
            Ut = T()(''.concat(Je, '-wrapper'), i),
            zt = T()(Je, f),
            Kt = (0, a.useState)(''),
            qe = (0, M.Z)(Kt, 2),
            Ft = qe[0],
            et = qe[1];
          return (
            (0, a.useEffect)(
              function () {
                var De = document.createElement('canvas'),
                  Pe = De.getContext('2d'),
                  Oe = Ot(Pe),
                  Ht = ''.concat((p + y) * Oe, 'px'),
                  kt = ''.concat((g + V) * Oe, 'px'),
                  jt = W || p / 2,
                  $t = ee || g / 2;
                if ((De.setAttribute('width', Ht), De.setAttribute('height', kt), Pe)) {
                  Pe.translate(jt * Oe, $t * Oe), Pe.rotate((Math.PI / 180) * Number(J));
                  var Gt = y * Oe,
                    tt = V * Oe;
                  if (q) {
                    var _e = new Image();
                    (_e.crossOrigin = 'anonymous'),
                      (_e.referrerPolicy = 'no-referrer'),
                      (_e.src = q),
                      (_e.onload = function () {
                        Pe.drawImage(_e, 0, 0, Gt, tt), et(De.toDataURL());
                      });
                  } else if (Ee) {
                    var Xt = Number(Se) * Oe;
                    (Pe.font = ''
                      .concat(ce, ' normal ')
                      .concat(ue, ' ')
                      .concat(Xt, 'px/')
                      .concat(tt, 'px ')
                      .concat(Ve)),
                      (Pe.fillStyle = Ue),
                      Pe.fillText(Ee, 0, 0),
                      et(De.toDataURL());
                  }
                } else console.error('\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas');
              },
              [p, g, W, ee, J, ce, ue, y, V, Ve, Ue, q, Ee, Se],
            ),
            a.createElement(
              'div',
              { style: (0, b.Z)({ position: 'relative' }, t), className: Ut },
              r,
              a.createElement('div', {
                className: zt,
                style: (0, b.Z)(
                  {
                    zIndex: x,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: ''.concat(p + y, 'px'),
                    pointerEvents: 'none',
                    backgroundRepeat: 'repeat',
                    backgroundImage: "url('".concat(Ft, "')"),
                  },
                  l,
                ),
              }),
            )
          );
        },
        Mt = Nt,
        Rt = [
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
        St = [
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
      function Tt(o) {
        return (0, X.Z)(o) === 'object' ? o : { spinning: o };
      }
      var Bt = function (e) {
          var r = e.tabList,
            t = e.tabActiveKey,
            i = e.onTabChange,
            l = e.tabBarExtraContent,
            f = e.tabProps,
            u = e.prefixedClassName;
          return Array.isArray(r) || l
            ? a.createElement(
                Ye.Z,
                (0, A.Z)(
                  {
                    className: ''.concat(u, '-tabs'),
                    activeKey: t,
                    onChange: function (h) {
                      i && i(h);
                    },
                    tabBarExtraContent: l,
                  },
                  f,
                ),
                r == null
                  ? void 0
                  : r.map(function (x, h) {
                      return a.createElement(
                        Ye.Z.TabPane,
                        (0, A.Z)({}, x, { tab: x.tab, key: x.key || h }),
                      );
                    }),
              )
            : null;
        },
        At = function (e, r, t) {
          return !e && !r
            ? null
            : a.createElement(
                'div',
                { className: ''.concat(t, '-detail') },
                a.createElement(
                  'div',
                  { className: ''.concat(t, '-main') },
                  a.createElement(
                    'div',
                    { className: ''.concat(t, '-row') },
                    e && a.createElement('div', { className: ''.concat(t, '-content') }, e),
                    r && a.createElement('div', { className: ''.concat(t, '-extraContent') }, r),
                  ),
                ),
              );
        },
        Jt = function (e) {
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
            t = (0, a.useContext)(je.Z),
            i = e.title,
            l = e.content,
            f = e.pageHeaderRender,
            u = e.header,
            x = e.prefixedClassName,
            h = e.extraContent,
            p = e.style,
            Z = e.prefixCls,
            g = e.breadcrumbRender,
            R = (0, Xe.Z)(e, Rt),
            y = (0, a.useMemo)(
              function () {
                if (!!g) return g;
              },
              [g],
            );
          if (f === !1) return null;
          if (f) return a.createElement(a.Fragment, null, ' ', f((0, b.Z)((0, b.Z)({}, e), t)));
          var L = i;
          !i && i !== !1 && (L = t.title);
          var V = (0, b.Z)(
              (0, b.Z)((0, b.Z)({}, t), {}, { title: L }, R),
              {},
              {
                footer: Bt(
                  (0, b.Z)((0, b.Z)({}, R), {}, { breadcrumbRender: g, prefixedClassName: x }),
                ),
              },
              u,
            ),
            $ = V.breadcrumb,
            J =
              (!$ ||
                (!($ == null ? void 0 : $.itemRender) &&
                  !($ == null || (r = $.routes) === null || r === void 0 ? void 0 : r.length))) &&
              !g;
          return ['title', 'subTitle', 'extra', 'tags', 'footer', 'avatar', 'backIcon'].every(
            function (q) {
              return !V[q];
            },
          ) &&
            J &&
            !l &&
            !h
            ? null
            : a.createElement(
                'div',
                { className: ''.concat(x, '-warp') },
                a.createElement(
                  Et,
                  (0, A.Z)({}, V, {
                    breadcrumb:
                      g === !1 ? void 0 : (0, b.Z)((0, b.Z)({}, V.breadcrumb), t.breadcrumbProps),
                    breadcrumbRender: y,
                    prefixCls: Z,
                  }),
                  (u == null ? void 0 : u.children) || At(l, h, x),
                ),
              );
        },
        _t = function (e) {
          var r,
            t,
            i = e.children,
            l = e.loading,
            f = l === void 0 ? !1 : l,
            u = e.className,
            x = e.style,
            h = e.footer,
            p = e.affixProps,
            Z = e.ghost,
            g = e.fixedHeader,
            R = e.breadcrumbRender,
            y = (0, Xe.Z)(e, St),
            L = (0, a.useContext)(je.Z),
            V = (0, a.useContext)(Q.ZP.ConfigContext),
            $ = V.getPrefixCls,
            J = e.prefixCls || $('pro'),
            q = ''.concat(J, '-page-container'),
            Ee = T()(
              q,
              u,
              ((r = {}),
              (0, v.Z)(r, ''.concat(J, '-page-container-ghost'), Z),
              (0, v.Z)(r, ''.concat(J, '-page-container-with-footer'), h),
              r),
            ),
            W = (0, a.useMemo)(
              function () {
                return i
                  ? a.createElement(
                      a.Fragment,
                      null,
                      a.createElement('div', { className: ''.concat(q, '-children-content') }, i),
                      L.hasFooterToolbar &&
                        a.createElement('div', { style: { height: 48, marginTop: 24 } }),
                    )
                  : null;
              },
              [i, q, L.hasFooterToolbar],
            ),
            ee = (0, a.useMemo)(
              function () {
                var ue;
                return R == !1
                  ? !1
                  : R ||
                      (y == null || (ue = y.header) === null || ue === void 0
                        ? void 0
                        : ue.breadcrumbRender);
              },
              [
                R,
                y == null || (t = y.header) === null || t === void 0 ? void 0 : t.breadcrumbRender,
              ],
            ),
            he = a.createElement(
              Dt,
              (0, A.Z)({}, y, {
                breadcrumbRender: ee,
                ghost: Z,
                prefixCls: void 0,
                prefixedClassName: q,
              }),
            ),
            ce = (0, a.useMemo)(
              function () {
                if (a.isValidElement(f)) return f;
                if (typeof f == 'boolean' && !f) return null;
                var ue = Tt(f);
                return a.createElement(Zt.Z, ue);
              },
              [f],
            ),
            Ze = (0, a.useMemo)(
              function () {
                var ue = ce || W;
                return e.waterMarkProps || L.waterMarkProps
                  ? a.createElement(Mt, e.waterMarkProps || L.waterMarkProps, ue)
                  : ue;
              },
              [e.waterMarkProps, L.waterMarkProps, ce, W],
            );
          return a.createElement(
            'div',
            { style: x, className: Ee },
            g && he
              ? a.createElement(
                  c,
                  (0, A.Z)({ offsetTop: L.hasHeader && L.fixedHeader ? L.headerHeight : 0 }, p),
                  he,
                )
              : he,
            Ze && a.createElement(bt, null, Ze),
            h && a.createElement(pt.Z, { prefixCls: J }, h),
          );
        },
        wt = _t;
    },
    15489: function (Ce, G, n) {
      'use strict';
      var C = n(90998),
        E = n(4846),
        A = n(3359),
        v = n(29860),
        ie = n(54855),
        O = n(71512),
        D = n(59301),
        _ = (function (X) {
          (0, ie.Z)(z, X);
          var a = (0, O.Z)(z);
          function z() {
            var T;
            (0, A.Z)(this, z);
            for (var ae = arguments.length, k = new Array(ae), N = 0; N < ae; N++)
              k[N] = arguments[N];
            return (
              (T = a.call.apply(a, [this].concat(k))),
              (T.state = { hasError: !1, errorInfo: '' }),
              T
            );
          }
          return (
            (0, v.Z)(
              z,
              [
                {
                  key: 'componentDidCatch',
                  value: function (ae, k) {
                    console.log(ae, k);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.state.hasError
                      ? D.createElement(E.ZP, {
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
                  value: function (ae) {
                    return { hasError: !0, errorInfo: ae.message };
                  },
                },
              ],
            ),
            z
          );
        })(D.Component);
      G.Z = _;
    },
    91070: function () {},
    46976: function () {},
    75442: function () {},
    34897: function () {},
    2829: function () {},
    67227: function () {},
    3953: function () {},
    8162: function (Ce, G, n) {
      'use strict';
      n.d(G, {
        Z: function () {
          return E;
        },
      });
      var C = n(59301);
      function E() {
        var A = C.useRef(!0);
        return (
          C.useEffect(function () {
            return function () {
              A.current = !1;
            };
          }, []),
          function () {
            return !A.current;
          }
        );
      }
    },
    53814: function (Ce, G, n) {
      'use strict';
      var C = n(10322),
        E = n(59301),
        A = n(22282),
        v = function (D, _) {
          var X = {};
          for (var a in D)
            Object.prototype.hasOwnProperty.call(D, a) && _.indexOf(a) < 0 && (X[a] = D[a]);
          if (D != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var z = 0, a = Object.getOwnPropertySymbols(D); z < a.length; z++)
              _.indexOf(a[z]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(D, a[z]) &&
                (X[a[z]] = D[a[z]]);
          return X;
        },
        ie = {
          border: 0,
          background: 'transparent',
          padding: 0,
          lineHeight: 'inherit',
          display: 'inline-block',
        },
        O = E.forwardRef(function (D, _) {
          var X = function (se) {
              var de = se.keyCode;
              de === A.Z.ENTER && se.preventDefault();
            },
            a = function (se) {
              var de = se.keyCode,
                s = D.onClick;
              de === A.Z.ENTER && s && s();
            },
            z = D.style,
            T = D.noStyle,
            ae = D.disabled,
            k = v(D, ['style', 'noStyle', 'disabled']),
            N = {};
          return (
            T || (N = (0, C.Z)({}, ie)),
            ae && (N.pointerEvents = 'none'),
            (N = (0, C.Z)((0, C.Z)({}, N), z)),
            E.createElement(
              'div',
              (0, C.Z)({ role: 'button', tabIndex: 0, ref: _ }, k, {
                onKeyDown: X,
                onKeyUp: a,
                style: N,
              }),
            )
          );
        });
      G.Z = O;
    },
    77145: function (Ce, G, n) {
      'use strict';
      n.d(G, {
        Z: function () {
          return ge;
        },
      });
      var C = n(22076),
        E = n(10322),
        A = n(12346),
        v = n(59301),
        ie = n(92691),
        O = n.n(ie),
        D = function (c) {
          var I = c.prefixCls,
            Q = c.className,
            U = c.width,
            j = c.style;
          return v.createElement('h3', { className: O()(I, Q), style: (0, E.Z)({ width: U }, j) });
        },
        _ = D,
        X = n(37793),
        a = function (c) {
          var I = function (M) {
              var b = c.width,
                le = c.rows,
                fe = le === void 0 ? 2 : le;
              if (Array.isArray(b)) return b[M];
              if (fe - 1 === M) return b;
            },
            Q = c.prefixCls,
            U = c.className,
            j = c.style,
            oe = c.rows,
            H = (0, X.Z)(Array(oe)).map(function (ne, M) {
              return v.createElement('li', { key: M, style: { width: I(M) } });
            });
          return v.createElement('ul', { className: O()(Q, U), style: j }, H);
        },
        z = a,
        T = n(83334),
        ae = function (c) {
          var I,
            Q,
            U = c.prefixCls,
            j = c.className,
            oe = c.style,
            H = c.size,
            ne = c.shape,
            M = O()(
              ((I = {}),
              (0, C.Z)(I, ''.concat(U, '-lg'), H === 'large'),
              (0, C.Z)(I, ''.concat(U, '-sm'), H === 'small'),
              I),
            ),
            b = O()(
              ((Q = {}),
              (0, C.Z)(Q, ''.concat(U, '-circle'), ne === 'circle'),
              (0, C.Z)(Q, ''.concat(U, '-square'), ne === 'square'),
              (0, C.Z)(Q, ''.concat(U, '-round'), ne === 'round'),
              Q),
            ),
            le =
              typeof H == 'number' ? { width: H, height: H, lineHeight: ''.concat(H, 'px') } : {};
          return v.createElement('span', {
            className: O()(U, M, b, j),
            style: (0, E.Z)((0, E.Z)({}, le), oe),
          });
        },
        k = ae,
        N = n(87511),
        Y = function (c) {
          var I = function (U) {
            var j = U.getPrefixCls,
              oe = c.prefixCls,
              H = c.className,
              ne = c.active,
              M = j('skeleton', oe),
              b = (0, N.Z)(c, ['prefixCls', 'className']),
              le = O()(M, ''.concat(M, '-element'), (0, C.Z)({}, ''.concat(M, '-active'), ne), H);
            return v.createElement(
              'div',
              { className: le },
              v.createElement(k, (0, E.Z)({ prefixCls: ''.concat(M, '-avatar') }, b)),
            );
          };
          return v.createElement(T.C, null, I);
        };
      Y.defaultProps = { size: 'default', shape: 'circle' };
      var se = Y,
        de = function (c) {
          var I = function (U) {
            var j,
              oe = U.getPrefixCls,
              H = c.prefixCls,
              ne = c.className,
              M = c.active,
              b = c.block,
              le = b === void 0 ? !1 : b,
              fe = oe('skeleton', H),
              be = (0, N.Z)(c, ['prefixCls']),
              pe = O()(
                fe,
                ''.concat(fe, '-element'),
                ((j = {}),
                (0, C.Z)(j, ''.concat(fe, '-active'), M),
                (0, C.Z)(j, ''.concat(fe, '-block'), le),
                j),
                ne,
              );
            return v.createElement(
              'div',
              { className: pe },
              v.createElement(k, (0, E.Z)({ prefixCls: ''.concat(fe, '-button') }, be)),
            );
          };
          return v.createElement(T.C, null, I);
        };
      de.defaultProps = { size: 'default' };
      var s = de,
        m = function (c) {
          var I = function (U) {
            var j = U.getPrefixCls,
              oe = c.prefixCls,
              H = c.className,
              ne = c.active,
              M = j('skeleton', oe),
              b = (0, N.Z)(c, ['prefixCls']),
              le = O()(M, ''.concat(M, '-element'), (0, C.Z)({}, ''.concat(M, '-active'), ne), H);
            return v.createElement(
              'div',
              { className: le },
              v.createElement(k, (0, E.Z)({ prefixCls: ''.concat(M, '-input') }, b)),
            );
          };
          return v.createElement(T.C, null, I);
        };
      m.defaultProps = { size: 'default' };
      var d = m,
        S =
          'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
        K = function (c) {
          var I = function (U) {
            var j = U.getPrefixCls,
              oe = c.prefixCls,
              H = c.className,
              ne = c.style,
              M = j('skeleton', oe),
              b = O()(M, ''.concat(M, '-element'), H);
            return v.createElement(
              'div',
              { className: b },
              v.createElement(
                'div',
                { className: O()(''.concat(M, '-image'), H), style: ne },
                v.createElement(
                  'svg',
                  {
                    viewBox: '0 0 1098 1024',
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: ''.concat(M, '-image-svg'),
                  },
                  v.createElement('path', { d: S, className: ''.concat(M, '-image-path') }),
                ),
              ),
            );
          };
          return v.createElement(T.C, null, I);
        },
        te = K;
      function w(B) {
        return B && (0, A.Z)(B) === 'object' ? B : {};
      }
      function re(B, c) {
        return B && !c ? { size: 'large', shape: 'square' } : { size: 'large', shape: 'circle' };
      }
      function P(B, c) {
        return !B && c ? { width: '38%' } : B && c ? { width: '50%' } : {};
      }
      function me(B, c) {
        var I = {};
        return (!B || !c) && (I.width = '61%'), !B && c ? (I.rows = 3) : (I.rows = 2), I;
      }
      var F = function (c) {
        var I = function (U) {
          var j = U.getPrefixCls,
            oe = U.direction,
            H = c.prefixCls,
            ne = c.loading,
            M = c.className,
            b = c.style,
            le = c.children,
            fe = c.avatar,
            be = c.title,
            pe = c.paragraph,
            ze = c.active,
            Ke = c.round,
            ve = j('skeleton', H);
          if (ne || !('loading' in c)) {
            var ye,
              Ne = !!fe,
              Me = !!be,
              Re = !!pe,
              we;
            if (Ne) {
              var Fe = (0, E.Z)(
                (0, E.Z)({ prefixCls: ''.concat(ve, '-avatar') }, re(Me, Re)),
                w(fe),
              );
              we = v.createElement(
                'div',
                { className: ''.concat(ve, '-header') },
                v.createElement(k, Fe),
              );
            }
            var Te;
            if (Me || Re) {
              var Be;
              if (Me) {
                var Ie = (0, E.Z)(
                  (0, E.Z)({ prefixCls: ''.concat(ve, '-title') }, P(Ne, Re)),
                  w(be),
                );
                Be = v.createElement(_, Ie);
              }
              var Le;
              if (Re) {
                var We = (0, E.Z)(
                  (0, E.Z)({ prefixCls: ''.concat(ve, '-paragraph') }, me(Ne, Me)),
                  w(pe),
                );
                Le = v.createElement(z, We);
              }
              Te = v.createElement('div', { className: ''.concat(ve, '-content') }, Be, Le);
            }
            var He = O()(
              ve,
              ((ye = {}),
              (0, C.Z)(ye, ''.concat(ve, '-with-avatar'), Ne),
              (0, C.Z)(ye, ''.concat(ve, '-active'), ze),
              (0, C.Z)(ye, ''.concat(ve, '-rtl'), oe === 'rtl'),
              (0, C.Z)(ye, ''.concat(ve, '-round'), Ke),
              ye),
              M,
            );
            return v.createElement('div', { className: He, style: b }, we, Te);
          }
          return le;
        };
        return v.createElement(T.C, null, I);
      };
      (F.defaultProps = { avatar: !1, title: !0, paragraph: !0 }),
        (F.Button = s),
        (F.Avatar = se),
        (F.Input = d),
        (F.Image = te);
      var xe = F,
        ge = xe;
    },
    43710: function (Ce, G, n) {
      'use strict';
      var C = n(9233),
        E = n.n(C),
        A = n(3953),
        v = n.n(A);
    },
    935: function (Ce, G, n) {
      'use strict';
      n.d(G, {
        f: function () {
          return E;
        },
      });
      var C = n(59301);
      function E(v) {
        var ie = C.createContext(null);
        function O(_) {
          var X = v(_.initialState);
          return C.createElement(ie.Provider, { value: X }, _.children);
        }
        function D() {
          var _ = C.useContext(ie);
          if (_ === null) throw new Error('Component must be wrapped with <Container.Provider>');
          return _;
        }
        return { Provider: O, useContainer: D };
      }
      function A(v) {
        return v.useContainer();
      }
    },
    37131: function (Ce, G, n) {
      'use strict';
      n.d(G, {
        ZP: function () {
          return de;
        },
      });
      var C = n(59301);
      function E(s, m) {
        return D(s) || O(s, m) || v(s, m) || A();
      }
      function A() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function v(s, m) {
        if (!!s) {
          if (typeof s == 'string') return ie(s, m);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          if (
            (d === 'Object' && s.constructor && (d = s.constructor.name),
            d === 'Map' || d === 'Set')
          )
            return Array.from(s);
          if (d === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))
            return ie(s, m);
        }
      }
      function ie(s, m) {
        (m == null || m > s.length) && (m = s.length);
        for (var d = 0, S = new Array(m); d < m; d++) S[d] = s[d];
        return S;
      }
      function O(s, m) {
        var d = s && ((typeof Symbol != 'undefined' && s[Symbol.iterator]) || s['@@iterator']);
        if (d != null) {
          var S = [],
            K = !0,
            te = !1,
            w,
            re;
          try {
            for (
              d = d.call(s);
              !(K = (w = d.next()).done) && (S.push(w.value), !(m && S.length === m));
              K = !0
            );
          } catch (P) {
            (te = !0), (re = P);
          } finally {
            try {
              !K && d.return != null && d.return();
            } finally {
              if (te) throw re;
            }
          }
          return S;
        }
      }
      function D(s) {
        if (Array.isArray(s)) return s;
      }
      function _(s) {
        var m = typeof window == 'undefined',
          d = (0, C.useState)(function () {
            return m ? !1 : window.matchMedia(s).matches;
          }),
          S = E(d, 2),
          K = S[0],
          te = S[1];
        return (
          (0, C.useLayoutEffect)(
            function () {
              if (!m) {
                var w = window.matchMedia(s),
                  re = function (me) {
                    return te(me.matches);
                  };
                return (
                  w.addListener(re),
                  function () {
                    return w.removeListener(re);
                  }
                );
              }
            },
            [s],
          ),
          K
        );
      }
      function X(s, m) {
        return k(s) || ae(s, m) || z(s, m) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function z(s, m) {
        if (!!s) {
          if (typeof s == 'string') return T(s, m);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          if (
            (d === 'Object' && s.constructor && (d = s.constructor.name),
            d === 'Map' || d === 'Set')
          )
            return Array.from(s);
          if (d === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))
            return T(s, m);
        }
      }
      function T(s, m) {
        (m == null || m > s.length) && (m = s.length);
        for (var d = 0, S = new Array(m); d < m; d++) S[d] = s[d];
        return S;
      }
      function ae(s, m) {
        var d = s && ((typeof Symbol != 'undefined' && s[Symbol.iterator]) || s['@@iterator']);
        if (d != null) {
          var S = [],
            K = !0,
            te = !1,
            w,
            re;
          try {
            for (
              d = d.call(s);
              !(K = (w = d.next()).done) && (S.push(w.value), !(m && S.length === m));
              K = !0
            );
          } catch (P) {
            (te = !0), (re = P);
          } finally {
            try {
              !K && d.return != null && d.return();
            } finally {
              if (te) throw re;
            }
          }
          return S;
        }
      }
      function k(s) {
        if (Array.isArray(s)) return s;
      }
      var N = {
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
        Y = function () {
          var m = 'md';
          if (typeof window == 'undefined') return m;
          var d = Object.keys(N).find(function (S) {
            var K = N[S].matchMedia;
            return !!window.matchMedia(K).matches;
          });
          return (m = d), m;
        },
        se = function () {
          var m = _(N.md.matchMedia),
            d = _(N.lg.matchMedia),
            S = _(N.xxl.matchMedia),
            K = _(N.xl.matchMedia),
            te = _(N.sm.matchMedia),
            w = _(N.xs.matchMedia),
            re = (0, C.useState)(Y()),
            P = X(re, 2),
            me = P[0],
            F = P[1];
          return (
            (0, C.useEffect)(
              function () {
                if (S) {
                  F('xxl');
                  return;
                }
                if (K) {
                  F('xl');
                  return;
                }
                if (d) {
                  F('lg');
                  return;
                }
                if (m) {
                  F('md');
                  return;
                }
                if (te) {
                  F('sm');
                  return;
                }
                if (w) {
                  F('xs');
                  return;
                }
                F('md');
              },
              [m, d, S, K, te, w],
            ),
            me
          );
        },
        de = se;
    },
  },
]);
