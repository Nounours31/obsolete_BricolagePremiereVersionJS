<div class="BRIAuthentification-image"></div>
<div class="BRIAuthentification-text">
    <h1>BRINls(LOGIN_TITLE)</h1>
    <div>
        <!-- panel d'authentification -->
        <form action="/login/" method="post" class="uk-form-stacked" id="login-form">
            <div class="uk-margin">
                <!-- User -->
                <label class="uk-form-label" for="form-stacked-text">BRINls(LOGIN_USER)</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <span class="uk-position-right"> 
                            <a class="uk-form-icon" href="#" uk-icon="icon: info" uk-tooltip="title: BRINls(LOGIN_USER_HELP)"></a>
                        </span>
                        <input class="uk-input" id="login-form_user" type="text" >
                    </div>
                </div>

                <!-- Password -->
                <label class="uk-form-label" for="form-stacked-text">BRINls(LOGIN_PWD)</label>
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <span class="uk-position-right"> 
                        <a class="uk-form-icon" href="#" uk-icon="icon: info" uk-tooltip="title: BRINls(LOGIN_PWD_HELP)"></a>
                    </span>
                    <input class="uk-input" id="login-form_pwd" type="password" >
                </div>
                <div class="uk-form-controls">
                </div>
            </div>

            <!-- Remenber -->
            <div class="uk-margin uk-form-control">
                <label><input class="uk-checkbox" type="checkbox" name="rememberme"  value="forever" checked id="login-form_remember"> BRINls(LOGIN_REMEMBER)</label>
            </div>

            <!-- Go -->
            <button class="uk-margin uk-button uk-button-primary">BRINls(SUBMIT_BUTTON)</button>
            <p id="nav" class="text-center">
                <a href="#" onclick="BRIAuthentification_createPassword();">BRINls(LOGIN_CREATE)</a>
                |
                <a href="#" onclick="BRIAuthentification_createPassword();">BRINls(LOGIN_LOST)</a>
            </p>
        </form>
        <!-- autofocus the field -->
        <script>try {
                  document.getElementById('login-form_user').focus();
              } catch (e) {
              }</script>
    </div> <!-- .entry-content -->
</div>
</div>