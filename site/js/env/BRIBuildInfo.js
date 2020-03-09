'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-09 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1098';
    this._commitGIT = '4423dacb6f7574378b79b5eac46126a9b8300975';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}