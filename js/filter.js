
class Filter{
  constructor() {
    if(!this.instance){
          this.instance = this;
    } else {
    this.instance = new Filter()
    }
    return this.instance;
  }

  generateColumnFilter(columnName, df){ //Collection of column header
    var collections = df.select(columnName).distinct(columnName).toCollection();
    var test = df.select(columnName).toArray();
    //var output = '<select multiple id="columnfilter-'+ columnName +'">';
    var output = '';
    for (var i = 0; i < collections.length; i++) {
      output += '<option value="'+ collections[i][columnName] +'">'+ collections[i][columnName] +'</option>';
    }
    return output;
  }
}

//instance = new Filter();
