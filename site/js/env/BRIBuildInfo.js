'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-04 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2058';
    this._commitGIT = '8b97e6b49e514a53f3b7679b7a7333c8acbaf5ee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}