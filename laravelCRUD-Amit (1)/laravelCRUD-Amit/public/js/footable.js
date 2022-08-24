/*
 * FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
 * @version 3.1.6
 * @link http://fooplugins.com
 * @copyright Steven Usher & Brad Vincent 2015
 * @license Released under the GPLv3 license.
 */
! function(t, e) {
    window.console = window.console || {
        log: function() {},
        error: function() {}
    }, t.fn.footable = function(t, i) {
        return t = t || {}, this.filter("table").each((function(n, s) {
            e.init(s, t, i)
        }))
    };
    var i = {
        events: []
    };
    e.__debug__ = JSON.parse(localStorage.getItem("footable_debug")) || !1, e.__debug_options__ = JSON.parse(localStorage.getItem("footable_debug_options")) || i, e.debug = function(n, s) {
        return e.is.boolean(n) ? (e.__debug__ = n, void(e.__debug__ ? (localStorage.setItem("footable_debug", JSON.stringify(e.__debug__)), e.__debug_options__ = t.extend(!0, {}, i, s || {}), e.is.hash(s) && localStorage.setItem("footable_debug_options", JSON.stringify(e.__debug_options__))) : (localStorage.removeItem("footable_debug"), localStorage.removeItem("footable_debug_options")))) : e.__debug__
    }, e.get = function(e) {
        return t(e).first().data("__FooTable__")
    }, e.init = function(t, i, n) {
        var s = e.get(t);
        return s instanceof e.Table && s.destroy(), new e.Table(t, i, n)
    }, e.getRow = function(e) {
        var i = t(e).closest("tr");
        return i.hasClass("footable-detail-row") && (i = i.prev()), i.data("__FooTableRow__")
    }
}(jQuery, FooTable = window.FooTable || {}),
function(t) {
    var e = function() {
        return !0
    };
    t.arr = {}, t.arr.each = function(e, i) {
        if (t.is.array(e) && t.is.fn(i))
            for (var n = 0, s = e.length; s > n && !1 !== i(e[n], n); n++);
    }, t.arr.get = function(e, i) {
        var n = [];
        if (!t.is.array(e)) return n;
        if (!t.is.fn(i)) return e;
        for (var s = 0, o = e.length; o > s; s++) i(e[s], s) && n.push(e[s]);
        return n
    }, t.arr.any = function(i, n) {
        if (!t.is.array(i)) return !1;
        n = t.is.fn(n) ? n : e;
        for (var s = 0, o = i.length; o > s; s++)
            if (n(i[s], s)) return !0;
        return !1
    }, t.arr.contains = function(e, i) {
        if (!t.is.array(e) || t.is.undef(i)) return !1;
        for (var n = 0, s = e.length; s > n; n++)
            if (e[n] == i) return !0;
        return !1
    }, t.arr.first = function(i, n) {
        if (!t.is.array(i)) return null;
        n = t.is.fn(n) ? n : e;
        for (var s = 0, o = i.length; o > s; s++)
            if (n(i[s], s)) return i[s];
        return null
    }, t.arr.map = function(e, i) {
        var n = [],
            s = null;
        if (!t.is.array(e) || !t.is.fn(i)) return n;
        for (var o = 0, r = e.length; r > o; o++) null != (s = i(e[o], o)) && n.push(s);
        return n
    }, t.arr.remove = function(e, i) {
        var n = [],
            s = [];
        if (!t.is.array(e) || !t.is.fn(i)) return s;
        for (var o = 0, r = e.length; r > o; o++) i(e[o], o, s) && (n.push(o), s.push(e[o]));
        for (n.sort((function(t, e) {
                return e - t
            })), o = 0, r = n.length; r > o; o++) {
            var a = n[o] - o;
            e.splice(a, 1)
        }
        return s
    }, t.arr.delete = function(e, i) {
        var n = -1,
            s = null;
        if (!t.is.array(e) || t.is.undef(i)) return s;
        for (var o = 0, r = e.length; r > o; o++)
            if (e[o] == i) {
                n = o, s = e[o];
                break
            } return -1 != n && e.splice(n, 1), s
    }, t.arr.replace = function(t, e, i) {
        var n = t.indexOf(e); - 1 !== n && (t[n] = i)
    }
}(FooTable),
function(t) {
    t.is = {}, t.is.type = function(t, e) {
        return typeof t === e
    }, t.is.defined = function(t) {
        return void 0 !== t
    }, t.is.undef = function(t) {
        return void 0 === t
    }, t.is.array = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, t.is.date = function(t) {
        return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
    }, t.is.boolean = function(t) {
        return "[object Boolean]" === Object.prototype.toString.call(t)
    }, t.is.string = function(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }, t.is.number = function(t) {
        return "[object Number]" === Object.prototype.toString.call(t) && !isNaN(t)
    }, t.is.fn = function(e) {
        return t.is.defined(window) && e === window.alert || "[object Function]" === Object.prototype.toString.call(e)
    }, t.is.error = function(t) {
        return "[object Error]" === Object.prototype.toString.call(t)
    }, t.is.object = function(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }, t.is.hash = function(e) {
        return t.is.object(e) && e.constructor === Object && !e.nodeType && !e.setInterval
    }, t.is.element = function(t) {
        return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, t.is.promise = function(e) {
        return t.is.object(e) && t.is.fn(e.then) && t.is.fn(e.promise)
    }, t.is.jq = function(e) {
        return t.is.defined(window.jQuery) && e instanceof jQuery && e.length > 0
    }, t.is.moment = function(e) {
        return t.is.defined(window.moment) && t.is.object(e) && t.is.boolean(e._isAMomentObject)
    }, t.is.emptyObject = function(e) {
        if (!t.is.hash(e)) return !1;
        for (var i in e)
            if (e.hasOwnProperty(i)) return !1;
        return !0
    }, t.is.emptyArray = function(e) {
        return !t.is.array(e) || 0 === e.length
    }, t.is.emptyString = function(e) {
        return !t.is.string(e) || 0 === e.length
    }
}(FooTable),
function(t) {
    t.str = {}, t.str.contains = function(e, i, n) {
        return !t.is.emptyString(e) && !t.is.emptyString(i) && (i.length <= e.length && -1 !== (n ? e.toUpperCase().indexOf(i.toUpperCase()) : e.indexOf(i)))
    }, t.str.containsExact = function(e, i, n) {
        return !(t.is.emptyString(e) || t.is.emptyString(i) || i.length > e.length) && new RegExp("\\b" + t.str.escapeRegExp(i) + "\\b", n ? "i" : "").test(e)
    }, t.str.containsWord = function(e, i, n) {
        if (t.is.emptyString(e) || t.is.emptyString(i) || e.length < i.length) return !1;
        for (var s = e.split(/\W/), o = 0, r = s.length; r > o; o++)
            if (n ? s[o].toUpperCase() == i.toUpperCase() : s[o] == i) return !0;
        return !1
    }, t.str.from = function(e, i) {
        return t.is.emptyString(e) ? e : t.str.contains(e, i) ? e.substring(e.indexOf(i) + 1) : e
    }, t.str.startsWith = function(e, i) {
        return t.is.emptyString(e) ? e == i : e.slice(0, i.length) == i
    }, t.str.toCamelCase = function(e) {
        return t.is.emptyString(e) ? e : e.toUpperCase() === e ? e.toLowerCase() : e.replace(/^([A-Z])|[-\s_](\w)/g, (function(e, i, n) {
            return t.is.string(n) ? n.toUpperCase() : i.toLowerCase()
        }))
    }, t.str.random = function(e) {
        return (e = t.is.emptyString(e) ? "" : e) + Math.random().toString(36).substr(2, 9)
    }, t.str.escapeRegExp = function(e) {
        return t.is.emptyString(e) ? e : e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
}(FooTable),
function(t) {
    "use strict";

    function e() {}
    Object.create || (Object.create = function() {
        var e = function() {};
        return function(i) {
            if (arguments.length > 1) throw Error("Second argument not supported");
            if (!t.is.object(i)) throw TypeError("Argument must be an object");
            e.prototype = i;
            var n = new e;
            return e.prototype = null, n
        }
    }());
    var i = /xyz/.test((function() {
        xyz
    })) ? /\b_super\b/ : /.*/;
    e.__extend__ = function(e, n, s, o) {
        e[n] = t.is.fn(o) && i.test(s) ? function(t, e) {
            return function() {
                var t, i;
                return t = this._super, this._super = o, i = e.apply(this, arguments), this._super = t, i
            }
        }(0, s) : s
    }, e.extend = function(n, s) {
        function o(e, n, s, o) {
            e[n] = t.is.fn(o) && i.test(s) ? function(t, e, i) {
                return function() {
                    var t, n;
                    return t = this._super, this._super = i, n = e.apply(this, arguments), this._super = t, n
                }
            }(0, s, o) : s
        }
        var r = Array.prototype.slice.call(arguments);
        if (n = r.shift(), s = r.shift(), t.is.hash(n)) {
            var a = Object.create(this.prototype),
                l = this.prototype;
            for (var c in n) "__ctor__" !== c && o(a, c, n[c], l[c]);
            var u = t.is.fn(a.__ctor__) ? a.__ctor__ : function() {
                if (!t.is.fn(this.construct)) throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');
                this.construct.apply(this, arguments)
            };
            return a.construct = t.is.fn(a.construct) ? a.construct : function() {}, u.prototype = a, a.constructor = u, u.extend = e.extend, u
        }
        t.is.string(n) && t.is.fn(s) && o(this.prototype, n, s, this.prototype[n])
    }, t.Class = e, t.ClassFactory = t.Class.extend({
        construct: function() {
            this.registered = {}
        },
        contains: function(e) {
            return t.is.defined(this.registered[e])
        },
        names: function() {
            var t, e = [];
            for (t in this.registered) this.registered.hasOwnProperty(t) && e.push(t);
            return e
        },
        register: function(e, i, n) {
            if (t.is.string(e) && t.is.fn(i)) {
                var s = this.registered[e];
                this.registered[e] = {
                    name: e,
                    klass: i,
                    priority: t.is.number(n) ? n : t.is.defined(s) ? s.priority : 0
                }
            }
        },
        load: function(e, i, n) {
            var s, o, r = this,
                a = Array.prototype.slice.call(arguments),
                l = [],
                c = [];
            for (s in e = a.shift() || {}, r.registered)
                if (r.registered.hasOwnProperty(s)) {
                    var u = r.registered[s];
                    e.hasOwnProperty(s) && (o = e[s], t.is.string(o) && (o = t.getFnPointer(e[s])), t.is.fn(o) && (u = {
                        name: s,
                        klass: o,
                        priority: r.registered[s].priority
                    })), l.push(u)
                } for (s in e) e.hasOwnProperty(s) && !r.registered.hasOwnProperty(s) && (o = e[s], t.is.string(o) && (o = t.getFnPointer(e[s])), t.is.fn(o) && l.push({
                name: s,
                klass: o,
                priority: 0
            }));
            return l.sort((function(t, e) {
                return e.priority - t.priority
            })), t.arr.each(l, (function(e) {
                t.is.fn(e.klass) && c.push(r._make(e.klass, a))
            })), c
        },
        make: function(e, i, n) {
            var s, o = this,
                r = Array.prototype.slice.call(arguments);
            return e = r.shift(), s = o.registered[e], t.is.fn(s.klass) ? o._make(s.klass, r) : null
        },
        _make: function(t, e) {
            function i() {
                return t.apply(this, e)
            }
            return i.prototype = t.prototype, new i
        }
    })
}(FooTable),
function(t, e) {
    e.css2json = function(i) {
        if (e.is.emptyString(i)) return {};
        for (var n, s, o, r = {}, a = i.split(";"), l = 0, c = a.length; c > l; l++) e.is.emptyString(a[l]) || (n = a[l].split(":"), e.is.emptyString(n[0]) || e.is.emptyString(n[1]) || (s = e.str.toCamelCase(t.trim(n[0])), o = t.trim(n[1]), r[s] = o));
        return r
    }, e.getFnPointer = function(t) {
        if (e.is.emptyString(t)) return null;
        var i = window,
            n = t.split(".");
        return e.arr.each(n, (function(t) {
            i[t] && (i = i[t])
        })), e.is.fn(i) ? i : null
    }, e.checkFnValue = function(t, i, n) {
        function s(t, i, n) {
            return e.is.fn(i) ? function() {
                return i.apply(t, arguments)
            } : n
        }
        return n = e.is.fn(n) ? n : null, e.is.fn(i) ? s(t, i, n) : e.is.type(i, "string") ? s(t, e.getFnPointer(i), n) : n
    }
}(jQuery, FooTable),
function(t, e) {
    e.Cell = e.Class.extend({
        construct: function(t, e, i, n) {
            this.ft = t, this.row = e, this.column = i, this.created = !1, this.define(n)
        },
        define: function(i) {
            this.$el = e.is.element(i) || e.is.jq(i) ? t(i) : null, this.$detail = null;
            var n = e.is.hash(i) && e.is.hash(i.options) && e.is.defined(i.value);
            this.value = this.column.parser.call(this.column, e.is.jq(this.$el) ? this.$el : n ? i.value : i, this.ft.o), this.o = t.extend(!0, {
                classes: null,
                style: null
            }, n ? i.options : {}), this.classes = e.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : e.is.array(this.o.classes) ? this.o.classes : e.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = e.is.jq(this.$el) && this.$el.attr("style") ? e.css2json(this.$el.attr("style")) : e.is.hash(this.o.style) ? this.o.style : e.is.string(this.o.style) ? e.css2json(this.o.style) : {}
        },
        $create: function() {
            this.created || ((this.$el = e.is.jq(this.$el) ? this.$el : t("<td/>")).data("value", this.value).contents().detach().end().append(this.format(this.value)), this._setClasses(this.$el), this._setStyle(this.$el), this.$detail = t("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__", this).append(t("<th/>")).append(t("<td/>")), this.created = !0)
        },
        collapse: function() {
            this.created && (this.$detail.children("th").html(this.column.title), this.$el.clone().attr("id", this.$el.attr("id") ? this.$el.attr("id") + "-detail" : void 0).css("display", "table-cell").html("").append(this.$el.contents().detach()).replaceAll(this.$detail.children("td").first()), e.is.jq(this.$detail.parent()) || this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")))
        },
        restore: function() {
            if (this.created) {
                if (e.is.jq(this.$detail.parent())) {
                    var t = this.$detail.children("td").first();
                    this.$el.attr("class", t.attr("class")).attr("style", t.attr("style")).css("display", this.column.hidden || !this.column.visible ? "none" : "table-cell").append(t.contents().detach())
                }
                this.$detail.detach()
            }
        },
        parse: function() {
            return this.column.parser.call(this.column, this.$el, this.ft.o)
        },
        format: function(t) {
            return this.column.formatter.call(this.column, t, this.ft.o, this.row.value)
        },
        val: function(i, n, s) {
            if (e.is.undef(i)) return this.value;
            var o = e.is.hash(i) && e.is.hash(i.options) && e.is.defined(i.value);
            if (this.o = t.extend(!0, {
                    classes: this.classes,
                    style: this.style
                }, o ? i.options : {}), this.value = o ? i.value : i, this.classes = e.is.array(this.o.classes) ? this.o.classes : e.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = e.is.hash(this.o.style) ? this.o.style : e.is.string(this.o.style) ? e.css2json(this.o.style) : {}, s = !e.is.boolean(s) || s, this.created && s) {
                this.$el.data("value", this.value).empty();
                var r = this.$detail.children("td").first().empty(),
                    a = e.is.jq(this.$detail.parent()) ? r : this.$el;
                a.append(this.format(this.value)), this._setClasses(a), this._setStyle(a), (!e.is.boolean(n) || n) && this.row.draw()
            }
        },
        _setClasses: function(t) {
            var i = !e.is.emptyArray(this.column.classes),
                n = !e.is.emptyArray(this.classes),
                s = null;
            t.removeAttr("class"), (i || n) && (i && n ? s = this.classes.concat(this.column.classes).join(" ") : i ? s = this.column.classes.join(" ") : n && (s = this.classes.join(" ")), e.is.emptyString(s) || t.addClass(s))
        },
        _setStyle: function(i) {
            var n = !e.is.emptyObject(this.column.style),
                s = !e.is.emptyObject(this.style),
                o = null;
            i.removeAttr("style"), (n || s) && (n && s ? o = t.extend({}, this.column.style, this.style) : n ? o = this.column.style : s && (o = this.style), e.is.hash(o) && i.css(o))
        }
    })
}(jQuery, FooTable),
function(t, e) {
    e.Column = e.Class.extend({
        construct: function(t, i, n) {
            this.ft = t, this.type = e.is.emptyString(n) ? "text" : n, this.virtual = !!e.is.boolean(i.virtual) && i.virtual, this.$el = e.is.jq(i.$el) ? i.$el : null, this.index = e.is.number(i.index) ? i.index : -1, this.internal = !1, this.define(i), this.$create()
        },
        define: function(t) {
            this.hidden = !!e.is.boolean(t.hidden) && t.hidden, this.visible = !e.is.boolean(t.visible) || t.visible, this.name = e.is.string(t.name) ? t.name : null, null == this.name && (this.name = "col" + (t.index + 1)), this.title = e.is.string(t.title) ? t.title : null, !this.virtual && null == this.title && e.is.jq(this.$el) && (this.title = this.$el.html()), null == this.title && (this.title = "Column " + (t.index + 1)), this.style = e.is.hash(t.style) ? t.style : e.is.string(t.style) ? e.css2json(t.style) : {}, this.classes = e.is.array(t.classes) ? t.classes : e.is.string(t.classes) ? t.classes.match(/\S+/g) : [], this.parser = e.checkFnValue(this, t.parser, this.parser), this.formatter = e.checkFnValue(this, t.formatter, this.formatter)
        },
        $create: function() {
            (this.$el = !this.virtual && e.is.jq(this.$el) ? this.$el : t("<th/>")).html(this.title).addClass(this.classes.join(" ")).css(this.style)
        },
        parser: function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i).data("value");
                return e.is.defined(n) ? n : t(i).html()
            }
            return e.is.defined(i) && null != i ? i + "" : null
        },
        formatter: function(t, e, i) {
            return null == t ? "" : t
        },
        createCell: function(t) {
            var i = e.is.jq(t.$el) ? t.$el.children("td,th").get(this.index) : null,
                n = e.is.hash(t.value) ? t.value[this.name] : null;
            return new e.Cell(this.ft, t, this, i || n)
        }
    }), e.columns = new e.ClassFactory, e.columns.register("text", e.Column)
}(jQuery, FooTable),
function(t, e) {
    e.Component = e.Class.extend({
        construct: function(t, i) {
            if (!(t instanceof e.Table)) throw new TypeError("The instance parameter must be an instance of FooTable.Table.");
            this.ft = t, this.enabled = !!e.is.boolean(i) && i
        },
        preinit: function(t) {},
        init: function() {},
        destroy: function() {},
        predraw: function() {},
        draw: function() {},
        postdraw: function() {}
    }), e.components = new e.ClassFactory
}(jQuery, FooTable),
function(t, e) {
    e.Defaults = function() {
        this.stopPropagation = !1, this.on = null
    }, e.defaults = new e.Defaults
}(jQuery, FooTable),
function(t, e) {
    e.Row = e.Class.extend({
        construct: function(t, e, i) {
            this.ft = t, this.columns = e, this.created = !1, this.define(i)
        },
        define: function(i) {
            this.$el = e.is.element(i) || e.is.jq(i) ? t(i) : null, this.$toggle = t("<span/>", {
                class: "footable-toggle fooicon fooicon-plus"
            });
            var n = e.is.hash(i),
                s = n && e.is.hash(i.options) && e.is.hash(i.value);
            this.value = n ? s ? i.value : i : null, this.o = t.extend(!0, {
                expanded: !1,
                classes: null,
                style: null
            }, s ? i.options : {}), this.expanded = e.is.jq(this.$el) && this.$el.data("expanded") || this.o.expanded, this.classes = e.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : e.is.array(this.o.classes) ? this.o.classes : e.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = e.is.jq(this.$el) && this.$el.attr("style") ? e.css2json(this.$el.attr("style")) : e.is.hash(this.o.style) ? this.o.style : e.is.string(this.o.style) ? e.css2json(this.o.style) : {}, this.cells = this.createCells();
            var o = this;
            o.value = {}, e.arr.each(o.cells, (function(t) {
                o.value[t.column.name] = t.val()
            }))
        },
        $create: function() {
            if (!this.created) {
                (this.$el = e.is.jq(this.$el) ? this.$el : t("<tr/>")).data("__FooTableRow__", this), this._setClasses(this.$el), this._setStyle(this.$el), "last" == this.ft.rows.toggleColumn && this.$toggle.addClass("last-column"), this.$details = t("<tr/>", {
                    class: "footable-detail-row"
                }).append(t("<td/>", {
                    colspan: this.ft.columns.visibleColspan
                }).append(t("<table/>", {
                    class: "footable-details " + this.ft.classes.join(" ")
                }).append("<tbody/>")));
                var i = this;
                e.arr.each(i.cells, (function(t) {
                    t.created || t.$create(), i.$el.append(t.$el)
                })), i.$el.off("click.ft.row").on("click.ft.row", {
                    self: i
                }, i._onToggle), this.created = !0
            }
        },
        createCells: function() {
            var t = this;
            return e.arr.map(t.columns, (function(e) {
                return e.createCell(t)
            }))
        },
        val: function(i, n, s) {
            var o = this;
            if (!e.is.hash(i)) return e.is.hash(this.value) && !e.is.emptyObject(this.value) || (this.value = {}, e.arr.each(this.cells, (function(t) {
                t.column.internal || (o.value[t.column.name] = t.val())
            }))), this.value;
            this.collapse(!1);
            var r = e.is.hash(i),
                a = r && e.is.hash(i.options) && e.is.hash(i.value);
            if (this.o = t.extend(!0, {
                    expanded: o.expanded,
                    classes: o.classes,
                    style: o.style
                }, a ? i.options : {}), this.expanded = this.o.expanded, this.classes = e.is.array(this.o.classes) ? this.o.classes : e.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = e.is.hash(this.o.style) ? this.o.style : e.is.string(this.o.style) ? e.css2json(this.o.style) : {}, r)
                if (a && (i = i.value), e.is.hash(this.value))
                    for (var l in i) i.hasOwnProperty(l) && (this.value[l] = i[l]);
                else this.value = i;
            else this.value = null;
            s = !e.is.boolean(s) || s, e.arr.each(this.cells, (function(t) {
                !t.column.internal && e.is.defined(o.value[t.column.name]) && t.val(o.value[t.column.name], !1, s)
            })), this.created && s && (this._setClasses(this.$el), this._setStyle(this.$el), (!e.is.boolean(n) || n) && this.draw())
        },
        _setClasses: function(t) {
            var i = !e.is.emptyArray(this.classes),
                n = null;
            t.removeAttr("class"), i && (n = this.classes.join(" "), e.is.emptyString(n) || t.addClass(n))
        },
        _setStyle: function(t) {
            var i = !e.is.emptyObject(this.style),
                n = null;
            t.removeAttr("style"), i && (n = this.style, e.is.hash(n) && t.css(n))
        },
        expand: function() {
            if (this.created) {
                var t = this;
                t.ft.raise("expand.ft.row", [t]).then((function() {
                    t.__hidden__ = e.arr.map(t.cells, (function(t) {
                        return t.column.hidden && t.column.visible ? t : null
                    })), t.__hidden__.length > 0 && (t.$details.insertAfter(t.$el).children("td").first().attr("colspan", t.ft.columns.visibleColspan), e.arr.each(t.__hidden__, (function(t) {
                        t.collapse()
                    }))), t.$el.attr("data-expanded", !0), t.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"), t.expanded = !0, t.ft.raise("expanded.ft.row", [t])
                }))
            }
        },
        collapse: function(t) {
            if (this.created) {
                var i = this;
                i.ft.raise("collapse.ft.row", [i]).then((function() {
                    e.arr.each(i.__hidden__, (function(t) {
                        t.restore()
                    })), i.$details.detach(), i.$el.removeAttr("data-expanded"), i.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"), (!e.is.boolean(t) || t) && (i.expanded = !1), i.ft.raise("collapsed.ft.row", [i])
                }))
            }
        },
        predraw: function(t) {
            this.created && (this.expanded && this.collapse(!1), this.$toggle.detach(), (t = !e.is.boolean(t) || t) && this.$el.detach())
        },
        draw: function(t) {
            this.created || this.$create(), e.is.jq(t) && t.append(this.$el);
            var i = this;
            e.arr.each(i.cells, (function(t) {
                t.$el.css("display", t.column.hidden || !t.column.visible ? "none" : "table-cell"), i.ft.rows.showToggle && i.ft.columns.hasHidden && ("first" == i.ft.rows.toggleColumn && t.column.index == i.ft.columns.firstVisibleIndex || "last" == i.ft.rows.toggleColumn && t.column.index == i.ft.columns.lastVisibleIndex) && t.$el.prepend(i.$toggle), t.$el.add(t.column.$el).removeClass("footable-first-visible footable-last-visible"), t.column.index == i.ft.columns.firstVisibleIndex && t.$el.add(t.column.$el).addClass("footable-first-visible"), t.column.index == i.ft.columns.lastVisibleIndex && t.$el.add(t.column.$el).addClass("footable-last-visible")
            })), this.expanded && this.expand()
        },
        toggle: function() {
            this.created && this.ft.columns.hasHidden && (this.expanded ? this.collapse() : this.expand())
        },
        _onToggle: function(e) {
            var i = e.data.self;
            t(e.target).is(i.ft.rows.toggleSelector) && i.toggle()
        }
    })
}(jQuery, FooTable),
function(t, e) {
    e.instances = [], e.Table = e.Class.extend({
        construct: function(i, n, s) {
            this._resizeTimeout = null, this.id = e.instances.push(this), this.initialized = !1, this.$el = (e.is.jq(i) ? i : t(i)).first(), this.$loader = t("<div/>", {
                class: "footable-loader"
            }).append(t("<span/>", {
                class: "fooicon fooicon-loader"
            })), this.o = t.extend(!0, {}, e.defaults, n), this.data = this.$el.data() || {}, this.classes = [], this.components = e.components.load(e.is.hash(this.data.components) ? this.data.components : this.o.components, this), this.breakpoints = this.use(FooTable.Breakpoints), this.columns = this.use(FooTable.Columns), this.rows = this.use(FooTable.Rows), this._construct(s)
        },
        _construct: function(t) {
            var i = this;
            return this._preinit().then((function() {
                return i._init().then((function() {
                    return i.raise("ready.ft.table").then((function() {
                        e.is.fn(t) && t.call(i, i)
                    }))
                }))
            })).always((function(t) {
                i.$el.show(), e.is.error(t) && console.error("FooTable: unhandled error thrown during initialization.", t)
            }))
        },
        _preinit: function() {
            var t = this;
            return this.raise("preinit.ft.table", [t.data]).then((function() {
                var i = (t.$el.attr("class") || "").match(/\S+/g) || [];
                t.o.ajax = e.checkFnValue(t, t.data.ajax, t.o.ajax), t.o.stopPropagation = e.is.boolean(t.data.stopPropagation) ? t.data.stopPropagation : t.o.stopPropagation;
                for (var n = 0, s = i.length; s > n; n++) e.str.startsWith(i[n], "footable") || t.classes.push(i[n]);
                return t.$el.hide().after(t.$loader), t.execute(!1, !1, "preinit", t.data)
            }))
        },
        _init: function() {
            var i = this;
            return i.raise("init.ft.table").then((function() {
                var n = i.$el.children("thead"),
                    s = i.$el.children("tbody"),
                    o = i.$el.children("tfoot");
                return i.$el.addClass("footable footable-" + i.id), e.is.hash(i.o.on) && i.$el.on(i.o.on), 0 == o.length && i.$el.append(o = t("<tfoot/>")), 0 == s.length && i.$el.append("<tbody/>"), 0 == n.length && i.$el.prepend(n = t("<thead/>")), i.execute(!1, !0, "init").then((function() {
                    return i.$el.data("__FooTable__", i), 0 == o.children("tr").length && o.remove(), 0 == n.children("tr").length && n.remove(), i.raise("postinit.ft.table").then((function() {
                        return i.draw()
                    })).always((function() {
                        t(window).off("resize.ft" + i.id, i._onWindowResize).on("resize.ft" + i.id, {
                            self: i
                        }, i._onWindowResize), i.initialized = !0
                    }))
                }))
            }))
        },
        destroy: function() {
            var i = this;
            return i.raise("destroy.ft.table").then((function() {
                return i.execute(!0, !0, "destroy").then((function() {
                    i.$el.removeData("__FooTable__").removeClass("footable-" + i.id), e.is.hash(i.o.on) && i.$el.off(i.o.on), t(window).off("resize.ft" + i.id, i._onWindowResize), i.initialized = !1, e.instances[i.id] = null
                }))
            })).fail((function(t) {
                e.is.error(t) && console.error("FooTable: unhandled error thrown while destroying the plugin.", t)
            }))
        },
        raise: function(i, n) {
            var s = this,
                o = e.__debug__ && (e.is.emptyArray(e.__debug_options__.events) || e.arr.any(e.__debug_options__.events, (function(t) {
                    return e.str.contains(i, t)
                })));
            return (n = n || []).unshift(this), t.Deferred((function(e) {
                var r = t.Event(i);
                1 == s.o.stopPropagation && s.$el.one(i, (function(t) {
                    t.stopPropagation()
                })), o && console.log("FooTable:" + i + ": ", n), s.$el.trigger(r, n), r.isDefaultPrevented() ? (o && console.log('FooTable: default prevented for the "' + i + '" event.'), e.reject(r)) : e.resolve(r)
            }))
        },
        use: function(t) {
            for (var e = 0, i = this.components.length; i > e; e++)
                if (this.components[e] instanceof t) return this.components[e];
            return null
        },
        draw: function() {
            var t = this,
                i = t.$el.clone().insertBefore(t.$el);
            return t.$el.detach(), t.execute(!1, !0, "predraw").then((function() {
                return t.raise("predraw.ft.table").then((function() {
                    return t.execute(!1, !0, "draw").then((function() {
                        return t.raise("draw.ft.table").then((function() {
                            return t.execute(!1, !0, "postdraw").then((function() {
                                return t.raise("postdraw.ft.table")
                            }))
                        }))
                    }))
                }))
            })).fail((function(t) {
                e.is.error(t) && console.error("FooTable: unhandled error thrown during a draw operation.", t)
            })).always((function() {
                i.replaceWith(t.$el), t.$loader.remove()
            }))
        },
        execute: function(t, i, n, s, o) {
            var r = this,
                a = Array.prototype.slice.call(arguments);
            t = a.shift();
            var l = (i = a.shift()) ? e.arr.get(r.components, (function(t) {
                return t.enabled
            })) : r.components.slice(0);
            return a.unshift(t ? l.reverse() : l), r._execute.apply(r, a)
        },
        _execute: function(i, n, s, o) {
            if (!i || !i.length) return t.when();
            var r, a = this,
                l = Array.prototype.slice.call(arguments);
            return i = l.shift(), n = l.shift(), r = i.shift(), e.is.fn(r[n]) ? t.Deferred((function(t) {
                try {
                    var i = r[n].apply(r, l);
                    if (e.is.promise(i)) return i.then(t.resolve, t.reject);
                    t.resolve(i)
                } catch (e) {
                    t.reject(e)
                }
            })).then((function() {
                return a._execute.apply(a, [i, n].concat(l))
            })) : a._execute.apply(a, [i, n].concat(l))
        },
        _onWindowResize: function(t) {
            var e = t.data.self;
            null != e._resizeTimeout && clearTimeout(e._resizeTimeout), e._resizeTimeout = setTimeout((function() {
                e._resizeTimeout = null, e.raise("resize.ft.table").then((function() {
                    e.breakpoints.check()
                }))
            }), 300)
        }
    })
}(jQuery, FooTable),
function(t, e) {
    e.ArrayColumn = e.Column.extend({
        construct: function(t, e) {
            this._super(t, e, "array")
        },
        parser: function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i),
                    s = n.data("value");
                if (e.is.array(s)) return s;
                s = n.html();
                try {
                    s = JSON.parse(s)
                } catch (t) {
                    s = null
                }
                return e.is.array(s) ? s : null
            }
            return e.is.array(i) ? i : null
        },
        formatter: function(t, i, n) {
            return e.is.array(t) ? JSON.stringify(t) : ""
        }
    }), e.columns.register("array", e.ArrayColumn)
}(jQuery, FooTable),
function(t, e) {
    e.is.undef(window.moment) || (e.DateColumn = e.Column.extend({
        construct: function(t, i) {
            this._super(t, i, "date"), this.formatString = e.is.string(i.formatString) ? i.formatString : "MM-DD-YYYY"
        },
        parser: function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i).data("value");
                i = e.is.defined(n) ? n : t(i).text(), e.is.string(i) && (i = isNaN(i) ? i : +i)
            }
            if (e.is.date(i)) return moment(i);
            if (e.is.object(i) && e.is.boolean(i._isAMomentObject)) return i;
            if (e.is.string(i)) {
                if (isNaN(i)) return moment(i, this.formatString);
                i = +i
            }
            return e.is.number(i) ? moment(i) : null
        },
        formatter: function(t, i, n) {
            return e.is.object(t) && e.is.boolean(t._isAMomentObject) && t.isValid() ? t.format(this.formatString) : ""
        },
        filterValue: function(i) {
            if ((e.is.element(i) || e.is.jq(i)) && (i = t(i).data("filterValue") || t(i).text()), e.is.hash(i) && e.is.hash(i.options) && (e.is.string(i.options.filterValue) && (i = i.options.filterValue), e.is.defined(i.value) && (i = i.value)), e.is.object(i) && e.is.boolean(i._isAMomentObject)) return i.format(this.formatString);
            if (e.is.string(i)) {
                if (isNaN(i)) return i;
                i = +i
            }
            return e.is.number(i) || e.is.date(i) ? moment(i).format(this.formatString) : e.is.defined(i) && null != i ? i + "" : ""
        }
    }), e.columns.register("date", e.DateColumn))
}(jQuery, FooTable),
function(t, e) {
    e.HTMLColumn = e.Column.extend({
        construct: function(t, e) {
            this._super(t, e, "html")
        },
        parser: function(i) {
            if (e.is.string(i) && (i = t(t.trim(i))), e.is.element(i) && (i = t(i)), e.is.jq(i)) {
                var n = i.prop("tagName").toLowerCase();
                if ("td" == n || "th" == n) {
                    var s = i.data("value");
                    return e.is.defined(s) ? s : i.contents()
                }
                return i
            }
            return null
        }
    }), e.columns.register("html", e.HTMLColumn)
}(jQuery, FooTable),
function(t, e) {
    e.NumberColumn = e.Column.extend({
        construct: function(t, i) {
            this._super(t, i, "number"), this.decimalSeparator = e.is.string(i.decimalSeparator) ? i.decimalSeparator : ".", this.thousandSeparator = e.is.string(i.thousandSeparator) ? i.thousandSeparator : ",", this.decimalSeparatorRegex = new RegExp(e.str.escapeRegExp(this.decimalSeparator), "g"), this.thousandSeparatorRegex = new RegExp(e.str.escapeRegExp(this.thousandSeparator), "g"), this.cleanRegex = new RegExp("[^-0-9" + e.str.escapeRegExp(this.decimalSeparator) + "]", "g")
        },
        parser: function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i).data("value");
                i = e.is.defined(n) ? n : t(i).text().replace(this.cleanRegex, "")
            }
            return e.is.string(i) && (i = i.replace(this.thousandSeparatorRegex, "").replace(this.decimalSeparatorRegex, "."), i = parseFloat(i)), e.is.number(i) ? i : null
        },
        formatter: function(t, e, i) {
            if (null == t) return "";
            var n = (t + "").split(".");
            return 2 == n.length && n[0].length > 3 && (n[0] = n[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator)), n.join(this.decimalSeparator)
        }
    }), e.columns.register("number", e.NumberColumn)
}(jQuery, FooTable),
function(t, e) {
    e.ObjectColumn = e.Column.extend({
        construct: function(t, e) {
            this._super(t, e, "object")
        },
        parser: function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i),
                    s = n.data("value");
                if (e.is.object(s)) return s;
                s = n.html();
                try {
                    s = JSON.parse(s)
                } catch (t) {
                    s = null
                }
                return e.is.object(s) ? s : null
            }
            return e.is.object(i) ? i : null
        },
        formatter: function(t, i, n) {
            return e.is.object(t) ? JSON.stringify(t) : ""
        }
    }), e.columns.register("object", e.ObjectColumn)
}(jQuery, FooTable),
function(t, e) {
    e.Breakpoint = e.Class.extend({
        construct: function(t, e) {
            this.name = t, this.width = e
        }
    })
}(jQuery, FooTable),
function(t, e) {
    e.Breakpoints = e.Component.extend({
        construct: function(t) {
            this._super(t, !0), this.o = t.o, this.current = null, this.array = [], this.cascade = this.o.cascade, this.useParentWidth = this.o.useParentWidth, this.hidden = null, this._classNames = "", this.getWidth = e.checkFnValue(this, this.o.getWidth, this.getWidth)
        },
        preinit: function(t) {
            var i = this;
            return this.ft.raise("preinit.ft.breakpoints", [t]).then((function() {
                for (var n in i.cascade = e.is.boolean(t.cascade) ? t.cascade : i.cascade, i.o.breakpoints = e.is.hash(t.breakpoints) ? t.breakpoints : i.o.breakpoints, i.getWidth = e.checkFnValue(i, t.getWidth, i.getWidth), null == i.o.breakpoints && (i.o.breakpoints = {
                        xs: 480,
                        sm: 768,
                        md: 992,
                        lg: 1200
                    }), i.o.breakpoints) i.o.breakpoints.hasOwnProperty(n) && (i.array.push(new e.Breakpoint(n, i.o.breakpoints[n])), i._classNames += "breakpoint-" + n + " ");
                i.array.sort((function(t, e) {
                    return e.width - t.width
                }))
            }))
        },
        init: function() {
            var t = this;
            return this.ft.raise("init.ft.breakpoints").then((function() {
                t.current = t.get()
            }))
        },
        draw: function() {
            this.ft.$el.removeClass(this._classNames).addClass("breakpoint-" + this.current.name)
        },
        calculate: function() {
            for (var t, i = this, n = null, s = [], o = null, r = i.getWidth(), a = 0, l = i.array.length; l > a; a++) t = i.array[a], (!n && a == l - 1 || r >= t.width && (!(o instanceof e.Breakpoint) || r < o.width)) && (n = t), n || s.push(t.name), o = t;
            return s.push(n.name), i.hidden = s.join(" "), n
        },
        visible: function(t) {
            if (e.is.emptyString(t)) return !0;
            if ("all" === t) return !1;
            for (var i = t.split(" "), n = 0, s = i.length; s > n; n++)
                if (this.cascade ? e.str.containsWord(this.hidden, i[n]) : i[n] == this.current.name) return !1;
            return !0
        },
        check: function() {
            var t = this,
                i = t.get();
            i instanceof e.Breakpoint && i != t.current && t.ft.raise("before.ft.breakpoints", [t.current, i]).then((function() {
                var e = t.current;
                return t.current = i, t.ft.draw().then((function() {
                    t.ft.raise("after.ft.breakpoints", [t.current, e])
                }))
            }))
        },
        get: function(t) {
            return e.is.undef(t) ? this.calculate() : t instanceof e.Breakpoint ? t : e.is.string(t) ? e.arr.first(this.array, (function(e) {
                return e.name == t
            })) : e.is.number(t) && t >= 0 && t < this.array.length ? this.array[t] : null
        },
        getWidth: function() {
            return e.is.fn(this.o.getWidth) ? this.o.getWidth(this.ft) : 1 == this.useParentWidth ? this.getParentWidth() : this.getViewportWidth()
        },
        getParentWidth: function() {
            return this.ft.$el.parent().width()
        },
        getViewportWidth: function() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth, 0)
        }
    }), e.components.register("breakpoints", e.Breakpoints, 1e3)
}(jQuery, FooTable),
function(t) {
    t.Column.prototype.breakpoints = null, t.Column.prototype.__breakpoints_define__ = function(e) {
        this.breakpoints = t.is.emptyString(e.breakpoints) ? null : e.breakpoints
    }, t.Column.extend("define", (function(t) {
        this._super(t), this.__breakpoints_define__(t)
    }))
}(FooTable),
function(t) {
    t.Defaults.prototype.breakpoints = null, t.Defaults.prototype.cascade = !1, t.Defaults.prototype.useParentWidth = !1, t.Defaults.prototype.getWidth = null
}(FooTable),
function(t, e) {
    e.Columns = e.Component.extend({
        construct: function(t) {
            this._super(t, !0), this.o = t.o, this.array = [], this.$header = null, this.showHeader = t.o.showHeader, this._fromHTML = e.is.emptyArray(t.o.columns) && !e.is.promise(t.o.columns)
        },
        parse: function(i) {
            var n = this;
            return t.Deferred((function(i) {
                function s(i, n) {
                    var s = [];
                    if (0 == i.length || 0 == n.length) s = i.concat(n);
                    else {
                        var o = 0;
                        e.arr.each(i.concat(n), (function(t) {
                            t.index > o && (o = t.index)
                        })), o++;
                        for (var r, a, l = 0; o > l; l++) r = {}, e.arr.each(i, (function(t) {
                            return t.index == l ? (r = t, !1) : void 0
                        })), a = {}, e.arr.each(n, (function(t) {
                            return t.index == l ? (a = t, !1) : void 0
                        })), s.push(t.extend(!0, {}, r, a))
                    }
                    return s
                }
                var o, r, a = [],
                    l = [],
                    c = n.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();
                if (c.length > 0) {
                    var u = c.parent().is("tbody") && c.children().length == c.children("td").length;
                    u || (n.$header = c.addClass("footable-header")), c.children("td,th").each((function(e, i) {
                        o = t(i), (r = o.data()).index = e, r.$el = o, r.virtual = u, l.push(r)
                    })), u && (n.showHeader = !1)
                }
                e.is.array(n.o.columns) && !e.is.emptyArray(n.o.columns) ? (e.arr.each(n.o.columns, (function(t, e) {
                    t.index = e, a.push(t)
                })), n.parseFinalize(i, s(a, l))) : e.is.promise(n.o.columns) ? n.o.columns.then((function(t) {
                    e.arr.each(t, (function(t, e) {
                        t.index = e, a.push(t)
                    })), n.parseFinalize(i, s(a, l))
                }), (function(t) {
                    i.reject(Error("Columns ajax request error: " + t.status + " (" + t.statusText + ")"))
                })) : n.parseFinalize(i, s(a, l))
            }))
        },
        parseFinalize: function(t, i) {
            var n, s = this,
                o = [];
            e.arr.each(i, (function(t) {
                (n = e.columns.contains(t.type) ? e.columns.make(t.type, s.ft, t) : new e.Column(s.ft, t)) && o.push(n)
            })), e.is.emptyArray(o) ? t.reject(Error("No columns supplied.")) : (o.sort((function(t, e) {
                return t.index - e.index
            })), t.resolve(o))
        },
        preinit: function(t) {
            var i = this;
            return i.ft.raise("preinit.ft.columns", [t]).then((function() {
                return i.parse(t).then((function(n) {
                    i.array = n, i.showHeader = e.is.boolean(t.showHeader) ? t.showHeader : i.showHeader
                }))
            }))
        },
        init: function() {
            var t = this;
            return this.ft.raise("init.ft.columns", [t.array]).then((function() {
                t.$create()
            }))
        },
        destroy: function() {
            var t = this;
            this.ft.raise("destroy.ft.columns").then((function() {
                t._fromHTML || t.$header.remove()
            }))
        },
        predraw: function() {
            var t = this,
                i = !0;
            t.visibleColspan = 0, t.firstVisibleIndex = 0, t.lastVisibleIndex = 0, t.hasHidden = !1, e.arr.each(t.array, (function(e) {
                e.hidden = !t.ft.breakpoints.visible(e.breakpoints), !e.hidden && e.visible && (i && (t.firstVisibleIndex = e.index, i = !1), t.lastVisibleIndex = e.index, t.visibleColspan++), e.hidden && (t.hasHidden = !0)
            })), t.ft.$el.toggleClass("breakpoint", t.hasHidden)
        },
        draw: function() {
            e.arr.each(this.array, (function(t) {
                t.$el.css("display", t.hidden || !t.visible ? "none" : "table-cell")
            })), !this.showHeader && e.is.jq(this.$header.parent()) && this.$header.detach()
        },
        $create: function() {
            var i = this;
            i.$header = e.is.jq(i.$header) ? i.$header : t("<tr/>", {
                class: "footable-header"
            }), i.$header.children("th,td").detach(), e.arr.each(i.array, (function(t) {
                i.$header.append(t.$el)
            })), i.showHeader && !e.is.jq(i.$header.parent()) && i.ft.$el.children("thead").append(i.$header)
        },
        get: function(t) {
            return t instanceof e.Column ? t : e.is.string(t) ? e.arr.first(this.array, (function(e) {
                return e.name == t
            })) : e.is.number(t) ? e.arr.first(this.array, (function(e) {
                return e.index == t
            })) : e.is.fn(t) ? e.arr.get(this.array, t) : null
        },
        ensure: function(t) {
            var i = this,
                n = [];
            return e.is.array(t) ? (e.arr.each(t, (function(t) {
                n.push(i.get(t))
            })), n) : n
        }
    }), e.components.register("columns", e.Columns, 900)
}(jQuery, FooTable),
function(t) {
    t.Defaults.prototype.columns = [], t.Defaults.prototype.showHeader = !0
}(FooTable),
function(t, e) {
    e.Rows = e.Component.extend({
        construct: function(t) {
            this._super(t, !0), this.o = t.o, this.array = [], this.all = [], this.showToggle = t.o.showToggle, this.toggleSelector = t.o.toggleSelector, this.toggleColumn = t.o.toggleColumn, this.emptyString = t.o.empty, this.expandFirst = t.o.expandFirst, this.expandAll = t.o.expandAll, this.$empty = null, this._fromHTML = e.is.emptyArray(t.o.rows) && !e.is.promise(t.o.rows)
        },
        parse: function() {
            var i = this;
            return t.Deferred((function(t) {
                var n = i.ft.$el.children("tbody").children("tr");
                e.is.array(i.o.rows) && i.o.rows.length > 0 ? i.parseFinalize(t, i.o.rows) : e.is.promise(i.o.rows) ? i.o.rows.then((function(e) {
                    i.parseFinalize(t, e)
                }), (function(e) {
                    t.reject(Error("Rows ajax request error: " + e.status + " (" + e.statusText + ")"))
                })) : e.is.jq(n) ? (i.parseFinalize(t, n), n.detach()) : i.parseFinalize(t, [])
            }))
        },
        parseFinalize: function(i, n) {
            var s = this,
                o = t.map(n, (function(t) {
                    return new e.Row(s.ft, s.ft.columns.array, t)
                }));
            i.resolve(o)
        },
        preinit: function(t) {
            var i = this;
            return i.ft.raise("preinit.ft.rows", [t]).then((function() {
                return i.parse().then((function(n) {
                    i.all = n, i.array = i.all.slice(0), i.showToggle = e.is.boolean(t.showToggle) ? t.showToggle : i.showToggle, i.toggleSelector = e.is.string(t.toggleSelector) ? t.toggleSelector : i.toggleSelector, i.toggleColumn = e.is.string(t.toggleColumn) ? t.toggleColumn : i.toggleColumn, "first" != i.toggleColumn && "last" != i.toggleColumn && (i.toggleColumn = "first"), i.emptyString = e.is.string(t.empty) ? t.empty : i.emptyString, i.expandFirst = e.is.boolean(t.expandFirst) ? t.expandFirst : i.expandFirst, i.expandAll = e.is.boolean(t.expandAll) ? t.expandAll : i.expandAll
                }))
            }))
        },
        init: function() {
            var t = this;
            return t.ft.raise("init.ft.rows", [t.all]).then((function() {
                t.$create()
            }))
        },
        destroy: function() {
            var t = this;
            this.ft.raise("destroy.ft.rows").then((function() {
                e.arr.each(t.array, (function(e) {
                    e.predraw(!t._fromHTML)
                })), t.all = t.array = []
            }))
        },
        predraw: function() {
            e.arr.each(this.array, (function(t) {
                t.predraw()
            })), this.array = this.all.slice(0)
        },
        $create: function() {
            this.$empty = t("<tr/>", {
                class: "footable-empty"
            }).append(t("<td/>").text(this.emptyString))
        },
        draw: function() {
            var t = this,
                i = t.ft.$el.children("tbody"),
                n = !0;
            t.array.length > 0 ? (t.$empty.detach(), e.arr.each(t.array, (function(e) {
                (t.expandFirst && n || t.expandAll) && (e.expanded = !0, n = !1), e.draw(i)
            }))) : (t.$empty.children("td").attr("colspan", t.ft.columns.visibleColspan), i.append(t.$empty))
        },
        load: function(i, n) {
            var s = this,
                o = t.map(i, (function(t) {
                    return new e.Row(s.ft, s.ft.columns.array, t)
                }));
            e.arr.each(this.array, (function(t) {
                t.predraw()
            })), this.all = e.is.boolean(n) && n ? this.all.concat(o) : o, this.array = this.all.slice(0), this.ft.draw()
        },
        expand: function() {
            e.arr.each(this.array, (function(t) {
                t.expand()
            }))
        },
        collapse: function() {
            e.arr.each(this.array, (function(t) {
                t.collapse()
            }))
        }
    }), e.components.register("rows", e.Rows, 800)
}(jQuery, FooTable),
function(t) {
    t.Defaults.prototype.rows = [], t.Defaults.prototype.empty = "No results", t.Defaults.prototype.showToggle = !0, t.Defaults.prototype.toggleSelector = "tr,td,.footable-toggle", t.Defaults.prototype.toggleColumn = "first", t.Defaults.prototype.expandFirst = !1, t.Defaults.prototype.expandAll = !1
}(FooTable), FooTable.Table.prototype.loadRows = function(t, e) {
        this.rows.load(t, e)
    },
    function(t) {
        t.Filter = t.Class.extend({
            construct: function(e, i, n, s, o, r, a) {
                this.name = e, this.space = !t.is.string(s) || "OR" != s && "AND" != s ? "AND" : s, this.connectors = !t.is.boolean(o) || o, this.ignoreCase = !t.is.boolean(r) || r, this.hidden = !!t.is.boolean(a) && a, this.query = i instanceof t.Query ? i : new t.Query(i, this.space, this.connectors, this.ignoreCase), this.columns = n
            },
            match: function(e) {
                return !!t.is.string(e) && (t.is.string(this.query) && (this.query = new t.Query(this.query, this.space, this.connectors, this.ignoreCase)), this.query instanceof t.Query && this.query.match(e))
            },
            matchRow: function(e) {
                var i = this,
                    n = t.arr.map(e.cells, (function(e) {
                        return t.arr.contains(i.columns, e.column) ? e.filterValue : null
                    })).join(" ");
                return i.match(n)
            }
        })
    }(FooTable),
    function(t, e) {
        e.Filtering = e.Component.extend({
            construct: function(t) {
                this._super(t, t.o.filtering.enabled), this.filters = t.o.filtering.filters, this.delay = t.o.filtering.delay, this.min = t.o.filtering.min, this.space = t.o.filtering.space, this.connectors = t.o.filtering.connectors, this.ignoreCase = t.o.filtering.ignoreCase, this.exactMatch = t.o.filtering.exactMatch, this.placeholder = t.o.filtering.placeholder, this.dropdownTitle = t.o.filtering.dropdownTitle, this.position = t.o.filtering.position, this.focus = t.o.filtering.focus, this.container = t.o.filtering.container, this.$container = null, this.$row = null, this.$cell = null, this.$form = null, this.$dropdown = null, this.$input = null, this.$button = null, this._filterTimeout = null, this._exactRegExp = /^"(.*?)"$/
            },
            preinit: function(t) {
                var i = this;
                return i.ft.raise("preinit.ft.filtering").then((function() {
                    i.ft.$el.hasClass("footable-filtering") && (i.enabled = !0), i.enabled = e.is.boolean(t.filtering) ? t.filtering : i.enabled, i.enabled && (i.space = e.is.string(t.filterSpace) ? t.filterSpace : i.space, i.min = e.is.number(t.filterMin) ? t.filterMin : i.min, i.connectors = e.is.boolean(t.filterConnectors) ? t.filterConnectors : i.connectors, i.ignoreCase = e.is.boolean(t.filterIgnoreCase) ? t.filterIgnoreCase : i.ignoreCase, i.exactMatch = e.is.boolean(t.filterExactMatch) ? t.filterExactMatch : i.exactMatch, i.focus = e.is.boolean(t.filterFocus) ? t.filterFocus : i.focus, i.delay = e.is.number(t.filterDelay) ? t.filterDelay : i.delay, i.placeholder = e.is.string(t.filterPlaceholder) ? t.filterPlaceholder : i.placeholder, i.dropdownTitle = e.is.string(t.filterDropdownTitle) ? t.filterDropdownTitle : i.dropdownTitle, i.container = e.is.string(t.filterContainer) ? t.filterContainer : i.container, i.filters = e.is.array(t.filterFilters) ? i.ensure(t.filterFilters) : i.ensure(i.filters), i.ft.$el.hasClass("footable-filtering-left") && (i.position = "left"), i.ft.$el.hasClass("footable-filtering-center") && (i.position = "center"), i.ft.$el.hasClass("footable-filtering-right") && (i.position = "right"), i.position = e.is.string(t.filterPosition) ? t.filterPosition : i.position)
                }), (function() {
                    i.enabled = !1
                }))
            },
            init: function() {
                var t = this;
                return t.ft.raise("init.ft.filtering").then((function() {
                    t.$create()
                }), (function() {
                    t.enabled = !1
                }))
            },
            destroy: function() {
                var t = this;
                return t.ft.raise("destroy.ft.filtering").then((function() {
                    t.ft.$el.removeClass("footable-filtering").find("thead > tr.footable-filtering").remove()
                }))
            },
            $create: function() {
                var i, n = this,
                    s = t("<div/>", {
                        class: "form-group footable-filtering-search"
                    }).append(t("<label/>", {
                        class: "sr-only",
                        text: "Search"
                    })),
                    o = t("<div/>", {
                        class: "input-group"
                    }).appendTo(s),
                    r = t("<div/>", {
                        class: "input-group-btn"
                    }),
                    a = t("<button/>", {
                        type: "button",
                        class: "btn btn-default dropdown-toggle"
                    }).on("click", {
                        self: n
                    }, n._onDropdownToggleClicked).append(t("<span/>", {
                        class: "caret"
                    }));
                switch (n.position) {
                    case "left":
                        i = "footable-filtering-left";
                        break;
                    case "center":
                        i = "footable-filtering-center";
                        break;
                    default:
                        i = "footable-filtering-right"
                }
                n.ft.$el.addClass("footable-filtering").addClass(i), n.$container = null === n.container ? t() : t(n.container).first(), n.$container.length ? n.$container.addClass("footable-filtering-external").addClass(i) : (n.$row = t("<tr/>", {
                    class: "footable-filtering"
                }).prependTo(n.ft.$el.children("thead")), n.$cell = t("<th/>").attr("colspan", n.ft.columns.visibleColspan).appendTo(n.$row), n.$container = n.$cell), n.$form = t("<form/>", {
                    class: "form-inline"
                }).append(s).appendTo(n.$container), n.$input = t("<input/>", {
                    type: "text",
                    class: "form-control",
                    placeholder: n.placeholder
                }), n.$button = t("<button/>", {
                    type: "button",
                    class: "btn btn-primary"
                }).on("click", {
                    self: n
                }, n._onSearchButtonClicked).append(t("<span/>", {
                    class: "fooicon fooicon-search"
                })), n.$dropdown = t("<ul/>", {
                    class: "dropdown-menu dropdown-menu-right"
                }), e.is.emptyString(n.dropdownTitle) || n.$dropdown.append(t("<li/>", {
                    class: "dropdown-header",
                    text: n.dropdownTitle
                })), n.$dropdown.append(e.arr.map(n.ft.columns.array, (function(e) {
                    return e.filterable ? t("<li/>").append(t("<a/>", {
                        class: "checkbox"
                    }).append(t("<label/>", {
                        html: e.title
                    }).prepend(t("<input/>", {
                        type: "checkbox",
                        checked: !0
                    }).data("__FooTableColumn__", e)))) : null
                }))), n.delay > 0 && (n.$input.on("keypress keyup paste", {
                    self: n
                }, n._onSearchInputChanged), n.$dropdown.on("click", 'input[type="checkbox"]', {
                    self: n
                }, n._onSearchColumnClicked)), r.append(n.$button, a, n.$dropdown), o.append(n.$input, r)
            },
            predraw: function() {
                if (!e.is.emptyArray(this.filters)) {
                    var i = this;
                    i.ft.rows.array = t.grep(i.ft.rows.array, (function(t) {
                        return t.filtered(i.filters)
                    }))
                }
            },
            draw: function() {
                e.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan);
                var t = this.find("search");
                if (t instanceof e.Filter) {
                    var i = t.query.val();
                    this.exactMatch && this._exactRegExp.test(i) && (i = i.replace(this._exactRegExp, "$1")), this.$input.val(i)
                } else this.$input.val(null);
                this.setButton(!e.arr.any(this.filters, (function(t) {
                    return !t.hidden
                })))
            },
            addFilter: function(t, i, n, s, o, r, a) {
                var l = this.createFilter(t, i, n, s, o, r, a);
                l instanceof e.Filter && (this.removeFilter(l.name), this.filters.push(l))
            },
            removeFilter: function(t) {
                e.arr.remove(this.filters, (function(e) {
                    return e.name == t
                }))
            },
            filter: function(t) {
                var e = this;
                return e.filters = e.ensure(e.filters), e.ft.raise("before.ft.filtering", [e.filters]).then((function() {
                    if (e.filters = e.ensure(e.filters), t) var i = e.$input.prop("selectionStart"),
                        n = e.$input.prop("selectionEnd");
                    return e.ft.draw().then((function() {
                        t && e.$input.focus().prop({
                            selectionStart: i,
                            selectionEnd: n
                        }), e.ft.raise("after.ft.filtering", [e.filters])
                    }))
                }))
            },
            clear: function() {
                return this.filters = e.arr.get(this.filters, (function(t) {
                    return t.hidden
                })), this.filter(this.focus)
            },
            setButton: function(t) {
                t ? this.$button.children(".fooicon").removeClass("fooicon-remove").addClass("fooicon-search") : this.$button.children(".fooicon").removeClass("fooicon-search").addClass("fooicon-remove")
            },
            find: function(t) {
                return e.arr.first(this.filters, (function(e) {
                    return e.name == t
                }))
            },
            columns: function() {
                return e.is.jq(this.$dropdown) ? this.$dropdown.find("input:checked").map((function() {
                    return t(this).data("__FooTableColumn__")
                })).get() : this.ft.columns.get((function(t) {
                    return t.filterable
                }))
            },
            ensure: function(t) {
                var i = this,
                    n = [],
                    s = i.columns();
                return e.is.emptyArray(t) || e.arr.each(t, (function(t) {
                    (t = i._ensure(t, s)) instanceof e.Filter && n.push(t)
                })), n
            },
            createFilter: function(t, i, n, s, o, r, a) {
                return e.is.string(t) && (t = {
                    name: t,
                    query: i,
                    columns: n,
                    ignoreCase: s,
                    connectors: o,
                    space: r,
                    hidden: a
                }), this._ensure(t, this.columns())
            },
            _ensure: function(t, i) {
                return (e.is.hash(t) || t instanceof e.Filter) && !e.is.emptyString(t.name) && (!e.is.emptyString(t.query) || t.query instanceof e.Query) ? (t.columns = e.is.emptyArray(t.columns) ? i : this.ft.columns.ensure(t.columns), t.ignoreCase = e.is.boolean(t.ignoreCase) ? t.ignoreCase : this.ignoreCase, t.connectors = e.is.boolean(t.connectors) ? t.connectors : this.connectors, t.hidden = !!e.is.boolean(t.hidden) && t.hidden, t.space = !e.is.string(t.space) || "AND" !== t.space && "OR" !== t.space ? this.space : t.space, t.query = e.is.string(t.query) ? new e.Query(t.query, t.space, t.connectors, t.ignoreCase) : t.query, t instanceof e.Filter ? t : new e.Filter(t.name, t.query, t.columns, t.space, t.connectors, t.ignoreCase, t.hidden)) : null
            },
            _onSearchInputChanged: function(t) {
                var i = t.data.self,
                    n = "keypress" == t.type && !e.is.emptyString(String.fromCharCode(t.charCode)),
                    s = "keyup" == t.type && (8 == t.which || 46 == t.which),
                    o = "paste" == t.type;
                (n || s || o) && (13 == t.which && t.preventDefault(), null != i._filterTimeout && clearTimeout(i._filterTimeout), i._filterTimeout = setTimeout((function() {
                    i._filterTimeout = null;
                    var t = i.$input.val();
                    t.length >= i.min ? (i.exactMatch && !i._exactRegExp.test(t) && (t = '"' + t + '"'), i.addFilter("search", t), i.filter(i.focus)) : e.is.emptyString(t) && i.clear()
                }), i.delay))
            },
            _onSearchButtonClicked: function(t) {
                t.preventDefault();
                var e = t.data.self;
                if (null != e._filterTimeout && clearTimeout(e._filterTimeout), e.$button.children(".fooicon").hasClass("fooicon-remove")) e.clear();
                else {
                    var i = e.$input.val();
                    i.length >= e.min && (e.exactMatch && !e._exactRegExp.test(i) && (i = '"' + i + '"'), e.addFilter("search", i), e.filter(e.focus))
                }
            },
            _onSearchColumnClicked: function(t) {
                var e = t.data.self;
                null != e._filterTimeout && clearTimeout(e._filterTimeout), e._filterTimeout = setTimeout((function() {
                    e._filterTimeout = null;
                    var t = e.$button.children(".fooicon");
                    t.hasClass("fooicon-remove") && (t.removeClass("fooicon-remove").addClass("fooicon-search"), e.addFilter("search", e.$input.val()), e.filter())
                }), e.delay)
            },
            _onDropdownToggleClicked: function(e) {
                e.preventDefault(), e.stopPropagation();
                var i = e.data.self;
                i.$dropdown.parent().toggleClass("open"), i.$dropdown.parent().hasClass("open") ? t(document).on("click.footable", {
                    self: i
                }, i._onDocumentClicked) : t(document).off("click.footable", i._onDocumentClicked)
            },
            _onDocumentClicked: function(e) {
                if (0 == t(e.target).closest(".dropdown-menu").length) {
                    e.preventDefault();
                    var i = e.data.self;
                    i.$dropdown.parent().removeClass("open"), t(document).off("click.footable", i._onDocumentClicked)
                }
            }
        }), e.components.register("filtering", e.Filtering, 500)
    }(jQuery, FooTable),
    function(t) {
        t.Query = t.Class.extend({
            construct: function(e, i, n, s) {
                this._original = null, this._value = null, this.space = !t.is.string(i) || "OR" != i && "AND" != i ? "AND" : i, this.connectors = !t.is.boolean(n) || n, this.ignoreCase = !t.is.boolean(s) || s, this.left = null, this.right = null, this.parts = [], this.operator = null, this.val(e)
            },
            val: function(e) {
                if (t.is.emptyString(e)) return this._value;
                if (t.is.emptyString(this._original)) this._original = e;
                else if (this._original == e) return;
                this._value = e, this._parse()
            },
            match: function(e) {
                return t.is.emptyString(this.operator) || "OR" === this.operator ? this._left(e, !1) || this._match(e, !1) || this._right(e, !1) : "AND" === this.operator ? this._left(e, !0) && this._match(e, !0) && this._right(e, !0) : void 0
            },
            _match: function(e, i) {
                var n = this,
                    s = !1,
                    o = t.is.emptyString(e);
                return t.is.emptyArray(n.parts) && n.left instanceof t.Query ? i : (t.is.emptyArray(n.parts) || ("OR" === n.space ? t.arr.each(n.parts, (function(i) {
                    if (i.empty && o) {
                        if (s = !0, i.negate) return s = !1
                    } else {
                        var r = (i.exact ? t.str.containsExact : t.str.contains)(e, i.query, n.ignoreCase);
                        if (r && !i.negate && (s = !0), r && i.negate) return s = !1
                    }
                })) : (s = !0, t.arr.each(n.parts, (function(i) {
                    if (i.empty) return (!o && !i.negate || o && i.negate) && (s = !1), s;
                    var r = (i.exact ? t.str.containsExact : t.str.contains)(e, i.query, n.ignoreCase);
                    return (!r && !i.negate || r && i.negate) && (s = !1), s
                })))), s)
            },
            _left: function(e, i) {
                return this.left instanceof t.Query ? this.left.match(e) : i
            },
            _right: function(e, i) {
                return this.right instanceof t.Query ? this.right.match(e) : i
            },
            _parse: function() {
                if (!t.is.emptyString(this._value))
                    if (/\sOR\s/.test(this._value)) {
                        this.operator = "OR";
                        var e = this._value.split(/(?:\sOR\s)(.*)?/);
                        this.left = new t.Query(e[0], this.space, this.connectors, this.ignoreCase), this.right = new t.Query(e[1], this.space, this.connectors, this.ignoreCase)
                    } else if (/\sAND\s/.test(this._value)) {
                    this.operator = "AND";
                    var i = this._value.split(/(?:\sAND\s)(.*)?/);
                    this.left = new t.Query(i[0], this.space, this.connectors, this.ignoreCase), this.right = new t.Query(i[1], this.space, this.connectors, this.ignoreCase)
                } else {
                    var n = this;
                    this.parts = t.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), (function(t) {
                        return n._part(t)
                    }))
                }
            },
            _part: function(e) {
                var i = {
                    query: e,
                    negate: !1,
                    phrase: !1,
                    exact: !1,
                    empty: !1
                };
                return t.str.startsWith(i.query, "-") && (i.query = t.str.from(i.query, "-"), i.negate = !0), /^"(.*?)"$/.test(i.query) ? (i.query = i.query.replace(/^"(.*?)"$/, "$1"), i.phrase = !0, i.exact = !0) : this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(i.query) && (i.query = i.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, (function(t, e) {
                    return t.replace(e, " ")
                })), i.phrase = !0), i.empty = i.phrase && t.is.emptyString(i.query), i
            }
        })
    }(FooTable),
    function(t) {
        t.Cell.prototype.filterValue = null, t.Cell.prototype.__filtering_define__ = function(t) {
            this.filterValue = this.column.filterValue.call(this.column, t)
        }, t.Cell.prototype.__filtering_val__ = function(e) {
            t.is.defined(e) && (this.filterValue = this.column.filterValue.call(this.column, e))
        }, t.Cell.extend("define", (function(t) {
            this._super(t), this.__filtering_define__(t)
        })), t.Cell.extend("val", (function(t, e, i) {
            var n = this._super(t, e, i);
            return this.__filtering_val__(t), n
        }))
    }(FooTable),
    function(t, e) {
        e.Column.prototype.filterable = !0, e.Column.prototype.filterValue = function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i).data("filterValue");
                return e.is.defined(n) ? "" + n : t(i).text()
            }
            if (e.is.hash(i) && e.is.hash(i.options)) {
                if (e.is.string(i.options.filterValue)) return i.options.filterValue;
                e.is.defined(i.value) && (i = i.value)
            }
            return e.is.defined(i) && null != i ? i + "" : ""
        }, e.Column.prototype.__filtering_define__ = function(t) {
            this.filterable = e.is.boolean(t.filterable) ? t.filterable : this.filterable, this.filterValue = e.checkFnValue(this, t.filterValue, this.filterValue)
        }, e.Column.extend("define", (function(t) {
            this._super(t), this.__filtering_define__(t)
        }))
    }(jQuery, FooTable), FooTable.Defaults.prototype.filtering = {
        enabled: !1,
        filters: [],
        delay: 1200,
        min: 1,
        space: "AND",
        placeholder: "Search",
        dropdownTitle: null,
        position: "right",
        connectors: !0,
        ignoreCase: !0,
        exactMatch: !1,
        focus: !0,
        container: null
    },
    function(t) {
        t.Row.prototype.filtered = function(e) {
            var i = !0,
                n = this;
            return t.arr.each(e, (function(t) {
                return 0 != (i = t.matchRow(n)) && void 0
            })), i
        }
    }(FooTable),
    function(t, e) {
        e.Sorter = e.Class.extend({
            construct: function(t, e) {
                this.column = t, this.direction = e
            }
        })
    }(jQuery, FooTable),
    function(t, e) {
        e.Sorting = e.Component.extend({
            construct: function(t) {
                this._super(t, t.o.sorting.enabled), this.o = t.o.sorting, this.column = null, this.allowed = !0, this.initial = null
            },
            preinit: function(t) {
                var i = this;
                this.ft.raise("preinit.ft.sorting", [t]).then((function() {
                    i.ft.$el.hasClass("footable-sorting") && (i.enabled = !0), i.enabled = e.is.boolean(t.sorting) ? t.sorting : i.enabled, i.enabled && (i.column = e.arr.first(i.ft.columns.array, (function(t) {
                        return t.sorted
                    })))
                }), (function() {
                    i.enabled = !1
                }))
            },
            init: function() {
                var i = this;
                this.ft.raise("init.ft.sorting").then((function() {
                    if (!i.initial) {
                        var n = !!i.column;
                        i.initial = {
                            isset: n,
                            rows: i.ft.rows.all.slice(0),
                            column: n ? i.column.name : null,
                            direction: n ? i.column.direction : null
                        }
                    }
                    e.arr.each(i.ft.columns.array, (function(e) {
                        e.sortable && e.$el.addClass("footable-sortable").append(t("<span/>", {
                            class: "fooicon fooicon-sort"
                        }))
                    })), i.ft.$el.on("click.footable", ".footable-sortable", {
                        self: i
                    }, i._onSortClicked)
                }), (function() {
                    i.enabled = !1
                }))
            },
            destroy: function() {
                var t = this;
                this.ft.raise("destroy.ft.paging").then((function() {
                    t.ft.$el.off("click.footable", ".footable-sortable", t._onSortClicked), t.ft.$el.children("thead").children("tr.footable-header").children(".footable-sortable").removeClass("footable-sortable footable-asc footable-desc").find("span.fooicon").remove()
                }))
            },
            predraw: function() {
                if (this.column) {
                    var t = this.column;
                    this.ft.rows.array.sort((function(e, i) {
                        return "DESC" == t.direction ? t.sorter(i.cells[t.index].sortValue, e.cells[t.index].sortValue) : t.sorter(e.cells[t.index].sortValue, i.cells[t.index].sortValue)
                    }))
                }
            },
            draw: function() {
                if (this.column) {
                    var t = this,
                        e = t.ft.$el.find("thead > tr > .footable-sortable"),
                        i = t.column.$el;
                    e.removeClass("footable-asc footable-desc").children(".fooicon").removeClass("fooicon-sort fooicon-sort-asc fooicon-sort-desc"), e.not(i).children(".fooicon").addClass("fooicon-sort"), i.addClass("DESC" == t.column.direction ? "footable-desc" : "footable-asc").children(".fooicon").addClass("DESC" == t.column.direction ? "fooicon-sort-desc" : "fooicon-sort-asc")
                }
            },
            sort: function(t, e) {
                return this._sort(t, e)
            },
            toggleAllowed: function(t) {
                t = e.is.boolean(t) ? t : !this.allowed, this.allowed = t, this.ft.$el.toggleClass("footable-sorting-disabled", !this.allowed)
            },
            hasChanged: function() {
                return !(!this.initial || !this.column || this.column.name === this.initial.column && (this.column.direction === this.initial.direction || null === this.initial.direction && "ASC" === this.column.direction))
            },
            reset: function() {
                this.initial && (this.initial.isset ? this.sort(this.initial.column, this.initial.direction) : (this.column && (this.column.$el.removeClass("footable-asc footable-desc"), this.column = null), this.ft.rows.all = this.initial.rows, this.ft.draw()))
            },
            _sort: function(i, n) {
                if (!this.allowed) return t.Deferred().reject("sorting disabled");
                var s = this,
                    o = new e.Sorter(s.ft.columns.get(i), e.Sorting.dir(n));
                return s.ft.raise("before.ft.sorting", [o]).then((function() {
                    return e.arr.each(s.ft.columns.array, (function(t) {
                        t != s.column && (t.direction = null)
                    })), s.column = s.ft.columns.get(o.column), s.column && (s.column.direction = e.Sorting.dir(o.direction)), s.ft.draw().then((function() {
                        s.ft.raise("after.ft.sorting", [o])
                    }))
                }))
            },
            _onSortClicked: function(e) {
                var i = e.data.self,
                    n = t(this).closest("th,td"),
                    s = n.is(".footable-asc, .footable-desc") ? n.hasClass("footable-desc") ? "ASC" : "DESC" : "ASC";
                i._sort(n.index(), s)
            }
        }), e.Sorting.dir = function(t) {
            return !e.is.string(t) || "ASC" != t && "DESC" != t ? "ASC" : t
        }, e.components.register("sorting", e.Sorting, 600)
    }(jQuery, FooTable),
    function(t) {
        t.Cell.prototype.sortValue = null, t.Cell.prototype.__sorting_define__ = function(t) {
            this.sortValue = this.column.sortValue.call(this.column, t)
        }, t.Cell.prototype.__sorting_val__ = function(e) {
            t.is.defined(e) && (this.sortValue = this.column.sortValue.call(this.column, e))
        }, t.Cell.extend("define", (function(t) {
            this._super(t), this.__sorting_define__(t)
        })), t.Cell.extend("val", (function(t, e, i) {
            var n = this._super(t, e, i);
            return this.__sorting_val__(t), n
        }))
    }(FooTable),
    function(t, e) {
        e.Column.prototype.direction = null, e.Column.prototype.sortable = !0, e.Column.prototype.sorted = !1, e.Column.prototype.sorter = function(t, e) {
            return "string" == typeof t && (t = t.toLowerCase()), "string" == typeof e && (e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1
        }, e.Column.prototype.sortValue = function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i).data("sortValue");
                return e.is.defined(n) ? n : this.parser(i)
            }
            if (e.is.hash(i) && e.is.hash(i.options)) {
                if (e.is.string(i.options.sortValue)) return i.options.sortValue;
                e.is.defined(i.value) && (i = i.value)
            }
            return e.is.defined(i) && null != i ? i : null
        }, e.Column.prototype.__sorting_define__ = function(t) {
            this.sorter = e.checkFnValue(this, t.sorter, this.sorter), this.direction = e.is.type(t.direction, "string") ? e.Sorting.dir(t.direction) : null, this.sortable = !e.is.boolean(t.sortable) || t.sortable, this.sorted = !!e.is.boolean(t.sorted) && t.sorted, this.sortValue = e.checkFnValue(this, t.sortValue, this.sortValue)
        }, e.Column.extend("define", (function(t) {
            this._super(t), this.__sorting_define__(t)
        }))
    }(jQuery, FooTable), FooTable.Defaults.prototype.sorting = {
        enabled: !1
    },
    function(t, e) {
        e.HTMLColumn.extend("__sorting_define__", (function(i) {
            this._super(i), this.sortUse = e.is.string(i.sortUse) && -1 !== t.inArray(i.sortUse, ["html", "text"]) ? i.sortUse : "html"
        })), e.HTMLColumn.prototype.sortValue = function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i).data("sortValue");
                return e.is.defined(n) ? n : this.parser(i)
            }
            if (e.is.hash(i) && e.is.hash(i.options)) {
                if (e.is.string(i.options.sortValue)) return i.options.sortValue;
                e.is.defined(i.value) && (i = i.value)
            }
            return e.is.defined(i) && null != i ? i : null
        }
    }(jQuery, FooTable),
    function(t, e) {
        e.NumberColumn.prototype.sortValue = function(i) {
            if (e.is.element(i) || e.is.jq(i)) {
                var n = t(i).data("sortValue");
                return e.is.number(n) ? n : this.parser(i)
            }
            if (e.is.hash(i) && e.is.hash(i.options)) {
                if (e.is.string(i.options.sortValue)) return this.parser(i);
                if (e.is.number(i.options.sortValue)) return i.options.sortValue;
                if (e.is.number(i.value)) return i.value
            }
            return e.is.string(i) ? this.parser(i) : e.is.number(i) ? i : null
        }
    }(jQuery, FooTable),
    function(t) {
        t.Table.prototype.sort = function(e, i) {
            return this.use(t.Sorting).sort(e, i)
        }
    }(FooTable),
    function(t, e) {
        e.Pager = e.Class.extend({
            construct: function(t, e, i, n, s) {
                this.total = t, this.current = e, this.size = i, this.page = n, this.forward = s
            }
        })
    }(jQuery, FooTable),
    function(t, e) {
        e.Paging = e.Component.extend({
            construct: function(t) {
                this._super(t, t.o.paging.enabled), this.strings = t.o.paging.strings, this.current = t.o.paging.current, this.size = t.o.paging.size, this.limit = t.o.paging.limit, this.position = t.o.paging.position, this.countFormat = t.o.paging.countFormat, this.container = t.o.paging.container, this.total = -1, this.totalRows = 0, this.previous = -1, this.formattedCount = null, this.$container = null, this.$wrapper = null, this.$row = null, this.$cell = null, this.$pagination = null, this.$count = null, this.detached = !0, this._createdLinks = 0
            },
            preinit: function(t) {
                var i = this;
                this.ft.raise("preinit.ft.paging", [t]).then((function() {
                    i.ft.$el.hasClass("footable-paging") && (i.enabled = !0), i.enabled = e.is.boolean(t.paging) ? t.paging : i.enabled, i.enabled && (i.size = e.is.number(t.pagingSize) ? t.pagingSize : i.size, i.current = e.is.number(t.pagingCurrent) ? t.pagingCurrent : i.current, i.limit = e.is.number(t.pagingLimit) ? t.pagingLimit : i.limit, i.ft.$el.hasClass("footable-paging-left") && (i.position = "left"), i.ft.$el.hasClass("footable-paging-center") && (i.position = "center"), i.ft.$el.hasClass("footable-paging-right") && (i.position = "right"), i.position = e.is.string(t.pagingPosition) ? t.pagingPosition : i.position, i.countFormat = e.is.string(t.pagingCountFormat) ? t.pagingCountFormat : i.countFormat, i.container = e.is.string(t.pagingContainer) ? t.pagingContainer : i.container, i.total = Math.ceil(i.ft.rows.all.length / i.size))
                }), (function() {
                    i.enabled = !1
                }))
            },
            init: function() {
                var t = this;
                this.ft.raise("init.ft.paging").then((function() {
                    t.$create()
                }), (function() {
                    t.enabled = !1
                }))
            },
            destroy: function() {
                var t = this;
                this.ft.raise("destroy.ft.paging").then((function() {
                    t.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(), t.detached = !0, t._createdLinks = 0
                }))
            },
            predraw: function() {
                this.total = Math.ceil(this.ft.rows.array.length / this.size), this.current = this.current > this.total ? this.total : this.current < 1 ? 1 : this.current, this.totalRows = this.ft.rows.array.length, this.totalRows > this.size && (this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size)), this.formattedCount = this.format(this.countFormat)
            },
            draw: function() {
                if (this.total <= 1) this.detached || (this.$row ? this.$row.detach() : this.$wrapper.detach(), this.detached = !0);
                else {
                    if (this.detached) {
                        if (this.$row) {
                            var i = this.ft.$el.children("tfoot");
                            0 == i.length && (i = t("<tfoot/>"), this.ft.$el.append(i)), this.$row.appendTo(i)
                        } else this.$wrapper.appendTo(this.$container);
                        this.detached = !1
                    }
                    e.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan), this._createLinks(), this._setVisible(this.current, this.current > this.previous), this._setNavigation(!0), this.$count.text(this.formattedCount)
                }
            },
            $create: function() {
                this._createdLinks = 0;
                var i = "footable-paging-center";
                switch (this.position) {
                    case "left":
                        i = "footable-paging-left";
                        break;
                    case "right":
                        i = "footable-paging-right"
                }
                if (this.ft.$el.addClass("footable-paging").addClass(i), this.$container = null === this.container ? null : t(this.container).first(), e.is.jq(this.$container)) this.$container.addClass("footable-paging-external").addClass(i);
                else {
                    var n = this.ft.$el.children("tfoot");
                    0 == n.length && (n = t("<tfoot/>"), this.ft.$el.append(n)), this.$row = t("<tr/>", {
                        class: "footable-paging"
                    }).prependTo(n), this.$container = this.$cell = t("<td/>").attr("colspan", this.ft.columns.visibleColspan).appendTo(this.$row)
                }
                this.$wrapper = t("<div/>", {
                    class: "footable-pagination-wrapper"
                }).appendTo(this.$container), this.$pagination = t("<ul/>", {
                    class: "pagination"
                }).on("click.footable", "a.footable-page-link", {
                    self: this
                }, this._onPageClicked), this.$count = t("<span/>", {
                    class: "label label-default"
                }), this.$wrapper.append(this.$pagination, t("<div/>", {
                    class: "divider"
                }), this.$count), this.detached = !1
            },
            format: function(t) {
                var e = this.size * (this.current - 1) + 1,
                    i = this.size * this.current;
                return 0 == this.ft.rows.array.length ? (e = 0, i = 0) : i = i > this.totalRows ? this.totalRows : i, t.replace(/\{CP}/g, this.current).replace(/\{TP}/g, this.total).replace(/\{PF}/g, e).replace(/\{PL}/g, i).replace(/\{TR}/g, this.totalRows)
            },
            first: function() {
                return this._set(1)
            },
            prev: function() {
                return this._set(this.current - 1 > 0 ? this.current - 1 : 1)
            },
            next: function() {
                return this._set(this.current + 1 < this.total ? this.current + 1 : this.total)
            },
            last: function() {
                return this._set(this.total)
            },
            goto: function(t) {
                return this._set(t > this.total ? this.total : 1 > t ? 1 : t)
            },
            prevPages: function() {
                var t = this.$pagination.children("li.footable-page.visible:first").data("page") - 1;
                this._setVisible(t, !0), this._setNavigation(!1)
            },
            nextPages: function() {
                var t = this.$pagination.children("li.footable-page.visible:last").data("page") + 1;
                this._setVisible(t, !1), this._setNavigation(!1)
            },
            pageSize: function(t) {
                return t = parseInt(t), isNaN(t) ? this.size : (this.size = t, this.total = Math.ceil(this.ft.rows.all.length / this.size), e.is.jq(this.$wrapper) && (this.$container.is("td") ? this.$row.remove() : this.$wrapper.remove()), this.$create(), void this.ft.draw())
            },
            _set: function(i) {
                var n = this,
                    s = new e.Pager(n.total, n.current, n.size, i, i > n.current);
                return n.ft.raise("before.ft.paging", [s]).then((function() {
                    return s.page = s.page > s.total ? s.total : s.page, s.page = s.page < 1 ? 1 : s.page, n.current == i ? t.when() : (n.previous = n.current, n.current = s.page, n.ft.draw().then((function() {
                        n.ft.raise("after.ft.paging", [s])
                    })))
                }))
            },
            _createLinks: function() {
                if (this._createdLinks !== this.total) {
                    var e = this,
                        i = e.total > 1,
                        n = function(e, i, n) {
                            return t("<li/>", {
                                class: n
                            }).attr("data-page", e).append(t("<a/>", {
                                class: "footable-page-link",
                                href: "#"
                            }).data("page", e).html(i))
                        };
                    e.$pagination.empty(), i && (e.$pagination.append(n("first", e.strings.first, "footable-page-nav")), e.$pagination.append(n("prev", e.strings.prev, "footable-page-nav")), e.limit > 0 && e.limit < e.total && e.$pagination.append(n("prev-limit", e.strings.prevPages, "footable-page-nav")));
                    for (var s, o = 0; o < e.total; o++) s = n(o + 1, o + 1, "footable-page"), e.$pagination.append(s);
                    i && (e.limit > 0 && e.limit < e.total && e.$pagination.append(n("next-limit", e.strings.nextPages, "footable-page-nav")), e.$pagination.append(n("next", e.strings.next, "footable-page-nav")), e.$pagination.append(n("last", e.strings.last, "footable-page-nav"))), e._createdLinks = e.total
                }
            },
            _setNavigation: function(t) {
                1 == this.current ? this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled") : this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"), this.current == this.total ? this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled") : this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"), 1 == (this.$pagination.children("li.footable-page.visible:first").data("page") || 1) ? this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"), (this.$pagination.children("li.footable-page.visible:last").data("page") || this.limit) == this.total ? this.$pagination.children('li[data-page="next-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"), this.limit > 0 && this.total < this.limit ? this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", "none") : this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", ""), t && this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="' + this.current + '"]').addClass("active")
            },
            _setVisible: function(t, e) {
                if (this.limit > 0 && this.total > this.limit) {
                    if (!this.$pagination.children('li.footable-page[data-page="' + t + '"]').hasClass("visible")) {
                        var i = 0,
                            n = 0;
                        1 == e ? i = (n = t > this.total ? this.total : t) - this.limit : n = (i = 1 > t ? 0 : t - 1) + this.limit, 0 > i && (i = 0, n = this.limit > this.total ? this.total : this.limit), n > this.total && (n = this.total, i = this.total - this.limit < 0 ? 0 : this.total - this.limit), this.$pagination.children("li.footable-page").removeClass("visible").slice(i, n).addClass("visible")
                    }
                } else this.$pagination.children("li.footable-page").removeClass("visible").slice(0, this.total).addClass("visible")
            },
            _onPageClicked: function(e) {
                if (e.preventDefault(), !t(e.target).closest("li").is(".active,.disabled")) {
                    var i = e.data.self,
                        n = t(this).data("page");
                    switch (n) {
                        case "first":
                            return void i.first();
                        case "prev":
                            return void i.prev();
                        case "next":
                            return void i.next();
                        case "last":
                            return void i.last();
                        case "prev-limit":
                            return void i.prevPages();
                        case "next-limit":
                            return void i.nextPages();
                        default:
                            return void i._set(n)
                    }
                }
            }
        }), e.components.register("paging", e.Paging, 400)
    }(jQuery, FooTable), FooTable.Defaults.prototype.paging = {
        enabled: !1,
        countFormat: "{CP} of {TP}",
        current: 1,
        limit: 5,
        position: "center",
        size: 10,
        container: null,
        strings: {
            first: "&laquo;",
            prev: "&lsaquo;",
            next: "&rsaquo;",
            last: "&raquo;",
            prevPages: "...",
            nextPages: "..."
        }
    },
    function(t) {
        t.Table.prototype.gotoPage = function(e) {
            return this.use(t.Paging).goto(e)
        }, t.Table.prototype.nextPage = function() {
            return this.use(t.Paging).next()
        }, t.Table.prototype.prevPage = function() {
            return this.use(t.Paging).prev()
        }, t.Table.prototype.firstPage = function() {
            return this.use(t.Paging).first()
        }, t.Table.prototype.lastPage = function() {
            return this.use(t.Paging).last()
        }, t.Table.prototype.nextPages = function() {
            return this.use(t.Paging).nextPages()
        }, t.Table.prototype.prevPages = function() {
            return this.use(t.Paging).prevPages()
        }, t.Table.prototype.pageSize = function(e) {
            return this.use(t.Paging).pageSize(e)
        }
    }(FooTable),
    function(t, e) {
        e.Editing = e.Component.extend({
            construct: function(i) {
                this._super(i, i.o.editing.enabled), this.pageToNew = i.o.editing.pageToNew, this.alwaysShow = i.o.editing.alwaysShow, this.column = t.extend(!0, {}, i.o.editing.column, {
                    visible: this.alwaysShow
                }), this.position = i.o.editing.position, this.showText = i.o.editing.showText, this.hideText = i.o.editing.hideText, this.addText = i.o.editing.addText, this.editText = i.o.editing.editText, this.deleteText = i.o.editing.deleteText, this.viewText = i.o.editing.viewText, this.allowAdd = i.o.editing.allowAdd, this.allowEdit = i.o.editing.allowEdit, this.allowDelete = i.o.editing.allowDelete, this.allowView = i.o.editing.allowView, this._$buttons = null, this.callbacks = {
                    addRow: e.checkFnValue(this, i.o.editing.addRow),
                    editRow: e.checkFnValue(this, i.o.editing.editRow),
                    deleteRow: e.checkFnValue(this, i.o.editing.deleteRow),
                    viewRow: e.checkFnValue(this, i.o.editing.viewRow)
                }
            },
            preinit: function(i) {
                var n = this;
                this.ft.raise("preinit.ft.editing", [i]).then((function() {
                    if (n.ft.$el.hasClass("footable-editing") && (n.enabled = !0), n.enabled = e.is.boolean(i.editing) ? i.editing : n.enabled, n.enabled) {
                        if (n.pageToNew = e.is.boolean(i.editingPageToNew) ? i.editingPageToNew : n.pageToNew, n.alwaysShow = e.is.boolean(i.editingAlwaysShow) ? i.editingAlwaysShow : n.alwaysShow, n.position = e.is.string(i.editingPosition) ? i.editingPosition : n.position, n.showText = e.is.string(i.editingShowText) ? i.editingShowText : n.showText, n.hideText = e.is.string(i.editingHideText) ? i.editingHideText : n.hideText, n.addText = e.is.string(i.editingAddText) ? i.editingAddText : n.addText, n.editText = e.is.string(i.editingEditText) ? i.editingEditText : n.editText, n.deleteText = e.is.string(i.editingDeleteText) ? i.editingDeleteText : n.deleteText, n.viewText = e.is.string(i.editingViewText) ? i.editingViewText : n.viewText, n.allowAdd = e.is.boolean(i.editingAllowAdd) ? i.editingAllowAdd : n.allowAdd, n.allowEdit = e.is.boolean(i.editingAllowEdit) ? i.editingAllowEdit : n.allowEdit, n.allowDelete = e.is.boolean(i.editingAllowDelete) ? i.editingAllowDelete : n.allowDelete, n.allowView = e.is.boolean(i.editingAllowView) ? i.editingAllowView : n.allowView, n.column = new e.EditingColumn(n.ft, n, t.extend(!0, {}, n.column, i.editingColumn, {
                                visible: n.alwaysShow
                            })), n.ft.$el.hasClass("footable-editing-left") && (n.position = "left"), n.ft.$el.hasClass("footable-editing-right") && (n.position = "right"), "right" === n.position) n.column.index = n.ft.columns.array.length;
                        else {
                            n.column.index = 0;
                            for (var s = 0, o = n.ft.columns.array.length; o > s; s++) n.ft.columns.array[s].index += 1
                        }
                        n.ft.columns.array.push(n.column), n.ft.columns.array.sort((function(t, e) {
                            return t.index - e.index
                        })), n.callbacks.addRow = e.checkFnValue(n, i.editingAddRow, n.callbacks.addRow), n.callbacks.editRow = e.checkFnValue(n, i.editingEditRow, n.callbacks.editRow), n.callbacks.deleteRow = e.checkFnValue(n, i.editingDeleteRow, n.callbacks.deleteRow), n.callbacks.viewRow = e.checkFnValue(n, i.editingViewRow, n.callbacks.viewRow)
                    }
                }), (function() {
                    n.enabled = !1
                }))
            },
            init: function() {
                var t = this;
                this.ft.raise("init.ft.editing").then((function() {
                    t.$create()
                }), (function() {
                    t.enabled = !1
                }))
            },
            destroy: function() {
                var t = this;
                this.ft.raise("destroy.ft.editing").then((function() {
                    t.ft.$el.removeClass("footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view").off("click.ft.editing").find("tfoot > tr.footable-editing").remove()
                }))
            },
            $create: function() {
                var e = this,
                    i = "right" === e.position ? "footable-editing-right" : "footable-editing-left";
                e.ft.$el.addClass("footable-editing").addClass(i).on("click.ft.editing", ".footable-show", {
                    self: e
                }, e._onShowClick).on("click.ft.editing", ".footable-hide", {
                    self: e
                }, e._onHideClick).on("click.ft.editing", ".footable-edit", {
                    self: e
                }, e._onEditClick).on("click.ft.editing", ".footable-delete", {
                    self: e
                }, e._onDeleteClick).on("click.ft.editing", ".footable-view", {
                    self: e
                }, e._onViewClick).on("click.ft.editing", ".footable-add", {
                    self: e
                }, e._onAddClick), e.$cell = t("<td/>").attr("colspan", e.ft.columns.visibleColspan).append(e.$buttonShow()), e.allowAdd && e.$cell.append(e.$buttonAdd()), e.$cell.append(e.$buttonHide()), e.alwaysShow && e.ft.$el.addClass("footable-editing-always-show"), e.allowAdd || e.ft.$el.addClass("footable-editing-no-add"), e.allowEdit || e.ft.$el.addClass("footable-editing-no-edit"), e.allowDelete || e.ft.$el.addClass("footable-editing-no-delete"), e.allowView || e.ft.$el.addClass("footable-editing-no-view");
                var n = e.ft.$el.children("tfoot");
                0 == n.length && (n = t("<tfoot/>"), e.ft.$el.append(n)), e.$row = t("<tr/>", {
                    class: "footable-editing"
                }).append(e.$cell).appendTo(n)
            },
            $buttonShow: function() {
                return '<button type="button" class="btn btn-primary footable-show">' + this.showText + "</button>"
            },
            $buttonHide: function() {
                return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + "</button>"
            },
            $buttonAdd: function() {
                return '<button type="button" class="btn btn-primary footable-add">' + this.addText + "</button> "
            },
            $buttonEdit: function() {
                return '<button type="button" class="btn btn-default footable-edit">' + this.editText + "</button> "
            },
            $buttonDelete: function() {
                return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + "</button>"
            },
            $buttonView: function() {
                return '<button type="button" class="btn btn-default footable-view">' + this.viewText + "</button> "
            },
            $rowButtons: function() {
                return e.is.jq(this._$buttons) ? this._$buttons.clone() : (this._$buttons = t('<div class="btn-group btn-group-xs" role="group"></div>'), this.allowView && this._$buttons.append(this.$buttonView()), this.allowEdit && this._$buttons.append(this.$buttonEdit()), this.allowDelete && this._$buttons.append(this.$buttonDelete()), this._$buttons)
            },
            draw: function() {
                this.$cell.attr("colspan", this.ft.columns.visibleColspan)
            },
            _onEditClick: function(i) {
                i.preventDefault();
                var n = i.data.self,
                    s = t(this).closest("tr").data("__FooTableRow__");
                s instanceof e.Row && n.ft.raise("edit.ft.editing", [s]).then((function() {
                    n.callbacks.editRow.call(n.ft, s)
                }))
            },
            _onDeleteClick: function(i) {
                i.preventDefault();
                var n = i.data.self,
                    s = t(this).closest("tr").data("__FooTableRow__");
                s instanceof e.Row && n.ft.raise("delete.ft.editing", [s]).then((function() {
                    n.callbacks.deleteRow.call(n.ft, s)
                }))
            },
            _onViewClick: function(i) {
                i.preventDefault();
                var n = i.data.self,
                    s = t(this).closest("tr").data("__FooTableRow__");
                s instanceof e.Row && n.ft.raise("view.ft.editing", [s]).then((function() {
                    n.callbacks.viewRow.call(n.ft, s)
                }))
            },
            _onAddClick: function(t) {
                t.preventDefault();
                var e = t.data.self;
                e.ft.raise("add.ft.editing").then((function() {
                    e.callbacks.addRow.call(e.ft)
                }))
            },
            _onShowClick: function(t) {
                t.preventDefault();
                var e = t.data.self;
                e.ft.raise("show.ft.editing").then((function() {
                    e.ft.$el.addClass("footable-editing-show"), e.column.visible = !0, e.ft.draw()
                }))
            },
            _onHideClick: function(t) {
                t.preventDefault();
                var e = t.data.self;
                e.ft.raise("hide.ft.editing").then((function() {
                    e.ft.$el.removeClass("footable-editing-show"), e.column.visible = !1, e.ft.draw()
                }))
            }
        }), e.components.register("editing", e.Editing, 850)
    }(jQuery, FooTable),
    function(t, e) {
        e.EditingColumn = e.Column.extend({
            construct: function(t, e, i) {
                this._super(t, i, "editing"), this.editing = e, this.internal = !0
            },
            $create: function() {
                (this.$el = !this.virtual && e.is.jq(this.$el) ? this.$el : t("<th/>", {
                    class: "footable-editing"
                })).html(this.title)
            },
            parser: function(i) {
                if (e.is.string(i) && (i = t(t.trim(i))), e.is.element(i) && (i = t(i)), e.is.jq(i)) {
                    var n = i.prop("tagName").toLowerCase();
                    return "td" == n || "th" == n ? i.data("value") || i.contents() : i
                }
                return null
            },
            createCell: function(i) {
                var n = this.editing.$rowButtons(),
                    s = t("<td/>").append(n);
                return e.is.jq(i.$el) && (0 === this.index ? s.prependTo(i.$el) : s.insertAfter(i.$el.children().eq(this.index - 1))), new e.Cell(this.ft, i, this, s || s.html())
            }
        }), e.columns.register("editing", e.EditingColumn)
    }(jQuery, FooTable), jQuery, FooTable.Defaults.prototype.editing = {
        enabled: !1,
        pageToNew: !0,
        position: "right",
        alwaysShow: !1,
        addRow: function() {},
        editRow: function(t) {},
        deleteRow: function(t) {},
        viewRow: function(t) {},
        showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',
        hideText: "Cancel",
        addText: "New row",
        editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',
        deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>',
        viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>',
        allowAdd: !0,
        allowEdit: !0,
        allowDelete: !0,
        allowView: !1,
        column: {
            classes: "footable-editing",
            name: "editing",
            title: "",
            filterable: !1,
            sortable: !1
        }
    },
    function(t, e) {
        e.is.defined(e.Paging) && (e.Paging.prototype.unpaged = [], e.Paging.extend("predraw", (function() {
            this.unpaged = this.ft.rows.array.slice(0), this._super()
        })))
    }(jQuery, FooTable),
    function(t, e) {
        e.Row.prototype.add = function(i) {
            i = !e.is.boolean(i) || i;
            var n = this;
            return t.Deferred((function(t) {
                var e = n.ft.rows.all.push(n) - 1;
                return i ? n.ft.draw().then((function() {
                    t.resolve(e)
                })) : void t.resolve(e)
            }))
        }, e.Row.prototype.delete = function(i) {
            i = !e.is.boolean(i) || i;
            var n = this;
            return t.Deferred((function(t) {
                var s = n.ft.rows.all.indexOf(n);
                return e.is.number(s) && s >= 0 && s < n.ft.rows.all.length && (n.ft.rows.all.splice(s, 1), i) ? n.ft.draw().then((function() {
                    t.resolve(n)
                })) : void t.resolve(n)
            }))
        }, e.is.defined(e.Paging) && e.Row.extend("add", (function(t) {
            t = !e.is.boolean(t) || t;
            var i, n = this,
                s = this._super(t),
                o = n.ft.use(e.Editing);
            return o && o.pageToNew && (i = n.ft.use(e.Paging)) && t ? s.then((function() {
                var t = i.unpaged.indexOf(n),
                    e = Math.ceil((t + 1) / i.size);
                return i.current !== e ? i.goto(e) : void 0
            })) : s
        })), e.is.defined(e.Sorting) && e.Row.extend("val", (function(t, i) {
            i = !e.is.boolean(i) || i;
            var n = this._super(t);
            if (!e.is.hash(t)) return n;
            var s = this;
            return i && s.ft.draw().then((function() {
                var t, i = s.ft.use(e.Editing);
                if (e.is.defined(e.Paging) && i && i.pageToNew && (t = s.ft.use(e.Paging))) {
                    var n = t.unpaged.indexOf(s),
                        o = Math.ceil((n + 1) / t.size);
                    if (t.current !== o) return t.goto(o)
                }
            })), n
        }))
    }(jQuery, FooTable),
    function(t) {
        t.Rows.prototype.add = function(e, i) {
            var n = e;
            t.is.hash(e) && (n = new FooTable.Row(this.ft, this.ft.columns.array, e)), n instanceof FooTable.Row && n.add(i)
        }, t.Rows.prototype.update = function(e, i, n) {
            var s = this.ft.rows.all.length,
                o = e;
            t.is.number(e) && e >= 0 && s > e && (o = this.ft.rows.all[e]), o instanceof FooTable.Row && t.is.hash(i) && o.val(i, n)
        }, t.Rows.prototype.delete = function(e, i) {
            var n = this.ft.rows.all.length,
                s = e;
            t.is.number(e) && e >= 0 && n > e && (s = this.ft.rows.all[e]), s instanceof FooTable.Row && s.delete(i)
        }
    }(FooTable),
    function(t, e) {
        var i = 0,
            n = function(t) {
                var e, i, n = 2166136261;
                for (e = 0, i = t.length; i > e; e++) n ^= t.charCodeAt(e), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                return n >>> 0
            }(location.origin + location.pathname);
        e.State = e.Component.extend({
            construct: function(t) {
                this._super(t, t.o.state.enabled), this._key = "1", this.key = this._key + (e.is.string(t.o.state.key) ? t.o.state.key : this._uid()), this.filtering = !e.is.boolean(t.o.state.filtering) || t.o.state.filtering, this.paging = !e.is.boolean(t.o.state.paging) || t.o.state.paging, this.sorting = !e.is.boolean(t.o.state.sorting) || t.o.state.sorting
            },
            preinit: function(t) {
                var i = this;
                this.ft.raise("preinit.ft.state", [t]).then((function() {
                    i.enabled = e.is.boolean(t.state) ? t.state : i.enabled, i.enabled && (i.key = i._key + (e.is.string(t.stateKey) ? t.stateKey : i.key), i.filtering = e.is.boolean(t.stateFiltering) ? t.stateFiltering : i.filtering, i.paging = e.is.boolean(t.statePaging) ? t.statePaging : i.paging, i.sorting = e.is.boolean(t.stateSorting) ? t.stateSorting : i.sorting)
                }), (function() {
                    i.enabled = !1
                }))
            },
            get: function(t) {
                return JSON.parse(localStorage.getItem(this.key + ":" + t))
            },
            set: function(t, e) {
                localStorage.setItem(this.key + ":" + t, JSON.stringify(e))
            },
            remove: function(t) {
                localStorage.removeItem(this.key + ":" + t)
            },
            read: function() {
                this.ft.execute(!1, !0, "readState")
            },
            write: function() {
                this.ft.execute(!1, !0, "writeState")
            },
            clear: function() {
                this.ft.execute(!1, !0, "clearState")
            },
            _uid: function() {
                var t = this.ft.$el.attr("id");
                return n + "_" + (e.is.string(t) ? t : ++i)
            }
        }), e.components.register("state", e.State, 700)
    }(jQuery, FooTable),
    function(t) {
        t.Component.prototype.readState = function() {}, t.Component.prototype.writeState = function() {}, t.Component.prototype.clearState = function() {}
    }(FooTable), FooTable.Defaults.prototype.state = {
        enabled: !1,
        filtering: !0,
        paging: !0,
        sorting: !0,
        key: null
    },
    function(t) {
        t.Filtering && (t.Filtering.prototype.readState = function() {
            if (this.ft.state.filtering) {
                var e = this.ft.state.get("filtering");
                t.is.hash(e) && !t.is.emptyArray(e.filters) && (this.filters = this.ensure(e.filters))
            }
        }, t.Filtering.prototype.writeState = function() {
            if (this.ft.state.filtering) {
                var e = t.arr.map(this.filters, (function(e) {
                    return {
                        name: e.name,
                        query: e.query instanceof t.Query ? e.query.val() : e.query,
                        columns: t.arr.map(e.columns, (function(t) {
                            return t.name
                        })),
                        hidden: e.hidden,
                        space: e.space,
                        connectors: e.connectors,
                        ignoreCase: e.ignoreCase
                    }
                }));
                this.ft.state.set("filtering", {
                    filters: e
                })
            }
        }, t.Filtering.prototype.clearState = function() {
            this.ft.state.filtering && this.ft.state.remove("filtering")
        })
    }(FooTable),
    function(t) {
        t.Paging && (t.Paging.prototype.readState = function() {
            if (this.ft.state.paging) {
                var e = this.ft.state.get("paging");
                t.is.hash(e) && (this.current = e.current, this.size = e.size)
            }
        }, t.Paging.prototype.writeState = function() {
            this.ft.state.paging && this.ft.state.set("paging", {
                current: this.current,
                size: this.size
            })
        }, t.Paging.prototype.clearState = function() {
            this.ft.state.paging && this.ft.state.remove("paging")
        })
    }(FooTable),
    function(t) {
        t.Sorting && (t.Sorting.prototype.readState = function() {
            if (this.ft.state.sorting) {
                var e = this.ft.state.get("sorting");
                if (t.is.hash(e)) {
                    var i = this.ft.columns.get(e.column);
                    i instanceof t.Column && (this.column = i, this.column.direction = e.direction)
                }
            }
        }, t.Sorting.prototype.writeState = function() {
            this.ft.state.sorting && this.column instanceof t.Column && this.ft.state.set("sorting", {
                column: this.column.name,
                direction: this.column.direction
            })
        }, t.Sorting.prototype.clearState = function() {
            this.ft.state.sorting && this.ft.state.remove("sorting")
        })
    }(FooTable),
    function(t) {
        t.Table.extend("_construct", (function(t) {
            return this.state = this.use(FooTable.State), this._super(t)
        })), t.Table.extend("_preinit", (function() {
            var t = this;
            return t._super().then((function() {
                t.state.enabled && t.state.read()
            }))
        })), t.Table.extend("draw", (function() {
            var t = this;
            return t._super().then((function() {
                t.state.enabled && t.state.write()
            }))
        }))
    }(FooTable),
    function(t, e) {
        e.Export = e.Component.extend({
            construct: function(t) {
                this._super(t, !0), this.snapshot = []
            },
            predraw: function() {
                this.snapshot = this.ft.rows.array.slice(0)
            },
            columns: function() {
                var t = [];
                return e.arr.each(this.ft.columns.array, (function(e) {
                    e.internal || t.push({
                        type: e.type,
                        name: e.name,
                        title: e.title,
                        visible: e.visible,
                        hidden: e.hidden,
                        classes: e.classes,
                        style: e.style
                    })
                })), t
            },
            rows: function(t) {
                var i = (t = !!e.is.boolean(t) && t) ? this.ft.rows.all : this.snapshot,
                    n = [];
                return e.arr.each(i, (function(t) {
                    n.push(t.val())
                })), n
            },
            json: function(t) {
                return JSON.parse(JSON.stringify({
                    columns: this.columns(),
                    rows: this.rows(t)
                }))
            },
            csv: function(t) {
                var i, n, s = "",
                    o = this.columns();
                e.arr.each(o, (function(t, e) {
                    n = '"' + t.title.replace(/"/g, '""') + '"', s += 0 === e ? n : "," + n
                })), s += "\n";
                var r = t ? this.ft.rows.all : this.snapshot;
                return e.arr.each(r, (function(t) {
                    e.arr.each(t.cells, (function(t, e) {
                        t.column.internal || (i = t.column.stringify.call(t.column, t.value, t.ft.o, t.row.value), n = '"' + i.replace(/"/g, '""') + '"', s += 0 === e ? n : "," + n)
                    })), s += "\n"
                })), s
            }
        }), e.components.register("export", e.Export, 490)
    }(jQuery, FooTable),
    function(t) {
        t.Column.prototype.__export_define__ = function(e) {
            this.stringify = t.checkFnValue(this, e.stringify, this.stringify)
        }, t.Column.extend("define", (function(t) {
            this._super(t), this.__export_define__(t)
        })), t.Column.prototype.stringify = function(t, e, i) {
            return t + ""
        }, t.is.defined(t.DateColumn) && (t.DateColumn.prototype.stringify = function(e, i, n) {
            return t.is.object(e) && t.is.boolean(e._isAMomentObject) && e.isValid() ? e.format(this.formatString) : ""
        }), t.ObjectColumn.prototype.stringify = function(e, i, n) {
            return t.is.object(e) ? JSON.stringify(e) : ""
        }, t.ArrayColumn.prototype.stringify = function(e, i, n) {
            return t.is.array(e) ? JSON.stringify(e) : ""
        }
    }(FooTable),
    function(t) {
        t.Table.prototype.toJSON = function(e) {
            return this.use(t.Export).json(e)
        }, t.Table.prototype.toCSV = function(e) {
            return this.use(t.Export).csv(e)
        }
    }(FooTable);