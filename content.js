const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password1');

chrome.storage.local.get(["username"]).then((username) => {
  chrome.storage.local.get(["password"]).then((password) => {
    if (username.hasOwnProperty("username") && password.hasOwnProperty("password")) {
      usernameInput.value = username["username"];
      passwordInput.value = password["password"];
    }
    else {
      const prompt_username = prompt('Enter your username:');
      const prompt_password = prompt('Enter your password:');
      
      chrome.storage.local.set({ username: prompt_username, password: prompt_password}).then(() => {
        console.log("Done");
      });
      
      usernameInput.value = prompt_username;
      passwordInput.value = prompt_password;
    }
    document.getElementsByClassName("button")[0].click();
  });
});
