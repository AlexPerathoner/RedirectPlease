# RedirectPlease
<img src="https://raw.githubusercontent.com/RedirectPlease/master/origi.png" align="right"
     title="RedirectPlease by Alexander Perathoner" width="100" height="100">
Safari extension to redirect safari to your second google account, when using classroom

Inspired by [urlrewrite-safari](https://github.com/sjmulder/urlrewrite-safari) and [classroom-redirect/code](https://greasyfork.org/en/scripts/34727-classroom-redirect/code)

As the first is no longer supported and the second only works with Tampermonkey (which is no longer supported, too) I decided to quickly create this extension.

## Features

Ever seen this annyoing error message?

![Welcome Window](https://raw.githubusercontent.com/RedirectPlease/master/imgs/screen1.png)

RedirectPlease will redirect you to the same page, but using your second account.<sup>[1](#note1)</sup>

<a name="note1"></a><sup>1</sup>: If you want to use another account you just need to go to [script.js](https://github.com/AlexPerathoner/RedirectPlease/blob/master/RedirectPlease%20Extension/script.js) and replace "/u/1/" with whatever you need.</mark>

### Version 1.0
- No UI.
- Only one redirect
- Works only with classroom.google.com

### Future updates
I'm currently planning to:

- add an UI with some settings (choose which account to redirect to)
- add a TableView with multiple redirects

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details

---
Donations are welcome!

[![Donate-Paypal](https://img.shields.io/badge/donate-paypal-yellow.svg?style=flat)](https://paypal.me/AlexanderPerathoner)
