'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-10 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1344';
    this._commitGIT = '12fa8199c1a93956f89b874fbda171e82d945d78';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}