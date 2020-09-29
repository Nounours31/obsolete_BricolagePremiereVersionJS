'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-29 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1912';
    this._commitGIT = 'e8c4e8fa8d0ec7793f66bb86d0b4a6c229696da3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}