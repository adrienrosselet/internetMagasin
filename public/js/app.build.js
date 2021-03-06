/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/CartComponent.js":
/*!************************************!*\
  !*** ./public/js/CartComponent.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n// import Vue from 'vue';\nVue.component('cart', {\n    data(){\n      return {\n          cartUrl: '/getBasket.json',\n          cartItems: [],\n          imgCart: 'https://placehold.it/50x100',\n          showCart: false,\n          tot: 0\n      }\n    },\n    mounted(){\n        this.$parent.getJson(`/api/cart`)\n            .then(data => {\n                for (let item of data.contents){\n                    this.$data.cartItems.push(item);\n                }\n            });\n    },\n    methods: {\n        addProduct(item){\n            let find = this.cartItems.find(el => el.id_product === item.id_product);\n            if(find){\n                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})\n                    .then(data => {\n                        if(data.result === 1){\n                            find.quantity++\n                        }\n                    })\n            } else {\n                const prod = Object.assign({quantity: 1}, item);\n                this.$parent.postJson(`/api/cart`, prod)\n                    .then(data => {\n                        if(data.result === 1){\n                            this.cartItems.push(prod)\n                        }\n                    })\n            }\n\n            // this.$parent.getJson(`${API}/addToBasket.json`)\n            //     .then(data => {\n            //         if(data.result === 1){\n            //             let find = this.cartItems.find(el => el.id_product === item.id_product);\n            //             if(find){\n            //                 find.quantity++;\n            //             } else {\n            //                 const prod = Object.assign({quantity: 1}, item);\n            //                 this.cartItems.push(prod)\n            //             }\n            //         }\n            //     })\n        },\n        deleteItm(item){\n          // let remove = this.$parent.remove;\n          // remove(`/api/cart`, item);\n\n          // let remove = this.$parent.$parent.remove;\n          //   let cart = this.$parent.$parent.cartGoods[1];\n          //   let find = cart.find(el => el.id_product === id);\n          //\n          //   remove(`/api/cart/${id}`,find);\n\n          // this.$parent.getJson(`/api/cart`)\n          //     .then(data => {\n          //       console.log(data);\n          //     });\n          let find = this.cartItems.find(el => el.id_product === item.id_product);\n          if(find.quantity > 1){\n          //if(find){\n              this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: -1})\n                  .then(data => {\n                      if(data.result === 1){\n                          find.quantity--\n                      }\n                  })\n          }\n          else {\n              //const prod = Object.assign({quantity: 1}, item);\n              //this.cartItems.splice(this.cartItems.indexOf(item), 1);\n              this.$parent.removeJson(`/api/cart/${find.id_product}`, {quantity: -1})\n                  .then(data => {\n                      if(data.result === 1){\n                          this.cartItems.splice(this.cartItems.indexOf(find), 1);\n                      }\n                  })\n          }\n\n            // this.$parent.getJson(`${API}/addToBasket.json`)\n            //     .then(data => {\n            //         if (data.result === 1) {\n            //             if(item.quantity>1){\n            //                 item.quantity--;\n            //             } else {\n            //                 this.cartItems.splice(this.cartItems.indexOf(item), 1);\n            //             }\n            //         }\n            //     })\n        },\n    },\n    template: `<div>\n        <button class=\"btn-cart\" type=\"button\" @click=\"showCart = !showCart\">Корзина</button>\n        <div class=\"cart-block\" v-show=\"showCart\">\n            <p v-if=\"cartItems.length == 0 && showCart\" class=\"cart-item\">\n                Empty cart\n            </p>\n            <cart-item v-for=\"item of cartItems\" :key=\"item.id_product\" :img=\"item.img\" :cart-item=\"item\" @deleteItm=\"deleteItm\">\n            </cart-item>\n        </div>\n        </div>\n    `\n});\n\nVue.component('cart-item', {\n    props: ['img', 'cartItem'],\n    template: `\n    <div class=\"cart-item\">\n                    <div class=\"product-bio\">\n                        <img :src=\"img\" alt=\"snowflake\" width=\"70\">\n                        <div class=\"product-desc\">\n                            <div class=\"product-title\">{{ cartItem.product_name }}</div>\n                            <div class=\"product-quantity\">Quantity: {{ cartItem.quantity }}</div>\n                            <div class=\"product-single-price\">$ {{ cartItem.price }} each</div>\n                        </div>\n                    </div>\n                    <div class=\"right-block\">\n                        <div class=\"product-price\">{{cartItem.quantity*cartItem.price}}</div>\n                        <button class=\"del-btn\" @click=\"$emit('deleteItm', cartItem)\">&times;</button>\n                    </div>\n                </div>\n    `\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'cart'\n});\n\n\n//# sourceURL=webpack://project_express/./public/js/CartComponent.js?");

/***/ }),

/***/ "./public/js/ErrorComp.js":
/*!********************************!*\
  !*** ./public/js/ErrorComp.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// import Vue from 'vue';\n\nVue.component('error', {\n    data(){\n        return {\n          text: ''\n        }\n    },\n    computed: {\n      isVisible(){\n          return this.text !== ''\n      }\n    },\n    template: `\n    <div class=\"error-block\" v-if=\"isVisible\">\n        <p class=\"error-msg\">\n        <button class=\"close-btn\" @click=\"text=''\">&times;</button>\n        {{ text }}\n</p>\n</div>\n    `\n})\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'error'\n});\n\n\n//# sourceURL=webpack://project_express/./public/js/ErrorComp.js?");

/***/ }),

/***/ "./public/js/FilterComp.js":
/*!*********************************!*\
  !*** ./public/js/FilterComp.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// import Vue from 'vue';\n\nVue.component('filter-el', {\n    data(){\n      return {\n          userSearch: ''\n      }\n    },\n    template: `<form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\n                <button type=\"submit\" class=\"btn-search\">\n                    <i class=\"fas fa-search\"></i>\n                </button>\n            </form>`\n})\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'filterEl'\n});\n\n\n//# sourceURL=webpack://project_express/./public/js/FilterComp.js?");

/***/ }),

/***/ "./public/js/ProductComponent.js":
/*!***************************************!*\
  !*** ./public/js/ProductComponent.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// import Vue from 'vue';\n\nVue.component('products', {\n   data(){\n       return {\n           catalogUrl: '/catalogData.json',\n           filtered: [],\n           products: [],\n       }\n   },\n    mounted(){\n        this.$parent.getJson(`/api/products`)\n            .then(data => {\n                for (let item of data){\n                    this.$data.products.push(item);\n                    this.$data.filtered.push(item);\n                }\n            });\n    },\n    methods: {\n        filter(userSearch){\n            let regexp = new RegExp(userSearch, 'i');\n            this.filtered = this.products.filter(el => regexp.test(el.product_name));\n        }\n    },\n   template: `<div class=\"products\">\n                <product v-for=\"item of filtered\"\n                :key=\"item.id_product\"\n                :img=\"item.img\"\n                :product=\"item\"\n                @add-product=\"$parent.$refs.cart.addProduct\"></product>\n               </div>`\n});\nVue.component('product', {\n    props: ['product', 'img'],\n    template: `\n            <div class=\"product-item\">\n                <img :src=\"img\" alt=\"Snowflake\">\n                <div class=\"desc\">\n                    <h3>{{product.product_name}}</h3>\n                    <p>{{product.price}}</p>\n                    <button class=\"buy-btn\" @click=\"$emit('add-product', product)\">Купить</button>\n                </div>\n            </div>\n    `\n})\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'products'\n});\n\n\n//# sourceURL=webpack://project_express/./public/js/ProductComponent.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CartComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent.js */ \"./public/js/CartComponent.js\");\n/* harmony import */ var _FilterComp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterComp.js */ \"./public/js/FilterComp.js\");\n/* harmony import */ var _ProductComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductComponent.js */ \"./public/js/ProductComponent.js\");\n/* harmony import */ var _ErrorComp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorComp.js */ \"./public/js/ErrorComp.js\");\n//const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n//const API = 'https://localhost:3000';\n // import Vue from 'vue';\n\n\n\n\n\nconst app = new Vue({\n    el: '#app',\n    data: {\n        userSearch: '',\n    },\n    methods: {\n        getJson(url,data){\n            return fetch(url, {\n                method: 'GET',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n        postJson(url, data){\n            return fetch(url, {\n                method: 'POST',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n        putJson(url, data){\n            return fetch(url, {\n                method: 'PUT',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n        removeJson(url, data){\n            return fetch(url, {\n                method: 'DELETE',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n\n    },\n    mounted(){\n\n\n    }\n\n});\n\n\n// class List {\n//     constructor(url, container){\n//         this.container = container;\n//         this.url = url;\n//         this.goods = [];\n//         this.allProducts = [];\n//         this.filtered = [];\n//         this._init();\n//     }\n//     getJson(url){\n//         return fetch(url ? url : `${API + this.url}`)\n//             .then(result => result.json())\n//             .catch(error => console.log(error))\n//     }\n//     calcSum(){\n//         return this.allProducts.reduce((accum, item) => accum += item.price, 0);\n//     }\n//     handleData(data){\n//         this.goods = data;\n//         this.render();\n//     }\n//     render(){\n//         const block = document.querySelector(this.container);\n//         for (let product of this.goods){\n//             const productObj = new list[this.constructor.name](product);\n//             this.allProducts.push(productObj);\n//             block.insertAdjacentHTML('beforeend', productObj.render());\n//         }\n//     }\n//     filter(value){\n//         const regexp = new RegExp(value, 'i');\n//         this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));\n//         this.allProducts.forEach(el => {\n//             const block = document.querySelector(`.product-item[data-id=\"${el.id_product}\"]`);\n//             if(!this.filtered.includes(el)){\n//                 block.classList.add('invisible');\n//             } else {\n//                 block.classList.remove('invisible');\n//             }\n//         })\n//     }\n//     _init(){\n//         return false\n//     }\n// }\n// class Item {\n//     constructor(el, img = 'https://placehold.it/200x150'){\n//         this.product_name = el.product_name;\n//         this.price = el.price;\n//         this.img = img;\n//         this.id_product = el.id_product\n//     }\n//\n//     render(){\n//         return `<div class=\"product-item\" data-id=\"${this.id_product}\">\n//                     <img src=\"${this.img}\" alt=\"Some img\">\n//                     <div class=\"desc\">\n//                         <h3>${this.product_name}</h3>\n//                         <p>${this.price} $</p>\n//                         <button class=\"buy-btn\"\n//                         data-id=\"${this.id_product}\"\n//                         data-price=\"${this.price}\"\n//                         data-name=\"${this.product_name}\"\n//                         data-img=\"${this.img}\">\n//                         Купить\n// </button>\n//                     </div>\n//                 </div>`;\n//\n//     }\n// }\n//\n//\n// class ProductsList extends List {\n//     constructor(cart, url = '/catalogData.json',container = '.products'){\n//         super(url, container);\n//         this.cart = cart;\n//         this.getJson()\n//             .then(data => this.handleData(data));\n//     }\n//     _init(){\n//         document.querySelector(this.container).addEventListener('click', e => {\n//             if(e.target.classList.contains('buy-btn')){\n//                 this.cart.addProduct(e.target);\n//             }\n//         });\n//         document.querySelector('.search-form').addEventListener('submit', e => {\n//             e.preventDefault();\n//             this.filter(document.querySelector('.search-field').value);\n//         })\n//     }\n// }\n//\n// class Product extends Item{}\n// class Cart extends List{\n//     constructor(url = '/getBasket.json', container = '.cart-block'){\n//         super(url, container);\n//         this.getJson()\n//             .then(data => this.handleData(data.contents));\n//     }\n//     addProduct(element){\n//         this.getJson(`${API}/addToBasket.json`)\n//             .then(data => {\n//                 if(data.result === 1){\n//                     let productId = +element.dataset['id'];\n//                     let find = this.allProducts.find(product => product.id_product === productId);\n//                     if(find){\n//                         find.quantity++;\n//                         this._updateCart(find);\n//                     } else {\n//                         let product = {\n//                             id_product: productId,\n//                             price: +element.dataset['price'],\n//                             product_name: element.dataset['name'],\n//                             quantity: 1\n//                         };\n//                         this.goods = [product];\n//                         this.render();\n//                     }\n//                 } else {\n//                     alert('Error')\n//                 }\n//             })\n//     }\n//     removeProduct(element){\n//         this.getJson(`${API}/deleteFromBasket.json`)\n//             .then(data => {\n//                 if(data.result === 1){\n//                     let productId = +element.dataset['id'];\n//                     let find = this.allProducts.find(product => product.id_product === productId);\n//                     if(find.quantity > 1){\n//                         find.quantity--;\n//                         this._updateCart(find);\n//                     } else {\n//                         this.allProducts.splice(this.allProducts.indexOf(find), 1);\n//                         document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove();\n//                     }\n//                 } else {\n//                     alert('Error')\n//                 }\n//             })\n//     }\n//     _updateCart(product){\n//         const block = document.querySelector(`.cart-item[data-id=\"${product.id_product}\"]`);\n//         block.querySelector(`.product-quantity`).textContent = `Quantity: ${product.quantity}`;\n//         block.querySelector(`.product-price`).textContent = `$${product.quantity*product.price}`;\n//     }\n//     _init(){\n//         document.querySelector(this.container).addEventListener('click', e => {\n//             if(e.target.classList.contains('del-btn')){\n//                 this.removeProduct(e.target);\n//             }\n//         });\n//         document.querySelector('.btn-cart').addEventListener('click', () => {\n//             document.querySelector(this.container).classList.toggle('invisible')\n//         })\n//     }\n// }\n//\n// class CartItem extends Item{\n//     constructor(el, img = 'https://placehold.it/50x100'){\n//         super(el, img);\n//         this.quantity = el.quantity;\n//     }\n//     render(){\n//         return `<div class=\"cart-item\" data-id=\"${this.id_product}\">\n//     <div class=\"product-bio\">\n//         <img src=\"${this.img}\" alt=\"Some image\">\n//         <div class=\"product-desc\">\n//             <p class=\"product-title\">${this.product_name}</p>\n//             <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\n//             <p class=\"product-single-price\">$${this.price} each</p>\n//         </div>\n//     </div>\n//     <div class=\"right-block\">\n//         <p class=\"product-price\">${this.quantity*this.price}</p>\n//         <button class=\"del-btn\" data-id=\"${this.id_product}\">&times;</button>\n//     </div>\n// </div>`\n//     }\n// }\n//\n// const list = {\n//     ProductsList: Product,\n//     Cart: CartItem\n// };\n//\n//\n// const cart = new Cart();\n// const products = new ProductsList(cart);\n// setTimeout(() => {\n//     products.getJson(`getProducts.json`).then(data => products.handleData(data));\n// }, 300);\n\n// list.getProducts(() => {\n//     list.render();\n// });\n\n\n//# sourceURL=webpack://project_express/./public/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./public/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;