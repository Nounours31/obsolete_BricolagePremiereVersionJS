'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-22 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1272';
    this._commitGIT = 'e820261a551b56e33d8b130c3dbd19e3f1c05814';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}