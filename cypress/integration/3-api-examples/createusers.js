let baseURL = "https://gorest.co.in";
describe('create user new (createuser)',{ tags: '@createuserTag'}, () =>
{
  it("C1 Creating using post method", function () {
    cy.request({
      method: "POST",
      url: baseURL + "/public/v2/users",
      headers: {
        "Authorization":
          "Bearer 4625e6dcf98787b86ee36f58675954196f197a7b098001509401c97d6dfc739f"
      },
      body: {
          "name": "Kiran Ch",
          "gender": "male",
          "email": "thisiswhatsuccuess@gmail.com",
          "status": "active",
        }
        // "Content-Type": "application/json;",
        // "Application": "application/json;",
        // "accept": "application/json;"
    }).then(function (response) {
      if (response.status === "422 - Unprocessable Entity")
      {
        cy.log("User Already created")
      }else {
      expect(response.status).to.eq(201);
      // cy.log("Response Body: " + response.body);
      // cy.log(response.body.name);
      // const userCreated = aryValues.some(
      //   item => item.name === response.body.name
      // );
      // cy.log("User Created with ID: " + userCreated);
      }
    });
 });
});