'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-15 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-145';
    this._commitGIT = '2dbb1f5a39c95e01740cf3477f5c46f0ff82fe94';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}