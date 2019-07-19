'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-19 20:00:16';
    this._versionBuild = 'jenkins-Bricolage-162';
    this._commitGIT = '809e224e0b443bfc81a89ba0f9d89ca638cee16d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}