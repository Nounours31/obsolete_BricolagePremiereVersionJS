'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-10 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-861';
    this._commitGIT = 'dd25e6bf422a706da5e36001665159ba80be9d9f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}