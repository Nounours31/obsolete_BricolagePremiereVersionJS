'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-20 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-413';
    this._commitGIT = '7e208dd4efda371f7ef709fcf1db1c222d70014a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}