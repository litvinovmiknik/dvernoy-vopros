/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _blocks_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony import */
        var _blocks_nav_nav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_blocks_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _blocks_home_slider_home_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        /* harmony import */
        var _blocks_home_slider_home_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_blocks_home_slider_home_slider_js__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var _blocks_brand_item_brand_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
        /* harmony import */
        var _blocks_brand_item_brand_item_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_blocks_brand_item_brand_item_js__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var _blocks_review_item_review_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
        /* harmony import */
        var _blocks_review_item_review_item_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_blocks_review_item_review_item_js__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var _blocks_last_actions_last_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
        /* harmony import */
        var _blocks_last_actions_last_actions_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_blocks_last_actions_last_actions_js__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var _blocks_product_detail_product_detail_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
        /* harmony import */
        var _blocks_product_detail_product_detail_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_blocks_product_detail_product_detail_js__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */
        var _blocks_spinner_spinner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
        /* harmony import */
        var _blocks_spinner_spinner_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_blocks_spinner_spinner_js__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */
        var _blocks_message_message_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
        /* harmony import */
        var _blocks_message_message_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_blocks_message_message_js__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */
        var _blocks_ordering_ordering_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
        /* harmony import */
        var _blocks_ordering_ordering_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_blocks_ordering_ordering_js__WEBPACK_IMPORTED_MODULE_8__);









        $(function() {
            // Phone mask
            $("input[name='phone']").mask("+7 999 999 99 99"); // Scroll

            $('a[href^="#"]').on('click', function() {
                var href = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(href).offset().top - 100
                }, 300);
            }); // Tabs

            $('ul.tabs__caption').each(function(i) {
                var storage = localStorage.getItem('tab' + i);

                if (storage) {
                    $(this).find('li').removeClass('active').eq(storage).addClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq(storage).addClass('active');
                }
            });
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
                var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
                localStorage.removeItem('tab' + ulIndex);
                localStorage.setItem('tab' + ulIndex, $(this).index());
            });
        });

        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.header .nav').slicknav({
                label: '',
                appendTo: '.header',
                allowParentLinks: true
            });
        });

        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.home-slider__slider').bxSlider({
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                pager: true,
                responsive: true,
                touchEnabled: false
            });
        });

        /***/
    }),
    /* 3 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.brand-item__slider').bxSlider({
                minSlides: 1,
                maxSlides: 5,
                moveSlides: 1,
                pager: false,
                responsive: true,
                touchEnabled: false
            });
        });

        /***/
    }),
    /* 4 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.review-item__text').jScrollPane();
        });

        /***/
    }),
    /* 5 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.last-actions__slider').bxSlider({
                minSlides: 1,
                maxSlides: 6,
                moveSlides: 1,
                pager: false,
                responsive: true,
                touchEnabled: false
            });
        });

        /***/
    }),
    /* 6 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.product-detail__slider').bxSlider({
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                pagerCustom: '.product-detail__preview',
                responsive: true,
                touchEnabled: false
            });
        });

        /***/
    }),
    /* 7 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.spinner__less').on('click', function() {
                var val = $(this).next().val();

                if (val > 0) {
                    $(this).next().attr('value', --val);
                }
            });
            $('.spinner__more').on('click', function() {
                var val = $(this).prev().val();
                $(this).prev().attr('value', ++val);
            });
        });

        /***/
    }),
    /* 8 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.message__close').on('click', function() {
                $('.message').hide();
            });
        });

        /***/
    }),
    /* 9 */
    /***/
    (function(module, exports) {

        $(function() {
            $('input[name="adress"]').on('focus', function() {
                $(this).prev().prop('checked', true);
            });
        });

        /***/
    })
    /******/
]);