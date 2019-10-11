'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-11 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-498';
    this._commitGIT = 'ee4045b37012f0419dfe80674cb66467afed3895';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}