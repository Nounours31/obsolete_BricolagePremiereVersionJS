'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-01 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1553';
    this._commitGIT = '8b155bc88012aedfc96fe5ac91f0ab2ecf70b99f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}