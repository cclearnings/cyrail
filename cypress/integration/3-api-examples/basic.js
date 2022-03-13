describe(' get user details (getusers)', {tags: '@getusersTag'}, () =>
{
  it("Get the All user details (allusers)", function () {
    cy.request({
      method: "GET",
      url: baseURL + "/public/v2/users",
      headers: {},
    }).then(function (response) {
      Object.values(response.body).forEach((value) => {
        aryValues.push(value);
     });
      cy.log(aryValues);
      expect(response.status).to.eq(200);
    });
  });
});