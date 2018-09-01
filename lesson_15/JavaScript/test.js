let assert = chai.assert;

describe("sum", function() {
	it("Sum возвращает true", function(){
		assert.equal(sum, 'true');
	})
});

describe("num", function() {
	it("Num возвращает 5", function(){
		assert.equal(num, 5);
	})
});

describe("each", function() {
	it("Each возвращает function", function(){
		assert.typeOf(each, "function");
	});
	it("Each правильной являеться еллментом с длинной 2", function() {
		assert.lengthOf(each, 2);
	});
});