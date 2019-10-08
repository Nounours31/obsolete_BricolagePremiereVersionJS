'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-08 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-485';
    this._commitGIT = 'c41bad30251df08e1a86a40cc82a80604b2cdabe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}