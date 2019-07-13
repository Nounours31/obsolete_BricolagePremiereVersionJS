'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-13 08:00:10';
    this._versionBuild = 'jenkins-Bricolage-135';
    this._commitGIT = 'f71d59bc78978d918ba767e9180a03d625477f2e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}