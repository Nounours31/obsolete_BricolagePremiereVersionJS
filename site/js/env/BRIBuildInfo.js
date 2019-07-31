'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-31 12:00:15';
    this._versionBuild = 'jenkins-Bricolage-208';
    this._commitGIT = '3bee0dc763513cf576b309df309da1eeb93a8aad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}