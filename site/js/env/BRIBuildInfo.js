'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-07 20:00:16';
    this._versionBuild = 'jenkins-Bricolage-238';
    this._commitGIT = 'c9568d22451294aba3bea0b477cdc5244bc32ea5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}