"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var card_1 = require("../../components/ui/card");
var use_mobile_1 = require("../../hooks/use-mobile");
var link_1 = require("next/link");
var Carousel3D = function (_a) {
    var items = _a.items, _b = _a.autoRotate, autoRotate = _b === void 0 ? true : _b, _c = _a.rotateInterval, rotateInterval = _c === void 0 ? 4000 : _c, _d = _a.cardHeight, cardHeight = _d === void 0 ? 500 : _d, _e = _a.title, title = _e === void 0 ? "From Textile to Intelligence" : _e, _f = _a.subtitle, subtitle = _f === void 0 ? "Customer Cases" : _f, _g = _a.tagline, tagline = _g === void 0 ? "Explore how our textile sensor technology is revolutionizing multiple industries with intelligent fabric solutions tailored to specific needs." : _g, _h = _a.isMobileSwipe, isMobileSwipe = _h === void 0 ? true : _h;
    var _j = react_1.useState(0), active = _j[0], setActive = _j[1];
    var carouselRef = react_1.useRef(null);
    var _k = react_1.useState(false), isInView = _k[0], setIsInView = _k[1];
    var _l = react_1.useState(false), isHovering = _l[0], setIsHovering = _l[1];
    var _m = react_1.useState(null), touchStart = _m[0], setTouchStart = _m[1];
    var _o = react_1.useState(null), touchEnd = _o[0], setTouchEnd = _o[1];
    var isMobile = use_mobile_1.useIsMobile();
    var minSwipeDistance = 50;
    react_1.useEffect(function () {
        if (autoRotate && isInView && !isHovering) {
            var interval_1 = setInterval(function () {
                setActive(function (prev) { return (prev + 1) % items.length; });
            }, rotateInterval);
            return function () { return clearInterval(interval_1); };
        }
    }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            return setIsInView(entry.isIntersecting);
        }, { threshold: 0.2 });
        return function () { return observer.disconnect(); };
    }, []);
    var onTouchStart = function (e) {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(null);
    };
    var onTouchMove = function (e) {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    var onTouchEnd = function () {
        if (!touchStart || !touchEnd)
            return;
        var distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) {
            setActive(function (prev) { return (prev + 1) % items.length; });
        }
        else if (distance < -minSwipeDistance) {
            setActive(function (prev) { return (prev - 1 + items.length) % items.length; });
        }
    };
    var getCardAnimationClass = function (index) {
        if (index === active)
            return "scale-100 opacity-100 z-20";
        if (index === (active + 1) % items.length)
            return "translate-x-[40%] scale-95 opacity-60 z-10";
        if (index === (active - 1 + items.length) % items.length)
            return "translate-x-[-40%] scale-95 opacity-60 z-10";
        return "scale-90 opacity-0";
    };
    return (react_1["default"].createElement("section", { id: "carousel3d", className: " min-w-full mx-auto" },
        react_1["default"].createElement("div", { className: "w-full px-4 sm:px-6 lg:px-8 \r\n      min-w-[350px] md:min-w-[1000px] max-w-7xl  " },
            react_1["default"].createElement("div", { className: "relative overflow-hidden h-[550px] ", onMouseEnter: function () { return setIsHovering(true); }, onMouseLeave: function () { return setIsHovering(false); }, onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, ref: carouselRef },
                react_1["default"].createElement("div", { className: "absolute top-0 left-20 right-0 w-full h-full flex items-center justify-center " }, items.map(function (item, index) { return (react_1["default"].createElement("div", { key: item.id, className: "absolute top-0 w-full max-w-md transform transition-all duration-500 " + getCardAnimationClass(index) },
                    react_1["default"].createElement(card_1.Card, { className: "overflow-hidden bg-background h-[" + cardHeight + "px] border shadow-sm \n                hover:shadow-md flex flex-col" },
                        react_1["default"].createElement("div", { className: "relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden", style: {
                                backgroundImage: "url(" + item.imageUrl + ")",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            } },
                            react_1["default"].createElement("div", { className: "absolute inset-0 bg-black/50" }),
                            react_1["default"].createElement("div", { className: "relative z-10 text-center text-white" },
                                react_1["default"].createElement("h3", { className: "text-2xl font-bold mb-2" }, item.brand.toUpperCase()),
                                react_1["default"].createElement("div", { className: "w-12 h-1 bg-white mx-auto mb-2" }),
                                react_1["default"].createElement("p", { className: "text-sm " }, item.title))),
                        react_1["default"].createElement(card_1.CardContent, { className: "p-6 flex flex-col flex-grow" },
                            react_1["default"].createElement("h3", { className: "text-xl font-bold mb-1 text-foreground" }, item.title),
                            react_1["default"].createElement("p", { className: "text-gray-500 text-sm font-medium mb-2" }, item.brand),
                            react_1["default"].createElement("p", { className: "text-gray-600 text-sm flex-grow" }, item.description),
                            react_1["default"].createElement("div", { className: "mt-4" },
                                react_1["default"].createElement("div", { className: "flex flex-wrap gap-2 mb-4" }, item.tags.map(function (tag, idx) { return (react_1["default"].createElement("span", { key: idx, className: "px-2 py-1 text-gray-600 rounded-full text-xs animate-pulse-slow" }, tag)); })),
                                react_1["default"].createElement(link_1["default"], { href: item.link, className: "text-gray-500 flex items-center hover:underline relative group", onClick: function () {
                                        if (item.link.startsWith("/")) {
                                            window.scrollTo(0, 0);
                                        }
                                    } },
                                    react_1["default"].createElement("span", { className: "relative z-10" }, "See more"),
                                    react_1["default"].createElement(lucide_react_1.ArrowRight, { className: "ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" }),
                                    react_1["default"].createElement("span", { className: "absolute left-0 bottom-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full" }))))))); })),
                !isMobile && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("button", { className: "absolute left-20 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110", onClick: function () { return setActive(function (prev) { return (prev - 1 + items.length) % items.length; }); }, "aria-label": "Previous" },
                        react_1["default"].createElement(lucide_react_1.ChevronLeft, { className: "w-5 h-5" })),
                    react_1["default"].createElement("button", { className: "absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110", onClick: function () { return setActive(function (prev) { return (prev + 1) % items.length; }); }, "aria-label": "Next" },
                        react_1["default"].createElement(lucide_react_1.ChevronRight, { className: "w-5 h-5" })))),
                react_1["default"].createElement("div", { className: "absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30" }, items.map(function (_, idx) { return (react_1["default"].createElement("button", { key: idx, className: "w-2 h-2 rounded-full transition-all duration-300 " + (active === idx ? "bg-gray-500 w-5" : "bg-gray-200 hover:bg-gray-300"), onClick: function () { return setActive(idx); }, "aria-label": "Go to item " + (idx + 1) })); }))))));
};
exports["default"] = Carousel3D;
