'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-31 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-2042';
    this._commitGIT = 'f4832b7076bda251ee1ed1ab41b7f430ccfb8d4f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}