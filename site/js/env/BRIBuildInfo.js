'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-17 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1013';
    this._commitGIT = 'b465abacddad97b623a0fad73fc0f4e46349e749';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}