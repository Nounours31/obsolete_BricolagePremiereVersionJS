'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-24 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1645';
    this._commitGIT = '95ba5017eccd2427927fa9dc6a9964be4a1a2f3f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}