'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-26 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1775';
    this._commitGIT = '325f176ce5d523ce73d99632b389ed1197fd6418';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}