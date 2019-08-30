import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                   <footer class="text-center">
      <div class="footer-above">
        <div class="container">
          <div class="row">
            <div class="footer-col col-md-4">
              <h3>Location</h3>
              <p> 98121
                <br/>Seattle, Washington  </p>
            </div>
            <div class="footer-col col-md-4">
              <h3>Catch me here</h3>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="https://www.facebook.com/aj.wietechaii?ref=bookmarks">
                    <i class="fa fa-fw fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="#">
                    <i class="fa fa-fw fa-google-plus"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="https://twitter.com/____a____j____">
                    <i class="fa fa-fw fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="https://www.linkedin.com/in/ajwietechaii/">
                    <i class="fa fa-fw fa-linkedin"></i>
                  </a>
                </li>

              </ul>
            </div>
            <div class="footer-col col-md-4">
              <h3>Other</h3>
              <p>Here's my <a href="mailto:ajwietechaii@gmail.com">Email</a> and Catch me on twitch as well, chat with me about anything! You can find me on
                <a href="https://go.twitch.tv/buddhathechef/">Buddha The Chef</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-below">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              Copyright &copy; ajwietecha 2017
            </div>
          </div>
        </div>
      </div>
    </footer>
            </div>
        )
    }
}

export default Footer;
