function gofaq() {
    document.getElementById('faqel').click()
}

function goabout() {
    document.getElementById('whyus').click()
}

document.getElementById('home').style.height = window.innerHeight

document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

!function(e) {
    var t = {};
    function n(a) {
        if (t[a])
            return t[a].exports;
        var i = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 18)
}({
    0: function(e, t, n) {
        "use strict";
        function a() {
            const e = (new Date).getFullYear();
            document.getElementById("footer__copyright-date").innerHTML = e
        }
        n.d(t, "a", (function() {
            return a
        }
        ))
    },
    1: function(e, t, n) {
        var a, i;
        a = "undefined" != typeof window ? window : {},
        i = function(e, t, n) {
            "use strict";
            var a, i;
            if (function() {
                var t, n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    fastLoadedClass: "ls-is-cached",
                    iframeLoadMode: 0,
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (t in i = e.lazySizesConfig || e.lazysizesConfig || {},
                n)
                    t in i || (i[t] = n[t])
            }(),
            !t || !t.getElementsByClassName)
                return {
                    init: function() {},
                    cfg: i,
                    noSupport: !0
                };
            var r = t.documentElement
              , o = e.HTMLPictureElement
              , s = "addEventListener"
              , l = "getAttribute"
              , c = e[s].bind(e)
              , u = e.setTimeout
              , d = e.requestAnimationFrame || u
              , f = e.requestIdleCallback
              , m = /^picture$/i
              , y = ["load", "error", "lazyincluded", "_lazyloaded"]
              , p = {}
              , v = Array.prototype.forEach
              , g = function(e, t) {
                return p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                p[t].test(e[l]("class") || "") && p[t]
            }
              , h = function(e, t) {
                g(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
            }
              , z = function(e, t) {
                var n;
                (n = g(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
            }
              , b = function(e, t, n) {
                var a = n ? s : "removeEventListener";
                n && b(e, t),
                y.forEach((function(n) {
                    e[a](n, t)
                }
                ))
            }
              , C = function(e, n, i, r, o) {
                var s = t.createEvent("Event");
                return i || (i = {}),
                i.instance = a,
                s.initEvent(n, !r, !o),
                s.detail = i,
                e.dispatchEvent(s),
                s
            }
              , A = function(t, n) {
                var a;
                !o && (a = e.picturefill || i.pf) ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src),
                a({
                    reevaluate: !0,
                    elements: [t]
                })) : n && n.src && (t.src = n.src)
            }
              , E = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }
              , _ = function(e, t, n) {
                for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth; )
                    n = t.offsetWidth,
                    t = t.parentNode;
                return n
            }
              , M = function() {
                var e, n, a = [], i = [], r = a, o = function() {
                    var t = r;
                    for (r = a.length ? i : a,
                    e = !0,
                    n = !1; t.length; )
                        t.shift()();
                    e = !1
                }, s = function(a, i) {
                    e && !i ? a.apply(this, arguments) : (r.push(a),
                    n || (n = !0,
                    (t.hidden ? u : d)(o)))
                };
                return s._lsFlush = o,
                s
            }()
              , w = function(e, t) {
                return t ? function() {
                    M(e)
                }
                : function() {
                    var t = this
                      , n = arguments;
                    M((function() {
                        e.apply(t, n)
                    }
                    ))
                }
            }
              , x = function(e) {
                var t, a = 0, r = i.throttleDelay, o = i.ricTimeout, s = function() {
                    t = !1,
                    a = n.now(),
                    e()
                }, l = f && o > 49 ? function() {
                    f(s, {
                        timeout: o
                    }),
                    o !== i.ricTimeout && (o = i.ricTimeout)
                }
                : w((function() {
                    u(s)
                }
                ), !0);
                return function(e) {
                    var i;
                    (e = !0 === e) && (o = 33),
                    t || (t = !0,
                    (i = r - (n.now() - a)) < 0 && (i = 0),
                    e || i < 9 ? l() : u(l, i))
                }
            }
              , N = function(e) {
                var t, a, i = function() {
                    t = null,
                    e()
                }, r = function() {
                    var e = n.now() - a;
                    e < 99 ? u(r, 99 - e) : (f || i)(i)
                };
                return function() {
                    a = n.now(),
                    t || (t = u(r, 99))
                }
            }
              , S = function() {
                var o, f, y, p, _, S, O, T, W, B, P, j, F = /^img$/i, R = /^iframe$/i, D = "onscroll"in e && !/(gle|ing)bot/.test(navigator.userAgent), H = 0, $ = 0, k = -1, I = function(e) {
                    $--,
                    (!e || $ < 0 || !e.target) && ($ = 0)
                }, q = function(e) {
                    return null == j && (j = "hidden" == E(t.body, "visibility")),
                    j || !("hidden" == E(e.parentNode, "visibility") && "hidden" == E(e, "visibility"))
                }, Y = function(e, n) {
                    var a, i = e, o = q(e);
                    for (T -= n,
                    P += n,
                    W -= n,
                    B += n; o && (i = i.offsetParent) && i != t.body && i != r; )
                        (o = (E(i, "opacity") || 1) > 0) && "visible" != E(i, "overflow") && (a = i.getBoundingClientRect(),
                        o = B > a.left && W < a.right && P > a.top - 1 && T < a.bottom + 1);
                    return o
                }, U = function() {
                    var e, n, s, c, u, d, m, y, v, g, h, z, b = a.elements;
                    if ((p = i.loadMode) && $ < 8 && (e = b.length)) {
                        for (n = 0,
                        k++; n < e; n++)
                            if (b[n] && !b[n]._lazyRace)
                                if (!D || a.prematureUnveil && a.prematureUnveil(b[n]))
                                    Z(b[n]);
                                else if ((y = b[n][l]("data-expand")) && (d = 1 * y) || (d = H),
                                g || (g = !i.expand || i.expand < 1 ? r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370 : i.expand,
                                a._defEx = g,
                                h = g * i.expFactor,
                                z = i.hFac,
                                j = null,
                                H < h && $ < 1 && k > 2 && p > 2 && !t.hidden ? (H = h,
                                k = 0) : H = p > 1 && k > 1 && $ < 6 ? g : 0),
                                v !== d && (S = innerWidth + d * z,
                                O = innerHeight + d,
                                m = -1 * d,
                                v = d),
                                s = b[n].getBoundingClientRect(),
                                (P = s.bottom) >= m && (T = s.top) <= O && (B = s.right) >= m * z && (W = s.left) <= S && (P || B || W || T) && (i.loadHidden || q(b[n])) && (f && $ < 3 && !y && (p < 3 || k < 4) || Y(b[n], d))) {
                                    if (Z(b[n]),
                                    u = !0,
                                    $ > 9)
                                        break
                                } else
                                    !u && f && !c && $ < 4 && k < 4 && p > 2 && (o[0] || i.preloadAfterLoad) && (o[0] || !y && (P || B || W || T || "auto" != b[n][l](i.sizesAttr))) && (c = o[0] || b[n]);
                        c && !u && Z(c)
                    }
                }, X = x(U), G = function(e) {
                    var t = e.target;
                    t._lazyCache ? delete t._lazyCache : (I(e),
                    h(t, i.loadedClass),
                    z(t, i.loadingClass),
                    b(t, K),
                    C(t, "lazyloaded"))
                }, J = w(G), K = function(e) {
                    J({
                        target: e.target
                    })
                }, Q = function(e) {
                    var t, n = e[l](i.srcsetAttr);
                    (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t),
                    n && e.setAttribute("srcset", n)
                }, V = w((function(e, t, n, a, r) {
                    var o, s, c, d, f, p;
                    (f = C(e, "lazybeforeunveil", t)).defaultPrevented || (a && (n ? h(e, i.autosizesClass) : e.setAttribute("sizes", a)),
                    s = e[l](i.srcsetAttr),
                    o = e[l](i.srcAttr),
                    r && (d = (c = e.parentNode) && m.test(c.nodeName || "")),
                    p = t.firesLoad || "src"in e && (s || o || d),
                    f = {
                        target: e
                    },
                    h(e, i.loadingClass),
                    p && (clearTimeout(y),
                    y = u(I, 2500),
                    b(e, K, !0)),
                    d && v.call(c.getElementsByTagName("source"), Q),
                    s ? e.setAttribute("srcset", s) : o && !d && (R.test(e.nodeName) ? function(e, t) {
                        var n = e.getAttribute("data-load-mode") || i.iframeLoadMode;
                        0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t)
                    }(e, o) : e.src = o),
                    r && (s || d) && A(e, {
                        src: o
                    })),
                    e._lazyRace && delete e._lazyRace,
                    z(e, i.lazyClass),
                    M((function() {
                        var t = e.complete && e.naturalWidth > 1;
                        p && !t || (t && h(e, i.fastLoadedClass),
                        G(f),
                        e._lazyCache = !0,
                        u((function() {
                            "_lazyCache"in e && delete e._lazyCache
                        }
                        ), 9)),
                        "lazy" == e.loading && $--
                    }
                    ), !0)
                }
                )), Z = function(e) {
                    if (!e._lazyRace) {
                        var t, n = F.test(e.nodeName), a = n && (e[l](i.sizesAttr) || e[l]("sizes")), r = "auto" == a;
                        (!r && f || !n || !e[l]("src") && !e.srcset || e.complete || g(e, i.errorClass) || !g(e, i.lazyClass)) && (t = C(e, "lazyunveilread").detail,
                        r && L.updateElem(e, !0, e.offsetWidth),
                        e._lazyRace = !0,
                        $++,
                        V(e, t, r, a, n))
                    }
                }, ee = N((function() {
                    i.loadMode = 3,
                    X()
                }
                )), te = function() {
                    3 == i.loadMode && (i.loadMode = 2),
                    ee()
                }, ne = function() {
                    f || (n.now() - _ < 999 ? u(ne, 999) : (f = !0,
                    i.loadMode = 3,
                    X(),
                    c("scroll", te, !0)))
                };
                return {
                    _: function() {
                        _ = n.now(),
                        a.elements = t.getElementsByClassName(i.lazyClass),
                        o = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass),
                        c("scroll", X, !0),
                        c("resize", X, !0),
                        c("pageshow", (function(e) {
                            if (e.persisted) {
                                var n = t.querySelectorAll("." + i.loadingClass);
                                n.length && n.forEach && d((function() {
                                    n.forEach((function(e) {
                                        e.complete && Z(e)
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                        )),
                        e.MutationObserver ? new MutationObserver(X).observe(r, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (r[s]("DOMNodeInserted", X, !0),
                        r[s]("DOMAttrModified", X, !0),
                        setInterval(X, 999)),
                        c("hashchange", X, !0),
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                            t[s](e, X, !0)
                        }
                        )),
                        /d$|^c/.test(t.readyState) ? ne() : (c("load", ne),
                        t[s]("DOMContentLoaded", X),
                        u(ne, 2e4)),
                        a.elements.length ? (U(),
                        M._lsFlush()) : X()
                    },
                    checkElems: X,
                    unveil: Z,
                    _aLSL: te
                }
            }()
              , L = function() {
                var e, n = w((function(e, t, n, a) {
                    var i, r, o;
                    if (e._lazysizesWidth = a,
                    a += "px",
                    e.setAttribute("sizes", a),
                    m.test(t.nodeName || ""))
                        for (r = 0,
                        o = (i = t.getElementsByTagName("source")).length; r < o; r++)
                            i[r].setAttribute("sizes", a);
                    n.detail.dataAttr || A(e, n.detail)
                }
                )), a = function(e, t, a) {
                    var i, r = e.parentNode;
                    r && (a = _(e, r, a),
                    (i = C(e, "lazybeforesizes", {
                        width: a,
                        dataAttr: !!t
                    })).defaultPrevented || (a = i.detail.width) && a !== e._lazysizesWidth && n(e, r, i, a))
                }, r = N((function() {
                    var t, n = e.length;
                    if (n)
                        for (t = 0; t < n; t++)
                            a(e[t])
                }
                ));
                return {
                    _: function() {
                        e = t.getElementsByClassName(i.autosizesClass),
                        c("resize", r)
                    },
                    checkElems: r,
                    updateElem: a
                }
            }()
              , O = function() {
                !O.i && t.getElementsByClassName && (O.i = !0,
                L._(),
                S._())
            };
            return u((function() {
                i.init && O()
            }
            )),
            a = {
                cfg: i,
                autoSizer: L,
                loader: S,
                init: O,
                uP: A,
                aC: h,
                rC: z,
                hC: g,
                fire: C,
                gW: _,
                rAF: M
            }
        }(a, a.document, Date),
        a.lazySizes = i,
        e.exports && (e.exports = i)
    },
    18: function(e, t, n) {
        e.exports = n(19)
    },
    19: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(2)
          , i = (n(1),
        n(0));
        Object(i.a)();
        const r = document.getElementById("distribution-service")
          , o = r.offsetTop + r.offsetHeight / 2;
        document.addEventListener("mousemove", (function(e) {
            Object(a.a)(e, ".streaming-logo", o, 1, 4)
        }
        ))
    },
    2: function(e, t, n) {
        "use strict";
        function a(e, t, n, a=1, i=1) {
            document.querySelectorAll(t).forEach(t=>{
                const r = t.getAttribute("data-speed");
                var o = (e.pageX - window.innerWidth / 2) / 250 * r * a
                  , s = (e.pageY - n) / 250 * r * i;
                t.style.transform = `translateX(${o}px) translateY(${s}px)`
            }
            )
        }
        n.d(t, "a", (function() {
            return a
        }
        ))
    }
});

!function(e) {
    var n = {};
    function t(o) {
        if (n[o])
            return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t),
        r.l = !0,
        r.exports
    }
    t.m = e,
    t.c = n,
    t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, n) {
        if (1 & n && (e = t(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (t.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var r in e)
                t.d(o, r, function(n) {
                    return e[n]
                }
                .bind(null, r));
        return o
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    t.p = "",
    t(t.s = 12)
}({
    12: function(e, n, t) {
        e.exports = t(29)
    },
    13: function(e, n) {
        let t = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", t + "px"),
        window.addEventListener("resize", ()=>{
            let e = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", e + "px")
        }
        ),
        window.addEventListener("scroll", ()=>{
            let e = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", e + "px")
        }
        )
    },
    29: function(e, n, t) {
        "use strict";
        t.r(n);
        const o = document.querySelector(".navbar")
          , r = document.querySelector("#signInBtn")
          , s = document.querySelector("#signUpBtn");
        document.querySelector(".hero");
        function c(e, n) {
            e.setAttribute("src", "/newhome/img/" + n)
        }
        const l = document.querySelector("#navbarLogo")
          , i = document.querySelector("#whiteChevron");
        function u(e, n) {
            window.pageYOffset > 1 || document.querySelector(".mobile-nav").classList.contains("mobile-nav--shown") ? (setTimeout((function() {
                c(l, "logos/line-blue-wide-logo.svg")
            }
            ), 0),
            e.classList.add(n),
            c(i, "icons/arrows/chevron-down-blue.svg")) : (setTimeout((function() {
                c(l, "logos/line-white-wide-logo.svg")
            }
            ), 0),
            e.classList.remove(n),
            c(i, "icons/arrows/chevron-down.svg"))
        }
        function d() {
            u(o, "navbar--scroll"),
            u(r, "btn--full"),
            u(s, "btn--bordered-dark")
        }
        const a = document.querySelector(".navbar__burger")
          , m = document.querySelector(".mobile-nav")
          , v = document.querySelector("#lang-sub-menu")
          , g = document.querySelector("#service-sub-menu")
          , w = document.querySelector("#lang-toggler")
          , b = document.querySelector("#service-toggler")
          , f = document.querySelector("#lang-toggler > .mobile-nav__arrow")
          , h = document.querySelector("#service-toggler > .mobile-nav__arrow")
          , y = document.querySelector(".overlay--menu-hidden");
        document.querySelector("body");
        var L = !1;
        function p() {
            window.scrollTo(0, 0)
        }
        a.addEventListener("click", e=>{
            m.classList.toggle("mobile-nav--shown"),
            m.classList.toggle("mobile-nav--hidden"),
            y.classList.toggle("overlay--menu-show"),
            d(),
            L = !L,
            console.log("menu open : ", L),
            L ? (window.addEventListener("scroll", p),
            document.documentElement.classList.toggle("no-scroll"),
            window.addEventListener("touchmove", (function(e) {
                e.preventDefault()
            }
            ), !1)) : (window.removeEventListener("scroll", p),
            document.documentElement.classList.toggle("no-scroll"),
            window.addEventListener("touchmove", (function(e) {
                e.preventDefault()
            }
            ), !1))
        }
        ),
        w.addEventListener("click", e=>{
            v.classList.contains("mobile-nav__sub-menu--shown") ? f.setAttribute("src", "/newhome/img/icons/arrows/chevron-down-grey.svg") : f.setAttribute("src", "/newhome/img/icons/arrows/chevron-up-grey.svg"),
            v.classList.toggle("mobile-nav__sub-menu--hidden"),
            v.classList.toggle("mobile-nav__sub-menu--shown")
        }
        ),
        b.addEventListener("click", e=>{
            g.classList.contains("mobile-nav__sub-menu--shown") ? h.setAttribute("src", "/newhome/img/icons/arrows/chevron-down-grey.svg") : h.setAttribute("src", "/newhome/img/icons/arrows/chevron-up-grey.svg"),
            g.classList.toggle("mobile-nav__sub-menu--hidden"),
            g.classList.toggle("mobile-nav__sub-menu--shown")
        }
        );
        document.getElementById("menu-overlay").addEventListener("click", ()=>{
            m.classList.contains("mobile-nav--shown") && (E(),
            document.documentElement.classList.toggle("no-scroll"))
        }
        ),
        document.addEventListener("touchstart", (function(e) {
            const n = function(e) {
                return e.touches || e.originalEvent.touches
            }(e)[0];
            _ = n.clientY
        }
        ), !1),
        document.addEventListener("touchend", (function(e) {
            if (!_)
                return;
            var n = e.changedTouches[0].clientY;
            _ - n > 400 && m.classList.contains("mobile-nav--shown") && (E(),
            setTimeout((function() {
                document.documentElement.classList.toggle("no-scroll")
            }
            ), 500));
            _ = null
        }
        ), !1);
        var _ = null;
        const E = ()=>{
            m.classList.remove("mobile-nav--shown"),
            m.classList.add("mobile-nav--hidden"),
            document.getElementById("burger-menu").checked = !1,
            y.classList.toggle("overlay--menu-show"),
            window.pageYOffset <= 1 && (o.classList.remove("navbar--scroll"),
            setTimeout((function() {
                c(l, "logos/line-white-wide-logo.svg")
            }
            ), 300)),
            L = !1,
            window.removeEventListener("scroll", p),
            window.addEventListener("touchmove", (function(e) {
                e.preventDefault()
            }
            ), !1)
        }
        ;
        window.onscroll = d;
        const S = document.querySelector(".navbar__dropdown");
        document.querySelectorAll(".navbar__dropdown-item").forEach((e,n)=>{
            e.addEventListener("focus", e=>{
                S.classList.toggle("navbar__dropdown--active")
            }
            ),
            e.addEventListener("focusout", e=>{
                S.classList.toggle("navbar__dropdown--active")
            }
            )
        }
        );
        const q = document.querySelector(".navbar__dropdown--flag");
        document.querySelectorAll(".navbar__dropdown-item--flag").forEach((e,n)=>{
            e.addEventListener("focus", e=>{
                q.classList.toggle("navbar__dropdown--active")
            }
            ),
            e.addEventListener("focusout", e=>{
                q.classList.toggle("navbar__dropdown--active")
            }
            )
        }
        );
        t(13)
    }
});
