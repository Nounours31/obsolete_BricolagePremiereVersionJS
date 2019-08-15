'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-15 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-270';
    this._commitGIT = '15c8255e6449ba4f076038f3b827e91dadca20d2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}