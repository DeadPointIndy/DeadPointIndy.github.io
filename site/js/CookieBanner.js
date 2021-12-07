
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'AddressCookie';        // Name of our cookie
var cookieValue = '';                     // Value of cookie

function createDiv() {
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id', 'IPcookie');

    div.innerHTML = `
        <div class='cookieNoticeWrapper container-fluid'>
            <div class="container">
                <a class='close-cookie-banner' href='javascript:void(0);' onclick='removeMe();'>
                    <span><i class="fas fa-times" aria-hidden="true"></i></span>
                </a>
                        <form action="" id="myForm">
                         <label for="txtIP">Please Enter Your Bobcat's Local IP Address</label>
                         <input placeholder="Bobcat IP Address" class="form-control" type="text" name="textIP" id="txtIP"><button class="btn btn-dark" type="submit" id="submit" onclick='testAccept();'>Submit</button>
                        </form>
                   
                </div>
            </div>
        </div>`;
    // Be advised the Close Banner 'X' link requires jQuery

    bodytag.insertBefore(div, bodytag.firstChild); // Adds the Cookie Banner just after the opening <body> tag

    document.getElementsByTagName('body')[0].className += ' cookiebanner'; //Adds a class to the <body> tag when the banner is visible
}

function cookieAccept() {
    createCookie(window.cookieName, window.cookieValue, window.cookieDuration);// Create the cookie, only on accept terms.
    removeMe();
}

function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


/*Old Keeps*/


function eraseCookie(name) {
    createCookie(name, "", -1);
}




window.onload = function () {
    if (checkCookie(window.cookieName) !== window.cookieValue) {
        createDiv();
    }
};

function removeMe() {
    var element = document.getElementById('IPcookie');
    element.parentNode.removeChild(element);
}


/*New Keeps*/


function testAccept() {
    
    document.body.appendChild(myForm);
    var val = document.getElementById('txtIP').value;
    console.log(val);
    createCookie(window.cookieName, val, window.cookieDuration)
    if (checkCookie(window.cookieName) !== window.cookieValue){
        removeMe();
    }

}


function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }

    if (window.dropCookie) {
         console.log(name + "=" + value + expires + "; path=/");
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}