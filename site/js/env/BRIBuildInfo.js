'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-19 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-1750';
    this._commitGIT = '7b4998eaa6558e1d7b7dff33d2cb49fe1c75ca20';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}