'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-13 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2092';
    this._commitGIT = '773ce7d2f9de664ea2ffd206f0d492ec94ead3d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}