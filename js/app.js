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
                      return E;
                    },
                  });
                  var r = n(279),
                    i = n.n(r),
                    s = n(370),
                    a = n.n(s),
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
                        var r =
                          window.pageYOffset ||
                          document.documentElement.scrollTop;
                        return (
                          (n.style.top = "".concat(r, "px")),
                          n.setAttribute("readonly", ""),
                          (n.value = e),
                          n
                        );
                      })(e);
                      t.container.appendChild(n);
                      var r = l()(n);
                      return d("copy"), n.remove(), r;
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
                      r = e.container,
                      i = e.target,
                      s = e.text;
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
                    return s
                      ? p(s, { container: r })
                      : i
                      ? "cut" === n
                        ? c(i)
                        : p(i, { container: r })
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
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
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
                  function y(e) {
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
                        r = w(e);
                      if (t) {
                        var i = w(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                      } else n = r.apply(this, arguments);
                      return b(this, n);
                    };
                  }
                  function b(e, t) {
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
                      })(s, e);
                      var t,
                        n,
                        r,
                        i = y(s);
                      function s(e, t) {
                        var n;
                        return (
                          (function (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError(
                                "Cannot call a class as a function"
                              );
                          })(this, s),
                          (n = i.call(this)).resolveOptions(t),
                          n.listenClick(e),
                          n
                        );
                      }
                      return (
                        (t = s),
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
                                r = h({
                                  action: n,
                                  container: this.container,
                                  target: this.target(t),
                                  text: this.text(t),
                                });
                              this.emit(r ? "success" : "error", {
                                action: n,
                                text: r,
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
                        (r = [
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
                        r && m(t, r),
                        s
                      );
                    })(i()),
                    E = x;
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
                  var r = n(828);
                  function i(e, t, n, r, i) {
                    var a = s.apply(this, arguments);
                    return (
                      e.addEventListener(n, a, i),
                      {
                        destroy: function () {
                          e.removeEventListener(n, a, i);
                        },
                      }
                    );
                  }
                  function s(e, t, n, i) {
                    return function (n) {
                      (n.delegateTarget = r(n.target, t)),
                        n.delegateTarget && i.call(e, n);
                    };
                  }
                  e.exports = function (e, t, n, r, s) {
                    return "function" == typeof e.addEventListener
                      ? i.apply(null, arguments)
                      : "function" == typeof n
                      ? i.bind(null, document).apply(null, arguments)
                      : ("string" == typeof e &&
                          (e = document.querySelectorAll(e)),
                        Array.prototype.map.call(e, function (e) {
                          return i(e, t, n, r, s);
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
                  var r = n(879),
                    i = n(438);
                  e.exports = function (e, t, n) {
                    if (!e && !t && !n)
                      throw new Error("Missing required arguments");
                    if (!r.string(t))
                      throw new TypeError("Second argument must be a String");
                    if (!r.fn(n))
                      throw new TypeError("Third argument must be a Function");
                    if (r.node(e))
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
                    if (r.nodeList(e))
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
                    if (r.string(e))
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
                      var r = window.getSelection(),
                        i = document.createRange();
                      i.selectNodeContents(e),
                        r.removeAllRanges(),
                        r.addRange(i),
                        (t = r.toString());
                    }
                    return t;
                  };
                },
                279: function (e) {
                  function t() {}
                  (t.prototype = {
                    on: function (e, t, n) {
                      var r = this.e || (this.e = {});
                      return (
                        (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this
                      );
                    },
                    once: function (e, t, n) {
                      var r = this;
                      function i() {
                        r.off(e, i), t.apply(n, arguments);
                      }
                      return (i._ = t), this.on(e, i, n);
                    },
                    emit: function (e) {
                      for (
                        var t = [].slice.call(arguments, 1),
                          n = ((this.e || (this.e = {}))[e] || []).slice(),
                          r = 0,
                          i = n.length;
                        r < i;
                        r++
                      )
                        n[r].fn.apply(n[r].ctx, t);
                      return this;
                    },
                    off: function (e, t) {
                      var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                      if (r && t)
                        for (var s = 0, a = r.length; s < a; s++)
                          r[s].fn !== t && r[s].fn._ !== t && i.push(r[s]);
                      return i.length ? (n[e] = i) : delete n[e], this;
                    },
                  }),
                    (e.exports = t),
                    (e.exports.TinyEmitter = t);
                },
              },
              t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var i = (t[r] = { exports: {} });
              return e[r](i, i.exports, n), i.exports;
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
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var s = (t[r] = { exports: {} });
    return e[r].call(s.exports, s, s.exports, n), s.exports;
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
      r = (e, t = 500, n = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            n && e.style.removeProperty("height");
          let r = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = n ? `${n}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = r + "px"),
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
      s = (e = 500) => {
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
      const n = Array.from(e).filter(function (e, n, r) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (n.length) {
        const e = [];
        n.forEach((n) => {
          const r = {},
            i = n.dataset[t].split(",");
          (r.value = i[0]),
            (r.type = i[1] ? i[1].trim() : "max"),
            (r.item = n),
            e.push(r);
        });
        let r = e.map(function (e) {
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
        r = (function (e) {
          return e.filter(function (e, t, n) {
            return n.indexOf(e) === t;
          });
        })(r);
        const i = [];
        if (r.length)
          return (
            r.forEach((t) => {
              const n = t.split(","),
                r = n[1],
                s = n[2],
                a = window.matchMedia(n[0]),
                o = e.filter(function (e) {
                  if (e.value === r && e.type === s) return !0;
                });
              i.push({ itemsArray: o, matchMedia: a });
            }),
            i
          );
      }
    }
    let d = (e, t = !1, n = 500, r = 0) => {
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
          offset: r,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (s(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", d);
        else {
          let e = i.getBoundingClientRect().top + scrollY;
          (e = l ? e - l : e),
            (e = r ? e - r : e),
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
    function y(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function b(e, t) {
      const n = g(),
        r = f();
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
          const t = r.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              r = t.querySelectorAll(e);
            for (let e = 0; e < r.length; e += 1) n.push(r[e]);
            return n;
          })(e.trim(), t || r);
      } else if (e.nodeType || e === n || e === r) i.push(e);
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
    b.fn = m.prototype;
    const w = "resize scroll".split(" ");
    function S(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            w.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : b(this[t]).trigger(e));
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
          y(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
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
        let [t, n, r, i] = e;
        function s(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), b(t).is(n))) r.apply(t, i);
          else {
            const e = b(t).parents();
            for (let t = 0; t < e.length; t += 1)
              b(e[t]).is(n) && r.apply(e[t], i);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof e[1] && (([t, r, i] = e), (n = void 0)),
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
                t.dom7LiveListeners[e].push({ listener: r, proxyListener: s }),
                t.addEventListener(e, s, i);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: r, proxyListener: a }),
                t.addEventListener(e, a, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, r, i] = e;
        "function" == typeof e[1] && (([t, r, i] = e), (n = void 0)),
          i || (i = !1);
        const s = t.split(" ");
        for (let e = 0; e < s.length; e += 1) {
          const t = s[e];
          for (let e = 0; e < this.length; e += 1) {
            const s = this[e];
            let a;
            if (
              (!n && s.dom7Listeners
                ? (a = s.dom7Listeners[t])
                : n && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const n = a[e];
                (r && n.listener === r) ||
                (r &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === r)
                  ? (s.removeEventListener(t, n.proxyListener, i),
                    a.splice(e, 1))
                  : r ||
                    (s.removeEventListener(t, n.proxyListener, i),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = g(),
          n = e[0].split(" "),
          r = e[1];
        for (let i = 0; i < n.length; i += 1) {
          const s = n[i];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(s, {
                detail: r,
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
            t.on("transitionend", function n(r) {
              r.target === this && (e.call(this, r), t.off("transitionend", n));
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
            r = n.getBoundingClientRect(),
            i = t.body,
            s = n.clientTop || i.clientTop || 0,
            a = n.clientLeft || i.clientLeft || 0,
            o = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: r.top + o - s, left: r.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const n = g();
        let r;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (r = 0; r < this.length; r += 1)
              for (const t in e) this[r].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
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
          r = this[0];
        let i, s;
        if (!r || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (r.matches) return r.matches(e);
          if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
          if (r.msMatchesSelector) return r.msMatchesSelector(e);
          for (i = b(e), s = 0; s < i.length; s += 1) if (i[s] === r) return !0;
          return !1;
        }
        if (e === n) return r === n;
        if (e === t) return r === t;
        if (e.nodeType || e instanceof m) {
          for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
            if (i[s] === r) return !0;
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
        if (e > t - 1) return b([]);
        if (e < 0) {
          const n = t + e;
          return b(n < 0 ? [] : [this[n]]);
        }
        return b([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = f();
        for (let r = 0; r < e.length; r += 1) {
          t = e[r];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const r = n.createElement("div");
              for (r.innerHTML = t; r.firstChild; )
                this[e].appendChild(r.firstChild);
            } else if (t instanceof m)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = f();
        let n, r;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
              this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
          } else if (e instanceof m)
            for (r = 0; r < e.length; r += 1)
              this[n].insertBefore(e[r], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && b(this[0].nextElementSibling).is(e)
              ? b([this[0].nextElementSibling])
              : b([])
            : this[0].nextElementSibling
            ? b([this[0].nextElementSibling])
            : b([])
          : b([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return b([]);
        for (; n.nextElementSibling; ) {
          const r = n.nextElementSibling;
          e ? b(r).is(e) && t.push(r) : t.push(r), (n = r);
        }
        return b(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && b(t.previousElementSibling).is(e)
              ? b([t.previousElementSibling])
              : b([])
            : t.previousElementSibling
            ? b([t.previousElementSibling])
            : b([]);
        }
        return b([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return b([]);
        for (; n.previousElementSibling; ) {
          const r = n.previousElementSibling;
          e ? b(r).is(e) && t.push(r) : t.push(r), (n = r);
        }
        return b(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? b(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return b(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let r = this[n].parentNode;
          for (; r; )
            e ? b(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
        }
        return b(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? b([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n].querySelectorAll(e);
          for (let e = 0; e < r.length; e += 1) t.push(r[e]);
        }
        return b(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n].children;
          for (let n = 0; n < r.length; n += 1)
            (e && !b(r[n]).is(e)) || t.push(r[n]);
        }
        return b(t);
      },
      filter: function (e) {
        return b(y(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(x).forEach((e) => {
      Object.defineProperty(b.fn, e, { value: x[e], writable: !0 });
    });
    const E = b;
    function T(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function C() {
      return Date.now();
    }
    function k(e, t) {
      void 0 === t && (t = "x");
      const n = g();
      let r, i, s;
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
            (s = new n.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((s =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (r = s.toString().split(","))),
        "x" === t &&
          (i = n.WebKitCSSMatrix
            ? s.m41
            : 16 === r.length
            ? parseFloat(r[12])
            : parseFloat(r[4])),
        "y" === t &&
          (i = n.WebKitCSSMatrix
            ? s.m42
            : 16 === r.length
            ? parseFloat(r[13])
            : parseFloat(r[5])),
        i || 0
      );
    }
    function A(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function L(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function M() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != r && !L(r)) {
          const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = n.length; t < i; t += 1) {
            const i = n[t],
              s = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== s &&
              s.enumerable &&
              (A(e[i]) && A(r[i])
                ? r[i].__swiper__
                  ? (e[i] = r[i])
                  : M(e[i], r[i])
                : !A(e[i]) && A(r[i])
                ? ((e[i] = {}), r[i].__swiper__ ? (e[i] = r[i]) : M(e[i], r[i]))
                : (e[i] = r[i]));
          }
        }
      }
      return e;
    }
    function $(e, t, n) {
      e.style.setProperty(t, n);
    }
    function _(e) {
      let { swiper: t, targetPosition: n, side: r } = e;
      const i = g(),
        s = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const d = n > s ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = s + d * (n - s);
          if ((c(p, n) && (p = n), t.wrapperEl.scrollTo({ [r]: p }), c(p, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [r]: p });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let P, O, D;
    function F() {
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
            const n = F(),
              r = g(),
              i = r.navigator.platform,
              s = t || r.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = r.screen.width,
              l = r.screen.height,
              d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = s.match(/(iPad).*OS\s([\d_]+)/);
            const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
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
                ((c = s.match(/(Version)\/([\d.]+)/)),
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
    function q() {
      return (
        D ||
          (D = (function () {
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
        D
      );
    }
    const z = {
      on(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed) return r;
        if ("function" != typeof t) return r;
        const i = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            r.eventsListeners[e] || (r.eventsListeners[e] = []),
              r.eventsListeners[e][i](t);
          }),
          r
        );
      },
      once(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed) return r;
        if ("function" != typeof t) return r;
        function i() {
          r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
          for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++)
            s[a] = arguments[a];
          t.apply(r, s);
        }
        return (i.__emitterProxy = t), r.on(e, i, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const r = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
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
                  n.eventsListeners[e].forEach((r, i) => {
                    (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
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
        let t, n, r;
        for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
          s[a] = arguments[a];
        "string" == typeof s[0] || Array.isArray(s[0])
          ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
          : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
          n.unshift(r);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(r, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(r, n);
                });
          }),
          e
        );
      },
    };
    const B = {
      updateSize: function () {
        const e = this;
        let t, n;
        const r = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : r[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : r[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(r.css("padding-left") || 0, 10) -
              parseInt(r.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(r.css("padding-top") || 0, 10) -
              parseInt(r.css("padding-bottom") || 0, 10)),
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
        const r = e.params,
          { $wrapperEl: i, size: s, rtlTranslate: a, wrongRTL: o } = e,
          l = e.virtual && r.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = i.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : c.length;
        let p = [];
        const f = [],
          h = [];
        let g = r.slidesOffsetBefore;
        "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
        let m = r.slidesOffsetAfter;
        "function" == typeof m && (m = r.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = r.spaceBetween,
          w = -g,
          S = 0,
          x = 0;
        if (void 0 === s) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * s),
          (e.virtualSize = -b),
          a
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          r.centeredSlides &&
            r.cssMode &&
            ($(e.wrapperEl, "--swiper-centered-offset-before", ""),
            $(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = r.grid && r.grid.rows > 1 && e.grid;
        let T;
        E && e.grid.initSlides(u);
        const C =
          "auto" === r.slidesPerView &&
          r.breakpoints &&
          Object.keys(r.breakpoints).filter(
            (e) => void 0 !== r.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          T = 0;
          const a = c.eq(i);
          if (
            (E && e.grid.updateSlide(i, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === r.slidesPerView) {
              C && (c[i].style[t("width")] = "");
              const s = getComputedStyle(a[0]),
                o = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (o && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                r.roundLengths)
              )
                T = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = n(s, "width"),
                  t = n(s, "padding-left"),
                  r = n(s, "padding-right"),
                  i = n(s, "margin-left"),
                  o = n(s, "margin-right"),
                  l = s.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + i + o;
                else {
                  const { clientWidth: n, offsetWidth: s } = a[0];
                  T = e + t + r + i + o + (s - n);
                }
              }
              o && (a[0].style.transform = o),
                l && (a[0].style.webkitTransform = l),
                r.roundLengths && (T = Math.floor(T));
            } else
              (T = (s - (r.slidesPerView - 1) * b) / r.slidesPerView),
                r.roundLengths && (T = Math.floor(T)),
                c[i] && (c[i].style[t("width")] = `${T}px`);
            c[i] && (c[i].swiperSlideSize = T),
              h.push(T),
              r.centeredSlides
                ? ((w = w + T / 2 + S / 2 + b),
                  0 === S && 0 !== i && (w = w - s / 2 - b),
                  0 === i && (w = w - s / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  r.roundLengths && (w = Math.floor(w)),
                  x % r.slidesPerGroup == 0 && p.push(w),
                  f.push(w))
                : (r.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  f.push(w),
                  (w = w + T + b)),
              (e.virtualSize += T + b),
              (S = T),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, s) + m),
          a &&
            o &&
            ("slide" === r.effect || "coverflow" === r.effect) &&
            i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
          r.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(T, p, t),
          !r.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let i = p[n];
            r.roundLengths && (i = Math.floor(i)),
              p[n] <= e.virtualSize - s && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - s);
        }
        if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
          const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !r.cssMode || t !== c.length - 1).css({
            [n]: `${b}px`,
          });
        }
        if (r.centeredSlides && r.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (r.spaceBetween ? r.spaceBetween : 0);
          }),
            (e -= r.spaceBetween);
          const t = e - s;
          p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (r.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (r.spaceBetween ? r.spaceBetween : 0);
            }),
            (e -= r.spaceBetween),
            e < s)
          ) {
            const t = (s - e) / 2;
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
          r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
        ) {
          $(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            $(
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
          f.length !== y && e.emit("slidesGridLengthChange"),
          r.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || r.cssMode || ("slide" !== r.effect && "fade" !== r.effect)))
        ) {
          const t = `${r.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= r.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          r = t.virtual && t.params.virtual.enabled;
        let i,
          s = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          r
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || E([])).each((e) => {
              n.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !r) break;
              n.push(a(e));
            }
        else n.push(a(t.activeIndex));
        for (i = 0; i < n.length; i += 1)
          if (void 0 !== n[i]) {
            const e = n[i].offsetHeight;
            s = e > s ? e : s;
          }
        (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
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
          { slides: r, rtlTranslate: i, snapGrid: s } = t;
        if (0 === r.length) return;
        void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        i && (a = e),
          r.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < r.length; e += 1) {
          const o = r[e];
          let l = o.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
          const d =
              (a + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            c =
              (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            r.eq(e).addClass(n.slideVisibleClass)),
            (o.progress = i ? -d : d),
            (o.originalProgress = i ? -c : c);
        }
        t.visibleSlides = E(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          r = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: s, isEnd: a } = t;
        const o = s,
          l = a;
        0 === r
          ? ((i = 0), (s = !0), (a = !0))
          : ((i = (e - t.minTranslate()) / r), (s = i <= 0), (a = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: s, isEnd: a }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          s && !o && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((o && !s) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: r,
            activeIndex: i,
            realIndex: s,
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
              ? r
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : r
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
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
              ? r
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : r
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            d.hasClass(n.slideDuplicateClass)
              ? r
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : r
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
            slidesGrid: r,
            snapGrid: i,
            params: s,
            activeIndex: a,
            realIndex: o,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < r.length; e += 1)
            void 0 !== r[e + 1]
              ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2
                ? (c = e)
                : n >= r[e] && n < r[e + 1] && (c = e + 1)
              : n >= r[e] && (c = e);
          s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (i.indexOf(n) >= 0) d = i.indexOf(n);
        else {
          const e = Math.min(s.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / s.slidesPerGroup);
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
          r = E(e).closest(`.${n.slideClass}`)[0];
        let i,
          s = !1;
        if (r)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === r) {
              (s = !0), (i = e);
              break;
            }
        if (!r || !s)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = r),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                E(r).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const N = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: r,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return n ? -r : r;
        if (t.cssMode) return r;
        let s = k(i[0], e);
        return n && (s = -s), s || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: r,
            params: i,
            $wrapperEl: s,
            wrapperEl: a,
            progress: o,
          } = n;
        let l,
          d = 0,
          c = 0;
        n.isHorizontal() ? (d = r ? -e : e) : (c = e),
          i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          i.cssMode
            ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -d : -c)
            : i.virtualTranslate ||
              s.transform(`translate3d(${d}px, ${c}px, 0px)`),
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
      translateTo: function (e, t, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === r && (r = !0);
        const s = this,
          { params: a, wrapperEl: o } = s;
        if (s.animating && a.preventInteractionOnTransition) return !1;
        const l = s.minTranslate(),
          d = s.maxTranslate();
        let c;
        if (
          ((c = r && e > l ? l : r && e < d ? d : e),
          s.updateProgress(c),
          a.cssMode)
        ) {
          const e = s.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!s.support.smoothScroll)
              return (
                _({ swiper: s, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(c),
              n &&
                (s.emit("beforeTransitionStart", t, i),
                s.emit("transitionEnd")))
            : (s.setTransition(t),
              s.setTranslate(c),
              n &&
                (s.emit("beforeTransitionStart", t, i),
                s.emit("transitionStart")),
              s.animating ||
                ((s.animating = !0),
                s.onTranslateToWrapperTransitionEnd ||
                  (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onTranslateToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onTranslateToWrapperTransitionEnd
                      ),
                      (s.onTranslateToWrapperTransitionEnd = null),
                      delete s.onTranslateToWrapperTransitionEnd,
                      n && s.emit("transitionEnd"));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onTranslateToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function H(e) {
      let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
      const { activeIndex: s, previousIndex: a } = t;
      let o = r;
      if (
        (o || (o = s > a ? "next" : s < a ? "prev" : "reset"),
        t.emit(`transition${i}`),
        n && s !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`),
          "next" === o
            ? t.emit(`slideNextTransition${i}`)
            : t.emit(`slidePrevTransition${i}`);
      }
    }
    const j = {
      slideTo: function (e, t, n, r, i) {
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
        const s = this;
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
        } = s;
        if (
          (s.animating && o.preventInteractionOnTransition) ||
          (!h && !r && !i)
        )
          return !1;
        const g = Math.min(s.params.slidesPerGroupSkip, a);
        let m = g + Math.floor((a - g) / s.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1),
          (u || o.initialSlide || 0) === (c || 0) &&
            n &&
            s.emit("beforeSlideChangeStart");
        const v = -l[m];
        if ((s.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * d[e]),
              r = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= n && t < r - (r - n) / 2
                ? (a = e)
                : t >= n && t < r && (a = e + 1)
              : t >= n && (a = e);
          }
        if (s.initialized && a !== u) {
          if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
            return !1;
          if (
            !s.allowSlidePrev &&
            v > s.translate &&
            v > s.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let y;
        if (
          ((y = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === s.translate) || (!p && v === s.translate))
        )
          return (
            s.updateActiveIndex(a),
            o.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== o.effect && s.setTranslate(v),
            "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)),
            !1
          );
        if (o.cssMode) {
          const e = s.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = s.virtual && s.params.virtual.enabled;
            t &&
              ((s.wrapperEl.style.scrollSnapType = "none"),
              (s._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (s.wrapperEl.style.scrollSnapType = ""),
                    (s._swiperImmediateVirtual = !1);
                });
          } else {
            if (!s.support.smoothScroll)
              return (
                _({ swiper: s, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          s.setTransition(t),
          s.setTranslate(v),
          s.updateActiveIndex(a),
          s.updateSlidesClasses(),
          s.emit("beforeTransitionStart", t, r),
          s.transitionStart(n, y),
          0 === t
            ? s.transitionEnd(n, y)
            : s.animating ||
              ((s.animating = !0),
              s.onSlideToWrapperTransitionEnd ||
                (s.onSlideToWrapperTransitionEnd = function (e) {
                  s &&
                    !s.destroyed &&
                    e.target === this &&
                    (s.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      s.onSlideToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      s.onSlideToWrapperTransitionEnd
                    ),
                    (s.onSlideToWrapperTransitionEnd = null),
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(n, y));
                }),
              s.$wrapperEl[0].addEventListener(
                "transitionend",
                s.onSlideToWrapperTransitionEnd
              ),
              s.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                s.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, n, r) {
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
        let s = e;
        return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const r = this,
          { animating: i, enabled: s, params: a } = r;
        if (!s) return r;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
        const l = r.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
          if (i && a.loopPreventsSlide) return !1;
          r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
        }
        return a.rewind && r.isEnd
          ? r.slideTo(0, e, t, n)
          : r.slideTo(r.activeIndex + l, e, t, n);
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const r = this,
          {
            params: i,
            animating: s,
            snapGrid: a,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: d,
          } = r;
        if (!d) return r;
        if (i.loop) {
          if (s && i.loopPreventsSlide) return !1;
          r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = c(l ? r.translate : -r.translate),
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
            h < 0 && (h = r.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          i.rewind && r.isBeginning)
        ) {
          const i =
            r.params.virtual && r.params.virtual.enabled && r.virtual
              ? r.virtual.slides.length - 1
              : r.slides.length - 1;
          return r.slideTo(i, e, t, n);
        }
        return r.slideTo(h, e, t, n);
      },
      slideReset: function (e, t, n) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, n)
        );
      },
      slideToClosest: function (e, t, n, r) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === r && (r = 0.5);
        const i = this;
        let s = i.activeIndex;
        const a = Math.min(i.params.slidesPerGroupSkip, s),
          o = a + Math.floor((s - a) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[o]) {
          const e = i.snapGrid[o];
          l - e > (i.snapGrid[o + 1] - e) * r && (s += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[o - 1];
          l - e <= (i.snapGrid[o] - e) * r && (s -= i.params.slidesPerGroup);
        }
        return (
          (s = Math.max(s, 0)),
          (s = Math.min(s, i.slidesGrid.length - 1)),
          i.slideTo(s, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          r =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          s = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(E(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? s < e.loopedSlides - r / 2 ||
                s > e.slides.length - e.loopedSlides + r / 2
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  T(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s)
              : s > e.slides.length - r
              ? (e.loopFix(),
                (s = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                T(() => {
                  e.slideTo(s);
                }))
              : e.slideTo(s);
        } else e.slideTo(s);
      },
    };
    const G = {
      loopCreate: function () {
        const e = this,
          t = f(),
          { params: n, $wrapperEl: r } = e,
          i = r.children().length > 0 ? E(r.children()[0].parentNode) : r;
        i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let s = i.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let r = 0; r < e; r += 1) {
              const e = E(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              i.append(e);
            }
            s = i.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = s.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > s.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = s.length);
        const a = [],
          o = [];
        s.each((e, t) => {
          E(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / s.length) * s.length;
          o.push(s.eq(e)[0]), a.unshift(s.eq(s.length - e - 1)[0]);
        }
        for (let e = 0; e < o.length; e += 1)
          i.append(E(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          i.prepend(E(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: r,
          allowSlidePrev: i,
          allowSlideNext: s,
          snapGrid: a,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -a[t] - e.getTranslate();
        if (t < r) {
          (l = n.length - 3 * r + t), (l += r);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        } else if (t >= n.length - r) {
          (l = -n.length + t + r), (l += r);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = s), e.emit("loopFix");
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
        r = g(),
        i = t.touchEventsData,
        { params: s, touches: a, enabled: o } = t;
      if (!o) return;
      if (t.animating && s.preventInteractionOnTransition) return;
      !t.animating && s.cssMode && s.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = E(l.target);
      if ("wrapper" === s.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!s.noSwipingClass &&
        "" !== s.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (d = E(e.path[0]));
      const c = s.noSwipingSelector
          ? s.noSwipingSelector
          : `.${s.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        s.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  if (!n || n === f() || n === g()) return null;
                  n.assignedSlot && (n = n.assignedSlot);
                  const r = n.closest(e);
                  return r || n.getRootNode
                    ? r || t(n.getRootNode().host)
                    : null;
                })(t)
              );
            })(c, d[0])
          : d.closest(c)[0])
      )
        return void (t.allowClick = !0);
      if (s.swipeHandler && !d.closest(s.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = a.currentX,
        h = a.currentY,
        m = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
        v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
      if (m && (p <= v || p >= r.innerWidth - v)) {
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
        (i.touchStartTime = C()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        s.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        d.is(i.focusableElements) &&
          ((e = !1), "SELECT" === d[0].nodeName && (i.isTouched = !1)),
          n.activeElement &&
            E(n.activeElement).is(i.focusableElements) &&
            n.activeElement !== d[0] &&
            n.activeElement.blur();
        const r = e && t.allowTouchMove && s.touchStartPreventDefault;
        (!s.touchStartForcePreventDefault && !r) ||
          d[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !s.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function W(e) {
      const t = f(),
        n = this,
        r = n.touchEventsData,
        { params: i, touches: s, rtlTranslate: a, enabled: o } = n;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !r.isTouched))
        return void (
          r.startMoving &&
          r.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (r.isTouchEvent && "touchmove" !== l.type) return;
      const d =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        c = "touchmove" === l.type ? d.pageX : l.pageX,
        u = "touchmove" === l.type ? d.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (s.startX = c), void (s.startY = u);
      if (!n.allowTouchMove)
        return (
          E(l.target).is(r.focusableElements) || (n.allowClick = !1),
          void (
            r.isTouched &&
            (Object.assign(s, {
              startX: c,
              startY: u,
              currentX: c,
              currentY: u,
            }),
            (r.touchStartTime = C()))
          )
        );
      if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (n.isVertical()) {
          if (
            (u < s.startY && n.translate <= n.maxTranslate()) ||
            (u > s.startY && n.translate >= n.minTranslate())
          )
            return (r.isTouched = !1), void (r.isMoved = !1);
        } else if (
          (c < s.startX && n.translate <= n.maxTranslate()) ||
          (c > s.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        r.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        E(l.target).is(r.focusableElements)
      )
        return (r.isMoved = !0), void (n.allowClick = !1);
      if (
        (r.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (s.currentX = c), (s.currentY = u);
      const p = s.currentX - s.startX,
        h = s.currentY - s.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === r.isScrolling) {
        let e;
        (n.isHorizontal() && s.currentY === s.startY) ||
        (n.isVertical() && s.currentX === s.startX)
          ? (r.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (r.isScrolling = n.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (r.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === r.startMoving &&
          ((s.currentX === s.startX && s.currentY === s.startY) ||
            (r.startMoving = !0)),
        r.isScrolling)
      )
        return void (r.isTouched = !1);
      if (!r.startMoving) return;
      (n.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        r.isMoved ||
          (i.loop && !i.cssMode && n.loopFix(),
          (r.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (r.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (r.isMoved = !0);
      let g = n.isHorizontal() ? p : h;
      (s.diff = g),
        (g *= i.touchRatio),
        a && (g = -g),
        (n.swipeDirection = g > 0 ? "prev" : "next"),
        (r.currentTranslate = g + r.startTranslate);
      let m = !0,
        v = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (v = 0),
        g > 0 && r.currentTranslate > n.minTranslate()
          ? ((m = !1),
            i.resistance &&
              (r.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + r.startTranslate + g) ** v))
          : g < 0 &&
            r.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            i.resistance &&
              (r.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - r.startTranslate - g) ** v)),
        m && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          r.currentTranslate < r.startTranslate &&
          (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          r.currentTranslate > r.startTranslate &&
          (r.currentTranslate = r.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (r.currentTranslate = r.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(g) > i.threshold || r.allowThresholdMove))
          return void (r.currentTranslate = r.startTranslate);
        if (!r.allowThresholdMove)
          return (
            (r.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (r.currentTranslate = r.startTranslate),
            void (s.diff = n.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY)
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
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate));
    }
    function V(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: r,
          touches: i,
          rtlTranslate: s,
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
          n.isMoved && r.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      r.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = C(),
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
        ((n.lastClickTime = C()),
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
        (u = r.followFinger
          ? s
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        r.cssMode)
      )
        return;
      if (t.params.freeMode && r.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
      ) {
        const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let h = null,
        g = null;
      r.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const m = (u - a[p]) / f,
        v = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (c > r.longSwipesMs) {
        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= r.longSwipesRatio
            ? t.slideTo(r.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (m > 1 - r.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== g && m < 0 && Math.abs(m) > r.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(p));
      } else {
        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
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
      const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e;
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
        (e.allowSlideNext = r),
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
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
        { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
      if (!r) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const s = e.maxTranslate() - e.minTranslate();
      (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let Z = !1;
    function K() {}
    const J = (e, t) => {
      const n = f(),
        {
          params: r,
          touchEvents: i,
          el: s,
          wrapperEl: a,
          device: o,
          support: l,
        } = e,
        d = !!r.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !r.passiveListeners
        ) && { passive: !0, capture: !1 };
        s[c](i.start, e.onTouchStart, t),
          s[c](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: d } : d
          ),
          s[c](i.end, e.onTouchEnd, t),
          i.cancel && s[c](i.cancel, e.onTouchEnd, t);
      } else
        s[c](i.start, e.onTouchStart, !1),
          n[c](i.move, e.onTouchMove, d),
          n[c](i.end, e.onTouchEnd, !1);
      (r.preventClicks || r.preventClicksPropagation) &&
        s[c]("click", e.onClick, !0),
        r.cssMode && a[c]("scroll", e.onScroll),
        r.updateOnWindowResize
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
            { params: n, support: r } = e;
          (e.onTouchStart = R.bind(e)),
            (e.onTouchMove = W.bind(e)),
            (e.onTouchEnd = V.bind(e)),
            n.cssMode && (e.onScroll = U.bind(e)),
            (e.onClick = X.bind(e)),
            r.touch && !Z && (t.addEventListener("touchstart", K), (Z = !0)),
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
            loopedSlides: r = 0,
            params: i,
            $el: s,
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
          ? (s.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (s.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              s.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const n = i[t] && i[t].enabled,
              r = l[t] && l[t].enabled;
            n && !r && e[t].disable(), !n && r && e[t].enable();
          });
        const p = l.direction && l.direction !== i.direction,
          f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
        p && n && e.changeDirection(), M(e.params, l);
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
            e.slideTo(t - r + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, n) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
          return;
        let r = !1;
        const i = g(),
          s = "window" === t ? i.innerHeight : n.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: s * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: s, value: o } = a[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${o}px)`).matches && (r = s)
            : o <= n.clientWidth && (r = s);
        }
        return r || "max";
      },
    };
    const ne = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: r,
            $el: i,
            device: s,
            support: a,
          } = e,
          o = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((r) => {
                      e[r] && n.push(t + r);
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
              { rtl: r },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: s.android },
              { ios: s.ios },
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
    const re = {
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
        const r = Object.keys(n)[0],
          i = n[r];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
              !0 === e[r] &&
              (e[r] = { auto: !0 }),
            r in e && "enabled" in i
              ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                "object" != typeof e[r] ||
                  "enabled" in e[r] ||
                  (e[r].enabled = !0),
                e[r] || (e[r] = { enabled: !1 }),
                M(t, n))
              : M(t, n))
          : M(t, n);
      };
    }
    const se = {
        eventsEmitter: z,
        update: B,
        translate: N,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: r } = n;
            r.cssMode ||
              (r.autoHeight && n.updateAutoHeight(),
              H({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: r } = n;
            (n.animating = !1),
              r.cssMode ||
                (n.setTransition(0),
                H({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: j,
        loop: G,
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
              { slidesOffsetBefore: r } = n;
            if (r) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
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
          loadImage: function (e, t, n, r, i, s) {
            const a = g();
            let o;
            function l() {
              s && s();
            }
            E(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((o = new a.Image()),
                (o.onload = l),
                (o.onerror = l),
                r && (o.sizes = r),
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
              const r = e.imagesToLoad[n];
              e.loadImage(
                r,
                r.currentSrc || r.getAttribute("src"),
                r.srcset || r.getAttribute("srcset"),
                r.sizes || r.getAttribute("sizes"),
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
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        if (
          (1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
          t || (t = {}),
          (t = M({}, t)),
          e && !t.el && (t.el = e),
          t.el && E(t.el).length > 1)
        ) {
          const e = [];
          return (
            E(t.el).each((n) => {
              const r = M({}, t, { el: n });
              e.push(new oe(r));
            }),
            e
          );
        }
        const s = this;
        (s.__swiper__ = !0),
          (s.support = F()),
          (s.device = I({ userAgent: t.userAgent })),
          (s.browser = q()),
          (s.eventsListeners = {}),
          (s.eventsAnyListeners = []),
          (s.modules = [...s.__modules__]),
          t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
        const a = {};
        s.modules.forEach((e) => {
          e({
            swiper: s,
            extendParams: ie(t, a),
            on: s.on.bind(s),
            once: s.once.bind(s),
            off: s.off.bind(s),
            emit: s.emit.bind(s),
          });
        });
        const o = M({}, re, a);
        return (
          (s.params = M({}, o, ae, t)),
          (s.originalParams = M({}, s.params)),
          (s.passedParams = M({}, t)),
          s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach((e) => {
              s.on(e, s.params.on[e]);
            }),
          s.params && s.params.onAny && s.onAny(s.params.onAny),
          (s.$ = E),
          Object.assign(s, {
            enabled: s.params.enabled,
            el: e,
            classNames: [],
            slides: E(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === s.params.direction,
            isVertical: () => "vertical" === s.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (s.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                s.support.touch || !s.params.simulateTouch
                  ? s.touchEventsTouch
                  : s.touchEventsDesktop
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
              focusableElements: s.params.focusableElements,
              lastClickTime: C(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
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
          s.emit("_swiper"),
          s.params.init && s.init(),
          s
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
        const r = n.minTranslate(),
          i = (n.maxTranslate() - r) * e + r;
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
          const r = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: r,
          slidesGrid: i,
          slidesSizesGrid: s,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = r[o].swiperSlideSize;
          for (let n = o + 1; n < r.length; n += 1)
            r[n] &&
              !e &&
              ((t += r[n].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let n = o - 1; n >= 0; n -= 1)
            r[n] &&
              !e &&
              ((t += r[n].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < r.length; e += 1) {
            (t ? i[e] + s[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
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
        function r() {
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
            ? (r(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || r()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          r = n.params.direction;
        return (
          e || (e = "horizontal" === r ? "vertical" : "horizontal"),
          e === r ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${r}`)
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
        const n = E(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const r = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = E(e.shadowRoot.querySelector(r()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(r()) : E(n).children(r());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = f().createElement("div");
          (i = E(e)),
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
          { params: r, $el: i, $wrapperEl: s, slides: a } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            r.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              i.removeAttr("style"),
              s.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      r.slideVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass,
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
        M(ae, e);
      }
      static get extendedDefaults() {
        return ae;
      }
      static get defaults() {
        return re;
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
    Object.keys(se).forEach((e) => {
      Object.keys(se[e]).forEach((t) => {
        oe.prototype[t] = se[e][t];
      });
    }),
      oe.use([
        function (e) {
          let { swiper: t, on: n, emit: r } = e;
          const i = g();
          let s = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (r("beforeResize"), r("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && r("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((s = new ResizeObserver((e) => {
                  a = i.requestAnimationFrame(() => {
                    const { width: n, height: r } = t;
                    let i = n,
                      s = r;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: r, target: a } = e;
                      (a && a !== t.el) ||
                        ((i = r ? r.width : (n[0] || n).inlineSize),
                        (s = r ? r.height : (n[0] || n).blockSize));
                    }),
                      (i === n && s === r) || o();
                  });
                })),
                s.observe(t.el))
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", l));
          }),
            n("destroy", () => {
              a && i.cancelAnimationFrame(a),
                s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: r, emit: i } = e;
          const s = [],
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
                s.push(n);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            r("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.$el[0], { childList: t.params.observeSlideChildren }),
                  o(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            r("destroy", () => {
              s.forEach((e) => {
                e.disconnect();
              }),
                s.splice(0, s.length);
            });
        },
      ]);
    const le = oe;
    function de(e, t, n, r) {
      const i = f();
      return (
        e.params.createElements &&
          Object.keys(r).forEach((s) => {
            if (!n[s] && !0 === n.auto) {
              let a = e.$el.children(`.${r[s]}`)[0];
              a ||
                ((a = i.createElement("div")),
                (a.className = r[s]),
                e.$el.append(a)),
                (n[s] = a),
                (t[s] = a);
            }
          }),
        n
      );
    }
    function ce(e) {
      let { swiper: t, extendParams: n, on: r, emit: i } = e;
      function s(e) {
        let n;
        return (
          e &&
            ((n = E(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function a(e, n) {
        const r = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](r.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](r.lockClass));
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
        const n = s(e.nextEl),
          r = s(e.prevEl);
        n && n.length > 0 && n.on("click", d),
          r && r.length > 0 && r.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: r,
            prevEl: r && r[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), r && r.addClass(e.lockClass));
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
        r("init", () => {
          !1 === t.params.navigation.enabled ? p() : (c(), o());
        }),
        r("toEdge fromEdge lock unlock", () => {
          o();
        }),
        r("destroy", () => {
          u();
        }),
        r("enable disable", () => {
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
        r("click", (e, n) => {
          const { $nextEl: r, $prevEl: s } = t.navigation,
            a = n.target;
          if (t.params.navigation.hideOnClick && !E(a).is(s) && !E(a).is(r)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            r
              ? (e = r.hasClass(t.params.navigation.hiddenClass))
              : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              r && r.toggleClass(t.params.navigation.hiddenClass),
              s && s.toggleClass(t.params.navigation.hiddenClass);
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
      let { swiper: t, extendParams: n, on: r, emit: i } = e;
      const s = "swiper-pagination";
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
          bulletClass: `${s}-bullet`,
          bulletActiveClass: `${s}-bullet-active`,
          modifierClass: `${s}-`,
          currentClass: `${s}-current`,
          totalClass: `${s}-total`,
          hiddenClass: `${s}-hidden`,
          progressbarFillClass: `${s}-progressbar-fill`,
          progressbarOppositeClass: `${s}-progressbar-opposite`,
          clickableClass: `${s}-clickable`,
          lockClass: `${s}-lock`,
          horizontalClass: `${s}-horizontal`,
          verticalClass: `${s}-vertical`,
          paginationDisabledClass: `${s}-disabled`,
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
        const { bulletActiveClass: r } = t.params.pagination;
        e[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`);
      }
      function c() {
        const e = t.rtl,
          n = t.params.pagination;
        if (l()) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          s = t.pagination.$el;
        let c;
        const u = t.params.loop
          ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((c = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              c > r - 1 - 2 * t.loopedSlides && (c -= r - 2 * t.loopedSlides),
              c > u - 1 && (c -= u),
              c < 0 && "bullets" !== t.params.paginationType && (c = u + c))
            : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === n.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const r = t.pagination.bullets;
          let i, l, u;
          if (
            (n.dynamicBullets &&
              ((a = r
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              s.css(
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
              (l = i + (Math.min(r.length, n.dynamicMainBullets) - 1)),
              (u = (l + i) / 2)),
            r.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            s.length > 1)
          )
            r.each((e) => {
              const t = E(e),
                r = t.index();
              r === c && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (r >= i &&
                    r <= l &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  r === i && d(t, "prev"),
                  r === l && d(t, "next"));
            });
          else {
            const e = r.eq(c),
              s = e.index();
            if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const e = r.eq(i),
                a = r.eq(l);
              for (let e = i; e <= l; e += 1)
                r.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (t.params.loop)
                if (s >= r.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    r.eq(r.length - e).addClass(`${n.bulletActiveClass}-main`);
                  r.eq(r.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else d(e, "prev"), d(a, "next");
              else d(e, "prev"), d(a, "next");
            }
          }
          if (n.dynamicBullets) {
            const i = Math.min(r.length, n.dynamicMainBullets + 4),
              s = (a * i - a) / 2 - u * a,
              o = e ? "right" : "left";
            r.css(t.isHorizontal() ? o : "top", `${s}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (s.find(ue(n.currentClass)).text(n.formatFractionCurrent(c + 1)),
            s.find(ue(n.totalClass)).text(n.formatFractionTotal(u))),
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
          const r = (c + 1) / u;
          let i = 1,
            a = 1;
          "horizontal" === e ? (i = r) : (a = r),
            s
              .find(ue(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
              .transition(t.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (s.html(n.renderCustom(t, c + 1, u)), i("paginationRender", s[0]))
          : i("paginationUpdate", s[0]),
          t.params.watchOverflow &&
            t.enabled &&
            s[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let s = "";
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
              ? (s += e.renderBullet.call(t, n, e.bulletClass))
              : (s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          r.html(s), (t.pagination.bullets = r.find(ue(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((s = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          r.html(s)),
          "progressbar" === e.type &&
            ((s = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            r.html(s)),
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
        let n = E(e.el);
        0 !== n.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            n.length > 1 &&
            ((n = t.$el.find(e.el)),
            n.length > 1 &&
              (n = n.filter((e) => E(e).parents(".swiper")[0] === t.el))),
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
              let n = E(this).index() * t.params.slidesPerGroup;
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
      r("init", () => {
        !1 === t.params.pagination.enabled ? h() : (p(), u(), c());
      }),
        r("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && c();
        }),
        r("snapIndexChange", () => {
          t.params.loop || c();
        }),
        r("slidesLengthChange", () => {
          t.params.loop && (u(), c());
        }),
        r("snapGridLengthChange", () => {
          t.params.loop || (u(), c());
        }),
        r("destroy", () => {
          f();
        }),
        r("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        r("lock unlock", () => {
          c();
        }),
        r("click", (e, n) => {
          const r = n.target,
            { $el: s } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            s &&
            s.length > 0 &&
            !E(r).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && r === t.navigation.nextEl) ||
                (t.navigation.prevEl && r === t.navigation.prevEl))
            )
              return;
            const e = s.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              s.toggleClass(t.params.pagination.hiddenClass);
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
        { swiper: n, extendParams: r, on: i, emit: s } = e;
      function a() {
        if (!n.size)
          return (n.autoplay.running = !1), void (n.autoplay.paused = !1);
        const e = n.slides.eq(n.activeIndex);
        let r = n.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (r = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
          clearTimeout(t),
          (t = T(() => {
            let e;
            n.params.autoplay.reverseDirection
              ? n.params.loop
                ? (n.loopFix(),
                  (e = n.slidePrev(n.params.speed, !0, !0)),
                  s("autoplay"))
                : n.isBeginning
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = n.slideTo(
                      n.slides.length - 1,
                      n.params.speed,
                      !0,
                      !0
                    )),
                    s("autoplay"))
                : ((e = n.slidePrev(n.params.speed, !0, !0)), s("autoplay"))
              : n.params.loop
              ? (n.loopFix(),
                (e = n.slideNext(n.params.speed, !0, !0)),
                s("autoplay"))
              : n.isEnd
              ? n.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = n.slideTo(0, n.params.speed, !0, !0)), s("autoplay"))
              : ((e = n.slideNext(n.params.speed, !0, !0)), s("autoplay")),
              ((n.params.cssMode && n.autoplay.running) || !1 === e) && a();
          }, r));
      }
      function o() {
        return (
          void 0 === t &&
          !n.autoplay.running &&
          ((n.autoplay.running = !0), s("autoplayStart"), a(), !0)
        );
      }
      function l() {
        return (
          !!n.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (n.autoplay.running = !1),
          s("autoplayStop"),
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
          : (s("autoplayPause"), d()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function h() {
        n.params.autoplay.disableOnInteraction ||
          ((n.autoplay.paused = !1), s("autoplayResume"), a());
      }
      (n.autoplay = { running: !1, paused: !1 }),
        r({
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
        i("beforeTransitionStart", (e, t, r) => {
          n.autoplay.running &&
            (r || !n.params.autoplay.disableOnInteraction
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
      ye = (function (e) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          n = 0,
          r = {},
          i = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler:
              e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(t) {
                return t instanceof s
                  ? new s(t.type, e(t.content), t.alias)
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
                var r, s;
                switch (((n = n || {}), i.util.type(t))) {
                  case "Object":
                    if (((s = i.util.objId(t)), n[s])) return n[s];
                    for (var a in ((r = {}), (n[s] = r), t))
                      t.hasOwnProperty(a) && (r[a] = e(t[a], n));
                    return r;
                  case "Array":
                    return (
                      (s = i.util.objId(t)),
                      n[s]
                        ? n[s]
                        : ((r = []),
                          (n[s] = r),
                          t.forEach(function (t, i) {
                            r[i] = e(t, n);
                          }),
                          r)
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
                } catch (r) {
                  var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) ||
                    [])[1];
                  if (e) {
                    var t = document.getElementsByTagName("script");
                    for (var n in t) if (t[n].src == e) return t[n];
                  }
                  return null;
                }
              },
              isActive: function (e, t, n) {
                for (var r = "no-" + t; e; ) {
                  var i = e.classList;
                  if (i.contains(t)) return !0;
                  if (i.contains(r)) return !1;
                  e = e.parentElement;
                }
                return !!n;
              },
            },
            languages: {
              plain: r,
              plaintext: r,
              text: r,
              txt: r,
              extend: function (e, t) {
                var n = i.util.clone(i.languages[e]);
                for (var r in t) n[r] = t[r];
                return n;
              },
              insertBefore: function (e, t, n, r) {
                var s = (r = r || i.languages)[e],
                  a = {};
                for (var o in s)
                  if (s.hasOwnProperty(o)) {
                    if (o == t)
                      for (var l in n) n.hasOwnProperty(l) && (a[l] = n[l]);
                    n.hasOwnProperty(o) || (a[o] = s[o]);
                  }
                var d = r[e];
                return (
                  (r[e] = a),
                  i.languages.DFS(i.languages, function (t, n) {
                    n === d && t != e && (this[t] = a);
                  }),
                  a
                );
              },
              DFS: function e(t, n, r, s) {
                s = s || {};
                var a = i.util.objId;
                for (var o in t)
                  if (t.hasOwnProperty(o)) {
                    n.call(t, o, t[o], r || o);
                    var l = t[o],
                      d = i.util.type(l);
                    "Object" !== d || s[a(l)]
                      ? "Array" !== d ||
                        s[a(l)] ||
                        ((s[a(l)] = !0), e(l, n, o, s))
                      : ((s[a(l)] = !0), e(l, n, null, s));
                  }
              },
            },
            plugins: {},
            highlightAll: function (e, t) {
              i.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function (e, t, n) {
              var r = {
                callback: n,
                container: e,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              i.hooks.run("before-highlightall", r),
                (r.elements = Array.prototype.slice.apply(
                  r.container.querySelectorAll(r.selector)
                )),
                i.hooks.run("before-all-elements-highlight", r);
              for (var s, a = 0; (s = r.elements[a++]); )
                i.highlightElement(s, !0 === t, r.callback);
            },
            highlightElement: function (t, n, r) {
              var s = i.util.getLanguage(t),
                a = i.languages[s];
              i.util.setLanguage(t, s);
              var o = t.parentElement;
              o &&
                "pre" === o.nodeName.toLowerCase() &&
                i.util.setLanguage(o, s);
              var l = {
                element: t,
                language: s,
                grammar: a,
                code: t.textContent,
              };
              function d(e) {
                (l.highlightedCode = e),
                  i.hooks.run("before-insert", l),
                  (l.element.innerHTML = l.highlightedCode),
                  i.hooks.run("after-highlight", l),
                  i.hooks.run("complete", l),
                  r && r.call(l.element);
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
                  i.hooks.run("complete", l), void (r && r.call(l.element))
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
              var r = { code: e, grammar: t, language: n };
              if ((i.hooks.run("before-tokenize", r), !r.grammar))
                throw new Error(
                  'The language "' + r.language + '" has no grammar.'
                );
              return (
                (r.tokens = i.tokenize(r.code, r.grammar)),
                i.hooks.run("after-tokenize", r),
                s.stringify(i.util.encode(r.tokens), r.language)
              );
            },
            tokenize: function (e, t) {
              var n = t.rest;
              if (n) {
                for (var r in n) t[r] = n[r];
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
                if (n && n.length) for (var r, s = 0; (r = n[s++]); ) r(t);
              },
            },
            Token: s,
          };
        function s(e, t, n, r) {
          (this.type = e),
            (this.content = t),
            (this.alias = n),
            (this.length = 0 | (r || "").length);
        }
        function a(e, t, n, r) {
          e.lastIndex = t;
          var i = e.exec(n);
          if (i && r && i[1]) {
            var s = i[1].length;
            (i.index += s), (i[0] = i[0].slice(s));
          }
          return i;
        }
        function o(e, t, n, r, l, u) {
          for (var p in n)
            if (n.hasOwnProperty(p) && n[p]) {
              var f = n[p];
              f = Array.isArray(f) ? f : [f];
              for (var h = 0; h < f.length; ++h) {
                if (u && u.cause == p + "," + h) return;
                var g = f[h],
                  m = g.inside,
                  v = !!g.lookbehind,
                  y = !!g.greedy,
                  b = g.alias;
                if (y && !g.pattern.global) {
                  var w = g.pattern.toString().match(/[imsuy]*$/)[0];
                  g.pattern = RegExp(g.pattern.source, w + "g");
                }
                for (
                  var S = g.pattern || g, x = r.next, E = l;
                  x !== t.tail && !(u && E >= u.reach);
                  E += x.value.length, x = x.next
                ) {
                  var T = x.value;
                  if (t.length > e.length) return;
                  if (!(T instanceof s)) {
                    var C,
                      k = 1;
                    if (y) {
                      if (!(C = a(S, E, e, v)) || C.index >= e.length) break;
                      var A = C.index,
                        L = C.index + C[0].length,
                        M = E;
                      for (M += x.value.length; A >= M; )
                        M += (x = x.next).value.length;
                      if (((E = M -= x.value.length), x.value instanceof s))
                        continue;
                      for (
                        var $ = x;
                        $ !== t.tail && (M < L || "string" == typeof $.value);
                        $ = $.next
                      )
                        k++, (M += $.value.length);
                      k--, (T = e.slice(E, M)), (C.index -= E);
                    } else if (!(C = a(S, 0, T, v))) continue;
                    A = C.index;
                    var _ = C[0],
                      P = T.slice(0, A),
                      O = T.slice(A + _.length),
                      D = E + T.length;
                    u && D > u.reach && (u.reach = D);
                    var F = x.prev;
                    if (
                      (P && ((F = d(t, F, P)), (E += P.length)),
                      c(t, F, k),
                      (x = d(t, F, new s(p, m ? i.tokenize(_, m) : _, b, _))),
                      O && d(t, x, O),
                      k > 1)
                    ) {
                      var I = { cause: p + "," + h, reach: D };
                      o(e, t, n, x.prev, E, I),
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
          var r = t.next,
            i = { value: n, prev: t, next: r };
          return (t.next = i), (r.prev = i), e.length++, i;
        }
        function c(e, t, n) {
          for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
          (t.next = r), (r.prev = t), (e.length -= i);
        }
        if (
          ((e.Prism = i),
          (s.stringify = function e(t, n) {
            if ("string" == typeof t) return t;
            if (Array.isArray(t)) {
              var r = "";
              return (
                t.forEach(function (t) {
                  r += e(t, n);
                }),
                r
              );
            }
            var s = {
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
                ? Array.prototype.push.apply(s.classes, a)
                : s.classes.push(a)),
              i.hooks.run("wrap", s);
            var o = "";
            for (var l in s.attributes)
              o +=
                " " +
                l +
                '="' +
                (s.attributes[l] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              s.tag +
              ' class="' +
              s.classes.join(" ") +
              '"' +
              o +
              ">" +
              s.content +
              "</" +
              s.tag +
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
                      r = n.language,
                      s = n.code,
                      a = n.immediateClose;
                    e.postMessage(i.highlight(s, i.languages[r], r)),
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
    function be(e) {
      for (let t = 0; t < e.length; t++) if (isNaN((e[t] = +e[t]))) return !1;
      return !0;
    }
    function we(e) {
      let t = e.length,
        n = t / 1.247;
      for (; n > 1; ) {
        for (let r = 0, i = Math.round(n); i < t; r++, i++)
          e[r] > e[i] && ([e[r], e[i]] = [e[i], e[r]]);
        n /= 1.247;
      }
      return e;
    }
    function Se(e) {
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          r = t;
        for (; r > 0 && e[r - 1] > n; ) (e[r] = e[r - 1]), (r -= 1);
        e[r] = n;
      }
    }
    function xe(e) {
      let t = e.length,
        n = t - 1;
      for (let r = 0; r < n; r++) {
        let n = r;
        for (let i = r + 1; i < t; i++) e[n] > e[i] && (n = i);
        n !== r && ([e[r], e[n]] = [e[n], e[r]]);
      }
      return e;
    }
    function Ee(e) {
      const t = e.length;
      let n = Math.floor(t / 2);
      for (; n >= 1; ) {
        for (let r = n; r < t; r++) {
          const t = e[r];
          let i = r;
          for (; i > 0 && e[i - n] > t; ) (e[i] = e[i - n]), (i -= n);
          e[i] = t;
        }
        n = Math.floor(n / 2);
      }
      return e;
    }
    function Te(e) {
      let t = ((e) => {
        let t = 0;
        for (let r = 0; r < e.length; r++)
          t = Math.max(
            t,
            0 === (n = e[r]) ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1
          );
        var n;
        return t;
      })(e);
      for (let i = 0; i < t; i++) {
        let t = Array.from({ length: 10 }, () => []);
        for (let s = 0; s < e.length; s++) {
          t[
            ((n = e[s]),
            (r = i),
            Math.floor(Math.abs(n) / Math.pow(10, r)) % 10)
          ].push(e[s]);
        }
        e = [].concat(...t);
      }
      var n, r;
      return e;
    }
    function Ce(e) {
      function t(e, n, r) {
        var i = r,
          s = 2 * r + 1,
          a = 2 * r + 2;
        s < n && e[s] > e[i] && (i = s),
          a < n && e[a] > e[i] && (i = a),
          i != r && (([e[r], e[i]] = [e[i], e[r]]), t(e, n, i));
      }
      let n = e.length;
      for (let r = Math.floor(n / 2) - 1; r >= 0; r--) t(e, n, r);
      for (let r = n - 1; r > 0; r--) ([e[0], e[r]] = [e[r], e[0]]), t(e, r, 0);
      return e;
    }
    function ke(e) {
      if (e.length <= 1) return e;
      let t = Math.floor(e.length / 2),
        n = e.slice(0, t),
        r = e.slice(t);
      return ((e, t) => {
        let n = [],
          r = 0,
          i = 0;
        for (; r < e.length && i < t.length; )
          e[r] < t[i] ? (n.push(e[r]), r++) : (n.push(t[i]), i++);
        for (; r < e.length; ) n.push(e[r]), r++;
        for (; i < t.length; ) n.push(t[i]), i++;
        return n;
      })(ke(n), ke(r));
    }
    function Ae(e, t = 0, n = e.length - 1) {
      if (t < n) {
        let r = ((e, t, n) => {
          let r = e[Math.floor((t + n) / 2)];
          for (; n >= t; ) {
            for (; e[n] > r; ) n--;
            for (; e[t] < r; ) t++;
            n >= t && (([e[n], e[t]] = [e[t], e[n]]), n--, t++);
          }
          return t;
        })(e, t, n);
        e.length > 1 && (t < r - 1 && Ae(e, t, r - 1), r < n && Ae(e, r, n));
      }
      return e;
    }
    "undefined" != typeof module && module.exports && (module.exports = ye),
      "undefined" != typeof global && (global.Prism = ye),
      (ye.languages.clike = {
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
      (ye.languages.javascript = ye.languages.extend("clike", {
        "class-name": [
          ye.languages.clike["class-name"],
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
      (ye.languages.javascript["class-name"][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
      ye.languages.insertBefore("javascript", "keyword", {
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
              inside: ye.languages.regex,
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
            inside: ye.languages.javascript,
          },
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: ye.languages.javascript,
          },
          {
            pattern:
              /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: ye.languages.javascript,
          },
          {
            pattern:
              /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: ye.languages.javascript,
          },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
      }),
      ye.languages.insertBefore("javascript", "string", {
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
                rest: ye.languages.javascript,
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
      ye.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern:
            /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: !0,
          alias: "property",
        },
      }),
      ye.languages.markup &&
        (ye.languages.markup.tag.addInlined("script", "javascript"),
        ye.languages.markup.tag.addAttribute(
          "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
          "javascript"
        )),
      (ye.languages.js = ye.languages.javascript),
      (ye.languages.c = ye.languages.extend("clike", {
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
      ye.languages.insertBefore("c", "string", {
        char: {
          pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
          greedy: !0,
        },
      }),
      ye.languages.insertBefore("c", "string", {
        macro: {
          pattern:
            /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
          lookbehind: !0,
          greedy: !0,
          alias: "property",
          inside: {
            string: [
              { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
              ye.languages.c.string,
            ],
            char: ye.languages.c.char,
            comment: ye.languages.c.comment,
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
            expression: { pattern: /\S[\s\S]*/, inside: ye.languages.c },
          },
        },
      }),
      ye.languages.insertBefore("c", "function", {
        constant:
          /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
      }),
      delete ye.languages.c.boolean,
      (ge = ye),
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
      (ye.languages.python = {
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
      (ye.languages.python[
        "string-interpolation"
      ].inside.interpolation.inside.rest = ye.languages.python),
      (ye.languages.py = ye.languages.python),
      new (n(152))(".button-copy", {
        target: function (e) {
          return e.previousElementSibling.querySelector("code");
        },
      });
    if (document.querySelector(".ADS-sortings")) {
      let e = document.getElementById("array"),
        t = document.getElementById("sortArray"),
        n = Number(document.getElementById("arrayLength").value),
        r = document.getElementById("generatedArray"),
        i = document.getElementById("setGeneratedArray"),
        s = document.getElementById("sortGeneratedArray"),
        a = document.getElementById("buttonReset"),
        o = document.querySelector(".ADS");
      document.getElementById("arrayLength").oninput = () => {
        n = Number(document.getElementById("arrayLength").value);
      };
      let l = [];
      i.addEventListener("click", function () {
        for (let t = 0; t < n; t++)
          l.push(((e = 1e3), Math.floor(Math.random() * e)));
        var e;
        (r.value = l.join(" ")), (l = []);
      }),
        s.addEventListener("click", () => {
          let e = r.value.split(" ").map((e) => +e);
          be(e)
            ? ("ADS-4" == o.getAttribute("id")
                ? (e = we(e))
                : "ADS-5" == o.getAttribute("id")
                ? (e = Se(e))
                : "ADS-6" == o.getAttribute("id")
                ? (e = xe(e))
                : "ADS-7" == o.getAttribute("id")
                ? (e = Ee(e))
                : "ADS-8" == o.getAttribute("id")
                ? (e = Te(e))
                : "ADS-9" == o.getAttribute("id")
                ? (e = Ce(e))
                : "ADS-10" == o.getAttribute("id")
                ? (e = ke(e))
                : "ADS-11" == o.getAttribute("id") && (e = Ae(e)),
              (document.querySelector("#showResultGenerated").style.color =
                "#3CA478"),
              (document.querySelector("#showResultGenerated").innerHTML =
                e.join(", ")))
            : ((document.querySelector("#showResultGenerated").style.color =
                "#E06363"),
              (document.querySelector("#showResultGenerated").innerHTML =
                "В последовательности есть ошибка"));
        }),
        a.addEventListener("click", () => {
          (document.querySelector("#showResultGenerated").innerHTML = " "),
            (document.querySelector("#showResult").innerHTML = " "),
            (r.value = " "),
            (array.value = " ");
        }),
        s.addEventListener("click", () => {
          let e = r.value.split(" ").map((e) => +e);
          be(e)
            ? ("ADS-4" == o.getAttribute("id")
                ? (e = we(e))
                : "ADS-5" == o.getAttribute("id")
                ? (e = Se(e))
                : "ADS-6" == o.getAttribute("id")
                ? (e = xe(e))
                : "ADS-7" == o.getAttribute("id")
                ? (e = Ee(e))
                : "ADS-8" == o.getAttribute("id")
                ? (e = Te(e))
                : "ADS-9" == o.getAttribute("id")
                ? (e = Ce(e))
                : "ADS-10" == o.getAttribute("id")
                ? (e = ke(e))
                : "ADS-11" == o.getAttribute("id") && (e = Ae(e)),
              (document.querySelector("#showResultGenerated").style.color =
                "#3CA478"),
              (document.querySelector("#showResultGenerated").innerHTML =
                e.join(", ")))
            : ((document.querySelector("#showResultGenerated").style.color =
                "#E06363"),
              (document.querySelector("#showResultGenerated").innerHTML =
                "В последовательности есть ошибка"));
        }),
        t.addEventListener("click", () => {
          let t = e.value.split(" ").map((e) => +e);
          be(t)
            ? ("ADS-4" == o.getAttribute("id")
                ? (t = we(t))
                : "ADS-5" == o.getAttribute("id")
                ? (t = Se(t))
                : "ADS-6" == o.getAttribute("id")
                ? (t = xe(t))
                : "ADS-7" == o.getAttribute("id")
                ? (t = Ee(t))
                : "ADS-8" == o.getAttribute("id")
                ? (t = Te(t))
                : "ADS-9" == o.getAttribute("id")
                ? (t = Ce(t))
                : "ADS-10" == o.getAttribute("id")
                ? (t = ke(t))
                : "ADS-11" == o.getAttribute("id") && (t = Ae(t)),
              (document.querySelector("#showResult").style.color = "#3CA478"),
              (document.querySelector("#showResult").innerHTML = t.join(", ")))
            : ((document.querySelector("#showResult").style.color = "#E06363"),
              (document.querySelector("#showResult").innerHTML =
                "В последовательности есть ошибка"));
        });
    }
    if (document.querySelector(".ADS-brackets")) {
      let e = document.querySelector("#setString");
      null != e &&
        e.addEventListener("click", () => {
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
                    r = { "{": "}", "(": ")", "[": "]" };
                  for (let i = 0; i < e.length; i++) {
                    const s = e[i];
                    if (n.includes(s)) t.push(s);
                    else {
                      if (s !== r[t.pop()]) return !1;
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
        });
    }
    let Le = document.querySelector("#setNumber");
    if (document.querySelector("#ADS-3") && Le) {
      Le.addEventListener("click", () => {
        let e = +document.getElementById("string").value;
        if (0 == e)
          (document.querySelector("#code-result").style.color = "#D0722E"),
            (document.querySelector("#code-result").innerHTML =
              "Я же вижу, что это пустая строка...");
        else if (isNaN(e))
          (document.querySelector("#code-result").style.color = "#E06363"),
            (document.querySelector("#code-result").innerHTML =
              "Допущена ошибка при вводе");
        else {
          let t = (function (e) {
            let t = [];
            for (let n = 1; n <= e; n++) {
              let e = 0,
                r = 0,
                i = 0,
                s = n;
              for (; s % 3 == 0; ) e++, (s /= 3);
              for (; s % 5 == 0; ) r++, (s /= 5);
              for (; s % 7 == 0; ) i++, (s /= 7);
              1 == s && t.push(n);
            }
            return t;
          })(e);
          (document.querySelector("#code-result").style.color = "#3CA478"),
            (document.querySelector("#code-result").innerHTML = t.join(", "));
        }
      }),
        document
          .querySelector("#buttonResetNumber")
          .addEventListener("click", () => {
            document.querySelector("#code-result").innerHTML = " ";
          });
    }
    class Me {
      constructor() {
        this.array = Array(20).fill(null);
      }
      hash(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t += e.charCodeAt(n);
        return t % 20;
      }
      set(e) {
        let t = this.hash(e);
        null == this.array[t] && (this.array[t] = []), this.array[t].push(e);
      }
    }
    if (document.querySelector(".ADS-hash-tables")) {
      let e = document.querySelector("#setString"),
        t = document.querySelector("#string"),
        n = document.querySelectorAll(".hash-table__text"),
        r = document.getElementById("buttonReset"),
        i = /[a-zA-Zа-яА-Я0-9]+/g;
      r.addEventListener("click", () => {
        (t.innerHTML = ""), (t.value = "");
        for (let e = 0; e < n.length; e++) {
          n[e].innerHTML = "";
        }
      }),
        e.addEventListener("click", () => {
          for (let e = 0; e < n.length; e++) {
            n[e].innerHTML = "";
          }
          let e = new Me(),
            r = t.value;
          (r = r.match(i)), null == r && (r = 0);
          for (let t = 0; t < r.length; t++) e.set(r[t]);
          if (0 != r.length) {
            for (let t = 0; t < n.length; t++) {
              let r = n[t];
              e.array[t] && (r.innerHTML = e.array[t].join(", "));
            }
            document.querySelector("#code-result").innerHTML = "";
          } else
            (document.querySelector("#code-result").style.color = "#D0722E"),
              (document.querySelector("#code-result").innerHTML =
                "Я же вижу, что это пустая строка...");
        });
    }
    class $e {
      constructor(e) {
        (this.value = e), (this.left = null), (this.right = null);
      }
    }
    class _e {
      constructor() {
        this.root = null;
      }
      add(e) {
        let t = new $e(e);
        if (!this.root) return void (this.root = t);
        let n = this.root;
        for (; n; )
          if (t.value < n.value) {
            if (!n.left) return void (n.left = t);
            n = n.left;
          } else {
            if (!n.right) return void (n.right = t);
            n = n.right;
          }
      }
      preOrder(e, t) {
        e && (t && t(e), this.preOrder(e.left, t), this.preOrder(e.right, t));
      }
      inOrder(e, t) {
        e && (this.inOrder(e.left, t), t && t(e), this.inOrder(e.right, t));
      }
      postOrder(e, t) {
        e && (this.postOrder(e.left, t), this.postOrder(e.right, t), t && t(e));
      }
      traverseDFS(e, t) {
        return "preOrder" === t
          ? this.preOrder(this.root, e)
          : "inOrder" === t
          ? this.inOrder(this.root, e)
          : this.postOrder(this.root, e);
      }
      traverseBFS(e) {
        const t = [this.root];
        for (; t.length; ) {
          let n = t.shift();
          e(n), n.left && t.push(n.left), n.right && t.push(n.right);
        }
      }
    }
    new _e();
    if (document.querySelector(".ADS-binaryThree")) {
      let e = document.getElementById("array"),
        t = /-?\d+(\.\d+)?/g,
        n = Number(document.getElementById("arrayLength").value),
        r = document.getElementById("generatedArray"),
        i = document.getElementById("setGeneratedArray"),
        s = document.getElementById("buttonReset");
      document.getElementById("arrayLength").oninput = () => {
        n = Number(document.getElementById("arrayLength").value);
      };
      let a = [];
      if (
        (i.addEventListener("click", function () {
          e.value = "";
          for (let e = 0; e < n; e++)
            a.push(((t = 100), Math.floor(Math.random() * t)));
          var t;
          (r.value = a.join(" ")), (a = []);
        }),
        s.addEventListener("click", () => {
          (document.querySelector("#showResult").innerHTML = " "),
            (r.value = " "),
            (e.value = " ");
        }),
        "ADS-15" ==
          document.querySelector(".ADS-binaryThree").getAttribute("id"))
      ) {
        let n = document.querySelector("#preOrder"),
          i = document.querySelector("#inOrder"),
          s = document.querySelector("#postOrder");
        n.addEventListener("click", function () {
          let n,
            i = new _e();
          0 == e.value.length
            ? (n = r.value.match(t).map((e) => +e))
            : 0 != e.value.length && (n = e.value.match(t).map((e) => +e));
          let s = [];
          if (n) {
            for (let e = 0; e < n.length; e++) i.add(n[e]);
            console.log(i),
              i.traverseDFS((e) => {
                s.push(e.value);
              }, "preOrder"),
              (document.querySelector("#showResult").style.color = "#3CA478"),
              (document.querySelector("#showResult").innerHTML = s.join(", "));
          }
        }),
          i.addEventListener("click", function () {
            let n,
              i = new _e(),
              s = [];
            0 == e.value.length
              ? (n = r.value.match(t).map((e) => +e))
              : 0 != e.value.length && (n = e.value.match(t).map((e) => +e));
            for (let e = 0; e < n.length; e++) i.add(n[e]);
            console.log(i),
              i.traverseDFS((e) => {
                s.push(e.value);
              }, "inOrder"),
              (document.querySelector("#showResult").style.color = "#3CA478"),
              (document.querySelector("#showResult").innerHTML = s.join(", "));
          }),
          s.addEventListener("click", function () {
            let n,
              i = new _e(),
              s = [];
            0 == e.value.length
              ? (n = r.value.match(t).map((e) => +e))
              : 0 != e.value.length && (n = e.value.match(t).map((e) => +e));
            for (let e = 0; e < n.length; e++) i.add(n[e]);
            console.log(i),
              i.traverseDFS((e) => {
                s.push(e.value);
              }, "postOrder"),
              (document.querySelector("#showResult").style.color = "#3CA478"),
              (document.querySelector("#showResult").innerHTML = s.join(", "));
          });
      }
      if (
        "ADS-16" ==
        document.querySelector(".ADS-binaryThree").getAttribute("id")
      ) {
        document
          .querySelector("#traverseBFS")
          .addEventListener("click", function () {
            let n,
              i = new _e(),
              s = [];
            0 == e.value.length
              ? (n = r.value.match(t).map((e) => +e))
              : 0 != e.value.length && (n = e.value.match(t).map((e) => +e));
            for (let e = 0; e < n.length; e++) i.add(n[e]);
            console.log(i),
              i.traverseBFS((e) => {
                s.push(e.value);
              }),
              (document.querySelector("#showResult").style.color = "#3CA478"),
              (document.querySelector("#showResult").innerHTML = s.join(", "));
          });
      }
    }
    function Pe(e) {
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
      ((Date.prototype.getWeek = function () {
        var e = new Date(this.getFullYear(), 0, 1);
        return Math.floor(((this - e) / 864e5 + e.getDay() + 1) / 7);
      }),
      document.querySelector(".schedule"))
    ) {
      !(function () {
        let e = new Date(),
          t = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1),
          n = e.getWeek() % 2 == 0 ? "верхняя" : "нижняя",
          r = document.querySelectorAll(".table-schedule__title");
        for (let i = 0; i < r.length; i++) {
          r[i].innerHTML =
            i % 2 == 0 ? `${Pe(e)}, ${n} неделя` : `${Pe(t)}, ${n} неделя`;
        }
      })();
      let e = new Date().getWeek() % 2 == 0 ? "верхняя" : "нижняя",
        t = document.querySelectorAll(".table-schedule-today"),
        n = document.querySelectorAll(".table-schedule-tomorrow"),
        r = [
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
        s = [
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
            ? ((n.innerHTML = `${r[o][new Date().getDay()][t]}`),
              (p.innerHTML = `${s[o][new Date().getDay()][t]}`),
              (f.innerHTML = `${
                r[o][
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 1
                  ).getDay()
                ][t]
              }`),
              (h.innerHTML = `${
                s[o][
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
    let Oe = localStorage.getItem("group");
    if (null != Oe) {
      Oe = +Oe[0];
      let e = document.querySelectorAll(".tabs__title");
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        n.classList.remove("_tab-active"),
          t == Oe && n.classList.add("_tab-active");
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
              document.documentElement.classList.contains("lock") ? s(e) : a(e);
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
                  const r = e.dataset.tabsIndex,
                    s = i[0] == r;
                  if (s) {
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
                        s && n == i[1] && t[n].classList.add("_tab-active"),
                        (e.hidden = !t[n].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let r = l(n, "tabs");
          r &&
            r.length &&
            r.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            let n = (e = e.item).querySelector("[data-tabs-titles]"),
              r = e.querySelectorAll("[data-tabs-title]"),
              i = e.querySelector("[data-tabs-body]"),
              s = e.querySelectorAll("[data-tabs-item]");
            (r = Array.from(r).filter((t) => t.closest("[data-tabs]") === e)),
              (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              s.forEach((s, a) => {
                t.matches
                  ? (i.append(r[a]),
                    i.append(s),
                    e.classList.add("_tab-spoller"))
                  : (n.append(r[a]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function a(e) {
          let n = e.querySelectorAll("[data-tabs-title]"),
            i = e.querySelectorAll("[data-tabs-item]");
          const s = e.dataset.tabsIndex;
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
                  ? (a ? r(e, a) : (e.hidden = !1),
                    o &&
                      !e.closest(".popup") &&
                      ((l = (l = `tab-${s}-${i}`)
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
              r = n.closest("[data-tabs]");
            if (
              !n.classList.contains("_tab-active") &&
              !r.querySelector("._slide")
            ) {
              let e = r.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === r
                )),
                e.length && e[0].classList.remove("_tab-active"),
                n.classList.add("_tab-active"),
                a(r);
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
                r = n.dataset.goto ? n.dataset.goto : "",
                i = !!n.hasAttribute("data-goto-header"),
                s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : 500,
                a = n.dataset.gotoTop ? parseInt(n.dataset.gotoTop) : 0;
              d(r, i, s, a), e.preventDefault();
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
                  const r = n.classList[t];
                  if (document.querySelector(`[data-goto=".${r}"]`)) {
                    e = document.querySelector(`[data-goto=".${r}"]`);
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
