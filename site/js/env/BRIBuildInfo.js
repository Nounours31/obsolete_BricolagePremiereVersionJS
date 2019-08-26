'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-26 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-313';
    this._commitGIT = '1f7757ec9a509cf57941c14a17ce47d568be8d8e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}