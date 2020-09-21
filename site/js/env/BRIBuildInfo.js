'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-21 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1882';
    this._commitGIT = 'd55892628e2331a35d0be8e8b9eda2afae682567';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}