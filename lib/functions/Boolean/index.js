module.exports = (probability) => {
    return result = Math.random() <= ((probability || 50) / 100);
};