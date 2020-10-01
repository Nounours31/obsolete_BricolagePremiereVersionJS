'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-01 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1922';
    this._commitGIT = '81a1df154974fe22903b1274269945cc10a379f1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}