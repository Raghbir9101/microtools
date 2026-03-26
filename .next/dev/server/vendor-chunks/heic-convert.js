/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/heic-convert";
exports.ids = ["vendor-chunks/heic-convert"];
exports.modules = {

/***/ "(rsc)/./node_modules/heic-convert/formats-node.js":
/*!***************************************************!*\
  !*** ./node_modules/heic-convert/formats-node.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const jpegJs = __webpack_require__(/*! jpeg-js */ \"(rsc)/./node_modules/jpeg-js/index.js\");\nconst { PNG } = __webpack_require__(/*! pngjs */ \"(rsc)/./node_modules/pngjs/lib/png.js\");\n\nmodule.exports = {};\n\nmodule.exports.JPEG = ({ data, width, height, quality }) => jpegJs.encode({ data, width, height }, Math.floor(quality * 100)).data;\n\nmodule.exports.PNG = ({ data, width, height }) => {\n  const png = new PNG({ width, height });\n  png.data = data;\n\n  return PNG.sync.write(png, {\n    width: width,\n    height: height,\n    deflateLevel: 9,\n    deflateStrategy: 3,\n    filterType: -1,\n    colorType: 6,\n    inputHasAlpha: true\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGVpYy1jb252ZXJ0L2Zvcm1hdHMtbm9kZS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMsc0RBQVM7QUFDaEMsUUFBUSxNQUFNLEVBQUUsbUJBQU8sQ0FBQyxvREFBTzs7QUFFL0I7O0FBRUEsbUJBQW1CLE1BQU0sOEJBQThCLHFCQUFxQixxQkFBcUI7O0FBRWpHLGtCQUFrQixNQUFNLHFCQUFxQjtBQUM3Qyx3QkFBd0IsZUFBZTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHJrZ2FtXFxPbmVEcml2ZVxcRGVza3RvcFxcUHJvamVjdHNcXG1pY3JvdG9vbHNcXG5vZGVfbW9kdWxlc1xcaGVpYy1jb252ZXJ0XFxmb3JtYXRzLW5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QganBlZ0pzID0gcmVxdWlyZSgnanBlZy1qcycpO1xuY29uc3QgeyBQTkcgfSA9IHJlcXVpcmUoJ3BuZ2pzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge307XG5cbm1vZHVsZS5leHBvcnRzLkpQRUcgPSAoeyBkYXRhLCB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH0pID0+IGpwZWdKcy5lbmNvZGUoeyBkYXRhLCB3aWR0aCwgaGVpZ2h0IH0sIE1hdGguZmxvb3IocXVhbGl0eSAqIDEwMCkpLmRhdGE7XG5cbm1vZHVsZS5leHBvcnRzLlBORyA9ICh7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICBjb25zdCBwbmcgPSBuZXcgUE5HKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgcG5nLmRhdGEgPSBkYXRhO1xuXG4gIHJldHVybiBQTkcuc3luYy53cml0ZShwbmcsIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgZGVmbGF0ZUxldmVsOiA5LFxuICAgIGRlZmxhdGVTdHJhdGVneTogMyxcbiAgICBmaWx0ZXJUeXBlOiAtMSxcbiAgICBjb2xvclR5cGU6IDYsXG4gICAgaW5wdXRIYXNBbHBoYTogdHJ1ZVxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/heic-convert/formats-node.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/heic-convert/index.js":
/*!********************************************!*\
  !*** ./node_modules/heic-convert/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const decode = __webpack_require__(/*! heic-decode */ \"(rsc)/./node_modules/heic-decode/index.js\");\nconst formats = __webpack_require__(/*! ./formats-node.js */ \"(rsc)/./node_modules/heic-convert/formats-node.js\");\nconst { one, all } = __webpack_require__(/*! ./lib.js */ \"(rsc)/./node_modules/heic-convert/lib.js\")(decode, formats);\n\nmodule.exports = one;\nmodule.exports.all = all;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGVpYy1jb252ZXJ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyw4REFBYTtBQUNwQyxnQkFBZ0IsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDM0MsUUFBUSxXQUFXLEVBQUUsbUJBQU8sQ0FBQywwREFBVTs7QUFFdkM7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmtnYW1cXE9uZURyaXZlXFxEZXNrdG9wXFxQcm9qZWN0c1xcbWljcm90b29sc1xcbm9kZV9tb2R1bGVzXFxoZWljLWNvbnZlcnRcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlY29kZSA9IHJlcXVpcmUoJ2hlaWMtZGVjb2RlJyk7XG5jb25zdCBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzLW5vZGUuanMnKTtcbmNvbnN0IHsgb25lLCBhbGwgfSA9IHJlcXVpcmUoJy4vbGliLmpzJykoZGVjb2RlLCBmb3JtYXRzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBvbmU7XG5tb2R1bGUuZXhwb3J0cy5hbGwgPSBhbGw7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/heic-convert/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/heic-convert/lib.js":
/*!******************************************!*\
  !*** ./node_modules/heic-convert/lib.js ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = (decode, encode) => {\n  const convertImage = async ({ image, format, quality }) => {\n    return await encode[format]({\n      width: image.width,\n      height: image.height,\n      data: image.data,\n      quality\n    });\n  };\n\n  const convert = async ({ buffer, format, quality, all }) => {\n    if (!encode[format]) {\n      throw new Error(`output format needs to be one of [${Object.keys(encode)}]`);\n    }\n\n    if (!all) {\n      const image = await decode({ buffer });\n      return await convertImage({ image, format, quality });\n    }\n\n    const images = await decode.all({ buffer });\n\n    return images.map(image => {\n      return {\n        convert: async () => await convertImage({\n          image: await image.decode(),\n          format,\n          quality\n        })\n      };\n    });\n  };\n\n  return {\n    one: async ({ buffer, format, quality = 0.92 }) => await convert({ buffer, format, quality, all: false }),\n    all: async ({ buffer, format, quality = 0.92 }) => await convert({ buffer, format, quality, all: true })\n  };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGVpYy1jb252ZXJ0L2xpYi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGdDQUFnQyx3QkFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0EsMkRBQTJELG9CQUFvQjtBQUMvRTs7QUFFQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDLGtDQUFrQyx3QkFBd0I7QUFDMUQ7O0FBRUEsc0NBQXNDLFFBQVE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGtCQUFrQixnQ0FBZ0MscUJBQXFCLHFDQUFxQztBQUM1RyxrQkFBa0IsZ0NBQWdDLHFCQUFxQixvQ0FBb0M7QUFDM0c7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxya2dhbVxcT25lRHJpdmVcXERlc2t0b3BcXFByb2plY3RzXFxtaWNyb3Rvb2xzXFxub2RlX21vZHVsZXNcXGhlaWMtY29udmVydFxcbGliLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKGRlY29kZSwgZW5jb2RlKSA9PiB7XG4gIGNvbnN0IGNvbnZlcnRJbWFnZSA9IGFzeW5jICh7IGltYWdlLCBmb3JtYXQsIHF1YWxpdHkgfSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBlbmNvZGVbZm9ybWF0XSh7XG4gICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcbiAgICAgIGRhdGE6IGltYWdlLmRhdGEsXG4gICAgICBxdWFsaXR5XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29udmVydCA9IGFzeW5jICh7IGJ1ZmZlciwgZm9ybWF0LCBxdWFsaXR5LCBhbGwgfSkgPT4ge1xuICAgIGlmICghZW5jb2RlW2Zvcm1hdF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgb3V0cHV0IGZvcm1hdCBuZWVkcyB0byBiZSBvbmUgb2YgWyR7T2JqZWN0LmtleXMoZW5jb2RlKX1dYCk7XG4gICAgfVxuXG4gICAgaWYgKCFhbGwpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZGVjb2RlKHsgYnVmZmVyIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnZlcnRJbWFnZSh7IGltYWdlLCBmb3JtYXQsIHF1YWxpdHkgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgZGVjb2RlLmFsbCh7IGJ1ZmZlciB9KTtcblxuICAgIHJldHVybiBpbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnZlcnQ6IGFzeW5jICgpID0+IGF3YWl0IGNvbnZlcnRJbWFnZSh7XG4gICAgICAgICAgaW1hZ2U6IGF3YWl0IGltYWdlLmRlY29kZSgpLFxuICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICBxdWFsaXR5XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb25lOiBhc3luYyAoeyBidWZmZXIsIGZvcm1hdCwgcXVhbGl0eSA9IDAuOTIgfSkgPT4gYXdhaXQgY29udmVydCh7IGJ1ZmZlciwgZm9ybWF0LCBxdWFsaXR5LCBhbGw6IGZhbHNlIH0pLFxuICAgIGFsbDogYXN5bmMgKHsgYnVmZmVyLCBmb3JtYXQsIHF1YWxpdHkgPSAwLjkyIH0pID0+IGF3YWl0IGNvbnZlcnQoeyBidWZmZXIsIGZvcm1hdCwgcXVhbGl0eSwgYWxsOiB0cnVlIH0pXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/heic-convert/lib.js\n");

/***/ })

};
;