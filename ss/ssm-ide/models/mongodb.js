/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-2-25
 * Time: 下午7:57
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ssm-ide');
exports.mongoose = mongoose;