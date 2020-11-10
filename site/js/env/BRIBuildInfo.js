'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-10 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2080';
    this._commitGIT = '8b6709a77dd3bb89415527d9559d94142f999e2c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}