const {tagged} = require( 'daggy');
const dateFormat= require('./format');
const date = tagged('date', ['value']);

date.prototype.equals = function(that) {
  return this.value.getTime() === that.getTime();
};
date.prototype.lte = function (that) {
  return this.value.getTime() < that.getTime();
};
date.prototype.map = function (f) {
  return date.of(f(this.value));
};
date.prototype.chain = function(f) {
  return date(this.map(f)).value;
}

date.of = function (x) {
  const value = x instanceof Date ? new Date(x.getTime()) : new Date(x);
  return new date(value);
};

date.prototype.toString = function (mask, utc) {
	return dateFormat(this.value, mask, utc);
};


const diff = tagged('diff', ['f']);
diff.prototype.contramap = function(g) {
  return diff((x,y)=> this.f(g(x), g(y)));
}



const weeks = tagged('kalendar', ['f']);
//TODO: need to made the IO interfaz pattern


weeks.prototype.contramap = function (g) {
  return weeks(x => this.f(g(x)));
};


const setMinutes = value => d => new Date(d.setMinutes(value));
const setHours = hour => d => new Date(d.setHours(hour));

module.exports = {date, diff, weeks, setMinutes, setHours};