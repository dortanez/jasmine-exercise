
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5000,
    years: 2,
    rate: 6.7
  }
  expect(calculateMonthlyPayment(values)).toEqual('223.18')
});

/// etc
