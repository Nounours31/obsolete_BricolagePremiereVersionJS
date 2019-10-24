'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-24 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-549';
    this._commitGIT = 'eaa56614d98eb4cbb7cb94169fea153a15823bc7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}