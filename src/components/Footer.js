import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                   <footer class="text-center">
      <div class="footer-above">
        <div class="container">
          <div class="row">
            <div class="footer-col col-md-4 location">
              <h3 className="footer-header">Location</h3>
              <p> 98121 </p>
              <br/>
               <p style={{margin: '0'}}>Seattle, Washington</p>
            </div>
            <div class="footer-col col-md-4 catch-me">
              <h3 className="footer-header">Catch me here</h3>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="https://www.facebook.com/aj.wietechaii?ref=bookmarks">
                    <i class="fa fa-fw fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="https://www.google.com">
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
            <div class="footer-col col-md-4 other-footer">
              <h3 className="footer-header" >Other</h3>
              <p style={{lineHeight: '1.5'}}>Here's my <a style={{textDecoration: 'none', color: 'whitesmoke'}} href="mailto:ajwietechaii@gmail.com">Email</a> and Catch me on twitch as well, chat with me about anything! You can find me on
                <a style={{textDecoration: 'none', color: 'whitesmoke'}}  href="https://go.twitch.tv/buddhathechef/"> Buddha The Chef</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-below">
        <div class="container">
          <div class="row-2">
            <div class="col-lg-12">
              Copyright &copy; ajwietecha 2019
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
