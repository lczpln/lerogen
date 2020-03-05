const fs = require('fs');

const bool = require("../Boolean");
const currency = require("../Currency");
const date = require("../Date");
const description = require("../Description");
const email = require("../Email");
const enumerated = require("../Enum");
const guid = require("../Guid");
const integer = require("../Integer");
const name = require("../Name");
const phone = require("../Phone");

const Entry = {

  /**
   * @param {number} qtd quantity of data that will be generated `[default: 1]`
   */
  Create: (qtd) => {
    return {
      /**
      * @param {Function} createModel anonymous function that retuns a model object
      */
      Collection: (createModel) => {
        let collection = [];

        if (qtd > 1) {
          for (let i = 0; i < (qtd || 1); i++) {
            collection.push(createModel())
          }
        } else {
          collection = createModel();
        }

        return collection;
      },

      /**
      * @param {Function} model anonymous function that create a parent(super) object and output to a JSON file
      */
      Model: (model) => {
        const createModel = Entry.Create(qtd).Collection(model);
        return fs.writeFile("output.json", JSON.stringify(createModel), (err) => console.log(err || "Success !!!"));
      }
    }
  },

  types: {
    /**
     * @param {number} [probability] probability to be true ex: `40` `[default: 50]`
     */
    bool: (probability) => bool(probability),

    /**
     * @param {string} prefix ex: `"$"`
     * @param {number} min ex: `23`
     * @param {number} max ex: `103`
     */
    currency: (prefix, min, max) => currency(prefix, min, max),

    /**
     * Generates a date
     * @param {string} min ex: `"2020-02-01"`
     * @param {string} max ex: `"2020-02-18"`
     * @param {string} format ex: `"yyyy-MM-dd HH:mm"`
     */
    date: (min, max, format) => date(min, max, format),

    /**
     * Generates a lorem description
     * @param {number} [count] How many words description will contains `[default: 5]`
     */
    desc: (count) => description(count),

    /**
     * Generates an user email
     * @param {number} [count] Count of words will be before `@` `[default: 2]`
     * @param {string} [separator] Word separator ex: `"me.name"` `[default: "_"]`
     * @param {string} [sulfix] `[default ".com"]`
     */
    email: (count, separator, sulfix) => email(count, separator, sulfix),

    /**
     * Picks a random element in a provided list.
     * @param {*[]} items The list to pick the element.
     * @param {number} [count] The amount of items to pick. `[default: 1]`
     */
    enum: (items, count) => enumerated(items, count),

    /**
     * Generates a random GUID id
     */
    guid: () => guid(),

    /**
     * Generates a random integer number
     * @param {number} min ex: `23`
     * @param {number} max ex: `103`
     */
    int: (min, max) => integer(min, max),

    /**
     * Genenates a random person name
     */
    name: () => name(),


    /**
     * Generates a phone number
     * @param {string} pattern ex: "(99) 9 9999-9999"
     */
    phone: (pattern) => phone(pattern),
  }
}

module.exports = Entry;