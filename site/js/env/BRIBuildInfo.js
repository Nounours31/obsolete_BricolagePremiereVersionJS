'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-10 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-373';
    this._commitGIT = '2228e49d5ad90fb88045b12c54a0b8b79e69dcab';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}