/**
 * Created by Administrator on 14-12-30.
 */
exports.upload = function (req, res) {

    console.log(req.files);

    var patharray = req.files.file.path.split("\\");

    res.send(patharray[patharray.length]);

}