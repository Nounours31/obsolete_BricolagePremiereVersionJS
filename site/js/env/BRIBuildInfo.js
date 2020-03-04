'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-04 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1077';
    this._commitGIT = 'e9675a56436004c26a1624e45ff999a653659305';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}