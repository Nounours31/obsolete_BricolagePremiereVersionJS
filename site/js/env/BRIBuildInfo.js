'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-02 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-704';
    this._commitGIT = '9ca01ec97ff70577805471fa8e6d5299319bef37';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}