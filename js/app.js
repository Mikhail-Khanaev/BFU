/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      711: function (e) {
        e.exports = (function (e) {
          function t(i) {
            if (n[i]) return n[i].exports;
            var s = (n[i] = { exports: {}, id: i, loaded: !1 });
            return (
              e[i].call(s.exports, s, s.exports, t), (s.loaded = !0), s.exports
            );
          }
          var n = {};
          return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
        })([
          function (e, t, n) {
            "use strict";
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var s =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  }
                  return e;
                },
              r = (i(n(1)), n(6)),
              a = i(r),
              o = i(n(7)),
              l = i(n(8)),
              d = i(n(9)),
              c = i(n(10)),
              u = i(n(11)),
              p = i(n(14)),
              f = [],
              h = !1,
              m = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              g = function () {
                if (
                  (arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0] &&
                    (h = !0),
                  h)
                )
                  return (
                    (f = (0, u.default)(f, m)), (0, c.default)(f, m.once), f
                  );
              },
              v = function () {
                (f = (0, p.default)()), g();
              },
              b = function () {
                f.forEach(function (e, t) {
                  e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay");
                });
              },
              y = function (e) {
                return (
                  !0 === e ||
                  ("mobile" === e && d.default.mobile()) ||
                  ("phone" === e && d.default.phone()) ||
                  ("tablet" === e && d.default.tablet()) ||
                  ("function" == typeof e && !0 === e())
                );
              },
              w = function (e) {
                (m = s(m, e)), (f = (0, p.default)());
                var t = document.all && !window.atob;
                return y(m.disable) || t
                  ? b()
                  : (m.disableMutationObserver ||
                      l.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                      ),
                      (m.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", m.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", m.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", m.delay),
                    "DOMContentLoaded" === m.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? g(!0)
                      : "load" === m.startEvent
                      ? window.addEventListener(m.startEvent, function () {
                          g(!0);
                        })
                      : document.addEventListener(m.startEvent, function () {
                          g(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, o.default)(g, m.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, o.default)(g, m.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, a.default)(function () {
                        (0, c.default)(f, m.once);
                      }, m.throttleDelay)
                    ),
                    m.disableMutationObserver ||
                      l.default.ready("[data-aos]", v),
                    f);
              };
            e.exports = { init: w, refresh: g, refreshHard: v };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              "use strict";
              function n(e, t, n) {
                function i(t) {
                  var n = m,
                    i = g;
                  return (m = g = void 0), (E = t), (b = e.apply(i, n));
                }
                function r(e) {
                  return (E = e), (y = setTimeout(c, t)), T ? i(e) : b;
                }
                function a(e) {
                  var n = t - (e - w);
                  return k ? S(n, v - (e - E)) : n;
                }
                function l(e) {
                  var n = e - w;
                  return void 0 === w || n >= t || n < 0 || (k && e - E >= v);
                }
                function c() {
                  var e = C();
                  return l(e) ? u(e) : void (y = setTimeout(c, a(e)));
                }
                function u(e) {
                  return (y = void 0), O && m ? i(e) : ((m = g = void 0), b);
                }
                function p() {
                  void 0 !== y && clearTimeout(y),
                    (E = 0),
                    (m = w = g = y = void 0);
                }
                function f() {
                  return void 0 === y ? b : u(C());
                }
                function h() {
                  var e = C(),
                    n = l(e);
                  if (((m = arguments), (g = this), (w = e), n)) {
                    if (void 0 === y) return r(w);
                    if (k) return (y = setTimeout(c, t)), i(w);
                  }
                  return void 0 === y && (y = setTimeout(c, t)), b;
                }
                var m,
                  g,
                  v,
                  b,
                  y,
                  w,
                  E = 0,
                  T = !1,
                  k = !1,
                  O = !0;
                if ("function" != typeof e) throw new TypeError(d);
                return (
                  (t = o(t) || 0),
                  s(n) &&
                    ((T = !!n.leading),
                    (v = (k = "maxWait" in n) ? x(o(n.maxWait) || 0, t) : v),
                    (O = "trailing" in n ? !!n.trailing : O)),
                  (h.cancel = p),
                  (h.flush = f),
                  h
                );
              }
              function i(e, t, i) {
                var r = !0,
                  a = !0;
                if ("function" != typeof e) throw new TypeError(d);
                return (
                  s(i) &&
                    ((r = "leading" in i ? !!i.leading : r),
                    (a = "trailing" in i ? !!i.trailing : a)),
                  n(e, t, { leading: r, maxWait: t, trailing: a })
                );
              }
              function s(e) {
                var t = void 0 === e ? "undefined" : l(e);
                return !!e && ("object" == t || "function" == t);
              }
              function r(e) {
                return !!e && "object" == (void 0 === e ? "undefined" : l(e));
              }
              function a(e) {
                return (
                  "symbol" == (void 0 === e ? "undefined" : l(e)) ||
                  (r(e) && w.call(e) == u)
                );
              }
              function o(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return c;
                if (s(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = s(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(p, "");
                var n = h.test(e);
                return n || m.test(e)
                  ? g(e.slice(2), n ? 2 : 8)
                  : f.test(e)
                  ? c
                  : +e;
              }
              var l =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                d = "Expected a function",
                c = NaN,
                u = "[object Symbol]",
                p = /^\s+|\s+$/g,
                f = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                g = parseInt,
                v =
                  "object" == (void 0 === t ? "undefined" : l(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                b =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : l(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                y = v || b || Function("return this")(),
                w = Object.prototype.toString,
                x = Math.max,
                S = Math.min,
                C = function () {
                  return y.Date.now();
                };
              e.exports = i;
            }.call(
              t,
              (function () {
                return this;
              })()
            ));
          },
          function (e, t) {
            (function (t) {
              "use strict";
              function n(e, t, n) {
                function s(t) {
                  var n = m,
                    i = g;
                  return (m = g = void 0), (E = t), (b = e.apply(i, n));
                }
                function r(e) {
                  return (E = e), (y = setTimeout(c, t)), T ? s(e) : b;
                }
                function o(e) {
                  var n = t - (e - C);
                  return k ? x(n, v - (e - E)) : n;
                }
                function d(e) {
                  var n = e - C;
                  return void 0 === C || n >= t || n < 0 || (k && e - E >= v);
                }
                function c() {
                  var e = S();
                  return d(e) ? u(e) : void (y = setTimeout(c, o(e)));
                }
                function u(e) {
                  return (y = void 0), O && m ? s(e) : ((m = g = void 0), b);
                }
                function p() {
                  void 0 !== y && clearTimeout(y),
                    (E = 0),
                    (m = C = g = y = void 0);
                }
                function f() {
                  return void 0 === y ? b : u(S());
                }
                function h() {
                  var e = S(),
                    n = d(e);
                  if (((m = arguments), (g = this), (C = e), n)) {
                    if (void 0 === y) return r(C);
                    if (k) return (y = setTimeout(c, t)), s(C);
                  }
                  return void 0 === y && (y = setTimeout(c, t)), b;
                }
                var m,
                  g,
                  v,
                  b,
                  y,
                  C,
                  E = 0,
                  T = !1,
                  k = !1,
                  O = !0;
                if ("function" != typeof e) throw new TypeError(l);
                return (
                  (t = a(t) || 0),
                  i(n) &&
                    ((T = !!n.leading),
                    (v = (k = "maxWait" in n) ? w(a(n.maxWait) || 0, t) : v),
                    (O = "trailing" in n ? !!n.trailing : O)),
                  (h.cancel = p),
                  (h.flush = f),
                  h
                );
              }
              function i(e) {
                var t = void 0 === e ? "undefined" : o(e);
                return !!e && ("object" == t || "function" == t);
              }
              function s(e) {
                return !!e && "object" == (void 0 === e ? "undefined" : o(e));
              }
              function r(e) {
                return (
                  "symbol" == (void 0 === e ? "undefined" : o(e)) ||
                  (s(e) && y.call(e) == c)
                );
              }
              function a(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return d;
                if (i(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = i(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(u, "");
                var n = f.test(e);
                return n || h.test(e)
                  ? m(e.slice(2), n ? 2 : 8)
                  : p.test(e)
                  ? d
                  : +e;
              }
              var o =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                l = "Expected a function",
                d = NaN,
                c = "[object Symbol]",
                u = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                f = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                m = parseInt,
                g =
                  "object" == (void 0 === t ? "undefined" : o(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                v =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : o(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                b = g || v || Function("return this")(),
                y = Object.prototype.toString,
                w = Math.max,
                x = Math.min,
                S = function () {
                  return b.Date.now();
                };
              e.exports = n;
            }.call(
              t,
              (function () {
                return this;
              })()
            ));
          },
          function (e, t) {
            "use strict";
            function n(e) {
              var t = void 0,
                i = void 0;
              for (t = 0; t < e.length; t += 1) {
                if ((i = e[t]).dataset && i.dataset.aos) return !0;
                if (i.children && n(i.children)) return !0;
              }
              return !1;
            }
            function i() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function s() {
              return !!i();
            }
            function r(e, t) {
              var n = window.document,
                s = new (i())(a);
              (o = t),
                s.observe(n.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            }
            function a(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    i = Array.prototype.slice.call(e.removedNodes);
                  if (n(t.concat(i))) return o();
                });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function () {};
            t.default = { isSupported: s, ready: r };
          },
          function (e, t) {
            "use strict";
            function n(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            function i() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              r =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              a =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              o =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              l =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              d = (function () {
                function e() {
                  n(this, e);
                }
                return (
                  s(e, [
                    {
                      key: "phone",
                      value: function () {
                        var e = i();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var e = i();
                        return !(!o.test(e) && !l.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new d();
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e, t, n) {
                var i = e.node.getAttribute("data-aos-once");
                t > e.position
                  ? e.node.classList.add("aos-animate")
                  : void 0 !== i &&
                    ("false" === i || (!n && "true" !== i)) &&
                    e.node.classList.remove("aos-animate");
              },
              i = function (e, t) {
                var i = window.pageYOffset,
                  s = window.innerHeight;
                e.forEach(function (e, r) {
                  n(e, s + i, t);
                });
              };
            t.default = i;
          },
          function (e, t, n) {
            "use strict";
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = i(n(12)),
              r = function (e, t) {
                return (
                  e.forEach(function (e, n) {
                    e.node.classList.add("aos-init"),
                      (e.position = (0, s.default)(e.node, t.offset));
                  }),
                  e
                );
              };
            t.default = r;
          },
          function (e, t, n) {
            "use strict";
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = i(n(13)),
              r = function (e, t) {
                var n = 0,
                  i = 0,
                  r = window.innerHeight,
                  a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute(
                      "data-aos-anchor-placement"
                    ),
                  };
                switch (
                  (a.offset && !isNaN(a.offset) && (i = parseInt(a.offset)),
                  a.anchor &&
                    document.querySelectorAll(a.anchor) &&
                    (e = document.querySelectorAll(a.anchor)[0]),
                  (n = (0, s.default)(e).top),
                  a.anchorPlacement)
                ) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    n += e.offsetHeight;
                    break;
                  case "top-center":
                    n += r / 2;
                    break;
                  case "bottom-center":
                    n += r / 2 + e.offsetHeight;
                    break;
                  case "center-center":
                    n += r / 2 + e.offsetHeight / 2;
                    break;
                  case "top-top":
                    n += r;
                    break;
                  case "bottom-top":
                    n += e.offsetHeight + r;
                    break;
                  case "center-top":
                    n += e.offsetHeight / 2 + r;
                }
                return (
                  a.anchorPlacement || a.offset || isNaN(t) || (i = t), n + i
                );
              };
            t.default = r;
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e) {
              for (
                var t = 0, n = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: n, left: t };
            };
            t.default = n;
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            };
            t.default = n;
          },
        ]);
      },
      152: function (e) {
        var t;
        (t = function () {
          return (function () {
            var e = {
                686: function (e, t, n) {
                  "use strict";
                  n.d(t, {
                    default: function () {
                      return C;
                    },
                  });
                  var i = n(279),
                    s = n.n(i),
                    r = n(370),
                    a = n.n(r),
                    o = n(817),
                    l = n.n(o);
                  function d(e) {
                    try {
                      return document.execCommand(e);
                    } catch (e) {
                      return !1;
                    }
                  }
                  var c = function (e) {
                      var t = l()(e);
                      return d("cut"), t;
                    },
                    u = function (e, t) {
                      var n = (function (e) {
                        var t =
                            "rtl" ===
                            document.documentElement.getAttribute("dir"),
                          n = document.createElement("textarea");
                        (n.style.fontSize = "12pt"),
                          (n.style.border = "0"),
                          (n.style.padding = "0"),
                          (n.style.margin = "0"),
                          (n.style.position = "absolute"),
                          (n.style[t ? "right" : "left"] = "-9999px");
                        var i =
                          window.pageYOffset ||
                          document.documentElement.scrollTop;
                        return (
                          (n.style.top = "".concat(i, "px")),
                          n.setAttribute("readonly", ""),
                          (n.value = e),
                          n
                        );
                      })(e);
                      t.container.appendChild(n);
                      var i = l()(n);
                      return d("copy"), n.remove(), i;
                    },
                    p = function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : { container: document.body },
                        n = "";
                      return (
                        "string" == typeof e
                          ? (n = u(e, t))
                          : e instanceof HTMLInputElement &&
                            ![
                              "text",
                              "search",
                              "url",
                              "tel",
                              "password",
                            ].includes(null == e ? void 0 : e.type)
                          ? (n = u(e.value, t))
                          : ((n = l()(e)), d("copy")),
                        n
                      );
                    };
                  function f(e) {
                    return (
                      (f =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                          ? function (e) {
                              return typeof e;
                            }
                          : function (e) {
                              return e &&
                                "function" == typeof Symbol &&
                                e.constructor === Symbol &&
                                e !== Symbol.prototype
                                ? "symbol"
                                : typeof e;
                            }),
                      f(e)
                    );
                  }
                  var h = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.action,
                      n = void 0 === t ? "copy" : t,
                      i = e.container,
                      s = e.target,
                      r = e.text;
                    if ("copy" !== n && "cut" !== n)
                      throw new Error(
                        'Invalid "action" value, use either "copy" or "cut"'
                      );
                    if (void 0 !== s) {
                      if (!s || "object" !== f(s) || 1 !== s.nodeType)
                        throw new Error(
                          'Invalid "target" value, use a valid Element'
                        );
                      if ("copy" === n && s.hasAttribute("disabled"))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                        );
                      if (
                        "cut" === n &&
                        (s.hasAttribute("readonly") ||
                          s.hasAttribute("disabled"))
                      )
                        throw new Error(
                          'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                        );
                    }
                    return r
                      ? p(r, { container: i })
                      : s
                      ? "cut" === n
                        ? c(s)
                        : p(s, { container: i })
                      : void 0;
                  };
                  function m(e) {
                    return (
                      (m =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                          ? function (e) {
                              return typeof e;
                            }
                          : function (e) {
                              return e &&
                                "function" == typeof Symbol &&
                                e.constructor === Symbol &&
                                e !== Symbol.prototype
                                ? "symbol"
                                : typeof e;
                            }),
                      m(e)
                    );
                  }
                  function g(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  function v(e, t) {
                    return (
                      (v =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      v(e, t)
                    );
                  }
                  function b(e) {
                    var t = (function () {
                      if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })();
                    return function () {
                      var n,
                        i = w(e);
                      if (t) {
                        var s = w(this).constructor;
                        n = Reflect.construct(i, arguments, s);
                      } else n = i.apply(this, arguments);
                      return y(this, n);
                    };
                  }
                  function y(e, t) {
                    return !t || ("object" !== m(t) && "function" != typeof t)
                      ? (function (e) {
                          if (void 0 === e)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return e;
                        })(e)
                      : t;
                  }
                  function w(e) {
                    return (
                      (w = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                      w(e)
                    );
                  }
                  function x(e, t) {
                    var n = "data-clipboard-".concat(e);
                    if (t.hasAttribute(n)) return t.getAttribute(n);
                  }
                  var S = (function (e) {
                      !(function (e, t) {
                        if ("function" != typeof t && null !== t)
                          throw new TypeError(
                            "Super expression must either be null or a function"
                          );
                        (e.prototype = Object.create(t && t.prototype, {
                          constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          t && v(e, t);
                      })(r, e);
                      var t,
                        n,
                        i,
                        s = b(r);
                      function r(e, t) {
                        var n;
                        return (
                          (function (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError(
                                "Cannot call a class as a function"
                              );
                          })(this, r),
                          (n = s.call(this)).resolveOptions(t),
                          n.listenClick(e),
                          n
                        );
                      }
                      return (
                        (t = r),
                        (n = [
                          {
                            key: "resolveOptions",
                            value: function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              (this.action =
                                "function" == typeof e.action
                                  ? e.action
                                  : this.defaultAction),
                                (this.target =
                                  "function" == typeof e.target
                                    ? e.target
                                    : this.defaultTarget),
                                (this.text =
                                  "function" == typeof e.text
                                    ? e.text
                                    : this.defaultText),
                                (this.container =
                                  "object" === m(e.container)
                                    ? e.container
                                    : document.body);
                            },
                          },
                          {
                            key: "listenClick",
                            value: function (e) {
                              var t = this;
                              this.listener = a()(e, "click", function (e) {
                                return t.onClick(e);
                              });
                            },
                          },
                          {
                            key: "onClick",
                            value: function (e) {
                              var t = e.delegateTarget || e.currentTarget,
                                n = this.action(t) || "copy",
                                i = h({
                                  action: n,
                                  container: this.container,
                                  target: this.target(t),
                                  text: this.text(t),
                                });
                              this.emit(i ? "success" : "error", {
                                action: n,
                                text: i,
                                trigger: t,
                                clearSelection: function () {
                                  t && t.focus(),
                                    window.getSelection().removeAllRanges();
                                },
                              });
                            },
                          },
                          {
                            key: "defaultAction",
                            value: function (e) {
                              return x("action", e);
                            },
                          },
                          {
                            key: "defaultTarget",
                            value: function (e) {
                              var t = x("target", e);
                              if (t) return document.querySelector(t);
                            },
                          },
                          {
                            key: "defaultText",
                            value: function (e) {
                              return x("text", e);
                            },
                          },
                          {
                            key: "destroy",
                            value: function () {
                              this.listener.destroy();
                            },
                          },
                        ]),
                        (i = [
                          {
                            key: "copy",
                            value: function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : { container: document.body };
                              return p(e, t);
                            },
                          },
                          {
                            key: "cut",
                            value: function (e) {
                              return c(e);
                            },
                          },
                          {
                            key: "isSupported",
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : ["copy", "cut"],
                                t = "string" == typeof e ? [e] : e,
                                n = !!document.queryCommandSupported;
                              return (
                                t.forEach(function (e) {
                                  n = n && !!document.queryCommandSupported(e);
                                }),
                                n
                              );
                            },
                          },
                        ]),
                        n && g(t.prototype, n),
                        i && g(t, i),
                        r
                      );
                    })(s()),
                    C = S;
                },
                828: function (e) {
                  if (
                    "undefined" != typeof Element &&
                    !Element.prototype.matches
                  ) {
                    var t = Element.prototype;
                    t.matches =
                      t.matchesSelector ||
                      t.mozMatchesSelector ||
                      t.msMatchesSelector ||
                      t.oMatchesSelector ||
                      t.webkitMatchesSelector;
                  }
                  e.exports = function (e, t) {
                    for (; e && 9 !== e.nodeType; ) {
                      if ("function" == typeof e.matches && e.matches(t))
                        return e;
                      e = e.parentNode;
                    }
                  };
                },
                438: function (e, t, n) {
                  var i = n(828);
                  function s(e, t, n, i, s) {
                    var a = r.apply(this, arguments);
                    return (
                      e.addEventListener(n, a, s),
                      {
                        destroy: function () {
                          e.removeEventListener(n, a, s);
                        },
                      }
                    );
                  }
                  function r(e, t, n, s) {
                    return function (n) {
                      (n.delegateTarget = i(n.target, t)),
                        n.delegateTarget && s.call(e, n);
                    };
                  }
                  e.exports = function (e, t, n, i, r) {
                    return "function" == typeof e.addEventListener
                      ? s.apply(null, arguments)
                      : "function" == typeof n
                      ? s.bind(null, document).apply(null, arguments)
                      : ("string" == typeof e &&
                          (e = document.querySelectorAll(e)),
                        Array.prototype.map.call(e, function (e) {
                          return s(e, t, n, i, r);
                        }));
                  };
                },
                879: function (e, t) {
                  (t.node = function (e) {
                    return (
                      void 0 !== e &&
                      e instanceof HTMLElement &&
                      1 === e.nodeType
                    );
                  }),
                    (t.nodeList = function (e) {
                      var n = Object.prototype.toString.call(e);
                      return (
                        void 0 !== e &&
                        ("[object NodeList]" === n ||
                          "[object HTMLCollection]" === n) &&
                        "length" in e &&
                        (0 === e.length || t.node(e[0]))
                      );
                    }),
                    (t.string = function (e) {
                      return "string" == typeof e || e instanceof String;
                    }),
                    (t.fn = function (e) {
                      return (
                        "[object Function]" ===
                        Object.prototype.toString.call(e)
                      );
                    });
                },
                370: function (e, t, n) {
                  var i = n(879),
                    s = n(438);
                  e.exports = function (e, t, n) {
                    if (!e && !t && !n)
                      throw new Error("Missing required arguments");
                    if (!i.string(t))
                      throw new TypeError("Second argument must be a String");
                    if (!i.fn(n))
                      throw new TypeError("Third argument must be a Function");
                    if (i.node(e))
                      return (function (e, t, n) {
                        return (
                          e.addEventListener(t, n),
                          {
                            destroy: function () {
                              e.removeEventListener(t, n);
                            },
                          }
                        );
                      })(e, t, n);
                    if (i.nodeList(e))
                      return (function (e, t, n) {
                        return (
                          Array.prototype.forEach.call(e, function (e) {
                            e.addEventListener(t, n);
                          }),
                          {
                            destroy: function () {
                              Array.prototype.forEach.call(e, function (e) {
                                e.removeEventListener(t, n);
                              });
                            },
                          }
                        );
                      })(e, t, n);
                    if (i.string(e))
                      return (function (e, t, n) {
                        return s(document.body, e, t, n);
                      })(e, t, n);
                    throw new TypeError(
                      "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                    );
                  };
                },
                817: function (e) {
                  e.exports = function (e) {
                    var t;
                    if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
                    else if (
                      "INPUT" === e.nodeName ||
                      "TEXTAREA" === e.nodeName
                    ) {
                      var n = e.hasAttribute("readonly");
                      n || e.setAttribute("readonly", ""),
                        e.select(),
                        e.setSelectionRange(0, e.value.length),
                        n || e.removeAttribute("readonly"),
                        (t = e.value);
                    } else {
                      e.hasAttribute("contenteditable") && e.focus();
                      var i = window.getSelection(),
                        s = document.createRange();
                      s.selectNodeContents(e),
                        i.removeAllRanges(),
                        i.addRange(s),
                        (t = i.toString());
                    }
                    return t;
                  };
                },
                279: function (e) {
                  function t() {}
                  (t.prototype = {
                    on: function (e, t, n) {
                      var i = this.e || (this.e = {});
                      return (
                        (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this
                      );
                    },
                    once: function (e, t, n) {
                      var i = this;
                      function s() {
                        i.off(e, s), t.apply(n, arguments);
                      }
                      return (s._ = t), this.on(e, s, n);
                    },
                    emit: function (e) {
                      for (
                        var t = [].slice.call(arguments, 1),
                          n = ((this.e || (this.e = {}))[e] || []).slice(),
                          i = 0,
                          s = n.length;
                        i < s;
                        i++
                      )
                        n[i].fn.apply(n[i].ctx, t);
                      return this;
                    },
                    off: function (e, t) {
                      var n = this.e || (this.e = {}),
                        i = n[e],
                        s = [];
                      if (i && t)
                        for (var r = 0, a = i.length; r < a; r++)
                          i[r].fn !== t && i[r].fn._ !== t && s.push(i[r]);
                      return s.length ? (n[e] = s) : delete n[e], this;
                    },
                  }),
                    (e.exports = t),
                    (e.exports.TinyEmitter = t);
                },
              },
              t = {};
            function n(i) {
              if (t[i]) return t[i].exports;
              var s = (t[i] = { exports: {} });
              return e[i](s, s.exports, n), s.exports;
            }
            return (
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, { a: t }), t;
              }),
              (n.d = function (e, t) {
                for (var i in t)
                  n.o(t, i) &&
                    !n.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              n(686)
            );
          })().default;
        }),
          (e.exports = t());
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = !0,
      i = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (n.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      s = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (n.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-popup-youtube",
          youtubePlaceAttribute: "data-popup-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        this.youTubeCode,
          (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          (this.bodyLock = !1),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                (this.youTubeCode = t.getAttribute(
                  this.options.youtubeAttribute
                )
                  ? t.getAttribute(this.options.youtubeAttribute)
                  : null),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (t)
          if (
            ((this.bodyLock = !(
              !document.documentElement.classList.contains("lock") ||
              this.isOpen
            )),
            e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (this.youTubeCode) {
              const e = `https://www.youtube.com/embed/${this.youTubeCode}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
              if (
                (t.setAttribute("allow", `${n}; encrypted-media`),
                t.setAttribute("src", e),
                !this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ))
              ) {
                this.targetOpen.element
                  .querySelector(".popup__text")
                  .setAttribute(`${this.options.youtubePlaceAttribute}`, "");
              }
              this.targetOpen.element
                .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              document.dispatchEvent(
                new CustomEvent("beforePopupOpen", { detail: { popup: this } })
              ),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.documentElement.classList.add(
                this.options.classes.bodyActive
              ),
              this._reopen ? (this._reopen = !1) : !this.bodyLock && s(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.options.on.afterOpen(this),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("Открыл попап");
          } else
            this.popupLogging(
              "Ой ой, такого попапа нет.Проверьте корректность ввода. "
            );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            t &&
            (this.options.on.beforeClose(this),
            document.dispatchEvent(
              new CustomEvent("beforePopupClose", { detail: { popup: this } })
            ),
            this.youTubeCode &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.documentElement.classList.remove(
                this.options.classes.bodyActive
              ),
              !this.bodyLock && i(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            document.dispatchEvent(
              new CustomEvent("afterPopupClose", { detail: { popup: this } })
            ),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        (document.querySelector(
          `[${this.options.attributeOpenButton} = "${e}"]`
        )
          ? document.querySelector(
              `[${this.options.attributeOpenButton} = "${e}"]`
            )
          : document.querySelector(
              `[${this.options.attributeOpenButton} = "${e.replace(".", "#")}"]`
            )) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          n = Array.prototype.slice.call(t),
          i = n.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (n[n.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== n.length - 1 ||
            (n[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging &&
          (function (e) {
            setTimeout(() => {
              window.FLS && console.log(e);
            }, 0);
          })(`[Попапос]: ${e}`);
      }
    })({});
    function r(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function a(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 && a(e[n], t[n]);
      });
    }
    const o = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function l() {
      const e = "undefined" != typeof document ? document : {};
      return a(e, o), e;
    }
    const d = {
      document: o,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function c() {
      const e = "undefined" != typeof window ? window : {};
      return a(e, d), e;
    }
    class u extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function p(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...p(e)) : t.push(e);
        }),
        t
      );
    }
    function f(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function h(e, t) {
      const n = c(),
        i = l();
      let s = [];
      if (!t && e instanceof u) return e;
      if (!e) return new u(s);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            s.push(t.childNodes[e]);
        } else
          s = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) s.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof u) return e;
        s = e;
      }
      return new u(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(s)
      );
    }
    h.fn = u.prototype;
    const m = "resize scroll".split(" ");
    function g(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            m.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    g("click"),
      g("blur"),
      g("focus"),
      g("focusin"),
      g("focusout"),
      g("keyup"),
      g("keydown"),
      g("keypress"),
      g("submit"),
      g("change"),
      g("mousedown"),
      g("mousemove"),
      g("mouseup"),
      g("mouseenter"),
      g("mouseleave"),
      g("mouseout"),
      g("mouseover"),
      g("touchstart"),
      g("touchend"),
      g("touchmove"),
      g("resize"),
      g("scroll");
    const v = {
      addClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        return (
          f(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, i, s] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), h(t).is(n))) i.apply(t, s);
          else {
            const e = h(t).parents();
            for (let t = 0; t < e.length; t += 1)
              h(e[t]).is(n) && i.apply(e[t], s);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
          s || (s = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, s);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
                t.addEventListener(e, a, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, s] = e;
        "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
          s || (s = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let a;
            if (
              (!n && r.dom7Listeners
                ? (a = r.dom7Listeners[t])
                : n && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const n = a[e];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (r.removeEventListener(t, n.proxyListener, s),
                    a.splice(e, 1))
                  : i ||
                    (r.removeEventListener(t, n.proxyListener, s),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = c(),
          n = e[0].split(" "),
          i = e[1];
        for (let s = 0; s < n.length; s += 1) {
          const r = n[s];
          for (let n = 0; n < this.length; n += 1) {
            const s = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(n),
                (s.dom7EventData = []),
                delete s.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = c();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = c(),
            t = l(),
            n = this[0],
            i = n.getBoundingClientRect(),
            s = t.body,
            r = n.clientTop || s.clientTop || 0,
            a = n.clientLeft || s.clientLeft || 0,
            o = n === e ? e.scrollY : n.scrollTop,
            d = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + o - r, left: i.left + d - a };
        }
        return null;
      },
      css: function (e, t) {
        const n = c();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = c(),
          n = l(),
          i = this[0];
        let s, r;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (s = h(e), r = 0; r < s.length; r += 1) if (s[r] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof u) {
          for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
            if (s[r] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return h([]);
        if (e < 0) {
          const n = t + e;
          return h(n < 0 ? [] : [this[n]]);
        }
        return h([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = l();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof u)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = l();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(s.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof u)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e)
              ? h([this[0].nextElementSibling])
              : h([])
            : this[0].nextElementSibling
            ? h([this[0].nextElementSibling])
            : h([])
          : h([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return h([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? h(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return h(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && h(t.previousElementSibling).is(e)
              ? h([t.previousElementSibling])
              : h([])
            : t.previousElementSibling
            ? h([t.previousElementSibling])
            : h([]);
        }
        return h([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return h([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? h(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return h(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? h(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return h(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? h(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return h(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return h(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !h(i[n]).is(e)) || t.push(i[n]);
        }
        return h(t);
      },
      filter: function (e) {
        return h(f(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(v).forEach((e) => {
      Object.defineProperty(h.fn, e, { value: v[e], writable: !0 });
    });
    const b = h;
    function y(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function w() {
      return Date.now();
    }
    function x(e, t) {
      void 0 === t && (t = "x");
      const n = c();
      let i, s, r;
      const a = (function (e) {
        const t = c();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((s = a.transform || a.webkitTransform),
            s.split(",").length > 6 &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new n.WebKitCSSMatrix("none" === s ? "" : s)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (s = n.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (s = n.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        s || 0
      );
    }
    function S(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function C(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function E() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != i && !C(i)) {
          const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = n.length; t < s; t += 1) {
            const s = n[t],
              r = Object.getOwnPropertyDescriptor(i, s);
            void 0 !== r &&
              r.enumerable &&
              (S(e[s]) && S(i[s])
                ? i[s].__swiper__
                  ? (e[s] = i[s])
                  : E(e[s], i[s])
                : !S(e[s]) && S(i[s])
                ? ((e[s] = {}), i[s].__swiper__ ? (e[s] = i[s]) : E(e[s], i[s]))
                : (e[s] = i[s]));
          }
        }
      }
      return e;
    }
    function T(e, t, n) {
      e.style.setProperty(t, n);
    }
    function k(e) {
      let { swiper: t, targetPosition: n, side: i } = e;
      const s = c(),
        r = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(t.cssModeFrameID);
      const d = n > r ? "next" : "prev",
        u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        p = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let c = r + d * (n - r);
          if ((u(c, n) && (c = n), t.wrapperEl.scrollTo({ [i]: c }), u(c, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: c });
              }),
              void s.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = s.requestAnimationFrame(p);
        };
      p();
    }
    let O, $, A;
    function _() {
      return (
        O ||
          (O = (function () {
            const e = c(),
              t = l();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        O
      );
    }
    function M(e) {
      return (
        void 0 === e && (e = {}),
        $ ||
          ($ = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = _(),
              i = c(),
              s = i.navigator.platform,
              r = t || i.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = i.screen.width,
              l = i.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = r.match(/(iPad).*OS\s([\d_]+)/);
            const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              f = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === s;
            let m = "MacIntel" === s;
            return (
              !u &&
                m &&
                n.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${l}`) >= 0 &&
                ((u = r.match(/(Version)\/([\d.]+)/)),
                u || (u = [0, 1, "13_0_0"]),
                (m = !1)),
              d && !h && ((a.os = "android"), (a.android = !0)),
              (u || f || p) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        $
      );
    }
    function L() {
      return (
        A ||
          (A = (function () {
            const e = c();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        A
      );
    }
    const P = {
      on(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const s = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][s](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function s() {
          i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          t.apply(i, r);
        }
        return (s.__emitterProxy = t), i.on(e, s, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const i = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed
          ? n
          : n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((i, s) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(s, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, n, i;
        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (n = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (n = r[0].data), (i = r[0].context || e)),
          n.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          e
        );
      },
    };
    const F = {
      updateSize: function () {
        const e = this;
        let t, n;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const i = e.params,
          { $wrapperEl: s, size: r, rtlTranslate: a, wrongRTL: o } = e,
          l = e.virtual && i.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = s.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : c.length;
        let p = [];
        const f = [],
          h = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = i.spaceBetween,
          w = -m,
          x = 0,
          S = 0;
        if (void 0 === r) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * r),
          (e.virtualSize = -y),
          a
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (T(e.wrapperEl, "--swiper-centered-offset-before", ""),
            T(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        C && e.grid.initSlides(u);
        const k =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let s = 0; s < u; s += 1) {
          E = 0;
          const a = c.eq(s);
          if (
            (C && e.grid.updateSlide(s, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              k && (c[s].style[t("width")] = "");
              const r = getComputedStyle(a[0]),
                o = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (o && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = n(r, "width"),
                  t = n(r, "padding-left"),
                  i = n(r, "padding-right"),
                  s = n(r, "margin-left"),
                  o = n(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + s + o;
                else {
                  const { clientWidth: n, offsetWidth: r } = a[0];
                  E = e + t + i + s + o + (r - n);
                }
              }
              o && (a[0].style.transform = o),
                l && (a[0].style.webkitTransform = l),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                c[s] && (c[s].style[t("width")] = `${E}px`);
            c[s] && (c[s].swiperSlideSize = E),
              h.push(E),
              i.centeredSlides
                ? ((w = w + E / 2 + x / 2 + y),
                  0 === x && 0 !== s && (w = w - r / 2 - y),
                  0 === s && (w = w - r / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  S % i.slidesPerGroup == 0 && p.push(w),
                  f.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  f.push(w),
                  (w = w + E + y)),
              (e.virtualSize += E + y),
              (x = E),
              (S += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          a &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            s.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            s.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(E, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let s = p[n];
            i.roundLengths && (s = Math.floor(s)),
              p[n] <= e.virtualSize - r && t.push(s);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
            [n]: `${y}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              f.forEach((e, n) => {
                f[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          T(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            T(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== b && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= i.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          i = t.virtual && t.params.virtual.enabled;
        let s,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || b([])).each((e) => {
              n.push(e);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length && !i) break;
              n.push(a(e));
            }
        else n.push(a(t.activeIndex));
        for (s = 0; s < n.length; s += 1)
          if (void 0 !== n[s]) {
            const e = n[s].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset = e.isHorizontal()
            ? t[n].offsetLeft
            : t[n].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          n = t.params,
          { slides: i, rtlTranslate: s, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        s && (a = e),
          i.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let l = o.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
          const d =
              (a + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            c =
              (a - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(n.slideVisibleClass)),
            (o.progress = s ? -d : d),
            (o.originalProgress = s ? -c : c);
        }
        t.visibleSlides = b(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: r, isEnd: a } = t;
        const o = r,
          l = a;
        0 === i
          ? ((s = 0), (r = !0), (a = !0))
          : ((s = (e - t.minTranslate()) / i), (r = s <= 0), (a = s >= 1)),
          Object.assign(t, { progress: s, isBeginning: r, isEnd: a }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((o && !r) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: i,
            activeIndex: s,
            realIndex: r,
          } = e,
          a = e.virtual && n.virtual.enabled;
        let o;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (o = a
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${s}"]`
              )
            : t.eq(s)),
          o.addClass(n.slideActiveClass),
          n.loop &&
            (o.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = o.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let d = o.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
        n.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(n.slidePrevClass)),
          n.loop &&
            (l.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            d.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: s,
            params: r,
            activeIndex: a,
            realIndex: o,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (c = e)
                : n >= i[e] && n < i[e + 1] && (c = e + 1)
              : n >= i[e] && (c = e);
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (s.indexOf(n) >= 0) d = s.indexOf(n);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((d >= s.length && (d = s.length - 1), c === a))
          return void (
            d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: u,
          previousIndex: a,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          i = b(e).closest(`.${n.slideClass}`)[0];
        let s,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (s = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                b(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = s),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const z = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: i,
          $wrapperEl: s,
        } = this;
        if (t.virtualTranslate) return n ? -i : i;
        if (t.cssMode) return i;
        let r = x(s[0], e);
        return n && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: i,
            params: s,
            $wrapperEl: r,
            wrapperEl: a,
            progress: o,
          } = n;
        let l,
          d = 0,
          c = 0;
        n.isHorizontal() ? (d = i ? -e : e) : (c = e),
          s.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          s.cssMode
            ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -d : -c)
            : s.virtualTranslate ||
              r.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? d : c);
        const u = n.maxTranslate() - n.minTranslate();
        (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
          l !== o && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, n, i, s) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === i && (i = !0);
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = i && e > l ? l : i && e < d ? d : e),
          r.updateProgress(c),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                k({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              n &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              n &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      n && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function I(e) {
      let { swiper: t, runCallbacks: n, direction: i, step: s } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = i;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${s}`),
        n && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${s}`);
        t.emit(`slideChangeTransition${s}`),
          "next" === o
            ? t.emit(`slideNextTransition${s}`)
            : t.emit(`slidePrevTransition${s}`);
      }
    }
    const j = {
      slideTo: function (e, t, n, i, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!h && !i && !s)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, a);
        let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || o.initialSlide || 0) === (c || 0) &&
            n &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= n && t < i - (i - n) / 2
                ? (a = e)
                : t >= n && t < i && (a = e + 1)
              : t >= n && (a = e);
          }
        if (r.initialized && a !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          ((b = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(n, b), r.transitionEnd(n, b)),
            !1
          );
        if (o.cssMode) {
          const e = r.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                k({ swiper: r, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(n, b),
          0 === t
            ? r.transitionEnd(n, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(n, b));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, n, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "string" == typeof e)
        ) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const s = this;
        let r = e;
        return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, n, i);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: s, enabled: r, params: a } = i;
        if (!r) return i;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
          if (s && a.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return a.rewind && i.isEnd
          ? i.slideTo(0, e, t, n)
          : i.slideTo(i.activeIndex + l, e, t, n);
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: s,
            animating: r,
            snapGrid: a,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: d,
          } = i;
        if (!d) return i;
        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = c(l ? i.translate : -i.translate),
          p = a.map((e) => c(e));
        let f = a[p.indexOf(u) - 1];
        if (void 0 === f && s.cssMode) {
          let e;
          a.forEach((t, n) => {
            u >= t && (e = n);
          }),
            void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = o.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          s.rewind && i.isBeginning)
        ) {
          const s =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(s, e, t, n);
        }
        return i.slideTo(h, e, t, n);
      },
      slideReset: function (e, t, n) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, n)
        );
      },
      slideToClosest: function (e, t, n, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const s = this;
        let r = s.activeIndex;
        const a = Math.min(s.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[o]) {
          const e = s.snapGrid[o];
          l - e > (s.snapGrid[o + 1] - e) * i && (r += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[o - 1];
          l - e <= (s.snapGrid[o] - e) * i && (r -= s.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, s.slidesGrid.length - 1)),
          s.slideTo(r, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt(b(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  y(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                y(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const D = {
      loopCreate: function () {
        const e = this,
          t = l(),
          { params: n, $wrapperEl: i } = e,
          s = i.children().length > 0 ? b(i.children()[0].parentNode) : i;
        s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let r = s.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (r.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = b(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              s.append(e);
            }
            r = s.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > r.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = r.length);
        const a = [],
          o = [];
        r.each((e, t) => {
          b(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / r.length) * r.length;
          o.push(r.eq(e)[0]), a.unshift(r.eq(r.length - e - 1)[0]);
        }
        for (let e = 0; e < o.length; e += 1)
          s.append(b(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          s.prepend(b(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: i,
          allowSlidePrev: s,
          allowSlideNext: r,
          snapGrid: a,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -a[t] - e.getTranslate();
        if (t < i) {
          (l = n.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        } else if (t >= n.length - i) {
          (l = -n.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: n } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          n.removeAttr("data-swiper-slide-index");
      },
    };
    function N(e) {
      const t = this,
        n = l(),
        i = c(),
        s = t.touchEventsData,
        { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let d = e;
      d.originalEvent && (d = d.originalEvent);
      let u = b(d.target);
      if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length)
        return;
      if (
        ((s.isTouchEvent = "touchstart" === d.type),
        !s.isTouchEvent && "which" in d && 3 === d.which)
      )
        return;
      if (!s.isTouchEvent && "button" in d && d.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        d.target &&
        d.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (u = b(e.path[0]));
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        f = !(!d.target || !d.target.shadowRoot);
      if (
        r.noSwiping &&
        (f
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  if (!n || n === l() || n === c()) return null;
                  n.assignedSlot && (n = n.assignedSlot);
                  const i = n.closest(e);
                  return i || n.getRootNode
                    ? i || t(n.getRootNode().host)
                    : null;
                })(t)
              );
            })(p, u[0])
          : u.closest(p)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
        (a.currentY =
          "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
      const h = a.currentX,
        m = a.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (g && (h <= v || h >= i.innerWidth - v)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      if (
        (Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = h),
        (a.startY = m),
        (s.touchStartTime = w()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (s.allowThresholdMove = !1),
        "touchstart" !== d.type)
      ) {
        let e = !0;
        u.is(s.focusableElements) &&
          ((e = !1), "SELECT" === u[0].nodeName && (s.isTouched = !1)),
          n.activeElement &&
            b(n.activeElement).is(s.focusableElements) &&
            n.activeElement !== u[0] &&
            n.activeElement.blur();
        const i = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !i) ||
          u[0].isContentEditable ||
          d.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", d);
    }
    function B(e) {
      const t = l(),
        n = this,
        i = n.touchEventsData,
        { params: s, touches: r, rtlTranslate: a, enabled: o } = n;
      if (!o) return;
      let d = e;
      if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          n.emit("touchMoveOpposite", d)
        );
      if (i.isTouchEvent && "touchmove" !== d.type) return;
      const c =
          "touchmove" === d.type &&
          d.targetTouches &&
          (d.targetTouches[0] || d.changedTouches[0]),
        u = "touchmove" === d.type ? c.pageX : d.pageX,
        p = "touchmove" === d.type ? c.pageY : d.pageY;
      if (d.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!n.allowTouchMove)
        return (
          b(d.target).is(i.focusableElements) || (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              currentX: u,
              currentY: p,
            }),
            (i.touchStartTime = w()))
          )
        );
      if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (n.isVertical()) {
          if (
            (p < r.startY && n.translate <= n.maxTranslate()) ||
            (p > r.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (u < r.startX && n.translate <= n.maxTranslate()) ||
          (u > r.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        d.target === t.activeElement &&
        b(d.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", d),
        d.targetTouches && d.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const f = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (n.isHorizontal() && r.currentY === r.startY) ||
        (n.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : f * f + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", d),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !s.cssMode && d.cancelable && d.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && d.stopPropagation(),
        i.isMoved ||
          (s.loop && !s.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", d)),
        n.emit("sliderMove", d),
        (i.isMoved = !0);
      let m = n.isHorizontal() ? f : h;
      (r.diff = m),
        (m *= s.touchRatio),
        a && (m = -m),
        (n.swipeDirection = m > 0 ? "prev" : "next"),
        (i.currentTranslate = m + i.startTranslate);
      let g = !0,
        v = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (v = 0),
        m > 0 && i.currentTranslate > n.minTranslate()
          ? ((g = !1),
            s.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + m) ** v))
          : m < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((g = !1),
            s.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - m) ** v)),
        g && (d.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        s.threshold > 0)
      ) {
        if (!(Math.abs(m) > s.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = n.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
          s.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          s.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function G(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: i,
          touches: s,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      i.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = w(),
        c = d - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = w()),
        y(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let h = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const g = (u - a[p]) / f,
        v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (c > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function q() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function H(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function R() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
      if (!i) return;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let W = !1;
    function V() {}
    const Y = (e, t) => {
      const n = l(),
        {
          params: i,
          touchEvents: s,
          el: r,
          wrapperEl: a,
          device: o,
          support: d,
        } = e,
        c = !!i.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (d.touch) {
        const t = !(
          "touchstart" !== s.start ||
          !d.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[u](s.start, e.onTouchStart, t),
          r[u](
            s.move,
            e.onTouchMove,
            d.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[u](s.end, e.onTouchEnd, t),
          s.cancel && r[u](s.cancel, e.onTouchEnd, t);
      } else
        r[u](s.start, e.onTouchStart, !1),
          n[u](s.move, e.onTouchMove, c),
          n[u](s.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        r[u]("click", e.onClick, !0),
        i.cssMode && a[u]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[p](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              q,
              !0
            )
          : e[p]("observerUpdate", q, !0);
    };
    const X = {
        attachEvents: function () {
          const e = this,
            t = l(),
            { params: n, support: i } = e;
          (e.onTouchStart = N.bind(e)),
            (e.onTouchMove = B.bind(e)),
            (e.onTouchEnd = G.bind(e)),
            n.cssMode && (e.onScroll = R.bind(e)),
            (e.onClick = H.bind(e)),
            i.touch && !W && (t.addEventListener("touchstart", V), (W = !0)),
            Y(e, "on");
        },
        detachEvents: function () {
          Y(this, "off");
        },
      },
      U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const Z = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: i = 0,
            params: s,
            $el: r,
          } = e,
          a = s.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in a ? a[o] : void 0) || e.originalParams,
          d = U(e, s),
          c = U(e, l),
          u = s.enabled;
        d && !c
          ? (r.removeClass(
              `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (r.addClass(`${s.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === s.grid.fill)) &&
              r.addClass(`${s.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const n = s[t] && s[t].enabled,
              i = l[t] && l[t].enabled;
            n && !i && e[t].disable(), !n && i && e[t].enable();
          });
        const p = l.direction && l.direction !== s.direction,
          f = s.loop && (l.slidesPerView !== s.slidesPerView || p);
        p && n && e.changeDirection(), E(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", l),
          f &&
            n &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, n) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
          return;
        let i = !1;
        const s = c(),
          r = "window" === t ? s.innerHeight : n.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: r, value: o } = a[e];
          "window" === t
            ? s.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
            : o <= n.clientWidth && (i = r);
        }
        return i || "max";
      },
    };
    const K = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: i,
            $el: s,
            device: r,
            support: a,
          } = e,
          o = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && n.push(t + i);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n
            );
          })(
            [
              "initialized",
              n.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: i },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
              { "watch-progress": n.watchSlidesProgress },
            ],
            n.containerModifierClass
          );
        t.push(...o), s.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const J = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function Q(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const i = Object.keys(n)[0],
          s = n[i];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in s
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                E(t, n))
              : E(t, n))
          : E(t, n);
      };
    }
    const ee = {
        eventsEmitter: P,
        update: F,
        translate: z,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              I({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            (n.animating = !1),
              i.cssMode ||
                (n.setTransition(0),
                I({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: j,
        loop: D,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: X,
        breakpoints: Z,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: K,
        images: {
          loadImage: function (e, t, n, i, s, r) {
            const a = c();
            let o;
            function l() {
              r && r();
            }
            b(e).parent("picture")[0] || (e.complete && s)
              ? l()
              : t
              ? ((o = new a.Image()),
                (o.onload = l),
                (o.onerror = l),
                i && (o.sizes = i),
                n && (o.srcset = n),
                t && (o.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      te = {};
    class ne {
      constructor() {
        let e, t;
        for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
          i[s] = arguments[s];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = E({}, t)),
          e && !t.el && (t.el = e),
          t.el && b(t.el).length > 1)
        ) {
          const e = [];
          return (
            b(t.el).each((n) => {
              const i = E({}, t, { el: n });
              e.push(new ne(i));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = _()),
          (r.device = M({ userAgent: t.userAgent })),
          (r.browser = L()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const a = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: Q(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const o = E({}, J, a);
        return (
          (r.params = E({}, o, te, t)),
          (r.originalParams = E({}, r.params)),
          (r.passedParams = E({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = b),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: b(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: w(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = n.minTranslate(),
          s = (n.maxTranslate() - i) * e + i;
        n.translateTo(s, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: i,
          slidesGrid: s,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[o].swiperSlideSize;
          for (let n = o + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let n = o - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1) {
            (t ? s[e] + r[e] - s[o] < a : s[e] - s[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            s[o] - s[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || i()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${i}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = b(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = b(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(i()) : b(n).children(i());
        })();
        if (0 === s.length && t.params.createElements) {
          const e = l().createElement("div");
          (s = b(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              s.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: i, $el: s, $wrapperEl: r, slides: a } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              s.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        E(te, e);
      }
      static get extendedDefaults() {
        return te;
      }
      static get defaults() {
        return J;
      }
      static installModule(e) {
        ne.prototype.__modules__ || (ne.prototype.__modules__ = []);
        const t = ne.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ne.installModule(e)), ne)
          : (ne.installModule(e), ne);
      }
    }
    Object.keys(ee).forEach((e) => {
      Object.keys(ee[e]).forEach((t) => {
        ne.prototype[t] = ee[e][t];
      });
    }),
      ne.use([
        function (e) {
          let { swiper: t, on: n, emit: i } = e;
          const s = c();
          let r = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== s.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = s.requestAnimationFrame(() => {
                    const { width: n, height: i } = t;
                    let s = n,
                      r = i;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: i, target: a } = e;
                      (a && a !== t.el) ||
                        ((s = i ? i.width : (n[0] || n).inlineSize),
                        (r = i ? i.height : (n[0] || n).blockSize));
                    }),
                      (s === n && r === i) || o();
                  });
                })),
                r.observe(t.el))
              : (s.addEventListener("resize", o),
                s.addEventListener("orientationchange", l));
          }),
            n("destroy", () => {
              a && s.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                s.removeEventListener("resize", o),
                s.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: i, emit: s } = e;
          const r = [],
            a = c(),
            o = function (e, t) {
              void 0 === t && (t = {});
              const n = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const t = function () {
                    s("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(n);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.$el[0], { childList: t.params.observeSlideChildren }),
                  o(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const ie = ne;
    function se(e, t, n, i) {
      const s = l();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((r) => {
            if (!n[r] && !0 === n.auto) {
              let a = e.$el.children(`.${i[r]}`)[0];
              a ||
                ((a = s.createElement("div")),
                (a.className = i[r]),
                e.$el.append(a)),
                (n[r] = a),
                (t[r] = a);
            }
          }),
        n
      );
    }
    function re(e) {
      let { swiper: t, extendParams: n, on: i, emit: s } = e;
      function r(e) {
        let n;
        return (
          e &&
            ((n = b(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function a(e, n) {
        const i = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](i.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function o() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: n } = t.navigation;
        a(n, t.isBeginning && !t.params.rewind),
          a(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), s("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), s("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = se(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const n = r(e.nextEl),
          i = r(e.prevEl);
        n && n.length > 0 && n.on("click", d),
          i && i.length > 0 && i.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e.length &&
          (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", l),
            n.removeClass(t.params.navigation.disabledClass));
      }
      n({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          !1 === t.params.navigation.enabled ? p() : (c(), o());
        }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        i("click", (e, n) => {
          const { $nextEl: i, $prevEl: r } = t.navigation,
            a = n.target;
          if (t.params.navigation.hideOnClick && !b(a).is(r) && !b(a).is(i)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            i
              ? (e = i.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              s(!0 === e ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        });
      const p = () => {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.$el.removeClass(t.params.navigation.navigationDisabledClass),
            c(),
            o();
        },
        disable: p,
        update: o,
        init: c,
        destroy: u,
      });
    }
    function ae(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function oe(e) {
      let { swiper: t, extendParams: n, on: i, emit: s } = e;
      const r = "swiper-pagination";
      let a;
      n({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function d(e, n) {
        const { bulletActiveClass: i } = t.params.pagination;
        e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
      }
      function c() {
        const e = t.rtl,
          n = t.params.pagination;
        if (l()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let c;
        const u = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((c = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              c > i - 1 - 2 * t.loopedSlides && (c -= i - 2 * t.loopedSlides),
              c > u - 1 && (c -= u),
              c < 0 && "bullets" !== t.params.paginationType && (c = u + c))
            : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === n.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let s, l, u;
          if (
            (n.dynamicBullets &&
              ((a = i
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                a * (n.dynamicMainBullets + 4) + "px"
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((o += c - (t.previousIndex - t.loopedSlides || 0)),
                o > n.dynamicMainBullets - 1
                  ? (o = n.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (s = Math.max(c - o, 0)),
              (l = s + (Math.min(i.length, n.dynamicMainBullets) - 1)),
              (u = (l + s) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            i.each((e) => {
              const t = b(e),
                i = t.index();
              i === c && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (i >= s &&
                    i <= l &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  i === s && d(t, "prev"),
                  i === l && d(t, "next"));
            });
          else {
            const e = i.eq(c),
              r = e.index();
            if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const e = i.eq(s),
                a = i.eq(l);
              for (let e = s; e <= l; e += 1)
                i.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= i.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                  i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else d(e, "prev"), d(a, "next");
              else d(e, "prev"), d(a, "next");
            }
          }
          if (n.dynamicBullets) {
            const s = Math.min(i.length, n.dynamicMainBullets + 4),
              r = (a * s - a) / 2 - u * a,
              o = e ? "right" : "left";
            i.css(t.isHorizontal() ? o : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (r.find(ae(n.currentClass)).text(n.formatFractionCurrent(c + 1)),
            r.find(ae(n.totalClass)).text(n.formatFractionTotal(u))),
          "progressbar" === n.type)
        ) {
          let e;
          e = n.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (c + 1) / u;
          let s = 1,
            a = 1;
          "horizontal" === e ? (s = i) : (a = i),
            r
              .find(ae(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${a})`)
              .transition(t.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (r.html(n.renderCustom(t, c + 1, u)), s("paginationRender", r[0]))
          : s("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let s = t.params.loop
            ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            s > n &&
            (s = n);
          for (let n = 0; n < s; n += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, n, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          i.html(r), (t.pagination.bullets = i.find(ae(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== e.type && s("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = se(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let n = b(e.el);
        0 !== n.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            n.length > 1 &&
            ((n = t.$el.find(e.el)),
            n.length > 1 &&
              (n = n.filter((e) => b(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
          n.addClass(e.modifierClass + e.type),
          n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (o = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            n.addClass(e.progressbarOppositeClass),
          e.clickable &&
            n.on("click", ae(e.bulletClass), function (e) {
              e.preventDefault();
              let n = b(this).index() * t.params.slidesPerGroup;
              t.params.loop && (n += t.loopedSlides), t.slideTo(n);
            }),
          Object.assign(t.pagination, { $el: n, el: n[0] }),
          t.enabled || n.addClass(e.lockClass));
      }
      function f() {
        const e = t.params.pagination;
        if (l()) return;
        const n = t.pagination.$el;
        n.removeClass(e.hiddenClass),
          n.removeClass(e.modifierClass + e.type),
          n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && n.off("click", ae(e.bulletClass));
      }
      i("init", () => {
        !1 === t.params.pagination.enabled ? h() : (p(), u(), c());
      }),
        i("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && c();
        }),
        i("snapIndexChange", () => {
          t.params.loop || c();
        }),
        i("slidesLengthChange", () => {
          t.params.loop && (u(), c());
        }),
        i("snapGridLengthChange", () => {
          t.params.loop || (u(), c());
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          c();
        }),
        i("click", (e, n) => {
          const i = n.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !b(i).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        });
      const h = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass),
          t.pagination.$el &&
            t.pagination.$el.addClass(
              t.params.pagination.paginationDisabledClass
            ),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.$el.removeClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.removeClass(
                t.params.pagination.paginationDisabledClass
              ),
            p(),
            u(),
            c();
        },
        disable: h,
        render: u,
        update: c,
        init: p,
        destroy: f,
      });
    }
    function le(e) {
      let t,
        { swiper: n, extendParams: i, on: s, emit: r } = e;
      function a() {
        if (!n.size)
          return (n.autoplay.running = !1), void (n.autoplay.paused = !1);
        const e = n.slides.eq(n.activeIndex);
        let i = n.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
          clearTimeout(t),
          (t = y(() => {
            let e;
            n.params.autoplay.reverseDirection
              ? n.params.loop
                ? (n.loopFix(),
                  (e = n.slidePrev(n.params.speed, !0, !0)),
                  r("autoplay"))
                : n.isBeginning
                ? n.params.autoplay.stopOnLastSlide
                  ? d()
                  : ((e = n.slideTo(
                      n.slides.length - 1,
                      n.params.speed,
                      !0,
                      !0
                    )),
                    r("autoplay"))
                : ((e = n.slidePrev(n.params.speed, !0, !0)), r("autoplay"))
              : n.params.loop
              ? (n.loopFix(),
                (e = n.slideNext(n.params.speed, !0, !0)),
                r("autoplay"))
              : n.isEnd
              ? n.params.autoplay.stopOnLastSlide
                ? d()
                : ((e = n.slideTo(0, n.params.speed, !0, !0)), r("autoplay"))
              : ((e = n.slideNext(n.params.speed, !0, !0)), r("autoplay")),
              ((n.params.cssMode && n.autoplay.running) || !1 === e) && a();
          }, i));
      }
      function o() {
        return (
          void 0 === t &&
          !n.autoplay.running &&
          ((n.autoplay.running = !0), r("autoplayStart"), a(), !0)
        );
      }
      function d() {
        return (
          !!n.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (n.autoplay.running = !1),
          r("autoplayStop"),
          !0)
        );
      }
      function c(e) {
        n.autoplay.running &&
          (n.autoplay.paused ||
            (t && clearTimeout(t),
            (n.autoplay.paused = !0),
            0 !== e && n.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  n.$wrapperEl[0].addEventListener(e, p);
                })
              : ((n.autoplay.paused = !1), a())));
      }
      function u() {
        const e = l();
        "hidden" === e.visibilityState && n.autoplay.running && c(),
          "visible" === e.visibilityState &&
            n.autoplay.paused &&
            (a(), (n.autoplay.paused = !1));
      }
      function p(e) {
        n &&
          !n.destroyed &&
          n.$wrapperEl &&
          e.target === n.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, p);
          }),
          (n.autoplay.paused = !1),
          n.autoplay.running ? a() : d());
      }
      function f() {
        n.params.autoplay.disableOnInteraction
          ? d()
          : (r("autoplayPause"), c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, p);
          });
      }
      function h() {
        n.params.autoplay.disableOnInteraction ||
          ((n.autoplay.paused = !1), r("autoplayResume"), a());
      }
      (n.autoplay = { running: !1, paused: !1 }),
        i({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        s("init", () => {
          if (n.params.autoplay.enabled) {
            o();
            l().addEventListener("visibilitychange", u),
              n.params.autoplay.pauseOnMouseEnter &&
                (n.$el.on("mouseenter", f), n.$el.on("mouseleave", h));
          }
        }),
        s("beforeTransitionStart", (e, t, i) => {
          n.autoplay.running &&
            (i || !n.params.autoplay.disableOnInteraction
              ? n.autoplay.pause(t)
              : d());
        }),
        s("sliderFirstMove", () => {
          n.autoplay.running &&
            (n.params.autoplay.disableOnInteraction ? d() : c());
        }),
        s("touchEnd", () => {
          n.params.cssMode &&
            n.autoplay.paused &&
            !n.params.autoplay.disableOnInteraction &&
            a();
        }),
        s("destroy", () => {
          n.$el.off("mouseenter", f),
            n.$el.off("mouseleave", h),
            n.autoplay.running && d();
          l().removeEventListener("visibilitychange", u);
        }),
        Object.assign(n.autoplay, { pause: c, run: a, start: o, stop: d });
    }
    window.addEventListener("load", function (e) {
      document.querySelector(".subjects__slider") &&
        new ie(".subjects__slider", {
          modules: [re, oe, le],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 2,
          autoHeight: !0,
          speed: 800,
          pagination: { el: ".swiper-pagination", clickable: !0 },
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
          on: {},
        });
    });
    let de = !1;
    setTimeout(() => {
      if (de) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var ce,
      ue,
      pe,
      fe = (function (e) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          n = 0,
          i = {},
          s = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler:
              e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(t) {
                return t instanceof r
                  ? new r(t.type, e(t.content), t.alias)
                  : Array.isArray(t)
                  ? t.map(e)
                  : t
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\u00a0/g, " ");
              },
              type: function (e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                  e.__id
                );
              },
              clone: function e(t, n) {
                var i, r;
                switch (((n = n || {}), s.util.type(t))) {
                  case "Object":
                    if (((r = s.util.objId(t)), n[r])) return n[r];
                    for (var a in ((i = {}), (n[r] = i), t))
                      t.hasOwnProperty(a) && (i[a] = e(t[a], n));
                    return i;
                  case "Array":
                    return (
                      (r = s.util.objId(t)),
                      n[r]
                        ? n[r]
                        : ((i = []),
                          (n[r] = i),
                          t.forEach(function (t, s) {
                            i[s] = e(t, n);
                          }),
                          i)
                    );
                  default:
                    return t;
                }
              },
              getLanguage: function (e) {
                for (; e; ) {
                  var n = t.exec(e.className);
                  if (n) return n[1].toLowerCase();
                  e = e.parentElement;
                }
                return "none";
              },
              setLanguage: function (e, n) {
                (e.className = e.className.replace(RegExp(t, "gi"), "")),
                  e.classList.add("language-" + n);
              },
              currentScript: function () {
                if ("undefined" == typeof document) return null;
                if ("currentScript" in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (i) {
                  var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) ||
                    [])[1];
                  if (e) {
                    var t = document.getElementsByTagName("script");
                    for (var n in t) if (t[n].src == e) return t[n];
                  }
                  return null;
                }
              },
              isActive: function (e, t, n) {
                for (var i = "no-" + t; e; ) {
                  var s = e.classList;
                  if (s.contains(t)) return !0;
                  if (s.contains(i)) return !1;
                  e = e.parentElement;
                }
                return !!n;
              },
            },
            languages: {
              plain: i,
              plaintext: i,
              text: i,
              txt: i,
              extend: function (e, t) {
                var n = s.util.clone(s.languages[e]);
                for (var i in t) n[i] = t[i];
                return n;
              },
              insertBefore: function (e, t, n, i) {
                var r = (i = i || s.languages)[e],
                  a = {};
                for (var o in r)
                  if (r.hasOwnProperty(o)) {
                    if (o == t)
                      for (var l in n) n.hasOwnProperty(l) && (a[l] = n[l]);
                    n.hasOwnProperty(o) || (a[o] = r[o]);
                  }
                var d = i[e];
                return (
                  (i[e] = a),
                  s.languages.DFS(s.languages, function (t, n) {
                    n === d && t != e && (this[t] = a);
                  }),
                  a
                );
              },
              DFS: function e(t, n, i, r) {
                r = r || {};
                var a = s.util.objId;
                for (var o in t)
                  if (t.hasOwnProperty(o)) {
                    n.call(t, o, t[o], i || o);
                    var l = t[o],
                      d = s.util.type(l);
                    "Object" !== d || r[a(l)]
                      ? "Array" !== d ||
                        r[a(l)] ||
                        ((r[a(l)] = !0), e(l, n, o, r))
                      : ((r[a(l)] = !0), e(l, n, null, r));
                  }
              },
            },
            plugins: {},
            highlightAll: function (e, t) {
              s.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function (e, t, n) {
              var i = {
                callback: n,
                container: e,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              s.hooks.run("before-highlightall", i),
                (i.elements = Array.prototype.slice.apply(
                  i.container.querySelectorAll(i.selector)
                )),
                s.hooks.run("before-all-elements-highlight", i);
              for (var r, a = 0; (r = i.elements[a++]); )
                s.highlightElement(r, !0 === t, i.callback);
            },
            highlightElement: function (t, n, i) {
              var r = s.util.getLanguage(t),
                a = s.languages[r];
              s.util.setLanguage(t, r);
              var o = t.parentElement;
              o &&
                "pre" === o.nodeName.toLowerCase() &&
                s.util.setLanguage(o, r);
              var l = {
                element: t,
                language: r,
                grammar: a,
                code: t.textContent,
              };
              function d(e) {
                (l.highlightedCode = e),
                  s.hooks.run("before-insert", l),
                  (l.element.innerHTML = l.highlightedCode),
                  s.hooks.run("after-highlight", l),
                  s.hooks.run("complete", l),
                  i && i.call(l.element);
              }
              if (
                (s.hooks.run("before-sanity-check", l),
                (o = l.element.parentElement) &&
                  "pre" === o.nodeName.toLowerCase() &&
                  !o.hasAttribute("tabindex") &&
                  o.setAttribute("tabindex", "0"),
                !l.code)
              )
                return (
                  s.hooks.run("complete", l), void (i && i.call(l.element))
                );
              if ((s.hooks.run("before-highlight", l), l.grammar))
                if (n && e.Worker) {
                  var c = new Worker(s.filename);
                  (c.onmessage = function (e) {
                    d(e.data);
                  }),
                    c.postMessage(
                      JSON.stringify({
                        language: l.language,
                        code: l.code,
                        immediateClose: !0,
                      })
                    );
                } else d(s.highlight(l.code, l.grammar, l.language));
              else d(s.util.encode(l.code));
            },
            highlight: function (e, t, n) {
              var i = { code: e, grammar: t, language: n };
              if ((s.hooks.run("before-tokenize", i), !i.grammar))
                throw new Error(
                  'The language "' + i.language + '" has no grammar.'
                );
              return (
                (i.tokens = s.tokenize(i.code, i.grammar)),
                s.hooks.run("after-tokenize", i),
                r.stringify(s.util.encode(i.tokens), i.language)
              );
            },
            tokenize: function (e, t) {
              var n = t.rest;
              if (n) {
                for (var i in n) t[i] = n[i];
                delete t.rest;
              }
              var s = new l();
              return (
                d(s, s.head, e),
                o(e, s, t, s.head, 0),
                (function (e) {
                  for (var t = [], n = e.head.next; n !== e.tail; )
                    t.push(n.value), (n = n.next);
                  return t;
                })(s)
              );
            },
            hooks: {
              all: {},
              add: function (e, t) {
                var n = s.hooks.all;
                (n[e] = n[e] || []), n[e].push(t);
              },
              run: function (e, t) {
                var n = s.hooks.all[e];
                if (n && n.length) for (var i, r = 0; (i = n[r++]); ) i(t);
              },
            },
            Token: r,
          };
        function r(e, t, n, i) {
          (this.type = e),
            (this.content = t),
            (this.alias = n),
            (this.length = 0 | (i || "").length);
        }
        function a(e, t, n, i) {
          e.lastIndex = t;
          var s = e.exec(n);
          if (s && i && s[1]) {
            var r = s[1].length;
            (s.index += r), (s[0] = s[0].slice(r));
          }
          return s;
        }
        function o(e, t, n, i, l, u) {
          for (var p in n)
            if (n.hasOwnProperty(p) && n[p]) {
              var f = n[p];
              f = Array.isArray(f) ? f : [f];
              for (var h = 0; h < f.length; ++h) {
                if (u && u.cause == p + "," + h) return;
                var m = f[h],
                  g = m.inside,
                  v = !!m.lookbehind,
                  b = !!m.greedy,
                  y = m.alias;
                if (b && !m.pattern.global) {
                  var w = m.pattern.toString().match(/[imsuy]*$/)[0];
                  m.pattern = RegExp(m.pattern.source, w + "g");
                }
                for (
                  var x = m.pattern || m, S = i.next, C = l;
                  S !== t.tail && !(u && C >= u.reach);
                  C += S.value.length, S = S.next
                ) {
                  var E = S.value;
                  if (t.length > e.length) return;
                  if (!(E instanceof r)) {
                    var T,
                      k = 1;
                    if (b) {
                      if (!(T = a(x, C, e, v)) || T.index >= e.length) break;
                      var O = T.index,
                        $ = T.index + T[0].length,
                        A = C;
                      for (A += S.value.length; O >= A; )
                        A += (S = S.next).value.length;
                      if (((C = A -= S.value.length), S.value instanceof r))
                        continue;
                      for (
                        var _ = S;
                        _ !== t.tail && (A < $ || "string" == typeof _.value);
                        _ = _.next
                      )
                        k++, (A += _.value.length);
                      k--, (E = e.slice(C, A)), (T.index -= C);
                    } else if (!(T = a(x, 0, E, v))) continue;
                    O = T.index;
                    var M = T[0],
                      L = E.slice(0, O),
                      P = E.slice(O + M.length),
                      F = C + E.length;
                    u && F > u.reach && (u.reach = F);
                    var z = S.prev;
                    if (
                      (L && ((z = d(t, z, L)), (C += L.length)),
                      c(t, z, k),
                      (S = d(t, z, new r(p, g ? s.tokenize(M, g) : M, y, M))),
                      P && d(t, S, P),
                      k > 1)
                    ) {
                      var I = { cause: p + "," + h, reach: F };
                      o(e, t, n, S.prev, C, I),
                        u && I.reach > u.reach && (u.reach = I.reach);
                    }
                  }
                }
              }
            }
        }
        function l() {
          var e = { value: null, prev: null, next: null },
            t = { value: null, prev: e, next: null };
          (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
        }
        function d(e, t, n) {
          var i = t.next,
            s = { value: n, prev: t, next: i };
          return (t.next = s), (i.prev = s), e.length++, s;
        }
        function c(e, t, n) {
          for (var i = t.next, s = 0; s < n && i !== e.tail; s++) i = i.next;
          (t.next = i), (i.prev = t), (e.length -= s);
        }
        if (
          ((e.Prism = s),
          (r.stringify = function e(t, n) {
            if ("string" == typeof t) return t;
            if (Array.isArray(t)) {
              var i = "";
              return (
                t.forEach(function (t) {
                  i += e(t, n);
                }),
                i
              );
            }
            var r = {
                type: t.type,
                content: e(t.content, n),
                tag: "span",
                classes: ["token", t.type],
                attributes: {},
                language: n,
              },
              a = t.alias;
            a &&
              (Array.isArray(a)
                ? Array.prototype.push.apply(r.classes, a)
                : r.classes.push(a)),
              s.hooks.run("wrap", r);
            var o = "";
            for (var l in r.attributes)
              o +=
                " " +
                l +
                '="' +
                (r.attributes[l] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              r.tag +
              ' class="' +
              r.classes.join(" ") +
              '"' +
              o +
              ">" +
              r.content +
              "</" +
              r.tag +
              ">"
            );
          }),
          !e.document)
        )
          return e.addEventListener
            ? (s.disableWorkerMessageHandler ||
                e.addEventListener(
                  "message",
                  function (t) {
                    var n = JSON.parse(t.data),
                      i = n.language,
                      r = n.code,
                      a = n.immediateClose;
                    e.postMessage(s.highlight(r, s.languages[i], i)),
                      a && e.close();
                  },
                  !1
                ),
              s)
            : s;
        var u = s.util.currentScript();
        function p() {
          s.manual || s.highlightAll();
        }
        if (
          (u &&
            ((s.filename = u.src),
            u.hasAttribute("data-manual") && (s.manual = !0)),
          !s.manual)
        ) {
          var f = document.readyState;
          "loading" === f || ("interactive" === f && u && u.defer)
            ? document.addEventListener("DOMContentLoaded", p)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(p)
            : window.setTimeout(p, 16);
        }
        return s;
      })(
        "undefined" != typeof window
          ? window
          : "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
          ? self
          : {}
      );
    "undefined" != typeof module && module.exports && (module.exports = fe),
      "undefined" != typeof global && (global.Prism = fe),
      (fe.languages.clike = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0,
          },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0,
        },
        "class-name": {
          pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: { punctuation: /[.\\]/ },
        },
        keyword:
          /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/,
      }),
      (fe.languages.javascript = fe.languages.extend("clike", {
        "class-name": [
          fe.languages.clike["class-name"],
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0,
          },
        ],
        keyword: [
          { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
          {
            pattern:
              /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
          },
        ],
        function:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
          pattern: RegExp(
            "(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"
          ),
          lookbehind: !0,
        },
        operator:
          /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
      })),
      (fe.languages.javascript["class-name"][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
      fe.languages.insertBefore("javascript", "keyword", {
        regex: {
          pattern: RegExp(
            "((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: !0,
              alias: "language-regex",
              inside: fe.languages.regex,
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/,
          },
        },
        "function-variable": {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function",
        },
        parameter: [
          {
            pattern:
              /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: fe.languages.javascript,
          },
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: fe.languages.javascript,
          },
          {
            pattern:
              /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: fe.languages.javascript,
          },
          {
            pattern:
              /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: fe.languages.javascript,
          },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
      }),
      fe.languages.insertBefore("javascript", "string", {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
        "template-string": {
          pattern:
            /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: !0,
          inside: {
            "template-punctuation": { pattern: /^`|`$/, alias: "string" },
            interpolation: {
              pattern:
                /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: !0,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation",
                },
                rest: fe.languages.javascript,
              },
            },
            string: /[\s\S]+/,
          },
        },
        "string-property": {
          pattern:
            /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: !0,
          greedy: !0,
          alias: "property",
        },
      }),
      fe.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern:
            /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: !0,
          alias: "property",
        },
      }),
      fe.languages.markup &&
        (fe.languages.markup.tag.addInlined("script", "javascript"),
        fe.languages.markup.tag.addAttribute(
          "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
          "javascript"
        )),
      (fe.languages.js = fe.languages.javascript),
      (fe.languages.c = fe.languages.extend("clike", {
        comment: {
          pattern:
            /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
          greedy: !0,
        },
        string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
        "class-name": {
          pattern:
            /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
          lookbehind: !0,
        },
        keyword:
          /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
        function: /\b[a-z_]\w*(?=\s*\()/i,
        number:
          /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
        operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
      })),
      fe.languages.insertBefore("c", "string", {
        char: {
          pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
          greedy: !0,
        },
      }),
      fe.languages.insertBefore("c", "string", {
        macro: {
          pattern:
            /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
          lookbehind: !0,
          greedy: !0,
          alias: "property",
          inside: {
            string: [
              { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
              fe.languages.c.string,
            ],
            char: fe.languages.c.char,
            comment: fe.languages.c.comment,
            "macro-name": [
              { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
              {
                pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                lookbehind: !0,
                alias: "function",
              },
            ],
            directive: {
              pattern: /^(#\s*)[a-z]+/,
              lookbehind: !0,
              alias: "keyword",
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: { pattern: /\S[\s\S]*/, inside: fe.languages.c },
          },
        },
      }),
      fe.languages.insertBefore("c", "function", {
        constant:
          /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
      }),
      delete fe.languages.c.boolean,
      (ce = fe),
      (ue =
        /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/),
      (pe = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(
        /<keyword>/g,
        function () {
          return ue.source;
        }
      )),
      (ce.languages.cpp = ce.languages.extend("c", {
        "class-name": [
          {
            pattern: RegExp(
              "(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(
                /<keyword>/g,
                function () {
                  return ue.source;
                }
              )
            ),
            lookbehind: !0,
          },
          /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
          /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
          /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
        ],
        keyword: ue,
        number: {
          pattern:
            /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
          greedy: !0,
        },
        operator:
          />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/,
      })),
      ce.languages.insertBefore("cpp", "string", {
        module: {
          pattern: RegExp(
            '(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' +
              "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(
                /<mod-name>/g,
                function () {
                  return pe;
                }
              ) +
              ")"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
        },
        "raw-string": {
          pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
          alias: "string",
          greedy: !0,
        },
      }),
      ce.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
          pattern:
            /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
          inside: {
            function: /^\w+/,
            generic: {
              pattern: /<[\s\S]+/,
              alias: "class-name",
              inside: ce.languages.cpp,
            },
          },
        },
      }),
      ce.languages.insertBefore("cpp", "operator", {
        "double-colon": { pattern: /::/, alias: "punctuation" },
      }),
      ce.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
          pattern:
            /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
          lookbehind: !0,
          greedy: !0,
          inside: ce.languages.extend("cpp", {}),
        },
      }),
      ce.languages.insertBefore(
        "inside",
        "double-colon",
        { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
        ce.languages.cpp["base-clause"]
      ),
      (fe.languages.python = {
        comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
        "string-interpolation": {
          pattern:
            /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
          greedy: !0,
          inside: {
            interpolation: {
              pattern:
                /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
              lookbehind: !0,
              inside: {
                "format-spec": {
                  pattern: /(:)[^:(){}]+(?=\}$)/,
                  lookbehind: !0,
                },
                "conversion-option": {
                  pattern: /![sra](?=[:}]$)/,
                  alias: "punctuation",
                },
                rest: null,
              },
            },
            string: /[\s\S]+/,
          },
        },
        "triple-quoted-string": {
          pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
          greedy: !0,
          alias: "string",
        },
        string: {
          pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
          greedy: !0,
        },
        function: {
          pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
          lookbehind: !0,
        },
        "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
        decorator: {
          pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
          lookbehind: !0,
          alias: ["annotation", "punctuation"],
          inside: { punctuation: /\./ },
        },
        keyword:
          /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        builtin:
          /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        boolean: /\b(?:False|None|True)\b/,
        number:
          /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
        operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        punctuation: /[{}[\];(),.:]/,
      }),
      (fe.languages.python[
        "string-interpolation"
      ].inside.interpolation.inside.rest = fe.languages.python),
      (fe.languages.py = fe.languages.python),
      new (n(152))(".button-copy", {
        target: function (e) {
          return e.previousElementSibling.querySelector("code");
        },
      }),
      n(711).init({
        disable: !1,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: !1,
        disableMutationObserver: !1,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      document.querySelector(".icon-menu") &&
        document.addEventListener("click", function (e) {
          t &&
            e.target.closest(".icon-menu") &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? i(e) : s(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
  })();
})();
