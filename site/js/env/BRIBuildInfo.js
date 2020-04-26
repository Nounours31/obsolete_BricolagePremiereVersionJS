'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-26 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1290';
    this._commitGIT = 'e7cbd7e3706e8e74741c86adf8a98dc481f4d98d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}