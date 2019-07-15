<div class="BRIAuthentification-image"></div>
  <div class="BRIAuthentification-text">
     <h1>Login</h1>
     <div>
          <form action="/login/" method="post" class="uk-form-stacked" id="login-form">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Email ou matricule</label>
                    <div class="uk-form-controls">
                          <div class="uk-inline">
                              <span class="uk-form-icon" uk-icon="icon: user"></span>
                               <span class="uk-position-right"> 
                                   <span class="uk-form-icon" uk-icon="icon: info" data-uk-tooltip title="coucou"></span>
                               </span>
                              <input class="uk-input" id="form-user" type="text" data-uk-tooltip title="coucou">
                           </div>
                      </div>

                  <label class="uk-form-label" for="form-stacked-text">Mot de passe</label>
                          <div class="uk-inline">
                              <span class="uk-form-icon" uk-icon="icon: lock"></span>
                               <span class="uk-position-right" style="right:40px;"> <span class="uk-form-icon" uk-icon="icon: info" data-uk-tooltip "title: Hello World"></span></span>
                              <input class="uk-input" id="form-passwd" type="password" >
                           </div>
                    <div class="uk-form-controls">
                    </div>
               </div>
                    
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label><input class="uk-checkbox" type="checkbox" name="rememberme"  value="forever" checked>Souviens-toi de moi</label>
                    </div>

                    <input type="submit" name="login" id="login" class="pure-button pure-input-1-2 pure-button-primary" value="S'identifier">
                    <p id="nav" class="text-center">
                         <a href="https://www.bricolib.net/register/?redirect_to=https%3A%2F%2Fwww.bricolib.net%2F">S'identifier</a>
                         |
                         <a href="https://www.bricolib.net/password-recovery/">Mot de passe perdu?</a>
                    </p>
               </fieldset>
               <input type="hidden" name="redirect_to" value="https://www.bricolib.net/"> <input type="hidden"
                    name="testcookie" value="1">
          </form>
          <!-- autofocus the field -->
          <script>try { document.getElementById('login_username').focus(); } catch (e) { }</script>
     </div> <!-- .entry-content -->
  </div>
</div>