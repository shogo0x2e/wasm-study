/*
 *	DATE:
 *		22:41:54 月 10 月 10, 2022
 *
 *	AUTHOR:
 *		Shogo Kitada (Twitter, GitHub: shogo0x2e)
 *		Mail: shogo.kitada@outlook.jp
 *
 *	DESCRIPTION:
 *		JS から WASM を呼び出すスクリプト
 */

const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/AddInt.wasm');
const value_1 = parseInt(process.argv[2]);
const value_2 = parseInt(process.argv[3]);

(async() => {
    const obj = await WebAssembly.instantiate(new Uint8Array(bytes));

    let add_value = obj.instance.exports.AddInt(value_1, value_2);
    console.log('%d + %d = %d', value_1, value_2, add_value);
})();
