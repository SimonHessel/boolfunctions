class BoolscheFunktion {
  constructor (input) {
    if (input !== '') {
      this.function = this.createFunction (input.replace (' ', ''));
    }
  }

  createFunction (input) {
    const boolFunction = [];
    input.split ('+').forEach (term => {
      boolFunction.push (this.parse (term));
    });
    return boolFunction;
  }

  parse (term) {
    const boolTerm = {};
    term.split ('x').forEach (item => {
      if (item !== '') {
        boolTerm[item[0]] = !item.includes ('¯');
      }
    });
    return boolTerm;
  }

  includes (term, prefix = '') {
    const parsedTerm = this.parse (term);
    const result = this.function.map (boolTerm => {
      let wahr = true;
      Object.keys (parsedTerm).forEach (key => {
        // console.log (
        //   parsedTerm[key] === boolTerm[key] ||
        //     typeof boolTerm[key] == 'undefined',
        //   parsedTerm[key],
        //   boolTerm[key]
        // );
        if (
          !(parsedTerm[key] === boolTerm[key] ||
            typeof boolTerm[key] == 'undefined')
        ) {
          wahr = false;
        }
      });

      return wahr;
    });
    return result;
  }
}
