# Lerogen

Lerogen is an easy random mock generator that can be used with a fake api

## Install

```
yarn add lerogen
```

or

```
npm i --save lerogen
```

and then use the library

## Usage

```js
import lerogen from "lerogen"

const users = lerogen.create(1).collection(() => ({
    id: lerogen.types.guid(),
    name: lerogen.types.name(),
    email: lerogen.types.email(),
}))

console.log(users)

=> {
    id: "xxxx-xxxx-xxxx-xxxx",
    name: "lorem ipsum",
    email: "lorem_ipsum@dolor.com"
}
```

#### You can also output that in a JSON file


```js
import lerogen from "lerogen"

lerogen.create(1).model(() => ({
    id: lerogen.types.guid(),
    name: lerogen.types.name(),
    email: lerogen.types.email(),
}))

=> "Success !" or error
```

#### You can create complexes data

```js
lerogen.create(10).collection(() => ({
  id: lerogen.types.guid(),
  name: lerogen.types.name(),
  email: lerogen.types.email(2, ".", ".com.br"),
  money: lerogen.types.currency("R$", 0, 900),
  status: {
    active: lerogen.types.bool(70),
    role: lerogen.types.enum(["Player", "Administrator"]),
    age: lerogen.types.int(18, 35),
    height: lerogen.types.int(160, 190),
  },
  items: lerogen.create(5).collection(() => ({
    id: lerogen.types.guid(),
    description: lerogen.types.desc(),
    value: lerogen.types.currency("R$", 10, 100)
  })),
  createdAt: lerogen.types.date("2020-02-01", "2020-02-18", "yyyy-MM-dd HH:mm")
}));
```

## Creators

**create** - recives a number of collections or models to be created that returns *Model* and *Collection*

**model** - should retuns an anonymous function that should returns an object *Only used to output JSON*

**collection** - should retuns an anonymous function that should returns an object *Only used to output JSON*

## Types

**boolean** - (probability) [probability] probability to be true ex: `40` `[default: 50]`

**currency** -

**date** -

**desc** -

**email** -

**enum** -

**guid** -

**int** -

**name** -

**phone** -

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Lucas Pellison** - *Initial work* - [Lczpln](https://github.com/lczpln)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
