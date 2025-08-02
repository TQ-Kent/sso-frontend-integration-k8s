// Check your wise-paass DataCenter（sa, hz）first

// sa center
const ssoUri = "https://portal-sso-ensaas.sa.wise-paas.com";
const apiBase = "https://api-sso-ensaas.sa.wise-paas.com";
const redirectUri =
  "https://sso-frontend-phan-quan-assignment-eks004.sa.wise-paas.com/index.html";

// hz center
/* const ssoUri =kubectl rollout restart deployment sso-frontend-phan-quan
  'https://portal-sso-ensaas.hz.wise-paas.com.cn';
const apiBase =
  'https://api-sso-ensaas.hz.wise-paas.com.cn';
const redirectUri =
  'https://sso-frontend-phan-quan-level2-eks006.hz.wise-paas.com.cn/index.html';
 */

$("#signInBtn").click(function () {
  window.location.href = ssoUri + "/home/sign-in?redirectUri=" + redirectUri;
});

$("#signOutBtn").click(function () {
  $.ajax({
    url: apiBase + "/v4.0/auth",
    method: "DELETE",
    xhrFields: {
      withCredentials: true,
    },
  })
    .done(function (user) {
      alert("You have logged out!");
    })
    .fail(function () {
      alert("Logging out failed!");
    });
});

$("#checkLogin").click(function () {
  $.ajax({
    url: apiBase + "/v4.0/users/me",
    method: "GET",
    xhrFields: {
      withCredentials: true,
    },
  })
    .done(function (user) {
      console.log(user);
      alert("Hello! " + user.firstName + " " + user.lastName + "!");
    })
    .fail(function () {
      alert("You are not logged in!");
    });
});

fetch(apiBase + "/v4.0/users/me", { credentials: "include" })
  .then((r) => r.text())
  .then(console.log);
