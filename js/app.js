/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
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
                  var s = n(279),
                    i = n.n(s),
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
                        var s =
                          window.pageYOffset ||
                          document.documentElement.scrollTop;
                        return (
                          (n.style.top = "".concat(s, "px")),
                          n.setAttribute("readonly", ""),
                          (n.value = e),
                          n
                        );
                      })(e);
                      t.container.appendChild(n);
                      var s = l()(n);
                      return d("copy"), n.remove(), s;
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
                      s = e.container,
                      i = e.target,
                      r = e.text;
                    if ("copy" !== n && "cut" !== n)
                      throw new Error(
                        'Invalid "action" value, use either "copy" or "cut"'
                      );
                    if (void 0 !== i) {
                      if (!i || "object" !== f(i) || 1 !== i.nodeType)
                        throw new Error(
                          'Invalid "target" value, use a valid Element'
                        );
                      if ("copy" === n && i.hasAttribute("disabled"))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                        );
                      if (
                        "cut" === n &&
                        (i.hasAttribute("readonly") ||
                          i.hasAttribute("disabled"))
                      )
                        throw new Error(
                          'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                        );
                    }
                    return r
                      ? p(r, { container: s })
                      : i
                      ? "cut" === n
                        ? c(i)
                        : p(i, { container: s })
                      : void 0;
                  };
                  function g(e) {
                    return (
                      (g =
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
                      g(e)
                    );
                  }
                  function m(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var s = t[n];
                      (s.enumerable = s.enumerable || !1),
                        (s.configurable = !0),
                        "value" in s && (s.writable = !0),
                        Object.defineProperty(e, s.key, s);
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
                        s = w(e);
                      if (t) {
                        var i = w(this).constructor;
                        n = Reflect.construct(s, arguments, i);
                      } else n = s.apply(this, arguments);
                      return y(this, n);
                    };
                  }
                  function y(e, t) {
                    return !t || ("object" !== g(t) && "function" != typeof t)
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
                  function S(e, t) {
                    var n = "data-clipboard-".concat(e);
                    if (t.hasAttribute(n)) return t.getAttribute(n);
                  }
                  var x = (function (e) {
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
                        s,
                        i = b(r);
                      function r(e, t) {
                        var n;
                        return (
                          (function (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError(
                                "Cannot call a class as a function"
                              );
                          })(this, r),
                          (n = i.call(this)).resolveOptions(t),
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
                                  "object" === g(e.container)
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
                                s = h({
                                  action: n,
                                  container: this.container,
                                  target: this.target(t),
                                  text: this.text(t),
                                });
                              this.emit(s ? "success" : "error", {
                                action: n,
                                text: s,
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
                              return S("action", e);
                            },
                          },
                          {
                            key: "defaultTarget",
                            value: function (e) {
                              var t = S("target", e);
                              if (t) return document.querySelector(t);
                            },
                          },
                          {
                            key: "defaultText",
                            value: function (e) {
                              return S("text", e);
                            },
                          },
                          {
                            key: "destroy",
                            value: function () {
                              this.listener.destroy();
                            },
                          },
                        ]),
                        (s = [
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
                        n && m(t.prototype, n),
                        s && m(t, s),
                        r
                      );
                    })(i()),
                    C = x;
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
                  var s = n(828);
                  function i(e, t, n, s, i) {
                    var a = r.apply(this, arguments);
                    return (
                      e.addEventListener(n, a, i),
                      {
                        destroy: function () {
                          e.removeEventListener(n, a, i);
                        },
                      }
                    );
                  }
                  function r(e, t, n, i) {
                    return function (n) {
                      (n.delegateTarget = s(n.target, t)),
                        n.delegateTarget && i.call(e, n);
                    };
                  }
                  e.exports = function (e, t, n, s, r) {
                    return "function" == typeof e.addEventListener
                      ? i.apply(null, arguments)
                      : "function" == typeof n
                      ? i.bind(null, document).apply(null, arguments)
                      : ("string" == typeof e &&
                          (e = document.querySelectorAll(e)),
                        Array.prototype.map.call(e, function (e) {
                          return i(e, t, n, s, r);
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
                  var s = n(879),
                    i = n(438);
                  e.exports = function (e, t, n) {
                    if (!e && !t && !n)
                      throw new Error("Missing required arguments");
                    if (!s.string(t))
                      throw new TypeError("Second argument must be a String");
                    if (!s.fn(n))
                      throw new TypeError("Third argument must be a Function");
                    if (s.node(e))
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
                    if (s.nodeList(e))
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
                    if (s.string(e))
                      return (function (e, t, n) {
                        return i(document.body, e, t, n);
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
                      var s = window.getSelection(),
                        i = document.createRange();
                      i.selectNodeContents(e),
                        s.removeAllRanges(),
                        s.addRange(i),
                        (t = s.toString());
                    }
                    return t;
                  };
                },
                279: function (e) {
                  function t() {}
                  (t.prototype = {
                    on: function (e, t, n) {
                      var s = this.e || (this.e = {});
                      return (
                        (s[e] || (s[e] = [])).push({ fn: t, ctx: n }), this
                      );
                    },
                    once: function (e, t, n) {
                      var s = this;
                      function i() {
                        s.off(e, i), t.apply(n, arguments);
                      }
                      return (i._ = t), this.on(e, i, n);
                    },
                    emit: function (e) {
                      for (
                        var t = [].slice.call(arguments, 1),
                          n = ((this.e || (this.e = {}))[e] || []).slice(),
                          s = 0,
                          i = n.length;
                        s < i;
                        s++
                      )
                        n[s].fn.apply(n[s].ctx, t);
                      return this;
                    },
                    off: function (e, t) {
                      var n = this.e || (this.e = {}),
                        s = n[e],
                        i = [];
                      if (s && t)
                        for (var r = 0, a = s.length; r < a; r++)
                          s[r].fn !== t && s[r].fn._ !== t && i.push(s[r]);
                      return i.length ? (n[e] = i) : delete n[e], this;
                    },
                  }),
                    (e.exports = t),
                    (e.exports.TinyEmitter = t);
                },
              },
              t = {};
            function n(s) {
              if (t[s]) return t[s].exports;
              var i = (t[s] = { exports: {} });
              return e[s](i, i.exports, n), i.exports;
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
                for (var s in t)
                  n.o(t, s) &&
                    !n.o(e, s) &&
                    Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
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
  function n(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    function e() {
      if (location.hash) return location.hash.replace("#", "");
    }
    let t = (e, t = 500, n = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !n),
              !n && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !n && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      s = (e, t = 500, n = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            n && e.style.removeProperty("height");
          let s = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = n ? `${n}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = s + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      i = !0,
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      };
    function o(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function l(e, t) {
      const n = Array.from(e).filter(function (e, n, s) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (n.length) {
        const e = [];
        n.forEach((n) => {
          const s = {},
            i = n.dataset[t].split(",");
          (s.value = i[0]),
            (s.type = i[1] ? i[1].trim() : "max"),
            (s.item = n),
            e.push(s);
        });
        let s = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        s = (function (e) {
          return e.filter(function (e, t, n) {
            return n.indexOf(e) === t;
          });
        })(s);
        const i = [];
        if (s.length)
          return (
            s.forEach((t) => {
              const n = t.split(","),
                s = n[1],
                r = n[2],
                a = window.matchMedia(n[0]),
                o = e.filter(function (e) {
                  if (e.value === s && e.type === r) return !0;
                });
              i.push({ itemsArray: o, matchMedia: a });
            }),
            i
          );
      }
    }
    let d = (e, t = !1, n = 500, s = 0) => {
      const i = document.querySelector(e);
      if (i) {
        let a = "",
          l = 0;
        t &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: n,
          header: a,
          offset: s,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (r(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", d);
        else {
          let e = i.getBoundingClientRect().top + scrollY;
          (e = l ? e - l : e),
            (e = s ? e - s : e),
            window.scrollTo({ top: e, behavior: "smooth" });
        }
        o(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    function c(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function u(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : c(t[n]) && c(e[n]) && Object.keys(t[n]).length > 0 && u(e[n], t[n]);
      });
    }
    const p = {
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
    function f() {
      const e = "undefined" != typeof document ? document : {};
      return u(e, p), e;
    }
    const h = {
      document: p,
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
    function g() {
      const e = "undefined" != typeof window ? window : {};
      return u(e, h), e;
    }
    class m extends Array {
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
    function v(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...v(e)) : t.push(e);
        }),
        t
      );
    }
    function b(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function y(e, t) {
      const n = g(),
        s = f();
      let i = [];
      if (!t && e instanceof m) return e;
      if (!e) return new m(i);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = s.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) n.push(s[e]);
            return n;
          })(e.trim(), t || s);
      } else if (e.nodeType || e === n || e === s) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof m) return e;
        i = e;
      }
      return new m(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(i)
      );
    }
    y.fn = m.prototype;
    const w = "resize scroll".split(" ");
    function S(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            w.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : y(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    S("click"),
      S("blur"),
      S("focus"),
      S("focusin"),
      S("focusout"),
      S("keyup"),
      S("keydown"),
      S("keypress"),
      S("submit"),
      S("change"),
      S("mousedown"),
      S("mousemove"),
      S("mouseup"),
      S("mouseenter"),
      S("mouseleave"),
      S("mouseout"),
      S("mouseover"),
      S("touchstart"),
      S("touchend"),
      S("touchmove"),
      S("resize"),
      S("scroll");
    const x = {
      addClass: function (...e) {
        const t = v(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = v(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = v(e.map((e) => e.split(" ")));
        return (
          b(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = v(e.map((e) => e.split(" ")));
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
        let [t, n, s, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), y(t).is(n))) s.apply(t, i);
          else {
            const e = y(t).parents();
            for (let t = 0; t < e.length; t += 1)
              y(e[t]).is(n) && s.apply(e[t], i);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
          i || (i = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: s, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: s, proxyListener: a }),
                t.addEventListener(e, a, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, s, i] = e;
        "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
          i || (i = !1);
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
                (s && n.listener === s) ||
                (s &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === s)
                  ? (r.removeEventListener(t, n.proxyListener, i),
                    a.splice(e, 1))
                  : s ||
                    (r.removeEventListener(t, n.proxyListener, i),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = g(),
          n = e[0].split(" "),
          s = e[1];
        for (let i = 0; i < n.length; i += 1) {
          const r = n[i];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(r, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(n),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", n));
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
        const e = g();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = g(),
            t = f(),
            n = this[0],
            s = n.getBoundingClientRect(),
            i = t.body,
            r = n.clientTop || i.clientTop || 0,
            a = n.clientLeft || i.clientLeft || 0,
            o = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: s.top + o - r, left: s.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const n = g();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (const t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
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
        const t = g(),
          n = f(),
          s = this[0];
        let i, r;
        if (!s || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (i = y(e), r = 0; r < i.length; r += 1) if (i[r] === s) return !0;
          return !1;
        }
        if (e === n) return s === n;
        if (e === t) return s === t;
        if (e.nodeType || e instanceof m) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === s) return !0;
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
        if (e > t - 1) return y([]);
        if (e < 0) {
          const n = t + e;
          return y(n < 0 ? [] : [this[n]]);
        }
        return y([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = f();
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const s = n.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[e].appendChild(s.firstChild);
            } else if (t instanceof m)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = f();
        let n, s;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1)
              this[n].insertBefore(i.childNodes[s], this[n].childNodes[0]);
          } else if (e instanceof m)
            for (s = 0; s < e.length; s += 1)
              this[n].insertBefore(e[s], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && y(this[0].nextElementSibling).is(e)
              ? y([this[0].nextElementSibling])
              : y([])
            : this[0].nextElementSibling
            ? y([this[0].nextElementSibling])
            : y([])
          : y([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return y([]);
        for (; n.nextElementSibling; ) {
          const s = n.nextElementSibling;
          e ? y(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return y(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && y(t.previousElementSibling).is(e)
              ? y([t.previousElementSibling])
              : y([])
            : t.previousElementSibling
            ? y([t.previousElementSibling])
            : y([]);
        }
        return y([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return y([]);
        for (; n.previousElementSibling; ) {
          const s = n.previousElementSibling;
          e ? y(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return y(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? y(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return y(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let s = this[n].parentNode;
          for (; s; )
            e ? y(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return y(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? y([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return y(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].children;
          for (let n = 0; n < s.length; n += 1)
            (e && !y(s[n]).is(e)) || t.push(s[n]);
        }
        return y(t);
      },
      filter: function (e) {
        return y(b(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(x).forEach((e) => {
      Object.defineProperty(y.fn, e, { value: x[e], writable: !0 });
    });
    const C = y;
    function T(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function E() {
      return Date.now();
    }
    function k(e, t) {
      void 0 === t && (t = "x");
      const n = g();
      let s, i, r;
      const a = (function (e) {
        const t = g();
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
          ? ((i = a.transform || a.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new n.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = r.toString().split(","))),
        "x" === t &&
          (i = n.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (i = n.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        i || 0
      );
    }
    function $(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function A(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function L() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != s && !A(s)) {
          const n = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = n.length; t < i; t += 1) {
            const i = n[t],
              r = Object.getOwnPropertyDescriptor(s, i);
            void 0 !== r &&
              r.enumerable &&
              ($(e[i]) && $(s[i])
                ? s[i].__swiper__
                  ? (e[i] = s[i])
                  : L(e[i], s[i])
                : !$(e[i]) && $(s[i])
                ? ((e[i] = {}), s[i].__swiper__ ? (e[i] = s[i]) : L(e[i], s[i]))
                : (e[i] = s[i]));
          }
        }
      }
      return e;
    }
    function M(e, t, n) {
      e.style.setProperty(t, n);
    }
    function _(e) {
      let { swiper: t, targetPosition: n, side: s } = e;
      const i = g(),
        r = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const d = n > r ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + d * (n - r);
          if ((c(p, n) && (p = n), t.wrapperEl.scrollTo({ [s]: p }), c(p, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: p });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let P, O, F;
    function D() {
      return (
        P ||
          (P = (function () {
            const e = g(),
              t = f();
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
        P
      );
    }
    function I(e) {
      return (
        void 0 === e && (e = {}),
        O ||
          (O = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = D(),
              s = g(),
              i = s.navigator.platform,
              r = t || s.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = s.screen.width,
              l = s.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === i;
            let h = "MacIntel" === i;
            return (
              !c &&
                h &&
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
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (h = !1)),
              d && !f && ((a.os = "android"), (a.android = !0)),
              (c || p || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        O
      );
    }
    function z() {
      return (
        F ||
          (F = (function () {
            const e = g();
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
        F
      );
    }
    const B = {
      on(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const i = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][i](t);
          }),
          s
        );
      },
      once(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function i() {
          s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          t.apply(s, r);
        }
        return (i.__emitterProxy = t), s.on(e, i, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const s = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
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
                  n.eventsListeners[e].forEach((s, i) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(i, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, n, s;
        for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
          : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
          n.unshift(s);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(s, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(s, n);
                });
          }),
          e
        );
      },
    };
    const N = {
      updateSize: function () {
        const e = this;
        let t, n;
        const s = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(s.css("padding-left") || 0, 10) -
              parseInt(s.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(s.css("padding-top") || 0, 10) -
              parseInt(s.css("padding-bottom") || 0, 10)),
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
        const s = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: a, wrongRTL: o } = e,
          l = e.virtual && s.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = i.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : c.length;
        let p = [];
        const f = [],
          h = [];
        let g = s.slidesOffsetBefore;
        "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
        let m = s.slidesOffsetAfter;
        "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = s.spaceBetween,
          w = -g,
          S = 0,
          x = 0;
        if (void 0 === r) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * r),
          (e.virtualSize = -y),
          a
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          s.centeredSlides &&
            s.cssMode &&
            (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
            M(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = s.grid && s.grid.rows > 1 && e.grid;
        let T;
        C && e.grid.initSlides(u);
        const E =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          T = 0;
          const a = c.eq(i);
          if (
            (C && e.grid.updateSlide(i, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === s.slidesPerView) {
              E && (c[i].style[t("width")] = "");
              const r = getComputedStyle(a[0]),
                o = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (o && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                s.roundLengths)
              )
                T = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = n(r, "width"),
                  t = n(r, "padding-left"),
                  s = n(r, "padding-right"),
                  i = n(r, "margin-left"),
                  o = n(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + i + o;
                else {
                  const { clientWidth: n, offsetWidth: r } = a[0];
                  T = e + t + s + i + o + (r - n);
                }
              }
              o && (a[0].style.transform = o),
                l && (a[0].style.webkitTransform = l),
                s.roundLengths && (T = Math.floor(T));
            } else
              (T = (r - (s.slidesPerView - 1) * y) / s.slidesPerView),
                s.roundLengths && (T = Math.floor(T)),
                c[i] && (c[i].style[t("width")] = `${T}px`);
            c[i] && (c[i].swiperSlideSize = T),
              h.push(T),
              s.centeredSlides
                ? ((w = w + T / 2 + S / 2 + y),
                  0 === S && 0 !== i && (w = w - r / 2 - y),
                  0 === i && (w = w - r / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  s.roundLengths && (w = Math.floor(w)),
                  x % s.slidesPerGroup == 0 && p.push(w),
                  f.push(w))
                : (s.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  f.push(w),
                  (w = w + T + y)),
              (e.virtualSize += T + y),
              (S = T),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + m),
          a &&
            o &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            i.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
          s.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(T, p, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let i = p[n];
            s.roundLengths && (i = Math.floor(i)),
              p[n] <= e.virtualSize - r && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
          const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
            [n]: `${y}px`,
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
            (e -= s.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
            (e -= s.spaceBetween),
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
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          M(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            M(
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
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= s.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          s = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          s
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || C([])).each((e) => {
              n.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !s) break;
              n.push(a(e));
            }
        else n.push(a(t.activeIndex));
        for (i = 0; i < n.length; i += 1)
          if (void 0 !== n[i]) {
            const e = n[i].offsetHeight;
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
          { slides: s, rtlTranslate: i, snapGrid: r } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        i && (a = e),
          s.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < s.length; e += 1) {
          const o = s[e];
          let l = o.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
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
            s.eq(e).addClass(n.slideVisibleClass)),
            (o.progress = i ? -d : d),
            (o.originalProgress = i ? -c : c);
        }
        t.visibleSlides = C(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: a } = t;
        const o = r,
          l = a;
        0 === s
          ? ((i = 0), (r = !0), (a = !0))
          : ((i = (e - t.minTranslate()) / s), (r = i <= 0), (a = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: a }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((o && !r) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: s,
            activeIndex: i,
            realIndex: r,
          } = e,
          a = e.virtual && n.virtual.enabled;
        let o;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (o = a
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          o.addClass(n.slideActiveClass),
          n.loop &&
            (o.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : s
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
              ? s
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : s
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            d.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : s
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
            slidesGrid: s,
            snapGrid: i,
            params: r,
            activeIndex: a,
            realIndex: o,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < s.length; e += 1)
            void 0 !== s[e + 1]
              ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2
                ? (c = e)
                : n >= s[e] && n < s[e + 1] && (c = e + 1)
              : n >= s[e] && (c = e);
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (i.indexOf(n) >= 0) d = i.indexOf(n);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((d >= i.length && (d = i.length - 1), c === a))
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
          s = C(e).closest(`.${n.slideClass}`)[0];
        let i,
          r = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (r = !0), (i = e);
              break;
            }
        if (!s || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                C(s).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const q = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: s,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return n ? -s : s;
        if (t.cssMode) return s;
        let r = k(i[0], e);
        return n && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: s,
            params: i,
            $wrapperEl: r,
            wrapperEl: a,
            progress: o,
          } = n;
        let l,
          d = 0,
          c = 0;
        n.isHorizontal() ? (d = s ? -e : e) : (c = e),
          i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          i.cssMode
            ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -d : -c)
            : i.virtualTranslate ||
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
      translateTo: function (e, t, n, s, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === s && (s = !0);
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = s && e > l ? l : s && e < d ? d : e),
          r.updateProgress(c),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                _({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
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
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              n &&
                (r.emit("beforeTransitionStart", t, i),
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
    function j(e) {
      let { swiper: t, runCallbacks: n, direction: s, step: i } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = s;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${i}`),
        n && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`),
          "next" === o
            ? t.emit(`slideNextTransition${i}`)
            : t.emit(`slidePrevTransition${i}`);
      }
    }
    const G = {
      slideTo: function (e, t, n, s, i) {
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
          (!h && !s && !i)
        )
          return !1;
        const g = Math.min(r.params.slidesPerGroupSkip, a);
        let m = g + Math.floor((a - g) / r.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1),
          (u || o.initialSlide || 0) === (c || 0) &&
            n &&
            r.emit("beforeSlideChangeStart");
        const v = -l[m];
        if ((r.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * d[e]),
              s = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= n && t < s - (s - n) / 2
                ? (a = e)
                : t >= n && t < s && (a = e + 1)
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
                _({ swiper: r, targetPosition: n, side: e ? "left" : "top" }),
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
          r.emit("beforeTransitionStart", t, s),
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
      slideToLoop: function (e, t, n, s) {
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
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          { animating: i, enabled: r, params: a } = s;
        if (!r) return s;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
          if (i && a.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        return a.rewind && s.isEnd
          ? s.slideTo(0, e, t, n)
          : s.slideTo(s.activeIndex + l, e, t, n);
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          {
            params: i,
            animating: r,
            snapGrid: a,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: d,
          } = s;
        if (!d) return s;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = c(l ? s.translate : -s.translate),
          p = a.map((e) => c(e));
        let f = a[p.indexOf(u) - 1];
        if (void 0 === f && i.cssMode) {
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
            h < 0 && (h = s.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((h = h - s.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          i.rewind && s.isBeginning)
        ) {
          const i =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(i, e, t, n);
        }
        return s.slideTo(h, e, t, n);
      },
      slideReset: function (e, t, n) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, n)
        );
      },
      slideToClosest: function (e, t, n, s) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === s && (s = 0.5);
        const i = this;
        let r = i.activeIndex;
        const a = Math.min(i.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[o]) {
          const e = i.snapGrid[o];
          l - e > (i.snapGrid[o + 1] - e) * s && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[o - 1];
          l - e <= (i.snapGrid[o] - e) * s && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(C(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - s / 2 ||
                r > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (r = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  T(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - s
              ? (e.loopFix(),
                (r = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                T(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const H = {
      loopCreate: function () {
        const e = this,
          t = f(),
          { params: n, $wrapperEl: s } = e,
          i = s.children().length > 0 ? C(s.children()[0].parentNode) : s;
        i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let r = i.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (r.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let s = 0; s < e; s += 1) {
              const e = C(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${n.slideClass}`);
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
          C(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / r.length) * r.length;
          o.push(r.eq(e)[0]), a.unshift(r.eq(r.length - e - 1)[0]);
        }
        for (let e = 0; e < o.length; e += 1)
          i.append(C(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          i.prepend(C(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: s,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: a,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -a[t] - e.getTranslate();
        if (t < s) {
          (l = n.length - 3 * s + t), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        } else if (t >= n.length - s) {
          (l = -n.length + t + s), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
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
    function R(e) {
      const t = this,
        n = f(),
        s = g(),
        i = t.touchEventsData,
        { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = C(l.target);
      if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (d = C(e.path[0]));
      const c = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  if (!n || n === f() || n === g()) return null;
                  n.assignedSlot && (n = n.assignedSlot);
                  const s = n.closest(e);
                  return s || n.getRootNode
                    ? s || t(n.getRootNode().host)
                    : null;
                })(t)
              );
            })(c, d[0])
          : d.closest(c)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = a.currentX,
        h = a.currentY,
        m = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (m && (p <= v || p >= s.innerWidth - v)) {
        if ("prevent" !== m) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = p),
        (a.startY = h),
        (i.touchStartTime = E()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        d.is(i.focusableElements) &&
          ((e = !1), "SELECT" === d[0].nodeName && (i.isTouched = !1)),
          n.activeElement &&
            C(n.activeElement).is(i.focusableElements) &&
            n.activeElement !== d[0] &&
            n.activeElement.blur();
        const s = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !s) ||
          d[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function W(e) {
      const t = f(),
        n = this,
        s = n.touchEventsData,
        { params: i, touches: r, rtlTranslate: a, enabled: o } = n;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (s.isTouchEvent && "touchmove" !== l.type) return;
      const d =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        c = "touchmove" === l.type ? d.pageX : l.pageX,
        u = "touchmove" === l.type ? d.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = c), void (r.startY = u);
      if (!n.allowTouchMove)
        return (
          C(l.target).is(s.focusableElements) || (n.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(r, {
              startX: c,
              startY: u,
              currentX: c,
              currentY: u,
            }),
            (s.touchStartTime = E()))
          )
        );
      if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (n.isVertical()) {
          if (
            (u < r.startY && n.translate <= n.maxTranslate()) ||
            (u > r.startY && n.translate >= n.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (c < r.startX && n.translate <= n.maxTranslate()) ||
          (c > r.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        s.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        C(l.target).is(s.focusableElements)
      )
        return (s.isMoved = !0), void (n.allowClick = !1);
      if (
        (s.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = c), (r.currentY = u);
      const p = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (n.isHorizontal() && r.currentY === r.startY) ||
        (n.isVertical() && r.currentX === r.startX)
          ? (s.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (s.isScrolling = n.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (s.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === s.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (s.startMoving = !0)),
        s.isScrolling)
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (n.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        s.isMoved ||
          (i.loop && !i.cssMode && n.loopFix(),
          (s.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (s.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (s.isMoved = !0);
      let g = n.isHorizontal() ? p : h;
      (r.diff = g),
        (g *= i.touchRatio),
        a && (g = -g),
        (n.swipeDirection = g > 0 ? "prev" : "next"),
        (s.currentTranslate = g + s.startTranslate);
      let m = !0,
        v = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (v = 0),
        g > 0 && s.currentTranslate > n.minTranslate()
          ? ((m = !1),
            i.resistance &&
              (s.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + s.startTranslate + g) ** v))
          : g < 0 &&
            s.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            i.resistance &&
              (s.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - s.startTranslate - g) ** v)),
        m && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(g) > i.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            void (r.diff = n.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
          i.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          i.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(s.currentTranslate),
        n.setTranslate(s.currentTranslate));
    }
    function V(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: s,
          touches: i,
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
          n.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      s.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = E(),
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
        ((n.lastClickTime = E()),
        T(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = s.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let h = null,
        g = null;
      s.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const m = (u - a[p]) / f,
        v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (c > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (m > 1 - s.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== g && m < 0 && Math.abs(m) > s.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(p));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p));
      }
    }
    function Y() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e;
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
        (e.allowSlidePrev = i),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function X(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function U() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
      if (!s) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let Z = !1;
    function K() {}
    const J = (e, t) => {
      const n = f(),
        {
          params: s,
          touchEvents: i,
          el: r,
          wrapperEl: a,
          device: o,
          support: l,
        } = e,
        d = !!s.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !s.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[c](i.start, e.onTouchStart, t),
          r[c](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: d } : d
          ),
          r[c](i.end, e.onTouchEnd, t),
          i.cancel && r[c](i.cancel, e.onTouchEnd, t);
      } else
        r[c](i.start, e.onTouchStart, !1),
          n[c](i.move, e.onTouchMove, d),
          n[c](i.end, e.onTouchEnd, !1);
      (s.preventClicks || s.preventClicksPropagation) &&
        r[c]("click", e.onClick, !0),
        s.cssMode && a[c]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Y,
              !0
            )
          : e[u]("observerUpdate", Y, !0);
    };
    const Q = {
        attachEvents: function () {
          const e = this,
            t = f(),
            { params: n, support: s } = e;
          (e.onTouchStart = R.bind(e)),
            (e.onTouchMove = W.bind(e)),
            (e.onTouchEnd = V.bind(e)),
            n.cssMode && (e.onScroll = U.bind(e)),
            (e.onClick = X.bind(e)),
            s.touch && !Z && (t.addEventListener("touchstart", K), (Z = !0)),
            J(e, "on");
        },
        detachEvents: function () {
          J(this, "off");
        },
      },
      ee = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const te = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: s = 0,
            params: i,
            $el: r,
          } = e,
          a = i.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in a ? a[o] : void 0) || e.originalParams,
          d = ee(e, i),
          c = ee(e, l),
          u = i.enabled;
        d && !c
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const n = i[t] && i[t].enabled,
              s = l[t] && l[t].enabled;
            n && !s && e[t].disable(), !n && s && e[t].enable();
          });
        const p = l.direction && l.direction !== i.direction,
          f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
        p && n && e.changeDirection(), L(e.params, l);
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
            e.slideTo(t - s + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, n) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
          return;
        let s = !1;
        const i = g(),
          r = "window" === t ? i.innerHeight : n.clientHeight,
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
            ? i.matchMedia(`(min-width: ${o}px)`).matches && (s = r)
            : o <= n.clientWidth && (s = r);
        }
        return s || "max";
      },
    };
    const ne = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: s,
            $el: i,
            device: r,
            support: a,
          } = e,
          o = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((s) => {
                      e[s] && n.push(t + s);
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
              { rtl: s },
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
        t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const se = {
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
    function ie(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const s = Object.keys(n)[0],
          i = n[s];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in i
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                L(t, n))
              : L(t, n))
          : L(t, n);
      };
    }
    const re = {
        eventsEmitter: B,
        update: N,
        translate: q,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: s } = n;
            s.cssMode ||
              (s.autoHeight && n.updateAutoHeight(),
              j({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: s } = n;
            (n.animating = !1),
              s.cssMode ||
                (n.setTransition(0),
                j({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: G,
        loop: H,
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
        events: Q,
        breakpoints: te,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: s } = n;
            if (s) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ne,
        images: {
          loadImage: function (e, t, n, s, i, r) {
            const a = g();
            let o;
            function l() {
              r && r();
            }
            C(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((o = new a.Image()),
                (o.onload = l),
                (o.onerror = l),
                s && (o.sizes = s),
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
              const s = e.imagesToLoad[n];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ae = {};
    class oe {
      constructor() {
        let e, t;
        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
          s[i] = arguments[i];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
          t || (t = {}),
          (t = L({}, t)),
          e && !t.el && (t.el = e),
          t.el && C(t.el).length > 1)
        ) {
          const e = [];
          return (
            C(t.el).each((n) => {
              const s = L({}, t, { el: n });
              e.push(new oe(s));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = D()),
          (r.device = I({ userAgent: t.userAgent })),
          (r.browser = z()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const a = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: ie(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const o = L({}, se, a);
        return (
          (r.params = L({}, o, ae, t)),
          (r.originalParams = L({}, r.params)),
          (r.passedParams = L({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = C),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: C(),
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
              lastClickTime: E(),
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
        const s = n.minTranslate(),
          i = (n.maxTranslate() - s) * e + s;
        n.translateTo(i, void 0 === t ? 0 : t),
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
          const s = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: s }), e.emit("_slideClass", n, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: s,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = s[o].swiperSlideSize;
          for (let n = o + 1; n < s.length; n += 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let n = o - 1; n >= 0; n -= 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < s.length; e += 1) {
            (t ? i[e] + r[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            i[o] - i[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || s()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          s = n.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${s}`)
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
        const n = C(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = C(e.shadowRoot.querySelector(s()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(s()) : C(n).children(s());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = f().createElement("div");
          (i = C(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
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
          { params: s, $el: i, $wrapperEl: r, slides: a } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            s.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
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
        L(ae, e);
      }
      static get extendedDefaults() {
        return ae;
      }
      static get defaults() {
        return se;
      }
      static installModule(e) {
        oe.prototype.__modules__ || (oe.prototype.__modules__ = []);
        const t = oe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => oe.installModule(e)), oe)
          : (oe.installModule(e), oe);
      }
    }
    Object.keys(re).forEach((e) => {
      Object.keys(re[e]).forEach((t) => {
        oe.prototype[t] = re[e][t];
      });
    }),
      oe.use([
        function (e) {
          let { swiper: t, on: n, emit: s } = e;
          const i = g();
          let r = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = i.requestAnimationFrame(() => {
                    const { width: n, height: s } = t;
                    let i = n,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: s, target: a } = e;
                      (a && a !== t.el) ||
                        ((i = s ? s.width : (n[0] || n).inlineSize),
                        (r = s ? s.height : (n[0] || n).blockSize));
                    }),
                      (i === n && r === s) || o();
                  });
                })),
                r.observe(t.el))
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", l));
          }),
            n("destroy", () => {
              a && i.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: s, emit: i } = e;
          const r = [],
            a = g(),
            o = function (e, t) {
              void 0 === t && (t = {});
              const n = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
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
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.$el[0], { childList: t.params.observeSlideChildren }),
                  o(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const le = oe;
    function de(e, t, n, s) {
      const i = f();
      return (
        e.params.createElements &&
          Object.keys(s).forEach((r) => {
            if (!n[r] && !0 === n.auto) {
              let a = e.$el.children(`.${s[r]}`)[0];
              a ||
                ((a = i.createElement("div")),
                (a.className = s[r]),
                e.$el.append(a)),
                (n[r] = a),
                (t[r] = a);
            }
          }),
        n
      );
    }
    function ce(e) {
      let { swiper: t, extendParams: n, on: s, emit: i } = e;
      function r(e) {
        let n;
        return (
          e &&
            ((n = C(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function a(e, n) {
        const s = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](s.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
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
            (t.slidePrev(), i("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), i("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = de(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const n = r(e.nextEl),
          s = r(e.prevEl);
        n && n.length > 0 && n.on("click", d),
          s && s.length > 0 && s.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: s,
            prevEl: s && s[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), s && s.addClass(e.lockClass));
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
        s("init", () => {
          !1 === t.params.navigation.enabled ? p() : (c(), o());
        }),
        s("toEdge fromEdge lock unlock", () => {
          o();
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
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
        s("click", (e, n) => {
          const { $nextEl: s, $prevEl: r } = t.navigation,
            a = n.target;
          if (t.params.navigation.hideOnClick && !C(a).is(r) && !C(a).is(s)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            s
              ? (e = s.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              s && s.toggleClass(t.params.navigation.hiddenClass),
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
    function ue(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function pe(e) {
      let { swiper: t, extendParams: n, on: s, emit: i } = e;
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
        const { bulletActiveClass: s } = t.params.pagination;
        e[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`);
      }
      function c() {
        const e = t.rtl,
          n = t.params.pagination;
        if (l()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let c;
        const u = t.params.loop
          ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((c = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              c > s - 1 - 2 * t.loopedSlides && (c -= s - 2 * t.loopedSlides),
              c > u - 1 && (c -= u),
              c < 0 && "bullets" !== t.params.paginationType && (c = u + c))
            : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === n.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const s = t.pagination.bullets;
          let i, l, u;
          if (
            (n.dynamicBullets &&
              ((a = s
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
              (i = Math.max(c - o, 0)),
              (l = i + (Math.min(s.length, n.dynamicMainBullets) - 1)),
              (u = (l + i) / 2)),
            s.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            s.each((e) => {
              const t = C(e),
                s = t.index();
              s === c && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (s >= i &&
                    s <= l &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  s === i && d(t, "prev"),
                  s === l && d(t, "next"));
            });
          else {
            const e = s.eq(c),
              r = e.index();
            if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const e = s.eq(i),
                a = s.eq(l);
              for (let e = i; e <= l; e += 1)
                s.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= s.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    s.eq(s.length - e).addClass(`${n.bulletActiveClass}-main`);
                  s.eq(s.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else d(e, "prev"), d(a, "next");
              else d(e, "prev"), d(a, "next");
            }
          }
          if (n.dynamicBullets) {
            const i = Math.min(s.length, n.dynamicMainBullets + 4),
              r = (a * i - a) / 2 - u * a,
              o = e ? "right" : "left";
            s.css(t.isHorizontal() ? o : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (r.find(ue(n.currentClass)).text(n.formatFractionCurrent(c + 1)),
            r.find(ue(n.totalClass)).text(n.formatFractionTotal(u))),
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
          const s = (c + 1) / u;
          let i = 1,
            a = 1;
          "horizontal" === e ? (i = s) : (a = s),
            r
              .find(ue(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
              .transition(t.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (r.html(n.renderCustom(t, c + 1, u)), i("paginationRender", r[0]))
          : i("paginationUpdate", r[0]),
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
          s = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            i > n &&
            (i = n);
          for (let n = 0; n < i; n += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, n, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          s.html(r), (t.pagination.bullets = s.find(ue(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          s.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            s.html(r)),
          "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = de(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let n = C(e.el);
        0 !== n.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            n.length > 1 &&
            ((n = t.$el.find(e.el)),
            n.length > 1 &&
              (n = n.filter((e) => C(e).parents(".swiper")[0] === t.el))),
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
            n.on("click", ue(e.bulletClass), function (e) {
              e.preventDefault();
              let n = C(this).index() * t.params.slidesPerGroup;
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
          e.clickable && n.off("click", ue(e.bulletClass));
      }
      s("init", () => {
        !1 === t.params.pagination.enabled ? h() : (p(), u(), c());
      }),
        s("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && c();
        }),
        s("snapIndexChange", () => {
          t.params.loop || c();
        }),
        s("slidesLengthChange", () => {
          t.params.loop && (u(), c());
        }),
        s("snapGridLengthChange", () => {
          t.params.loop || (u(), c());
        }),
        s("destroy", () => {
          f();
        }),
        s("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          c();
        }),
        s("click", (e, n) => {
          const s = n.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !C(s).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                (t.navigation.prevEl && s === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
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
    function fe(e) {
      let t,
        { swiper: n, extendParams: s, on: i, emit: r } = e;
      function a() {
        if (!n.size)
          return (n.autoplay.running = !1), void (n.autoplay.paused = !1);
        const e = n.slides.eq(n.activeIndex);
        let s = n.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (s = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
          clearTimeout(t),
          (t = T(() => {
            let e;
            n.params.autoplay.reverseDirection
              ? n.params.loop
                ? (n.loopFix(),
                  (e = n.slidePrev(n.params.speed, !0, !0)),
                  r("autoplay"))
                : n.isBeginning
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
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
                ? l()
                : ((e = n.slideTo(0, n.params.speed, !0, !0)), r("autoplay"))
              : ((e = n.slideNext(n.params.speed, !0, !0)), r("autoplay")),
              ((n.params.cssMode && n.autoplay.running) || !1 === e) && a();
          }, s));
      }
      function o() {
        return (
          void 0 === t &&
          !n.autoplay.running &&
          ((n.autoplay.running = !0), r("autoplayStart"), a(), !0)
        );
      }
      function l() {
        return (
          !!n.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (n.autoplay.running = !1),
          r("autoplayStop"),
          !0)
        );
      }
      function d(e) {
        n.autoplay.running &&
          (n.autoplay.paused ||
            (t && clearTimeout(t),
            (n.autoplay.paused = !0),
            0 !== e && n.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  n.$wrapperEl[0].addEventListener(e, u);
                })
              : ((n.autoplay.paused = !1), a())));
      }
      function c() {
        const e = f();
        "hidden" === e.visibilityState && n.autoplay.running && d(),
          "visible" === e.visibilityState &&
            n.autoplay.paused &&
            (a(), (n.autoplay.paused = !1));
      }
      function u(e) {
        n &&
          !n.destroyed &&
          n.$wrapperEl &&
          e.target === n.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, u);
          }),
          (n.autoplay.paused = !1),
          n.autoplay.running ? a() : l());
      }
      function p() {
        n.params.autoplay.disableOnInteraction
          ? l()
          : (r("autoplayPause"), d()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function h() {
        n.params.autoplay.disableOnInteraction ||
          ((n.autoplay.paused = !1), r("autoplayResume"), a());
      }
      (n.autoplay = { running: !1, paused: !1 }),
        s({
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
        i("init", () => {
          if (n.params.autoplay.enabled) {
            o();
            f().addEventListener("visibilitychange", c),
              n.params.autoplay.pauseOnMouseEnter &&
                (n.$el.on("mouseenter", p), n.$el.on("mouseleave", h));
          }
        }),
        i("beforeTransitionStart", (e, t, s) => {
          n.autoplay.running &&
            (s || !n.params.autoplay.disableOnInteraction
              ? n.autoplay.pause(t)
              : l());
        }),
        i("sliderFirstMove", () => {
          n.autoplay.running &&
            (n.params.autoplay.disableOnInteraction ? l() : d());
        }),
        i("touchEnd", () => {
          n.params.cssMode &&
            n.autoplay.paused &&
            !n.params.autoplay.disableOnInteraction &&
            a();
        }),
        i("destroy", () => {
          n.$el.off("mouseenter", p),
            n.$el.off("mouseleave", h),
            n.autoplay.running && l();
          f().removeEventListener("visibilitychange", c);
        }),
        Object.assign(n.autoplay, { pause: d, run: a, start: o, stop: l });
    }
    window.addEventListener("load", function (e) {
      document.querySelector(".subjects__slider") &&
        new le(".subjects__slider", {
          modules: [ce, pe, fe],
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
    let he = !1;
    setTimeout(() => {
      if (he) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var ge,
      me,
      ve,
      be = (function (e) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          n = 0,
          s = {},
          i = {
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
                var s, r;
                switch (((n = n || {}), i.util.type(t))) {
                  case "Object":
                    if (((r = i.util.objId(t)), n[r])) return n[r];
                    for (var a in ((s = {}), (n[r] = s), t))
                      t.hasOwnProperty(a) && (s[a] = e(t[a], n));
                    return s;
                  case "Array":
                    return (
                      (r = i.util.objId(t)),
                      n[r]
                        ? n[r]
                        : ((s = []),
                          (n[r] = s),
                          t.forEach(function (t, i) {
                            s[i] = e(t, n);
                          }),
                          s)
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
                } catch (s) {
                  var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) ||
                    [])[1];
                  if (e) {
                    var t = document.getElementsByTagName("script");
                    for (var n in t) if (t[n].src == e) return t[n];
                  }
                  return null;
                }
              },
              isActive: function (e, t, n) {
                for (var s = "no-" + t; e; ) {
                  var i = e.classList;
                  if (i.contains(t)) return !0;
                  if (i.contains(s)) return !1;
                  e = e.parentElement;
                }
                return !!n;
              },
            },
            languages: {
              plain: s,
              plaintext: s,
              text: s,
              txt: s,
              extend: function (e, t) {
                var n = i.util.clone(i.languages[e]);
                for (var s in t) n[s] = t[s];
                return n;
              },
              insertBefore: function (e, t, n, s) {
                var r = (s = s || i.languages)[e],
                  a = {};
                for (var o in r)
                  if (r.hasOwnProperty(o)) {
                    if (o == t)
                      for (var l in n) n.hasOwnProperty(l) && (a[l] = n[l]);
                    n.hasOwnProperty(o) || (a[o] = r[o]);
                  }
                var d = s[e];
                return (
                  (s[e] = a),
                  i.languages.DFS(i.languages, function (t, n) {
                    n === d && t != e && (this[t] = a);
                  }),
                  a
                );
              },
              DFS: function e(t, n, s, r) {
                r = r || {};
                var a = i.util.objId;
                for (var o in t)
                  if (t.hasOwnProperty(o)) {
                    n.call(t, o, t[o], s || o);
                    var l = t[o],
                      d = i.util.type(l);
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
              i.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function (e, t, n) {
              var s = {
                callback: n,
                container: e,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              i.hooks.run("before-highlightall", s),
                (s.elements = Array.prototype.slice.apply(
                  s.container.querySelectorAll(s.selector)
                )),
                i.hooks.run("before-all-elements-highlight", s);
              for (var r, a = 0; (r = s.elements[a++]); )
                i.highlightElement(r, !0 === t, s.callback);
            },
            highlightElement: function (t, n, s) {
              var r = i.util.getLanguage(t),
                a = i.languages[r];
              i.util.setLanguage(t, r);
              var o = t.parentElement;
              o &&
                "pre" === o.nodeName.toLowerCase() &&
                i.util.setLanguage(o, r);
              var l = {
                element: t,
                language: r,
                grammar: a,
                code: t.textContent,
              };
              function d(e) {
                (l.highlightedCode = e),
                  i.hooks.run("before-insert", l),
                  (l.element.innerHTML = l.highlightedCode),
                  i.hooks.run("after-highlight", l),
                  i.hooks.run("complete", l),
                  s && s.call(l.element);
              }
              if (
                (i.hooks.run("before-sanity-check", l),
                (o = l.element.parentElement) &&
                  "pre" === o.nodeName.toLowerCase() &&
                  !o.hasAttribute("tabindex") &&
                  o.setAttribute("tabindex", "0"),
                !l.code)
              )
                return (
                  i.hooks.run("complete", l), void (s && s.call(l.element))
                );
              if ((i.hooks.run("before-highlight", l), l.grammar))
                if (n && e.Worker) {
                  var c = new Worker(i.filename);
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
                } else d(i.highlight(l.code, l.grammar, l.language));
              else d(i.util.encode(l.code));
            },
            highlight: function (e, t, n) {
              var s = { code: e, grammar: t, language: n };
              if ((i.hooks.run("before-tokenize", s), !s.grammar))
                throw new Error(
                  'The language "' + s.language + '" has no grammar.'
                );
              return (
                (s.tokens = i.tokenize(s.code, s.grammar)),
                i.hooks.run("after-tokenize", s),
                r.stringify(i.util.encode(s.tokens), s.language)
              );
            },
            tokenize: function (e, t) {
              var n = t.rest;
              if (n) {
                for (var s in n) t[s] = n[s];
                delete t.rest;
              }
              var i = new l();
              return (
                d(i, i.head, e),
                o(e, i, t, i.head, 0),
                (function (e) {
                  for (var t = [], n = e.head.next; n !== e.tail; )
                    t.push(n.value), (n = n.next);
                  return t;
                })(i)
              );
            },
            hooks: {
              all: {},
              add: function (e, t) {
                var n = i.hooks.all;
                (n[e] = n[e] || []), n[e].push(t);
              },
              run: function (e, t) {
                var n = i.hooks.all[e];
                if (n && n.length) for (var s, r = 0; (s = n[r++]); ) s(t);
              },
            },
            Token: r,
          };
        function r(e, t, n, s) {
          (this.type = e),
            (this.content = t),
            (this.alias = n),
            (this.length = 0 | (s || "").length);
        }
        function a(e, t, n, s) {
          e.lastIndex = t;
          var i = e.exec(n);
          if (i && s && i[1]) {
            var r = i[1].length;
            (i.index += r), (i[0] = i[0].slice(r));
          }
          return i;
        }
        function o(e, t, n, s, l, u) {
          for (var p in n)
            if (n.hasOwnProperty(p) && n[p]) {
              var f = n[p];
              f = Array.isArray(f) ? f : [f];
              for (var h = 0; h < f.length; ++h) {
                if (u && u.cause == p + "," + h) return;
                var g = f[h],
                  m = g.inside,
                  v = !!g.lookbehind,
                  b = !!g.greedy,
                  y = g.alias;
                if (b && !g.pattern.global) {
                  var w = g.pattern.toString().match(/[imsuy]*$/)[0];
                  g.pattern = RegExp(g.pattern.source, w + "g");
                }
                for (
                  var S = g.pattern || g, x = s.next, C = l;
                  x !== t.tail && !(u && C >= u.reach);
                  C += x.value.length, x = x.next
                ) {
                  var T = x.value;
                  if (t.length > e.length) return;
                  if (!(T instanceof r)) {
                    var E,
                      k = 1;
                    if (b) {
                      if (!(E = a(S, C, e, v)) || E.index >= e.length) break;
                      var $ = E.index,
                        A = E.index + E[0].length,
                        L = C;
                      for (L += x.value.length; $ >= L; )
                        L += (x = x.next).value.length;
                      if (((C = L -= x.value.length), x.value instanceof r))
                        continue;
                      for (
                        var M = x;
                        M !== t.tail && (L < A || "string" == typeof M.value);
                        M = M.next
                      )
                        k++, (L += M.value.length);
                      k--, (T = e.slice(C, L)), (E.index -= C);
                    } else if (!(E = a(S, 0, T, v))) continue;
                    $ = E.index;
                    var _ = E[0],
                      P = T.slice(0, $),
                      O = T.slice($ + _.length),
                      F = C + T.length;
                    u && F > u.reach && (u.reach = F);
                    var D = x.prev;
                    if (
                      (P && ((D = d(t, D, P)), (C += P.length)),
                      c(t, D, k),
                      (x = d(t, D, new r(p, m ? i.tokenize(_, m) : _, y, _))),
                      O && d(t, x, O),
                      k > 1)
                    ) {
                      var I = { cause: p + "," + h, reach: F };
                      o(e, t, n, x.prev, C, I),
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
          var s = t.next,
            i = { value: n, prev: t, next: s };
          return (t.next = i), (s.prev = i), e.length++, i;
        }
        function c(e, t, n) {
          for (var s = t.next, i = 0; i < n && s !== e.tail; i++) s = s.next;
          (t.next = s), (s.prev = t), (e.length -= i);
        }
        if (
          ((e.Prism = i),
          (r.stringify = function e(t, n) {
            if ("string" == typeof t) return t;
            if (Array.isArray(t)) {
              var s = "";
              return (
                t.forEach(function (t) {
                  s += e(t, n);
                }),
                s
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
              i.hooks.run("wrap", r);
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
            ? (i.disableWorkerMessageHandler ||
                e.addEventListener(
                  "message",
                  function (t) {
                    var n = JSON.parse(t.data),
                      s = n.language,
                      r = n.code,
                      a = n.immediateClose;
                    e.postMessage(i.highlight(r, i.languages[s], s)),
                      a && e.close();
                  },
                  !1
                ),
              i)
            : i;
        var u = i.util.currentScript();
        function p() {
          i.manual || i.highlightAll();
        }
        if (
          (u &&
            ((i.filename = u.src),
            u.hasAttribute("data-manual") && (i.manual = !0)),
          !i.manual)
        ) {
          var f = document.readyState;
          "loading" === f || ("interactive" === f && u && u.defer)
            ? document.addEventListener("DOMContentLoaded", p)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(p)
            : window.setTimeout(p, 16);
        }
        return i;
      })(
        "undefined" != typeof window
          ? window
          : "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
          ? self
          : {}
      );
    "undefined" != typeof module && module.exports && (module.exports = be),
      "undefined" != typeof global && (global.Prism = be),
      (be.languages.clike = {
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
      (be.languages.javascript = be.languages.extend("clike", {
        "class-name": [
          be.languages.clike["class-name"],
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
      (be.languages.javascript["class-name"][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
      be.languages.insertBefore("javascript", "keyword", {
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
              inside: be.languages.regex,
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
            inside: be.languages.javascript,
          },
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: be.languages.javascript,
          },
          {
            pattern:
              /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: be.languages.javascript,
          },
          {
            pattern:
              /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: be.languages.javascript,
          },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
      }),
      be.languages.insertBefore("javascript", "string", {
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
                rest: be.languages.javascript,
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
      be.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern:
            /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: !0,
          alias: "property",
        },
      }),
      be.languages.markup &&
        (be.languages.markup.tag.addInlined("script", "javascript"),
        be.languages.markup.tag.addAttribute(
          "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
          "javascript"
        )),
      (be.languages.js = be.languages.javascript),
      (be.languages.c = be.languages.extend("clike", {
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
      be.languages.insertBefore("c", "string", {
        char: {
          pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
          greedy: !0,
        },
      }),
      be.languages.insertBefore("c", "string", {
        macro: {
          pattern:
            /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
          lookbehind: !0,
          greedy: !0,
          alias: "property",
          inside: {
            string: [
              { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
              be.languages.c.string,
            ],
            char: be.languages.c.char,
            comment: be.languages.c.comment,
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
            expression: { pattern: /\S[\s\S]*/, inside: be.languages.c },
          },
        },
      }),
      be.languages.insertBefore("c", "function", {
        constant:
          /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
      }),
      delete be.languages.c.boolean,
      (ge = be),
      (me =
        /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/),
      (ve = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(
        /<keyword>/g,
        function () {
          return me.source;
        }
      )),
      (ge.languages.cpp = ge.languages.extend("c", {
        "class-name": [
          {
            pattern: RegExp(
              "(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(
                /<keyword>/g,
                function () {
                  return me.source;
                }
              )
            ),
            lookbehind: !0,
          },
          /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
          /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
          /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
        ],
        keyword: me,
        number: {
          pattern:
            /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
          greedy: !0,
        },
        operator:
          />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/,
      })),
      ge.languages.insertBefore("cpp", "string", {
        module: {
          pattern: RegExp(
            '(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' +
              "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(
                /<mod-name>/g,
                function () {
                  return ve;
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
      ge.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
          pattern:
            /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
          inside: {
            function: /^\w+/,
            generic: {
              pattern: /<[\s\S]+/,
              alias: "class-name",
              inside: ge.languages.cpp,
            },
          },
        },
      }),
      ge.languages.insertBefore("cpp", "operator", {
        "double-colon": { pattern: /::/, alias: "punctuation" },
      }),
      ge.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
          pattern:
            /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
          lookbehind: !0,
          greedy: !0,
          inside: ge.languages.extend("cpp", {}),
        },
      }),
      ge.languages.insertBefore(
        "inside",
        "double-colon",
        { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
        ge.languages.cpp["base-clause"]
      ),
      (be.languages.python = {
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
      (be.languages.python[
        "string-interpolation"
      ].inside.interpolation.inside.rest = be.languages.python),
      (be.languages.py = be.languages.python),
      new (n(152))(".button-copy", {
        target: function (e) {
          return e.previousElementSibling.querySelector("code");
        },
      }),
      console.log("Задача о скобках");
    let ye = document.querySelector("#setString");
    function we(e) {
      return [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
      ][e.getDay()];
    }
    if (
      (null != ye &&
        ye.addEventListener("click", () => {
          let e = document.getElementById("string").value;
          console.log(typeof e),
            0 == e.length
              ? ((document.querySelector("#code-result").style.color =
                  "#D0722E"),
                (document.querySelector("#code-result").innerHTML =
                  "Я же вижу, что это пустая строка..."))
              : !(function (e) {
                  let t = [],
                    n = ["[", "(", "{"],
                    s = { "{": "}", "(": ")", "[": "]" };
                  for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    if (n.includes(r)) t.push(r);
                    else {
                      if (r !== s[t.pop()]) return !1;
                    }
                  }
                  return 0 === t.length;
                })(e)
              ? ((document.querySelector("#code-result").style.color =
                  "#E06363"),
                (document.querySelector("#code-result").innerHTML =
                  "Такой строки не может быть!"))
              : ((document.querySelector("#code-result").style.color =
                  "#3CA478"),
                (document.querySelector("#code-result").innerHTML =
                  "Такая строка существует!"));
        }),
      (Date.prototype.getWeek = function () {
        var e = new Date(this.getFullYear(), 0, 1);
        return Math.floor(((this - e) / 864e5 + e.getDay() + 1) / 7);
      }),
      document.querySelector(".schedule"))
    ) {
      !(function () {
        let e = new Date(),
          t = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1),
          n = e.getWeek() % 2 == 0 ? "верхняя" : "нижняя",
          s = document.querySelectorAll(".table-schedule__title");
        for (let i = 0; i < s.length; i++) {
          s[i].innerHTML =
            i % 2 == 0 ? `${we(e)}, ${n} неделя` : `${we(t)}, ${n} неделя`;
        }
      })();
      let e = new Date().getWeek() % 2 == 0 ? "верхняя" : "нижняя",
        t = document.querySelectorAll(".table-schedule-today"),
        n = document.querySelectorAll(".table-schedule-tomorrow"),
        s = [
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "Математическая логика (практика)",
              "АСД (лабораторные)",
              "",
              "",
            ],
            [
              "Математический анализ (практика)",
              "",
              "СРВ (лекция)",
              "Дифференциальные уравнения (практика)",
              "СРВ (практика)",
              "",
              "",
            ],
            [
              "",
              "",
              "Иностранный язык",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
              "",
              "",
            ],
            [
              "",
              "",
              "Дифференциальные уравнения (лекция)",
              "Язык Python (лекция)",
              "",
              "Язык Python (лабораторные)",
              "",
            ],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "Математическая логика (практика)",
              "",
              "",
              "",
            ],
            [
              "Математический анализ (практика)",
              "СРВ (практика)",
              "СРВ (лекция)",
              "Дифференциальные уравнения (практика)",
              "",
              "",
              "",
            ],
            [
              "",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
              "Иностранный язык",
              "АСД (лабораторные)",
              "",
              "",
            ],
            [
              "",
              "",
              "Дифференциальные уравнения (лекция)",
              "Язык Python (лекция)",
              "",
              "",
              "",
            ],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
              "",
              "",
            ],
            [
              "СРВ (практика)",
              "Математический анализ (практика)",
              "СРВ (лекция)",
              "",
              "Дифференциальные уравнения (практика)",
              "",
              "",
            ],
            [
              "",
              "Язык Python (лабораторные)",
              "АСД (лабораторные)",
              "Иностранный язык",
              "",
              "",
              "",
            ],
            [
              "",
              "Математическая логика (практика)",
              "Дифференциальные уравнения (лекция)",
              "Язык Python (лекция)",
              "",
              "",
              "",
            ],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "",
              "",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
            ],
            [
              "",
              "Математический анализ (практика)",
              "СРВ (лекция)",
              "СРВ (практика)",
              "Дифференциальные уравнения (практика)",
              "",
              "",
            ],
            ["", "", "", "АСД (лабораторные)", "Иностранный язык", "", ""],
            [
              "",
              "Математическая логика (практика)",
              "Дифференциальные уравнения (лекция)",
              "Язык Python (лекция)",
              "",
              "",
              "",
            ],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
        ],
        i = [
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "Математическая логика (практика)",
              "АСД (лабораторные)",
              "",
              "",
            ],
            [
              "Математический анализ (практика)",
              "",
              "СРВ (лекция)",
              "Дифференциальные уравнения (практика)",
              "СРВ (практика)",
              "",
              "",
            ],
            [
              "",
              "",
              "Иностранный язык",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
              "",
              "",
            ],
            ["", "", "Дифференциальные уравнения (лекция)", "", "", "", ""],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "Математическая логика (практика)",
              "",
              "",
              "",
            ],
            [
              "Математический анализ (практика)",
              "СРВ (практика)",
              "СРВ (лекция)",
              "Дифференциальные уравнения (практика)",
              "",
              "",
              "",
            ],
            [
              "",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
              "Иностранный язык",
              "АСД (лабораторные)",
              "",
              "",
            ],
            [
              "",
              "",
              "Дифференциальные уравнения (лекция)",
              "Язык Python (лабораторные)",
              "",
              "",
              "",
            ],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
              "",
              "",
            ],
            [
              "СРВ (практика)",
              "Математический анализ (практика)",
              "СРВ (лекция)",
              "",
              "Дифференциальные уравнения (практика)",
              "",
              "",
            ],
            ["", "", "АСД (лабораторные)", "Иностранный язык", "", "", ""],
            [
              "",
              "Математическая логика (практика)",
              "Дифференциальные уравнения (лекция)",
              "",
              "",
              "",
              "",
            ],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            [
              "Физкультура (лекция)",
              "Математический анализ (лекция)",
              "",
              "",
              "",
              "Основы программирования (лабораторные)",
              "Основы программирования (лабораторные)",
            ],
            [
              "",
              "Математический анализ (практика)",
              "СРВ (лекция)",
              "СРВ (практика)",
              "Дифференциальные уравнения (практика)",
              "",
              "",
            ],
            [
              "",
              "Язык Python (лабораторные)",
              "",
              "АСД (лабораторные)",
              "Иностранный язык",
              "",
              "",
            ],
            [
              "",
              "Математическая логика (практика)",
              "Дифференциальные уравнения (лекция)",
              "",
              "",
              "",
              "",
            ],
            [
              "Физкультура",
              "",
              "",
              "Математическая логика (лекция)",
              "АСД (лекция)",
              "",
              "",
            ],
            ["", "", "", "", "", "", ""],
          ],
        ],
        r = [
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "233", "230А", "", ""],
            ["205", "", "118", "205", "230А", "", ""],
            ["", "", "232", "214", "214", "", ""],
            ["", "", "233", "118", "", "214", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "233", "", "", ""],
            ["205", "230А", "118", "205", "", "", ""],
            ["", "214", "214", "418", "230А", "", ""],
            ["", "", "233", "118", "", "", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "230", "230", "", ""],
            ["230А", "205", "118", "", "205", "", ""],
            ["", "220", "230А", "232", "", "", ""],
            ["", "205", "233", "118", "", "", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "", "", "214", "214"],
            ["", "205", "118", "230А", "205", "", ""],
            ["", "", "", "230А", "232", "", ""],
            ["", "205", "233", "118", "", "", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
        ],
        a = [
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "233", "230А", "", ""],
            ["205", "", "118", "205", "230А", "", ""],
            ["", "", "232", "214", "214", "", ""],
            ["", "", "233", "", "", "214", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "233", "", "", ""],
            ["205", "230А", "118", "205", "", "", ""],
            ["", "214", "214", "418", "230А", "", ""],
            ["", "", "233", "214", "", "", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "230", "230", "", ""],
            ["230А", "205", "118", "", "205", "", ""],
            ["", "", "230А", "232", "", "", ""],
            ["", "205", "233", "", "", "", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
          [
            ["", "", "", "", "", "", ""],
            ["webinar", "webinar", "", "", "", "214", "214"],
            ["", "205", "118", "230А", "205", "", ""],
            ["", "220", "", "230А", "232", "", ""],
            ["", "205", "233", "", "", "", ""],
            ["корп. 4", "", "", "webinar", "webinar", "", ""],
            ["", "", "", "", "", "", ""],
          ],
        ];
      for (let o = 0; o < t.length; o++) {
        const l = t[o].querySelectorAll(".row-table__name"),
          d = t[o].querySelectorAll(".row-table__auditorium"),
          c = n[o].querySelectorAll(".row-table__name"),
          u = n[o].querySelectorAll(".row-table__auditorium");
        for (let t = 0; t < l.length; t++) {
          const n = l[t],
            p = d[t],
            f = c[t],
            h = u[t];
          "верхняя" == e
            ? ((n.innerHTML = `${s[o][new Date().getDay()][t]}`),
              (p.innerHTML = `${r[o][new Date().getDay()][t]}`),
              (f.innerHTML = `${
                s[o][
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 1
                  ).getDay()
                ][t]
              }`),
              (h.innerHTML = `${
                r[o][
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 1
                  ).getDay()
                ][t]
              }`))
            : ((n.innerHTML = `${i[o][new Date().getDay()][t]}`),
              (p.innerHTML = `${a[o][new Date().getDay()][t]}`),
              (f.innerHTML = `${
                i[o][
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 1
                  ).getDay()
                ][t]
              }`),
              (h.innerHTML = `${
                a[o][
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 1
                  ).getDay()
                ][t]
              }`));
        }
      }
    }
    if (document.querySelector("#settings-form")) {
      let e = document.querySelector(".form__select");
      (e.value = localStorage.getItem("group")),
        (e.oninput = () => {
          localStorage.setItem("group", e.value);
        });
    }
    let Se = localStorage.getItem("group");
    if (null != Se) {
      Se = +Se[0];
      let e = document.querySelectorAll(".tabs__title");
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        n.classList.remove("_tab-active"),
          t == Se && n.classList.add("_tab-active");
      }
    }
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
          i &&
            e.target.closest(".icon-menu") &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? r(e) : a(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        }),
      (function () {
        const n = document.querySelectorAll("[data-tabs]");
        let i = [];
        if (n.length > 0) {
          const t = e();
          t && t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
            n.forEach((e, t) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", o),
                (function (e) {
                  let t = e.querySelectorAll("[data-tabs-titles]>*"),
                    n = e.querySelectorAll("[data-tabs-body]>*");
                  const s = e.dataset.tabsIndex,
                    r = i[0] == s;
                  if (r) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  n.length &&
                    ((n = Array.from(n).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    (t = Array.from(t).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    n.forEach((e, n) => {
                      t[n].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        r && n == i[1] && t[n].classList.add("_tab-active"),
                        (e.hidden = !t[n].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let s = l(n, "tabs");
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                r(e.itemsArray, e.matchMedia);
              }),
                r(e.itemsArray, e.matchMedia);
            });
        }
        function r(e, t) {
          e.forEach((e) => {
            let n = (e = e.item).querySelector("[data-tabs-titles]"),
              s = e.querySelectorAll("[data-tabs-title]"),
              i = e.querySelector("[data-tabs-body]"),
              r = e.querySelectorAll("[data-tabs-item]");
            (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              (r = Array.from(r).filter((t) => t.closest("[data-tabs]") === e)),
              r.forEach((r, a) => {
                t.matches
                  ? (i.append(s[a]),
                    i.append(r),
                    e.classList.add("_tab-spoller"))
                  : (n.append(s[a]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function a(e) {
          let n = e.querySelectorAll("[data-tabs-title]"),
            i = e.querySelectorAll("[data-tabs-item]");
          const r = e.dataset.tabsIndex;
          const a = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (i.length > 0) {
            const o = e.hasAttribute("data-tabs-hash");
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
              (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
              i.forEach((e, i) => {
                var l;
                n[i].classList.contains("_tab-active")
                  ? (a ? s(e, a) : (e.hidden = !1),
                    o &&
                      !e.closest(".popup") &&
                      ((l = (l = `tab-${r}-${i}`)
                        ? `#${l}`
                        : window.location.href.split("#")[0]),
                      history.pushState("", "", l)))
                  : a
                  ? t(e, a)
                  : (e.hidden = !0);
              });
          }
        }
        function o(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const n = t.closest("[data-tabs-title]"),
              s = n.closest("[data-tabs]");
            if (
              !n.classList.contains("_tab-active") &&
              !s.querySelector("._slide")
            ) {
              let e = s.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === s
                )),
                e.length && e[0].classList.remove("_tab-active"),
                n.classList.add("_tab-active"),
                a(s);
            }
            e.preventDefault();
          }
        }
      })(),
      (function () {
        function t(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const n = t.closest("[data-goto]"),
                s = n.dataset.goto ? n.dataset.goto : "",
                i = !!n.hasAttribute("data-goto-header"),
                r = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : 500,
                a = n.dataset.gotoTop ? parseInt(n.dataset.gotoTop) : 0;
              d(s, i, r, a), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              n = t.target;
            if ("navigator" === n.dataset.watch) {
              document.querySelector("[data-goto]._navigator-active");
              let e;
              if (n.id && document.querySelector(`[data-goto="#${n.id}"]`))
                e = document.querySelector(`[data-goto="#${n.id}"]`);
              else if (n.classList.length)
                for (let t = 0; t < n.classList.length; t++) {
                  const s = n.classList[t];
                  if (document.querySelector(`[data-goto=".${s}"]`)) {
                    e = document.querySelector(`[data-goto=".${s}"]`);
                    break;
                  }
                }
              t.isIntersecting
                ? e && e.classList.add("_navigator-active")
                : e && e.classList.remove("_navigator-active");
            }
          }
        }
        if (
          (document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t),
          e())
        ) {
          let t;
          document.querySelector(`#${e()}`)
            ? (t = `#${e()}`)
            : document.querySelector(`.${e()}`) && (t = `.${e()}`),
            t && d(t, !0, 500, 20);
        }
      })();
  })();
})();
