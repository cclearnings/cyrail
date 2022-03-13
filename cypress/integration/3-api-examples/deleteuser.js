let baseURL = "https://gorest.co.in";
describe('check user, update user and then delete (deleteuser)', {tags: '@deleteuserTag'}, () =>

it("deleting user (deleteuser)", function (userName = 100) {
    cy.request({
      method: "GET",
      url: baseURL + `/public/v2/users}`,
      headers: {},
    }).then(function (response) {
      const user = aryValues.filter((item) => item.name === this.userName);
      cy.log("User details before update: " + user);
      expect(response.status).to.eq(200);
      cy.request({
        method: "DELETE",
        url: baseURL + `/public/v2/users/${user.id}}`,
        headers: {
          Authorization:
            "Bearer 4625e6dcf98787b86ee36f58675954196f197a7b098001509401c97d6dfc739f",
        },
      });
      expect(response.status).to.eq(200);
      cy.log("User details before update: " + user);
      expect(response.body === 1);
    });
}));
