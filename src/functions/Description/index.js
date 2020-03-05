const LoremIpsum = require("lorem-ipsum").LoremIpsum;

module.exports = (count) => {
    return new LoremIpsum().generateWords(count || 5);
};
