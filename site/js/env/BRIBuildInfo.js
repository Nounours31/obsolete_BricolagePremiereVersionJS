'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-07 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-849';
    this._commitGIT = '6668589caece4072f55cd83afad6dbe8f3df4173';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}