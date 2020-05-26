'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-26 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1410';
    this._commitGIT = '35435b3a79f712d7c334aca475c3aa5a81eba8d9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}