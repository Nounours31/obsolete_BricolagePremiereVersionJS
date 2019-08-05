'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-05 12:00:14';
    this._versionBuild = 'jenkins-Bricolage-228';
    this._commitGIT = 'bee59297cff771d18ee7f2bab5f9632ffda32d03';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}