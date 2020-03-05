# Lerogen

Leronren is an easy random mock generator that can be use with a fake api

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

```
import lerogen from "lerogen"

const users = lerogen.Create(1).Collection(() => ({
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


```
import lerogen from "lerogen"

lerogen.Create(1).Model(() => ({
    id: lerogen.types.guid(),
    name: lerogen.types.name(),
    email: lerogen.types.email(),
}))

=> "Success !" or error
```

#### You can create complexes data

```
lerogen.Create(10).Collection(() => ({
  id: Entry.types.guid(),
  name: Entry.types.name(),
  email: Entry.types.email(2, ".", ".com.br"),
  money: Entry.types.currency("R$", 0, 900),
  status: {
    active: Entry.types.bool(70),
    role: Entry.types.enum(["Player", "Administrator"]),
    age: Entry.types.int(18, 35),
    height: Entry.types.int(160, 190),
  },
  items: Entry.Create(5).Collection(() => ({
    id: Entry.types.guid(),
    description: Entry.types.desc(),
    value: Entry.types.currency("R$", 10, 100)
  })),
  createdAt: Entry.types.date("2020-02-01", "2020-02-18", "yyyy-MM-dd HH:mm")
}));
```

## Creators

**Create** recives a number of collections or models to be created that returns *Model* and *Collection*

**Model** should retuns an anonymous function that should returns an object *Only used to output JSON*

**Collection** should retuns an anonymous function that should returns an object *Only used to output JSON*

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