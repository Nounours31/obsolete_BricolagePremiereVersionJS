'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-17 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-643';
    this._commitGIT = '3a38934db67bbfb5b308ad24ac6eedae4943e7da';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}