'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-22 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-541';
    this._commitGIT = '98e862c1e7a9a52d7ddbeefcbf801569f3de6979';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}