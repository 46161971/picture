const PI = Math.PI;

var r = {};

r.replace = function(answers) {
    answers = answers.replace(/不胜而走/g, "不胫而走");
    answers = answers.replace(/\+/g, "十");
    answers = answers.replace(/李诚/g, "李诫");
    answers = answers.replace(/蹄红/g, "蹿红");
    return answers
};

module.exports = r;
