'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-20 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1510';
    this._commitGIT = 'ad002e11eff354f267b7cf4a028432062723460d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}