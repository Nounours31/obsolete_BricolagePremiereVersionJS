'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-04 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1565';
    this._commitGIT = '304f73fde0e9d7063cd5331243a5a5398c50b107';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}