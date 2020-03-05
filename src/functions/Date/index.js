module.exports = (min, max, format, options) => {
    let start = new Date(min);
    let end = new Date(max);
  
    const result = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
    return require("date-fns").format(result, format, options);
  };