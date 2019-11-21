'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-21 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-659';
    this._commitGIT = '20aa4da7497d40edf34098009cebe12c6b7ee75a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}