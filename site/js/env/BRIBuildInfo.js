'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-21 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-170';
    this._commitGIT = 'a1a3eccf32560b7da91ed70fc11559899e7d0582';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}