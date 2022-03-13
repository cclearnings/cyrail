let baseURL = "https://gorest.co.in";
describe('check user, update user using put and patch (updateuser)', {tags: '@updateuserTag'}, () =>
{
 
 
    it("using put", function (userName = 100) {
    cy.request({
      method: "GET",
      url: baseURL + `/public/v2/users}`,
      headers: {},
    }).then(function (response) {
      const user = aryValues.filter((item) => item.name === this.userName);
      cy.log("User details before update: " + user);
      expect(response.status).to.eq(200);
      cy.request({
        method: "PUT",
        url: baseURL + `/public/v2/users/${user.id}}`,
        headers: {
          Authorization:
            "Bearer 4625e6dcf98787b86ee36f58675954196f197a7b098001509401c97d6dfc739f",
          body: {
            name: "Thushaar Kiran Ch",
            gender: "male",
            email: "thushaarkiranch@gmail.com",
            status: "active",
          },
        },
      }).then((res) => {
        expect(response.status).to.eq(200);
        cy.log("User details After update: " + response);
      });
    });
  });

    //   // PATCH METHOD

    it("get and patch (updateuser)", function (userName = "Dipali Rana") {
        aryValues = [];
        cy.request({
          method: "GET",
          url: baseURL + `/public/v2/users`,
          headers: {},
        }).then(function (response) {
          Object.values(response.body).forEach((value) => { 
            cy.log(value.id);
            aryValues.push(value);
          });
          const user = aryValues.filter(item => item.name === userName);
          cy.log("User details before update: " + user);
          expect(response.status).to.eq(200);
          cy.request({
            method: "PATCH",
            url: baseURL + `/public/v2/users/${user.id}}`,
            headers: {
              "Authorization":
                "Bearer 4625e6dcf98787b86ee36f58675954196f197a7b098001509401c97d6dfc739f",
            },
              body: {
                "email": "thushaarkiranch8569@gmail.com",
              },
            })
          .then((res) => {
            expect(response.status).to.eq(200);
            cy.log("User details After update: " + response);
          });
        });
      });
});