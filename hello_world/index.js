'use strict';

const dayjs = require("dayjs")

exports.main_handler = async (event, context, callback) => {
    console.log("%j", event);
    console.log("现在时间为12321312：" + dayjs().format('YYYY-MM-DD HH:mm:ss'))
    return "hello world"
};
