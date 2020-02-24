function datetime(d){
  this._date = d;
}

// map :: Functor f => f a ~> f -> (a -> b) -> f b
datetime.prototype.map = function(f) {
  return new datetime(f(this._date));
}

// concat :: semigroup => f ~> a -> a -> a
datetime.prototype.concat = function(b) {
  return new datetime(new Date(this._date.getTime() + b.getTime());
}

module.exports = datetime;